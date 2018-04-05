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
            vcode: '',
            squestion: '',
            password: '',
            cpassword: '',
            open: false
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
            if(this.state.vcode === "12345"){
                console.log("Nailed it")
            }

        else {
                alert("false code")
                return false;
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
                console.log("Password:" + this.state.password)
                alert("Registration Sucessful")

            }else {
                console.log("NO")
                alert("Passwords do not Match")
                return false;
            }
        }
        return (
            <div className="login">
                <form className="flexBox" onSubmit={handleSubmit}>
                    <TextField id="vcode" required
                               fullWidth={true}
                               placeholder="Verification Code"
                               onChange={event => this.setState({vcode: event.target.value})}/>
                    <div>What year did you graduate?</div>
                    <TextField id="squestion" required
                               fullWidth={true}
                               placeholder="Security Answer"
                               onChange={event => this.setState({squestion: event.target.value})}/>
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