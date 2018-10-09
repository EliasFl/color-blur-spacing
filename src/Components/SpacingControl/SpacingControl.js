import React from 'react';

const SpacingControl = (props) => {

  const handleChange = (event) => {
    props.onChange(event);
  };

  return (
    <div className='control'>
      <label htmlFor='spacing'>Spacing:</label>
      <input 
        id='spacing' 
        type='range' 
        name='spacing' 
        min='10' 
        max='200' 
        value={props.value}
        onChange={handleChange} 
      />
    </div>
  );
}

export default SpacingControl;