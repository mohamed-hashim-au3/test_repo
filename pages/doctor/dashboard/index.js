import withDashboardLayout from "../../../components/layouts/dashboard-layout/withDashboardLayout";
import React, { Component } from "react";
import classNames from 'classnames'
import { connect } from "react-redux";
import moment from "moment";
import { Table, Input, Button } from 'antd';
import { ReactSVG } from 'react-svg'

import Highlighter from 'react-highlight-words';
import { SearchOutlined, EyeOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

import { getDoctorById, approveAppointments } from "../../../services/api";
const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Joe Black',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Jim Green',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
    {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    },
  ];
  
  
class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      todaysAppointments: [],
      totalAppointments: [],
      showAppointment: "today",
      isLoading: false
    };
  }
  componentDidMount() {
    const { loggedInDoctor } = this.props;
    getDoctorById(loggedInDoctor._id)
      .then(({ data }) => {
        const appointments = data.data?.appointments.filter(
          appointment => appointment.booked
        );
        const todaysAppointments = appointments.filter(appointment =>
          moment(appointment.bookedFor).isSame(moment(), "day")
        );
        const totalAppointments = appointments.filter(
          appointment =>
            !moment(appointment.bookedFor).isBefore(moment(), "day")
        );
        const totalAppData = totalAppointments.map(this.parseAppointment)
        const todayAppData = todaysAppointments.map(this.parseAppointment)
        this.setState({
          todaysAppointments,
          totalAppointments,
          totalAppData,
          todayAppData
        });
      })
      .catch(console.log);
  }
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      )
  });
  parseAppointment = (appointment, key) => ({
    appointment,
    key,
    name: appointment.patient?.email,
    date: moment(appointment.bookedFor).format("hh:mm a, Do MMM"),
    paid: appointment.number,
    _id: appointment._id,
  })
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: "" });
  };
  changeShowAppointment = evt => {
    const {
      value: showAppointment
    } = evt.target
    this.setState({
      showAppointment
    })
  }
  approveAppointments = evt => {
    const {
      value
    } = evt.target
    const appointment = this.state.totalAppointments.find(appointment => appointment._id === value)
    console.clear()
    console.log({
      appointment,
    })
    const approvetime = new Date()
    this.setState({
      isLoading: true
    }, ()=> {
      approveAppointments({
        appointment,
        patient: appointment.patient._id,
        time: approvetime.toLocaleTimeString('en-US'),
        date: moment(approvetime).format('L'),
        address: 'NO DATA',
        timeSlot: appointment._id,
        email: appointment.patient.email,
        doctor: appointment.doctor
      })
      .then(res => {
        console.log({
          res
        })
        this.setState({
          isLoading: false
        })
      })
      .catch(err=> {
        console.log({
          err
        })
        this.setState({
          isLoading: false
        })
      })
    })
  }
  render() {
    const { todaysAppointments, totalAppointments, totalAppData, todayAppData, showAppointment } = this.state;
    const columns = [
      {
        title: "Patient Name",
        dataIndex: "name",
        key: "name",
        width: "30%",
        ...this.getColumnSearchProps("name")
      },
      {
        title: "Appt Date",
        dataIndex: "date",
        key: "date",
        width: "20%",
        ...this.getColumnSearchProps("date")
      },
      {
        title: "Paid Amount",
        dataIndex: "paid",
        key: "paid",
        width: "20%",
        ...this.getColumnSearchProps("paid")
      },
      {
        title: "",
        dataIndex: "age",
        key: "age",
        // width: "20%",
        render: (text, record)=> {
            console.log({
                text, record
            })
            return <>
            {/* <div class="btn-group" role="group" aria-label="Basic example"> */}
                <button type="button" class="btn btn-sm btn-primary-cus d-inline-flex align-items-center mr-2"> <EyeOutlined className="mr-1" /> View</button>
                <button type="button" onClick={this.approveAppointments} value={record._id} class="btn btn-sm btn-success-cus d-inline-flex align-items-center mr-2"><CheckOutlined className="mr-1" /> Approve</button>
                <button type="button" class="btn btn-sm btn-danger-cus d-inline-flex align-items-center"><CloseOutlined className="mr-1" /> Reject</button>
            {/* </div> */}

            </>
        }
        // ...this.getColumnSearchProps("age")
      },
    ];

    return (
      <div className="p-doc-dashboard">
        <div className="container pt-5">
          <div className="p-doc-dashboard__content">
            <div className="p-doc-dashboard__top-card-wrapper mb-3">
              <div className="p-doc-dashboard__top-card">
                <div className="p-doc-dashboard__top-card-icon">
                  <ReactSVG src="/images/dashboard/patient.svg" />
                </div>
                <div className="p-doc-dashboard__top-card-content">
                  <h4>{todaysAppointments.length}</h4>
                  <p>Appointments today</p>
                </div>
              </div>
              <div className="p-doc-dashboard__top-card">
                <div className="p-doc-dashboard__top-card-icon">
                  <ReactSVG src="/images/dashboard/schedule.svg" />
                </div>
                <div className="p-doc-dashboard__top-card-content">
                  <h4>{totalAppointments.length}</h4>
                  <p>Total Appointments</p>
                </div>
              </div>
              <div className="p-doc-dashboard__top-card">
                <div className="p-doc-dashboard__top-card-icon">
                  <ReactSVG src="/images/dashboard/cash.svg" />
                </div>
                <div className="p-doc-dashboard__top-card-content">
                  <h4>300$</h4>
                  <p>Revenue</p>
                </div>
              </div>
            </div>
            <div className="bg-white mt-3 mb-3 p-doc-dashboard__shadow">

              <div className="p-doc-dashboard__table-btn-wrapper p-3">
                <button value="today" onClick={this.changeShowAppointment} className={classNames("btn rounded-pill", {
                  "btn-primary": showAppointment === "today",
                  "btn-outline-primary": showAppointment !== "today"
                })}>Today</button><span className="pl-2" />
                <button value="upcoming" onClick={this.changeShowAppointment} className={classNames("btn rounded-pill", {
                  "btn-primary": showAppointment !== "today",
                  "btn-outline-primary": showAppointment === "today"
                })}>Upcoming</button>
              </div>
              <Table columns={columns} dataSource={showAppointment !== "today" ? totalAppData : todayAppData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInDoctor: state.loggedInDoctor
});

export default withDashboardLayout(connect(mapStateToProps)(dashboard));
