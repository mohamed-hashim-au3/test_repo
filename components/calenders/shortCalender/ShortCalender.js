import React, { Component } from 'react'
import { Calendar, Col, Row, Icon, Badge } from 'antd'
import classNames from 'classnames'
import moment from 'moment'
import { getAppointmentsOfDate } from '../../../services/extra/DoctorHelpers'
import './customshortcalendar.css'

export default class ShortCalender extends Component {
  onSelect = (e, value, mode) => {
    const {
      onSelect
    } = this.props
    if (typeof onSelect === "function") {
      onSelect(e)
    }


  }
  dateCellRender = (date) => {
    const appointments = getAppointmentsOfDate(this.props.appointments, date)
    
    if (appointments.length) {
      return <Badge count={appointments.length} className="c-short-calendar__ap_badge" />
    }
  }
  renderHeader = ({ value, type, onChange, onTypeChange, }) => {
    const currentMonth = moment().month()
    return (
      <div className="c-short-calender__header" style={{ padding: 10 }}>
        <Row type="flex" justify="space-between">
          <Col>
            <Icon className={classNames("c-short-calender__header-icon c-short-calender__header-icon--left ", {
              "c-short-calender__header-icon--disabled": !(value.month() > currentMonth)
            })} onClick={() => {
              const newValue = value.clone().subtract(1, "M");
              const newMonth = newValue.month()
              const newYear = newValue.year()
              const now = value.clone().month(newMonth).year(newYear);
              onChange(now);
            }} type="left" />
          </Col>
          <Col>
            {`${moment(value).format("MMMM, YYYY")}`}
          </Col>
          <Col>

            <Icon className="c-short-calender__header-icon c-short-calender__header-icon--right" onClick={() => {
              const newValue = value.clone().add(1, 'M');
              const newMonth = newValue.month()
              const newYear = newValue.year()
              const now = value.clone().month(newMonth).year(newYear);
              onChange(now);
            }} type="right" />
          </Col>
        </Row>
      </div>
    );
  }

  render() {
    // dateCellRender(m)
    return (
      <div className="c-short-calender c-short-calendar__ap_custom">
        {/* <Badge count={5}> */}
        <Calendar
          // className="badge1"
          // data-badge="6"
          disabledDate={date => {
            if(this.props.disableOld){
              return moment(date).isBefore(moment(), "day")
            }
            return true
          }}
          onChange={this.onSelect}
          fullscreen={false}
          headerRender={this.renderHeader}
          dateCellRender={this.dateCellRender}
        />
        {/* </Badge> */}
      </div>
    )
  }
}
