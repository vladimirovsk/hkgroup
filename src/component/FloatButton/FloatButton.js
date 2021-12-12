import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import './FloatButton.css';

function FloatButton() {

return (
  <React.Fragment>
     <a  href="tel: +48666182182">
      <button className="floatButton floatButtonCall" style={{margin: '5px'}}>
        <span className="icon">
           <CallIcon style={{fontSize: '2.2em'}} />
        </span>        
      </button> 
      </a> 
  </React.Fragment>
)
}


export default FloatButton;