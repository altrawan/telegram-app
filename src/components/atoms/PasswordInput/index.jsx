import React from 'react';
import propTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './index.scss';

// eslint-disable-next-line react/display-name
const PasswordInput = React.forwardRef(
  (
    {
      id,
      isShowPassword,
      value,
      onChange,
      handleClickShowPassword,
      handleMouseDownPassword,
      style
    },
    ref
  ) => (
    <>
      <FormControl variant="standard" className="style__password">
        <InputLabel
          htmlFor="standard-adornment-password"
          style={{
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: '16px',
            color: 'var(--text-gray)',
            opacity: '0.75'
          }}>
          {id === 'password' ? 'Password' : 'Confirm Password'}
        </InputLabel>
        <Input
          id={id}
          type={isShowPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          style={style}
          ref={ref}
          inputProps={{
            style: {
              fontFamily: 'Rubik',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '19px',
              color: 'var(--text-black)'
            }
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}>
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  )
);

Input.propTypes = {
  id: propTypes.string,
  isShowPassword: propTypes.bool,
  value: propTypes.string,
  onChange: propTypes.func,
  handleClickShowPassword: propTypes.func,
  handleMouseDownPassword: propTypes.func,
  style: propTypes.object
};

export default PasswordInput;
