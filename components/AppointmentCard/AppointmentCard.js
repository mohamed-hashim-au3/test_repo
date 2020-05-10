import React, { Component } from 'react'
import Router from 'next/router'
import classNames from 'classnames'
// import Card from '../../Card/Card'
// import { getVersions } from '../../../services/extra/bem'
import { Row, Col, Spin, Icon, Modal, Button } from 'antd';
import AppointmentSlider from './AppointmentSlider';
import getDatesFromArray from '../../services/scheduler/getDatesFromArray';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css'
import { getAppointments } from '../../services/api';
import RoundedPopup from '../RoundedPopup/RoundedPopup';
import AppointmentForm from "./AppointmentForm"
import Moment from 'moment';
import { setAppointmentTime } from '../../redux/actions';
import { connect } from 'react-redux';
class AppointmentCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dates: [],
            appointments: [],
            isLoading: true,
            visible: false,
            isPopup: false
        }
        this.tap = this.tap.bind(this)
    }
    componentDidMount() {
        document.removeEventListener('drag', () => {
            this.isDraging = true

            setTimeout(() => {

            }, 100);
        })
        this.onDateChange(this.props.dates)
    }
    componentDidUpdate(prevProps){
        if(prevProps.dates !== this.props.dates){
            this.onDateChange(this.props.dates)
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    onDateChange = dates => {
        const doctorObj = this.props.doctor || {}// JSON.parse(localStorage.getItem("user"))
        
        const {
            _id: doctor
        } = doctorObj
        const limit = 5
        const date = new Date(dates[0])
        if(typeof this.props.onDateChange === "function"){
            this.props.onDateChange(dates)
        }
        this.setState({
            isLoading: true,
            dates
        }, () => {
            if(doctor){
                getAppointments({ doctor, limit, date })
                    .then(res => {
                        if (res.data && res.data.data) {
                            const {
                                data
                            } = res.data
                            
                            this.setState({
                                appointments: data,
                                isLoading: false
                            }, ()=> {
                                console.log({
                                    appointments: this.state.appointments
                                })
                            })
                        } else {
                            this.setState({
                                isLoading: false
                            })
                        }
                    })
                    .catch(err => {
                        this.setState({
                            isLoading: false
                        })
                        console.log({ err })
                    })
            }
        })
    }
    tap() {
        console.log('something')
    }
    render() {
        const {
            title,
            className,
            parentClass,
            type,
            doctor,
            showControl,
            onlyDates,
            loggedInPatient
        } = this.props
        const { dates, appointments, isLoading } = this.state



        // const typeClass = getVersions(type, "c-appointment-card")
        const parent = `${parentClass}__appointment-card`
        return (
            <div className={classNames("c-appointment-card", {
                [className]: className,
                // [typeClass]: typeClass,
                [parent]: parentClass
            })}>
                <div className="c-card c-appointment-card__card" title={title}>
                    {showControl && <AppointmentSlider onDateChange={this.onDateChange} />}
                    {!onlyDates && <div className="c-appointment-card__scroll-wrapper">
                        <CustomScroll heightRelativeToParent="100%">
                            <Row type="flex" className={classNames("c-appointment-card__scroll-row", {
                                "c-appointment-card__scroll-row--loading": isLoading
                            })}>
                                {!isLoading && <Dates appointments={appointments} onClick={(e, date) => {
                                    console.log('datedataher', {
                                        e, a: date
                                    })
                                    if(loggedInPatient._id){
                                        this.props.setAppointmentTime(date)
                                        console.log('aid',date._id)
                                        localStorage.setItem('timeslotid',date._id)
                                        this.setState({ isPopup: true })
                                        console.log('a obj', { e })
                                    }else{
                                        Router.push("/login")
                                    }
                                }} dates={dates} />}
                                {(isLoading || !doctor) && <Spin indicator={<Icon type="loading" style={{ fontSize: 50 }} spin />} />}
                            </Row>
                        </CustomScroll>
                    </div>}
                    <RoundedPopup width={900} onCancel={() => this.setState({ isPopup: false })} visible={this.state.isPopup} >
                        <AppointmentForm doctor={this.props.doctor} doctorId={this.props.doctor?._id} />
                    </RoundedPopup>
                </div>
            </div>
        )
    }
}
AppointmentCard.defaultProps = {
    showControl: false,
    onlyDates: false,
    dates: [
        Moment(),
        Moment().add("days", 1),
        Moment().add("days", 2),
        Moment().add("days", 3),
        Moment().add("days", 4),
    ]
};
const Dates = ({ appointments, dates, onClick}) =>{
    return dates.map((el, i) => {
        localStorage.setItem('manualdate', el)
        const datesArr = getDatesFromArray(appointments, el);
        return (<Col className="c-appointment-card__date-col" offset={i === 0 && 2} key={i} span={4}>
            {datesArr.map((elx, i) =>
                <span key={i}
                    className={classNames("c-appointment-card__date-btn", {
                        "c-appointment-card__date-btn--disabled": !elx
                    })}
                    onClick={(e) => {
                        onClick(e, elx)
                        console.log('something', elx.date)
                        console.log(elx.bookedFor)
                        const moonLanding = new Date(elx.bookedFor);

                        console.log(moonLanding.getDate());
                        localStorage.setItem('timeslotid',elx._id)
                           localStorage.setItem('manualbookedfor',moonLanding)


                        localStorage.setItem('manualtime', elx.date)


                        //    this.showModal()
                        //    this.tap.bind(this)
                    }}
                >
                    {elx ? elx.date : ""}
                </span>
            )}
        </Col>)
    })
}

const mapStateToProps = state => ({
    loggedInPatient: state.loggedInPatient
})
const mapDispatchToProps = ({
    setAppointmentTime
})
export default connect(mapStateToProps, mapDispatchToProps)(AppointmentCard)