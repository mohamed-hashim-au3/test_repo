import React, { Component } from 'react';
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import { Table, Tag } from 'antd';

const columns = [
    {
    title: 'Doctor',
    dataIndex: 'doctor',
    key: 'doctor',
    render: doctor => 
    <div className="c-profileData__doctorProfile">
        <div className="c-profileData__doctorAvatar">
            <a href="#"><img src={doctor[0]} alt="" className="img-fluid" /></a>
        </div>
        <div className="c-profileData__doctorDetails">
            <h3><a>{doctor[1]}</a></h3>
            <h5>{doctor[2]}</h5>
        </div>
    </div>,
},
{
    title: 'Appt Date',
    dataIndex: 'apptDate',
    key: 'apptDate',
},
{
    title: 'Booking Date',
    dataIndex: 'bookingDate',
    key: 'bookingDate',
},
{
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
},
{
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: status => (
    <span>
        {status.map(tag => {
        let color = "geekblue";
        if (status = 'cancelled') {
            color = 'volcano';
        }
        else if(status = 'confirm'){
            color = 'green';
        }
        else if(status = 'pending'){
            color = 'geekblue';
        }
        return (
            <Tag color={color}>
            {tag.toUpperCase()}
            </Tag>
        );
        })}
    </span>
    ),
},
{
    title: 'Action',
    key: 'action',
    render: (text, record) => (
    <span>
        <a style={{ marginRight: 16 }}>Invite {record.name}</a>
        <a>Delete</a>
    </span>
    ),
},
];

const data = [
{
    key: '1',
    doctor: ['/images/doctorthumb.jpg', 'john doe', 'doctor'],
    apptDate: 32,
    bookingDate: 'New York No. 1 Lake Park',
    amount: 160,
    status: ['pending'],
},
{
    key: '2',
    doctor: ['/images/doctorthumb.jpg', 'anna doe', 'doctor'],
    apptDate: 42,
    bookingDate: 'London No. 1 Lake Park',
    amount: 160,
    status: ['cancelled'],
},
{
    key: '3',
    doctor: ['/images/doctorthumb.jpg', 'tom jobs', 'doctor'],
    apptDate: 32,
    bookingDate: 'Sidney No. 1 Lake Park',
    amount: 160,
    status: ['confirm'],
},
];

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} className="site-custom-tab-bar" style={{ ...style }} />
    )}
  </Sticky>
);

class ProfileData extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-profileData__wrapper">
                    <StickyContainer>
                        <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                            <TabPane tab="Appointments" key="1">
                                <div className="c-profileData__appointmentsWrapper">
                                    <div className="c-profileData__appointmentsTable">
                                        <div className="table-responsive">
                                            <Table columns={columns} dataSource={data} />
                                        </div>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tab="Prescriptions" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Medical Records" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Billing" key="4">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </StickyContainer>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ProfileData;