import React, { Component } from 'react';
import {Icon} from 'antd';


class contactDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-contact__details--wrapper section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="c-contact__contentWrapper">
                                    <div className="c-contact__thumb">
                                        <img src="/images/Contact-logo.png" alt="images" />
                                    </div>
                                    <div className="c-contact__subHeading">
                                        <h5>always get in touch</h5>
                                    </div>
                                    <div className="c-contact__heading">
                                        <h3>Our Contact Details</h3>
                                    </div>
                                    <div className="c-contact__text">
                                        <p>Amet consectetur adipisicing eliteiuim sete eiuode tempor incint utoreas etnalom dolore maena aliqua udiminimate veniam quis norud exerciton ullamco laboris nisiquip commodo lokate.</p>
                                    </div>
                                    <div className="c-contact__addressList">
                                        <ul>
                                            <li>
                                                <span><Icon type="heat-map" /></span> 123 New Design Street, Melbour Australia 54214
                                            </li>
                                            <li>
                                                <span><Icon type="mail" /></span> info@domainurl.com
                                            </li>
                                            <li>
                                                <span><Icon type="phone" /></span> (0800) 1234 567891
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="c-contact__map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12614.295110982139!2d-122.24391282625437!3d37.77659102614347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f86ee0d53129f%3A0x9e64cf86b7a60c6f!2sJingletown%2C%20Oakland%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1582711975962!5m2!1sen!2sin" width="100%" height="442" frameborder="0" allowfullscreen=""></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default contactDetails;