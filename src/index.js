import React from 'react';
import ReactDOM from 'react-dom/client';
import Welcome from './components/welcome';
import Listrendering from './components/Listrendering';
import Form from './components/formComponent';
import Lifecycle from './components/lifeCycle';
import Child from './components/ParentComponent';



//components


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Child name="harsha"/>
  </>
);


