import React from 'react';

const Field = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      onChange={props.onChange}
      type={props.textarea ? 'textarea' : 'text'}
      value={props.value}
    />
  </div>
);


export default Field;
