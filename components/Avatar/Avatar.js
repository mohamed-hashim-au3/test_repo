import React, { Component } from 'react'
import classNames from "classnames";
import { Avatar as AvatarD } from 'antd';
import { getVersions } from '../../services/extra/bem';
export default class Avatar extends Component {
    render() {
        const  {
            icon, src, 
            className,
            parentClass,
            type,
            size
        } = this.props
        const typeClass =  getVersions(type, "c-avatar")
        const parent    = `${parentClass}__avatar`
        return (
            <AvatarD className={classNames("c-avatar", {
                [className]: className,
                [typeClass]: typeClass,
                [parent]: parentClass
            })}
                icon={icon} 
                src={src} 
                size={size} 
            />
        )
    }
}
