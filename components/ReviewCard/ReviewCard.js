import React, { Component } from 'react'
import { Avatar, Divider, Rate } from "antd";
import moment from "moment";
export default class ReviewCard extends Component {
    render() {
        const {
            date, name, review, 
            overall, communication,
            waitTime, bedsideManner, img
        } = this.props
        return (
            <div className="c-review-card">
                <div className="c-review-card__info-wrapper">
                    {img && <Avatar size={64} src={img} />}
                    {!img && <Avatar size={64} icon="user" />}
                    <div className="c-review-card__info">
                        <p className="c-review-card__author">{name}</p>
                        <p className="c-review-card__date">{moment(date).format("MMMM YYYY")}</p>
                    </div>
                </div>
                <div className="c-review-card__text-wrapper">
                    <p className="c-review-card__text">{review}</p>
                </div>
                <div className="c-review-card__rate-wrapper">
                    <ReviewCardRate label="Overall" value={overall} />
                    <ReviewCardRate label="Communication" value={communication} />
                    <ReviewCardRate label="Wait Time" value={waitTime} />
                    <ReviewCardRate label="Bedside Manner" value={bedsideManner} />
                </div>
                <Divider />
            </div>
        )
    }
}
ReviewCard.defaultProps = {
    date : new Date(),
    name: "No Name"
}
const ReviewCardRate = ({label, value}) => {
    return (
        <div className="c-review-card__rate">
            <p className="c-review-card__rate-label">{label}</p>
            <Rate allowHalf={true} className="c-review-card__rate-stars" value={value} disabled />
        </div>
    )
}