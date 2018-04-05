import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { Redirect } from 'react-router-dom';


import '../Styles/Login.css'


export default class extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            redirect: false
        }
    }

    render() {
        const handleSubmit = () => {
            alert("Enter Passcode 12345")
            console.log(this.state.email)
            this.setState({ redirect: true })
        }

        return (
            <div>
                <div className="login">

                    <form className="flexBox" onSubmit={handleSubmit}>
                        Forgot Password

                        <TextField id="use" required
                                   fullWidth={true}
                                   placeholder="Email"
                                   type="email"

                                   onChange={event => this.setState({email: event.target.value})}/>

                        <RaisedButton type="submit"
                                      label={"Submit"}
                        />

                    </form>

                    { this.state.redirect ? <Redirect push to="/code" /> : <div></div> }

                </div>
            </div>
        )
    }


}





