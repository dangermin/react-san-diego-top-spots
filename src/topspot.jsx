import React from 'react';

export default props => (
  <div >
      <div className="well">
          <h4 >{props.name}</h4>
          <p >{props.description}</p>
          <a className="btn btn-primary" type="button" href={"https://maps.google.com/?q="+props.location[0]+","+props.location[1]} target="_blank">Location</a>
      </div>
  </div>
);
