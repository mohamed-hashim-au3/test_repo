import withDashboardLayout from "../../../../components/layouts/dashboard-layout/withDashboardLayout";
import React, { Component} from "react";
import { connect } from 'react-redux'
import { Row,
    Col,
    Drawer,
    Icon,
    Form,
    Select,
    Checkbox,
    Tooltip,
    Button,
    Radio,
    TimePicker,
    Divider,
    InputNumber } from "antd";
import Alternate from "../../../../components/alternate/Alternate";
import moment from "moment";
import { saveTimeSlots } from "../../../../services/api";


// import { saveTimeSlots } from "../../../../services/api/saveTimeSlots";
const { Option } = Select;
class availablity extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formLayout: "vertical",
          startTime: null,
          endTime: null,
          duration: "15",
          gap: "none",
          customGap: "",
          weekdays: [],
          weekdaysArr: [
            {
              days: ["monday","tuesday","wednesday","thursday","friday"],
              startTime: moment('08:00:00', 'HH:mm:ss'),
              endTime: moment('17:00:00', 'HH:mm:ss'),
              lunchStart: moment('12:00:00', 'HH:mm:ss'),
              lunchEnd: moment('13:00:00', 'HH:mm:ss'),
            }
          ]
        };
    }
    onCloseTo = () => {
      this.props.onClose();
    };
    handleFormLayoutChange = e => {
      this.setState({ formLayout: e.target.value });
    };
    onDurationChange = e => {
      const { value } = e.target;
      this.setState({
        duration: value
      });
    };
    onGapChange = e => {
      const { value } = e.target;
      this.setState({
        gap: value
      });
    };
    onDaysChange = e => {
      const { weekdays } = this.state;
      const { value } = e.target;
      if (weekdays.includes(value)) {
        this.setState({
          weekdays: weekdays.filter(el => el !== value)
        });
      } else {
        this.setState({
          weekdays: [...weekdays, value]
        });
      }
    };
    onWeekDayChange = (e, index) => {
      const { weekdaysArr } = this.state;
      const { value } = e.target;
      const inInCurrent = weekdaysArr[index].days.some(el => el === value);
      const isInOther = weekdaysArr.some(el => el.days.some(elx => elx === value));
      if(inInCurrent){
        this.setState({
          weekdaysArr: weekdaysArr.map((el , i)=>{
            if(i !== index) return el
              return {
                ...el,
                days: el.days.filter(elx => elx !== value)
              }
          })
        })
      }else if(isInOther){
        this.setState({
          weekdaysArr: weekdaysArr.map((el , i)=>{
            if(i !== index) return {
              ...el,
              days: el.days.filter(elx => elx !== value) 
            }
              return {
                ...el,
                days: [...el.days, value]
              }
          })
        })
      }else {
        this.setState({
          weekdaysArr: weekdaysArr.map((el, i)=> {
            if(i !== index) return el
              return {
                ...el,
                days: [...el.days, value]
              }
          })
        })
      }
    }
    onWeekTimeChange(time, index, key = "startTime"){
      this.setState(prevState => ({
        weekdaysArr: prevState.weekdaysArr.map((el, i)=> {
          if(index === i){
            return {
              ...el,
              [key]: time
            }
          }
          return el
        })
      }))
    }
    timeonChange(time, timeString) {
      console.log(time, timeString);
    }
    onStartTimeChange = startTime => {
      this.setState({
        startTime
      });
    };
    onEndTimeChange = endTime => {
      this.setState({
        endTime
      });
    };
    onSubmit = (e) => {
      e.preventDefault()
      const { duration, gap, customGap, weekdays, weekdaysArr } = this.state;
      const download = (objectData) => {
        let filename = "export.json";
        let contentType = "application/json;charset=utf-8;";
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(objectData)))], { type: contentType });
          navigator.msSaveOrOpenBlob(blob, filename);
        } else {
          var a = document.createElement('a');
          a.download = filename;
          a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(objectData));
          a.target = '_blank';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      }
      const {
        doctor
      } = this.props
      // const doctor = JSON.parse(localStorage.getItem("user"));  
      // scheduler({
      //   duration,
      //   gap,
      //   customGap,
      //   weekdays,
      //   weekdaysArr,
      // });
      const modifiedWeekArr = weekdaysArr.map(el => {
        return ({
          ...el,
          startTime: moment(el.startTime).format("HH:mm:ss"),
          endTime: moment(el.endTime).format("HH:mm:ss"),
          lunchStart: moment(el.lunchStart).format("HH:mm:ss"),
          lunchEnd: moment(el.lunchEnd).format("HH:mm:ss"),
        })
      })
      // download({
      //     duration,
      //     // gap,
      //     // customGap,
      //     weekdays,
      //     weekdaysArr,
      //   });
      saveTimeSlots({
        duration,
        id: doctor._id,
        // gap,
        // customGap,
        // weekdays,
        weekdaysArr: modifiedWeekArr,
      })
      .then(res => {
        console.log({res})
      })
      .catch(err => {
        console.log({err})
      })
    };
    render() {
        
    const { visible } = this.props;
    const {
        formLayout,
        // startTime,
        // endTime,
        duration,
        // gap,
        // weekdays,
        weekdaysArr
      } = this.state;
      const buttonItemLayout =
      formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null;
        return (
            <div className="p-availablity">
                <Form onSubmit={this.onSubmit} className="p-availablity__form" layout={"vertical"}>
                    <div className="row">
                        <div className="col-12">
                            <h6 className="d-flex align-items-center">Appointment Duration
                                <Tooltip title="Max Calling Time" className="fr form-tolltip pl-2">
                                    <Icon type="exclamation-circle" />
                                </Tooltip>
                            </h6>

                            <Radio.Group
                                defaultValue="15"
                                value={duration}
                                onChange={this.onDurationChange}
                            >
                                <Radio value="15">15 Min.</Radio>
                                <Radio value="30">30 Min.</Radio>
                                <Radio value="45">45 Min.</Radio>
                                <Radio value="60">60 Min.</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <br />

                    <p>Choose any day to the week to repeat this availabilty</p>

                    {weekdaysArr.map((week, index) => {
                        return (
                            <Alternate
                                key={index}
                                weekdays={week.days}
                                onDaysChange={e => {
                                    this.onWeekDayChange(e, index);
                                }}
                                onStartTimeChange={e => {
                                    this.onWeekTimeChange(e, index, "startTime");
                                }}
                                onEndTimeChange={e => {
                                    this.onWeekTimeChange(e, index, "endTime");
                                }}
                                onLunchStartChange={e => {
                                    this.onWeekTimeChange(e, index, "lunchStart");
                                }}
                                onLunchEndChange={e => {
                                    this.onWeekTimeChange(e, index, "lunchEnd");
                                }}
                                startTime={week.startTime}
                                endTime={week.endTime}
                                lunchStart={week.lunchStart}
                                lunchEnd={week.lunchEnd}
                                onAdd={() => {
                                    this.setState({
                                        weekdaysArr: [
                                            ...weekdaysArr,
                                            {
                                                days: [],
                                                startTime: moment("08:00:00", "HH:mm:ss"),
                                                endTime: moment("17:00:00", "HH:mm:ss"),
                                                lunchStart: moment("12:00:00", "HH:mm:ss"),
                                                lunchEnd: moment("13:00:00", "HH:mm:ss")
                                            }
                                        ]
                                    });
                                }}
                                hideRemove={index === 0}
                                onRemove={() => {
                                    if (weekdaysArr.length > 1) {
                                        this.setState({
                                            weekdaysArr: weekdaysArr.filter((el, i) => i !== index)
                                        });
                                    }
                                }}
                                index={index}
                            />
                        );
                    })}
                    <Form.Item {...buttonItemLayout}>
                        <button className="btn btn-primary" type="sumbit" >Submit</button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
const mapStateToProps = state => ({
  doctor: state.loggedInDoctor
})
export default Form.create("availablity")(withDashboardLayout(
  connect(mapStateToProps)(availablity)
));
