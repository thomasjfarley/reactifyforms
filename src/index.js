import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Routing from './Components/Routes.js';



const App = () => (
    <MuiThemeProvider>
        <Routing/>

    </MuiThemeProvider>

)


ReactDOM.render(<App />, document.getElementById('root'));
