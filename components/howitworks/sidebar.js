import React, { Component } from 'react';
import {Icon} from 'antd';


export class OnlineQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-sidebar__queryWrapper">
                    <div className="c-sidebar__queryInner">
                        <div className="c-sidebar__queryImage">
                            <img src="/images/query.jpg" alt="images" />
                        </div>
                        <div className="c-sidebar__queryContent">
                            <h5>Stop Waiting In Queue</h5>
                            <h3>Ask Query Online</h3>
                            <a className="btn btn-primary btn-primary-shadow" href="#">Book Audio / Video Call</a>
                            <p><span>50,000+</span>Consultation Served</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export class MostSearched extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-sidebar__mostWrapper">
                    <div className="c-sidebar__mostInner">
                        <div className="c-sidebar__mostHeading">
                            <h3>most nearby search</h3>
                        </div>    
                        <div className="c-sidebar__mostList">
                            <ul>
                                <li>
                                    <a href="#">Allergy Specialist</a>
                                </li>
                                <li>
                                    <a href="#">Allergy Specialist</a>
                                </li>
                                <li>
                                    <a href="#">Allergy Specialist</a>
                                </li>
                                <li>
                                    <a href="#">Allergy Specialist</a>
                                </li>
                                <li>
                                    <a href="#">Allergy Specialist</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export class AppNewsLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-sidebar__appWrapper">
                    <div className="c-sidebar__appInner">
                        <div className="c-sidebar__queryImage">
                            <img src="/images/appnewsletter.jpg" alt="images" />
                        </div>
                        <div className="c-sidebar__queryContent">
                            <h5>Care On The GO</h5>
                            <h3>Get Mobile App</h3>
                            <p>A dipisicing sed dotem eiusmou tempor incididunt ut labore</p>
                            <div className="c-sidebar__appInput">
                                <input type="text" placeholder="Email ID" />
                                <span> send </span>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export class Subscribers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="c-sidebar__subscribeWrapper">
                    <div className="c-sidebar__subscribeInner">
                        <div className="c-sidebar__subscribeImage">
                            <a href="#" ><img src="/images/subscribe.jpg" alt="images" /></a>
                        </div>
                        <p>ADVERTISEMENT 770PX X 90PX</p>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

class sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <React.Fragment>
                <OnlineQuery />
                <MostSearched />
                <AppNewsLetter />
                <Subscribers />
            </React.Fragment>
        );
    }
}
 
export default sidebar