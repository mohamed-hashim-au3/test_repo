import React, { Component } from 'react';

class contactQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-contact__query--wrapper section bg-secondary">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-md-8">
                                <div className="c-contact__query--content">
                                    <div className="c-contact__heading">
                                        <h3>have a query?</h3>
                                    </div>
                                    <div className="c-contact__subHeading">
                                        <h5>Ask For Free Online Help</h5>
                                    </div>
                                    <div className="c-contact__text">
                                        <p>Lorem ipsum dolor amet consectetur adipisicing eliteiuim sete eiusmod tempor incididunt ut labore etnalom dolore magna aliqua udiminimate veniam quis norud.</p>
                                    </div>
                                    <div class="c-contact__btn--wrapper">
                                        <span class="btn btn-primary btn-primary-shadow d-md-inline-block d-block mr-4 ">View Questions</span>
                                        <span class="c-nav__link btn btn-outline-primary d-md-inline-block d-block ">Ask Your Questions</span>
                                    </div>
                                    <div class="c-contact__phone--wrapper">
                                        <img src="/images/phoneagain.png" alt="images" />
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
 
export default contactQuery;