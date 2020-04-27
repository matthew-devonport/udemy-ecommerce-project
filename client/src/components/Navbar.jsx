import React from 'react';
import { Box, Text, Heading } from 'gestalt'
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={100}
    color="midnight"
    padding={1}
    shape="roundedBottom"
    >

    {/* Sign In Link */}
    <NavLink to="/signin">
    <Text size="xl" color="white">Sign In</Text>
    </NavLink>    

    {/* Title and Logo */}
    <NavLink to="/">
    <Heading 
    size="xs"
    color="orange">
    BrewHaha    
    </Heading>
    </NavLink>  

    {/* Sign Up Link */}
    <NavLink to="/signup">
    <Text size="xl" color="white">Sign Up</Text>
    </NavLink>  



    </Box>


  
)

export default Navbar