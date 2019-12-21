import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './ Root';
import { BrowserRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>

    </Root>
    , document.getElementById('root'));
