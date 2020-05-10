import React, { Component } from 'react'
import { Rate, Card, Row, Col, Divider, } from 'antd';
import * as ReactSvg from "react-svg";

export default class RatingCard extends Component {
    render() {
        return (
            <div className="c-rating-card">
                <Row type="flex" align="middle" className="c-rating-card__row">
                    <Col span={6} className="c-rating-card__overall-col">
                        <p className="c-rating-card__overall-title">Overall rating</p>
                        <span className="c-rating-card__overall-rating">4.5</span>
                        <Rate disabled className="c-rating-card__stars" allowHalf defaultValue={4.5} />
                    </Col>
                    <Col span={18} className="c-rating-card__reviews-wrapper">
                        <Card className="c-rating-card__reviews-card">
                            <Row type="flex">
                                <Col span={11}>
                                    <BarLabel label="Overall" value={4} />
                                </Col>
                                <Col span={2} />
                                <Col span={11}>
                                    <BarLabel label="Communication" value={4} />
                                </Col>
                                <Col span={11}>
                                    <BarLabel label="Wait time" value={4} />
                                </Col>
                                <Col span={2} />
                                <Col span={11}>
                                    <BarLabel label="Bedside manner" value={4} />
                                </Col>
                                <Divider />
                                <Col span={11}>
                                    {/* <BarLabel label="Check-in" icon={<ReactSvg src={"/images/icon.svg"} />} isWhole={true} value={4} /> */}
                                </Col>
                                {/* <Col span={12}>
                                    <BarLabel label="Check-in" icon={<ReactSvg src={"/images/icon.svg"} />} isWhole={true} value={4} />
                                </Col>
                                <Col span={12}>
                                    <BarLabel label="Check-in" icon={<ReactSvg src={"/images/icon.svg"} />} isWhole={true} value={4} />
                                </Col>
                                <Col span={12}>
                                    <BarLabel label="Check-in" icon={<ReactSvg src={"/images/icon.svg"} />} isWhole={true} value={4} />
                                </Col> */}
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const BarLabel = ({label, value, max=5, icon, isWhole }) => (
    <div className="c-bar-label">
        <div className="c-bar-label__label">
            {label}
        </div>
        <div className="c-bar-label__bar">
            {!icon && <div className="c-bar-label__bar-line">
                <div style={{width: `${(value/max) * 100}%`}} className="c-bar-label__bar-line-bg">
                </div>
            </div>}
            {
                icon && <div className="c-bar-label__icon-wrapper">
                    {icon}
                </div>
            }
            <div className="c-bar-label__value">{isWhole ? value : value.toFixed(1)}</div>
        </div>
    </div>
)
