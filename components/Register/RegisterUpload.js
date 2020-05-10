import React, { Component } from 'react'
import { Form, Icon, Input, Select, Radio, DatePicker, Upload, Button, Spin } from 'antd';
import { registerDoctor, doctorProfileUpdate } from '../../services/api/doctors.js';
const {
    Item : FormItem
} = Form
const { Option } = Select;
import Loader from '../loader/Loader.js';
import ErrorAlert from '../error/ErrorAlert.js';
class RegisterUpload extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: false,
            err: "",
            errMsg: "",
        }
    }
    handleSubmit = (e)=> {
        e.preventDefault()
        const {
            form: {
                validateFields,
            }, onSubmit,
            isDoctor,
            infoFormDetails
        } = this.props
        validateFields((err, values)=> {
            if (!err) {
                
                if(isDoctor){
                    this.setState({
                        isLoading: true
                    }, ()=> {
                        doctorProfileUpdate({
                            id: "", 
                            steps: [1,1,1,0]
                        })
                        .then(({data}) => {
                            if(data.success){
                                this.setState({
                                    isLoading: false
                                })
                            }else{
                                this.setState({
                                    isLoading: false,
                                    errMsg: data.message,
                                    err: true
                                })
                            }
                            console.log({res})
                        }).catch(err => {
                            this.setState({
                                err,
                                isLoading: false
                            })
                        } )
                    })
                }else{
                    onSubmit(values)
                }
            }
        })
    }
    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, getFieldValue } = this.props.form;
        const {
            isLoading, errMsg
        } = this.state
        return (
            <div className="c-register-info pt-5">
                <Form onSubmit={this.handleSubmit}>
                    {
                        true && <>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h6>Picture or Video</h6>
                                    <FormItem>
                                        {getFieldDecorator('media', {
                                            valuePropName: 'fileList',
                                            getValueFromEvent: this.normFile,
                                            // rules: [{ required: true, message: 'Please upload your registration proof!' }],
                                        })(
                                            <Upload name="logo" 
                                                // action="/upload.do" 
                                                listType="picture">
                                                <Button>
                                                    <Icon type="upload" /> Click to upload
                                                </Button>
                                            </Upload>,
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Registration Proof</h6>
                                    <FormItem>
                                        {getFieldDecorator('registrationProof', {
                                            valuePropName: 'fileList',
                                            getValueFromEvent: this.normFile,
                                            // rules: [{ required: true, message: 'Please upload your registration proof!' }],
                                        })(
                                            <Upload name="logo" 
                                                // action="/upload.do" 
                                                listType="picture">
                                                <Button>
                                                    <Icon type="upload" /> Click to upload
                                                </Button>
                                            </Upload>,
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Medical Proof</h6>
                                    <FormItem>
                                        {getFieldDecorator('medicalProof', {
                                            valuePropName: 'fileList',
                                            getValueFromEvent: this.normFile,
                                            // rules: [{ required: true, message: 'Please upload your registration proof!' }],
                                        })(
                                            <Upload name="logo" 
                                                // action="/upload.do" 
                                                listType="picture">
                                                <Button>
                                                    <Icon type="upload" /> Click to upload
                                                </Button>
                                            </Upload>,
                                        )}
                                    </FormItem>
                                </div>
                                <div className="col-sm-6">
                                    <h6>Photo of Clinic</h6>
                                    <FormItem>
                                        {getFieldDecorator('clinicPhoto', {
                                            valuePropName: 'fileList',
                                            getValueFromEvent: this.normFile,
                                            // rules: [{ required: true, message: 'Please upload your registration proof!' }],
                                        })(
                                            <Upload name="logo" 
                                                // action="/upload.do" 
                                                listType="picture">
                                                <Button>
                                                    <Icon type="upload" /> Click to upload
                                                </Button>
                                            </Upload>,
                                        )}
                                    </FormItem>
                                </div>
                            </div>
                        </>
                    }
                    <Loader isLoading={isLoading} />
                    <ErrorAlert error={errMsg} />
                    <div className="text-center d-block">
                        <button disabled={isLoading} className="btn btn-primary" type="submit">Continue</button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default Form.create({ 
    name: 'register-upload'
 })(RegisterUpload)