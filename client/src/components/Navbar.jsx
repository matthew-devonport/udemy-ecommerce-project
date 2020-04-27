import React from 'react';
import { Box, Text } from 'gestalt'
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <Box
    height = {70}
    color = "midnight"
    padding={1}
    shape="roundedBottom"
    >

    {/* Sign In Link */}
    <NavLink to="/signin">
    <Text size="xl" color="white">Sign In</Text>
    </NavLink>    


    </Box>


  
)

export default Navbar