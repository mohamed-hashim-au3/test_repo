import React, { Component } from 'react'
 import { Avatar } from "antd";
 import './newappointmentap.scss';
 import { getDoctors } from '../../redux/actions';
import { getName, getAddress } from '../../services/extra/DoctorHelpers';
import { connect } from 'react-redux'
import getDatesFromArray from '../../services/scheduler/getDatesFromArray';
import Moment from 'react-moment';
import moment from 'moment';
class AppointmentDoctor extends Component {
  constructor(props){
    super(props)
}
componentDidMount(){
   
    this.props.getDoctors()
   
}
  render() {
    const {
      doctors,
      doctor,
  } = this.props
  const name     = getName(doctor || {}).toLowerCase()
  const address   = getAddress(doctor || {})
    return (
      <>
        <div className="c-appointment-form__doctor">
       <div className="c-appointment-form__doctor-avatar-wrapper">
           {/* {
              doctor.image ? 
              <Avatar size={200} src={doctor.image} /> 
            
              :
              <Avatar size={200} icon="user" />
              <img src={require('./doctor(1).png')} width='200' />
          } */}
            <img src={require('./doctor(1).png')} width='200' />
      </div>
      <h4 className="c-appointment-form__doctor-title">
          <strong>{name}</strong>
          {/* Amiran Baduashvili */}
      </h4>
      <p className="c-appointment-form__doctor-time">
        {/* <strong>{time}</strong> */}
        <p className="custom-doctor-time-span-ap">  {moment(this.props.appointmentTime.bookedFor).format("HH:mm a")}</p>
        <p className="custom-doctor-date-span-ap" style={{fontSize:"13px"}}>
          {moment(this.props.appointmentTime.bookedFor).format("Do MMMM, YYYY")}
        {/* <Moment format="LLLL">
      {localStorage.getItem('manualdate')}
      </Moment> */}
          {/* 12<sup>th</sup> December, 2019 */}
          {/* <getDatesFromArray /> */}
        
          
          </p>
      </p>
    </div>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  doctors: state.doctors.all,
  appointmentTime: state.appointment.time,
})
export default connect(mapStateToProps, {
  getDoctors
} )(AppointmentDoctor)


// import React from "react";
// import { Avatar } from "antd";
// import './newappointmentap.css';
// export default function AppointmentDoctor({doctor, time}) {


//   return (
//     <div className="c-appointment-form__doctor">
//       <div className="c-appointment-form__doctor-avatar-wrapper">
//           {
//               doctor.image ? 
//               <Avatar size={200} src={doctor.image} /> 
            
//               :
//               <Avatar size={200} icon="user" />
//               <img src={require('./doctor(1).png')} width='200' />
//           }
//       </div>
//       <h4 className="c-appointment-form__doctor-title">
//           <strong>{doctor.name}</strong>
//           Amiran Baduashvili
//       </h4>
//       <p className="c-appointment-form__doctor-time">
//         <strong>{time}</strong>
//         <p className="custom-doctor-time-span-ap">3:20 P.M</p>
//         <p className="custom-doctor-date-span-ap">12<sup>th</sup> December, 2019</p>
//       </p>
//     </div>
//   );
// }

