import React from 'react';
import { Box, Text, Heading, Image, Button } from 'gestalt'
import { getToken } from '../utils/index'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return getToken() !== null ? <AuthNav /> : <UnAuthNav />
}

const AuthNav = () => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={100}
        color="midnight"
        padding={1}
        shape="roundedBottom"
    >

        {/* Checkout link */}
        <NavLink activeClassName="active" to="/signin">
            <Text size="xl" color="white">Sign In</Text>
        </NavLink>

        {/* Title and Logo */}
        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
                <Box
                    margin={2}
                    height={50}
                    width={50}>
                    <Image
                        alt="Brewhaha logo"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="./icons/logo.svg"
                    />
                </Box>
                <Heading
                    size="xs"
                    color="orange">
                    BrewHaha
        </Heading>
            </Box>
        </NavLink>

        {/* Signout button */}
        <Button color="transparent" text="Sign Out" inline size="md"/>
    </Box>
)


const UnAuthNav = () => (
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
        <NavLink activeClassName="active" to="/signin">
            <Text size="xl" color="white">Sign In</Text>
        </NavLink>

        {/* Title and Logo */}
        <NavLink activeClassName="active" exact to="/">
            <Box display="flex" alignItems="center">
                <Box
                    margin={2}
                    height={50}
                    width={50}>
                    <Image
                        alt="Brewhaha logo"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="./icons/logo.svg"
                    />
                </Box>
                <Heading
                    size="xs"
                    color="orange">
                    BrewHaha
            </Heading>
            </Box>
        </NavLink>

        {/* Sign Up Link */}
        <NavLink activeClassName="active" to="/signup">
            <Text size="xl" color="white">Sign Up</Text>
        </NavLink>



    </Box>



)

export default Navbar