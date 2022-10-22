import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';
import "./Navbar.css";

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      {/* <Link to="/">
        <img className='imageLogo' src={Logo} alt="logo"/>
      </Link> */}
      <Stack 
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
        marginLeft="70px"
      >
        <Link className='link2' to="/">Home</Link>
        <a className='anchorExercises' href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar