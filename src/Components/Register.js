import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import '../Styles/Login.css'


export default class extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            username: '',
            password: '',
            cpassword: '',
            open: false,

        }
    }
    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Close"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        const handleSubmit = (event) => {
            event.preventDefault()

            const payload = {
                event: event,
                fname: this.state.fname,
                lname: this.state.lname,
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                cpassword: this.state.cpassword,
            }

            if(this.state.password.length > 7){
                console.log("Minimum length reached")
            }
            else{
                console.log("")
                alert("Password too short")
                return false;
            }
            if(this.state.password.length > 20){
                console.log("Password too long")
                alert("Password too long")
                return false;
            }
            else if (this.state.password.search(/\d/) === -1) {
                alert("Password must have at least 1 number");
                return false;
            }
            else if (this.state.password.search(/[a-zA-Z]/) === -1) {
                alert("Password must have at least 1 letter");
                return false;
            }

            if(this.state.password === this.state.cpassword){
                console.log("Passwords match")
                alert("Registration Sucessful")

            }else {
                console.log("Passwords do not match")
                alert("Passwords do not match")
                return false;
            }


            this.props.submitHandler(payload)

        }

        return (
            <div className="login">
                <form className="flexBox" onSubmit={handleSubmit}>

                    <TextField id="first-name"
                               fullWidth={true}
                               placeholder="First Name"
                               onChange={event => this.setState({fname: event.target.value})}/>

                    <TextField id="last-name"
                               fullWidth={true}
                               placeholder="Last Name"
                               onChange={event => this.setState({lname: event.target.value})}/>
                    <TextField id="email" required
                               fullWidth={true}
                               placeholder="Email"
                               type="email"
                               onChange={event => this.setState({email: event.target.value})}/>

                    <TextField id="username" required
                               fullWidth={true}
                               placeholder="Username"
                               onChange={event => this.setState({username: event.target.value})}/>

                    <TextField id='password' required
                               fullWidth={true}
                               type="password"
                               placeholder="Password"
                               onChange={event => this.setState({password: event.target.value})}/>
                    <TextField id='confirm-password' required
                               fullWidth={true}
                               type="password"
                               placeholder="Confirm Password"
                               onChange={event => this.setState({cpassword: event.target.value})}/>

                    <RaisedButton type="submit"
                                  label={"Submit"}/> <br/>
                    <RaisedButton label="Password Requirements" onClick={this.handleOpen} />
                    <Dialog
                        title="Password Requirements"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                    >
                        Password must be between 8 and 20 characters. <br/>
                        Password must have at least 1 number and 1 letter.
                    </Dialog>

                </form>

            </div>
        )
    }
}