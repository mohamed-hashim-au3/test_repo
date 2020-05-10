import withDashboardLayout from '../../../../components/layouts/dashboard-layout/withDashboardLayout'
import React, { Component } from 'react'
import { Form } from 'antd'

class settings extends Component {
    render() {
        return (
            <div className="p-dashboard-setting pt-4">
                <div className="container">
                    <Form>
                        <div className="card p-4">
                            <h5>Basic Information</h5>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
}

export default withDashboardLayout(settings)