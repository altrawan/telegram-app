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

const PasswordInput = ({
  isShowPassword,
  value,
  handleChange,
  handleClickShowPassword,
  handleMouseDownPassword
}) => {
  return (
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
        Password
      </InputLabel>
      <Input
        id="standard-adornment-password"
        type={isShowPassword ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
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
  );
};

Input.propTypes = {
  isShowPassword: propTypes.bool,
  value: propTypes.string,
  handleChange: propTypes.func,
  handleClickShowPassword: propTypes.func,
  handleMouseDownPassword: propTypes.func
};

export default PasswordInput;
