import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import Form from './components/Form'
import Alert from './components/Alert'

function Layout(props) {
    return (
        <>
            <Navbar mode={props.mode} toggleMode={props.toggleMode} alert={alert} isChecked={props.isChecked} heading="devNote" />
            <div className='container'><Alert alert={props.alert} />
                <Form heading="Enter the text..." mode={props.mode} showAlert={props.showAlert} />
                {console.log("I was called")}
                {/* component that will come according to route */}
            </div>
            <Outlet />
        </>
    )
}

export default Layout;