import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as contentful from 'contentful'


var client = contentful.createClient({
  space: 'viy9hsoregkv',
  accessToken: '56ce63633197de161178c5ba416fb7d647c318fcf1b4270173d9d80db356e23a' })
client.getEntries().then(entries => {
  let fun = entries.items.sort((a,b) => (a.fields.date > b.fields.date) ? 1 : ((b.fields.date > a.fields.date) ? -1 : 0));
  fun = fun.reverse()
  console.log(fun)
  fun.forEach(entry => {
    if(entry.fields) {
      console.log(entry.fields)
    }
  })
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
