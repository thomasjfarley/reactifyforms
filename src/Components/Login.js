import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import '../Styles/Login.css'
import { Link } from 'react-router-dom';

export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        const handleSubmit = (event) => {
            const payload = {
                event: event,
                username: this.state.username,
                password: this.state.password,


            }
            this.props.submitHandler(payload)
        }
        const handleUsernameChange = (event) => {
            this.setState({username: event.target.value});
            event.preventDefault();


        }
        return (
            <div className="login">
                <form className="flexBox" onSubmit={handleSubmit}>
                    <TextField id="use" required
                               fullWidth={true}
                               placeholder="Username"
                               onChange={handleUsernameChange}/>
                    <TextField id='pass' required
                               fullWidth={true}
                               type="password"
                               placeholder="Password"
                               onChange={event => this.setState({password: event.target.value})}/>
                    <RaisedButton type="submit"
                                  label={"Submit"}/>
                    <Link to='/Forgotpassword'><FlatButton>Forgot Password?</FlatButton></Link>

                </form>
            </div>
        )
    }
}