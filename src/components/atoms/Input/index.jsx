import React from 'react';
import TextField from '@mui/material/TextField';
import propTypes from 'prop-types';
import './index.scss';

// eslint-disable-next-line react/display-name
const Input = React.forwardRef(
  ({ id, name, type, value, onChange, className, label, variant, style }, ref) => (
    <>
      <TextField
        type={type}
        id={id}
        name={name}
        label={label}
        variant={variant}
        style={style}
        value={value}
        onChange={onChange}
        className={className}
        ref={ref}
        InputLabelProps={{
          style: {
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: '16px',
            color: 'var(--text-gray)',
            opacity: '0.75'
          }
        }}
        inputProps={{
          style: {
            fontFamily: 'Rubik',
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '19px',
            color: 'var(--text-black)'
          }
        }}
      />
    </>
  )
);

Input.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
  label: propTypes.string,
  variant: propTypes.string,
  style: propTypes.object
};

Input.defaultProps = {
  variant: 'standard'
};

export default Input;
