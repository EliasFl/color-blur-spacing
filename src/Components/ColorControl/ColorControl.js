import React from 'react';

const ColorControl = (props) => {
  return (
    <div className='control'>
      <label htmlFor='base'>Base Color:</label>
      <input
        id='base'
        type='color'
        name='base'
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default ColorControl;