import React from 'react'
import { Modal } from 'antd'

export default function RoundedPopup({children, onCancel, ...props}) {
    return (
        <Modal closable={true} onCancel={onCancel} {...props} className="c-rounded-popup">
            {children}
        </Modal>
    )
}

RoundedPopup.defaultProps = {
    header: null,
    footer: null
}