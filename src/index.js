import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function clicked(){
  console.log("hey")
}
ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={clicked} />
  </div>,
  document.getElementById('root')
);
