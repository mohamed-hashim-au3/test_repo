import React, { Component } from "react";
import { Drawer, Alert } from "antd";
import ShortCalender from "../calenders/shortCalender/ShortCalender";
import './customtimeline.css'
// import { getDoctorDetail } from '../../../../services/api/doctors';
import { getAppointmentsOfDate, getDoctorTimeLine } from '../../services/extra/DoctorHelpers';
import moment from "moment";
import {CalendarOutlined} from '@ant-design/icons'
import './customtimeline.css'

export default class TimelineDrover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formLayout: "vertical",
      appointments: getAppointmentsOfDate(props.appointments, moment()),
      selectedDate: moment(),
      appointmentlength: '',
      allAppointments: props.appointments
    };
  }
  componentDidMount() {
      this.setState({
        appointments: getAppointmentsOfDate(this.props.appointments, moment())
      }, () => {
        console.log({
          ______________: this.state.appointments
        },
          this.setState({ appointmentlength: this.state.appointments.length }),
          localStorage.setItem('appointmentlength', this.state.appointmentlength))
      })
  }
 
 componentDidUpdate(prevProps, prevState) {
   if(prevProps.appointments!==this.props.appointments){
     this.setState({
       allAppointments: prevProps.appointments,
       appointments: getAppointmentsOfDate(this.props.appointments, moment())
      });
   }
 }
  onCloseTo = () => {
    this.props.onClose();
  };

  handleFormLayoutChange = e => {
    this.setState({ formLayout: e.target.value });
  };

  timeonChange(time, timeString) {
    console.log(time, timeString);
  }

  render() {
    const title = `Appointment Availability - ${this.state.appointmentlength || 0}`
    const { visible, appointments } = this.props;
    const { appointments: stateAppointment, selectedDate } = this.state;
    const timeLineArr = getDoctorTimeLine({
      timeSlot: 15,
      allAppointments: this.props.allAppointments,
      date: selectedDate
    })
    let appointmentData;
    if (this.state.appointments.length > 0 && ( timeLineArr.dates && timeLineArr.dates)) {
      appointmentData = (
        <div>
          Time
        {
            timeLineArr.dates && timeLineArr.dates.map((elx, i) => {
              const el = stateAppointment.find(el => {
                if (!el.booked) return false
                const bookedMom = moment(el.bookedFor)
                return bookedMom.format("HH:mm") === elx.format("HH:mm")
              })
              return (
                <div key={i} data-time={moment(elx).format("HH:mm")} className="c-timeline-drover__col">
                  {el && <Alert
                    className="c-timeline-drover__msg c-timeline-drover__msg--span-1"
                    message={(el.patient && el.patient.name) || "Patient"}
                    description={
                      <span style={{
                        display: "block"
                      }} className="ant-typography-ellipsis-single-line">Reason: {el.reasonForVisit || 'Not Available'}</span>
                    }
                    type="info"
                  />}
                </div>
              )
            })
          }
        </div>
      )
    }
    else {
      appointmentData = (
        <center><h4 className="pt-5">You don't have any Appointments Today.</h4></center>
      )
    }
    return (
      <div className="c-timeline-drover">
        {/* <Drawer
          title={title}
          // title = "Availability Timeline"
          placement="right"
          closable={true}
          onClose={() => this.onCloseTo()}
          visible={visible}
          width={350}
          mask={false}
          className="custom-timeline-drover-style-aakash"

        > */}
          <div className="d-block">
            {/* <div className="c-timeline-drover__tgl-wrapper" onClick={()=>{
              if(typeof this.props.toggle === "function"){
                this.props.toggle()
              }
            }}>
              <div className="c-timeline-drover__tgl" >
                <CalendarOutlined />
              </div>
            </div> */}
            <ShortCalender
              disableOld={true}
              className="badge1"
              data-badge="6"
              onSelect={(selectedDate) => {
                this.setState({
                  appointments: getAppointmentsOfDate(appointments, selectedDate),
                  selectedDate
                }, () => {
                  console.log({
                    appointments: this.state.appointments
                  },
                    this.setState({ appointmentlength: this.state.appointments.length }),
                    localStorage.setItem('appointmentlength', this.state.appointmentlength))
                })
              }}
              appointments={this.props.allAppointments.filter(el => {
                return el.booked && !(moment(el.bookedFor).isBefore(moment(), "day"))
              }).map(el => ({bookedFor: el.bookedFor}))}
            />

            <div className="c-timeline-drover__row">
              {appointmentData}
            </div>
          </div>
        {/* </Drawer> */}
      </div>
    );
  }
}

TimelineDrover.defaultProps = {
  allAppointments: [],
  visible: true
}