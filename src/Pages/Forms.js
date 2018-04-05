import React, { Component } from 'react';
import Register from '../Components/Register.js';
import Loginmui from '../Components/Login.js';
import {Tabs, Tab} from 'material-ui/Tabs';

import '../Styles/Login.css'

export default class extends Component {
    render() {
        const handleSubmit = (payload) => {
            payload.event.preventDefault()
            console.log(payload.fname + " : " +
                payload.lname + " : " +
                payload.email + " : " +
                payload.username + " : " +
                payload.password + " : " +
                payload.cpassword)
        }

        return (
            <div>
                <Tabs>
                    <Tab label="Login">
                        <Loginmui submitHandler={handleSubmit} />

                    </Tab>

                    <Tab label="Register">
                        <Register submitHandler={handleSubmit} />
                    </Tab>
                </Tabs>
            </div>
        );
    }
}