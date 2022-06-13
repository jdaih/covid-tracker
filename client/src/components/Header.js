import React from 'react'
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';

function Header() {
  return (
    <div className="header">
        <IconButton>
            <PersonIcon fontSize='large' className='header_icon' />
        </IconButton>
    </div>
  );
}

export default Header;
