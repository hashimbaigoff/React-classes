import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/welcome';
import Listrendering from './components/Listrendering';
import Form from './components/formComponent';
import Lifecycle from './components/lifeCycle';
import Child from './components/ParentComponent';
import UpdatingPhase from './components/updatingLifecycle';
import RegComponent from './components/reactFragment';
import Parent from './components/ParentComponent';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import App from './components/App';
import Namevalidation from './components/InputValidation';
import PasswordValid from './components/password';
import ParentComponent from './components/FunctionalCom';



//components


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);


