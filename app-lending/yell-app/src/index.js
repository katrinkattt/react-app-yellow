import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
const state = {
        email:'',
        isReady:{
            email:false
        }
    };
const email = document.getElementById('email');
const btn = document.getElementById('send')

btn.addEventListener('click', (e) =>{
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email.value)) {
        state.email = e.currentTarget.value;
        // state.isReady.email = state.patternEmail.test(state.email);
        state.isReady.email = true;
        alert('we will contact you');
    }
    else{
        alert('value not correct,\n true again ');
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
