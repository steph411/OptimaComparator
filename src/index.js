import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './stores/BirdStore';
import {Provider} from 'mobx-react';


ReactDOM.render(<Provider BirdStore={store} ><App/></Provider>, document.getElementById('root'));
registerServiceWorker();


