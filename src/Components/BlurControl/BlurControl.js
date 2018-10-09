import React from 'react';

const BlurControl = (props) => {
  return (
    <div className='control'>
      <label htmlFor='blur'>Blur:</label>
      <input
        id='blur'
        type='range'
        name='blur'
        min='0'
        max='25'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default BlurControl;