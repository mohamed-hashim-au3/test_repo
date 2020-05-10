import React, { Component } from 'react'
import classNames from "classnames";
import { getVersions } from "../../services/extra/bem";
export default class Section extends Component {
    render() {
        const {
            parentClass,
            type,
            children,
            bgImg
        } = this.props
        const typeClass =  getVersions(type, "c-section")
        const parent    = `${parentClass}__section`
        return (
            <div className={classNames("c-section", {
                [parent]: parentClass,
                [typeClass]: typeClass,
            })}>
                {bgImg && <img src={bgImg} className="c-section__bg-img" />}
                {children}
            </div>
        )
    }
}
