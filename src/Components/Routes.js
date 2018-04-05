import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import '../Styles/headroute.css';
import Paper from 'material-ui/Paper'
import {grey800, white} from 'material-ui/styles/colors.js';
import MyLogin from '../Pages/Forms.js';
import Forgotpassword from './Forgotpassword.js';
import code from "./Verify";
import Homer from "../Pages/Home";
import Aboutus from "../Pages/About";

const style = {
    backgroundColor: grey800,
    color: white,

};


const Routing = () => (
    <Router>
        <div>
            <Paper style={style}>
                <div className='flexbox'>
                    <div>
                        <Link to='/'><FlatButton label="Home" labelStyle={style}/></Link>
                    </div>
                    <div>
                        <Link to='/About'><FlatButton label="About" labelStyle={style}/></Link>
                    </div>
                    <div>
                        <Link to='/Login'><FlatButton label="Login" labelStyle={style}/></Link>
                    </div>
                </div>
            </Paper>

            <Route exact path='/' component={Home} />
            <Route exact path='/About' component={About} />
            <Route exact path='/Login' component={Login}/>
            <Route exact path='/forgotpassword' component={Forgotpassword}/>
            <Route exact path='/code' component={code}/>

        </div>

    </Router>
);

const Home = () => (
    <div>
        <Homer/>
    </div>
);
const About = () => (
    <div>
        <Aboutus/>
    </div>
);
const Login = () => (
    <div>
        <MyLogin />
    </div>
)

export default Routing


