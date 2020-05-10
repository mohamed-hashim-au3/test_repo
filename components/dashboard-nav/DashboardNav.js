import React from 'react'
import { connect } from 'react-redux'
import classNames from 'classnames'
import Link from 'next/link'
import { unsetLoggedInDoctor } from '../../redux/actions'
function DashboardNav({isSubNav, items, unsetLoggedInDoctor}) {
    const onAction = (action)=> {
        switch (action) {
            case "logout":
                unsetLoggedInDoctor()
                break;
        
            default:
                break;
        }
    }
    return (
        <ul className={classNames("c-dashboard-nav row align-items-center my-auto px-3", {
            "c-dashboard-nav--sub-nav": isSubNav
        })}>
            {
                items.map((navItem, index)=> {
                    const {
                        extraClass, extraLinkClass, link, name, action
                    } = navItem
                    return (
                        <li key={index} className={classNames("c-dashboard-nav__item", {
                            [extraClass]: extraClass,
                            "c-dashboard-nav__item--has-submenu": navItem.subMenus && navItem.subMenus.length > 0
                        })}>
                            {
                                link ? <LinkItem className={classNames("c-dashboard-nav__link", {
                                    [extraLinkClass]: extraLinkClass
                                })} navItem={navItem} link={link} /> : <ActionItem className={classNames("c-dashboard-nav__link", {
                                    [extraLinkClass]: extraLinkClass
                                })} navItem={navItem} onClick={()=> {
                                    onAction(action)
                                }} />
                            }
                            {
                                navItem.subMenus &&  <DashboardNav isSubNav={true} items={navItem.subMenus} />
                            }
                        </li> 
                    )
                })
            }
        </ul>
    )
}
DashboardNav.defaultProps = {
    items: []
}
const LinkItem = ({className,navItem,link}) => <Link href={link}>
    <a className={className}>
        <span className="c-dashboard-nav__icon">
            {
                navItem.icon
            }
        </span>
        <span className="c-dashboard-nav__label">
            {navItem.name}
        </span>
        {navItem.subMenus && navItem.subMenus.length > 0 && <span className="c-dashboard-nav__submenu-icon">
        </span>}
    </a>
</Link>
const ActionItem = ({className,navItem, onClick}) => <span onClick={onClick} className={className}>
    <span className="c-dashboard-nav__icon">
        {
            navItem.icon
        }
    </span>
    <span className="c-dashboard-nav__label">
        {navItem.name}
    </span>
    {navItem.subMenus && navItem.subMenus.length > 0 && <span className="c-dashboard-nav__submenu-icon">
    </span>}
</span>

const mapDispatchToProps = {
    unsetLoggedInDoctor
}
export default connect(null, mapDispatchToProps)(DashboardNav)
/*-

dahboard
appointments
patients
payments
settings

-*/