import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import "./HeroBanner.css"
import HeroBannerImage from '../assets/images/mikementzer.png';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      {/* <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography> */}
      <Typography color={'#fff'} fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Check out the most effective exercises <br />
        personalized to you
      </Typography>
      <Typography color="#4F4C4C" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
         
      </Typography>
      <Stack>
        <a className='anchorExplore' href="#exercises">Explore Exercises</a>
      </Stack>
      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner