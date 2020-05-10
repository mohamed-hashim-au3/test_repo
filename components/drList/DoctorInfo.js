import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from '../Avatar/Avatar';
import { getDoctors } from '../../redux/actions';
import { getName, getAddress } from '../../services/extra/DoctorHelpers';

class DoctorInfo extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
       
        this.props.getDoctors()
    }
    render() {
        const {
            doctors, doctor
        } = this.props
        // const doctor = doctors && doctors[0]
        const name     = getName(doctor || {}).toLowerCase()
        const address   = getAddress(doctor || {})
        return (
            <div className="c-doctor-info">
                <div>
                    <Avatar parentClass="c-doctor-info" type={["thumb", "shadow"]} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={100} />
                </div>
                <h3 className="c-doctor-info__name">{name}</h3>
                <p className="c-doctor-info__address">{address}</p>
            </div>
        )
    }
}


// DoctorInfo.defaultProps = {
//     doctors: []
// }
const mapStateToProps = (state) => ({
    doctors: state.doctors.all 
})
export default connect(mapStateToProps, {
    getDoctors
} )(DoctorInfo)
