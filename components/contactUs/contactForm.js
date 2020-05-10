import React, { Component } from 'react';

class contactForm extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            email: '',
            message: '',
            nameError: '',
            emailError: '',
            messageError: ''
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    validate(){
        let nameError = '';
        let emailError = '';
        let messageError = '';

        if(this.state.email !== '/\S+@\S+\.\S+/'){
            emailError = 'Invalid Email';
        }
        else if(emailError){
            this.setState({emailError: emailError});
            return false;
        }
        return true;
    }
    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        const isValid = this.validate();
        console.log(isValid);
        if(isValid == true){
            console.log('True');
        }
        else if(isValid == false){
            console.log('False');
        }
        this.setState({
            [name] : value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState(this.initialState);
        console.log(this.state);
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-contact__form--wrapper section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="c-contact__form--content">
                                    <div className="c-contact__subHeading">
                                        <h5>Get In Touch With Us</h5>
                                    </div>
                                    <div className="c-contact__heading">
                                        <h3>Say <span>Hello To Us</span></h3>
                                    </div>
                                    <div className="c-contact__text">
                                        <p>Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut labore etnalom dolore magna aliqua udiminimate veniam quis norud.</p>
                                    </div>
                                    <div className="c-contact__form">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="c-contact__form--block">
                                                        <input type="text" name="name" value={this.state.name} placeholder="Your Name*" onChange={this.handleChange} />
                                                        
                                                        <div className="c-contact__from--error">{this.state.nameError}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="c-contact__form--block">
                                                        <input type="text" name="email" value={this.state.email} placeholder="Your Email*" onChange={this.handleChange} />
                                                        <div className="c-contact__from--error">{this.state.emailError}</div>
                                                      
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="c-contact__form--block">
                                                        <textarea type="text" name="message" value={this.state.message} placeholder="Your Message*" onChange={this.handleChange} ></textarea>
                                                        
                                                        <div className="c-contact__from--error">{this.state.messageError}</div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-12">
                                                    <div className="c-contact__form--block">
                                                        <button className="btn-lg btn btn-primary btn-primary-shadow" type="submit">Send Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default contactForm;