import React, { Component } from 'react';
import {HowItWorks} from "../../constants/messages/howitworks";

const LeftItem = ({
    subTitle, 
    title, 
    content, 
    btn_text, 
    image,
    right
}) => {
    let divClass = "col-lg-6 col-md-6";
    if(right == true){
        divClass = "col-lg-6 col-md-6 order-1"
    }

    return ( 
        <div className="c-leftitems__block">
            <div className="row">
                <div className={divClass}>
                    <div className="c-leftitems__content">
                        <div className="c-leftitems__title">
                            <h5>{subTitle}</h5>
                            <h3>{title}</h3>
                        </div>
                        <p>{content}</p>
                        <a href="#" className="btn btn-outline-primary">{btn_text}</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="c-leftitems__image">
                        <img src={image} alt="images" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
}


class LeftItems extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            howitworks : []
        }
    }
    componentDidMount(){
       let final = HowItWorks.map(el => (
            <LeftItem 
                subTitle={el.subtitle} 
                title={el.title} 
                content={el.content} 
                btn_text={el.btn_text} 
                image={el.image} 
                right= {el.right}>
            </LeftItem>
       ));
       this.setState({howitworks: final})
    }
    render() { 
        return (
        this.state.howitworks     
        );
    }
}
 



export default LeftItems;