import React, {useState} from 'react'
import classNames from 'classnames'
import { CalendarOutlined } from '@ant-design/icons'
import TimelineDrover from '../timeline/TimelineDrover';

export default function LayoutDrawer(props) {
    const [isOpen, setIsOpen] = useState(true)
    
    return (
        <div className={classNames("c-layout-drawer", {
            "c-layout-drawer--opened": isOpen,
            "c-layout-drawer--closed": !isOpen,
        })}>
            <div className="c-layout-drawer__main">
                {props.children}
            </div>
            <div className="c-layout-drawer__aside">
                <div className="c-layout-drawer__aside-tgl-wrapper" onClick={()=> setIsOpen(!isOpen)}>
                    <div className="c-timeline-drawer__aside-tgl" >
                        <CalendarOutlined />
                    </div>
                </div>
                <div className="c-layout-drawer__aside-content">
                    <TimelineDrover  
                        allAppointments={props.allAppointments}
                        appointments={props.appointments}/>
                </div>
            </div>
        </div>
    )
}
