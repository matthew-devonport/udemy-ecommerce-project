import React from 'react'
import { Container, Box, Button, Heading, Text, TextField } from 'gestalt'
import ToastMessage from './ToastMessage'


class SignUp extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        toast: false,
        toastMessage: ''
    }

    handleChange = ({event, value}) => {
        event.persist()
        this.setState({ [event.target.name]: value})
    }

    handleSubmit = event => {
        event.preventDefault()

        if (this.isFormEmpty(this.state)) {
            this.showToast('Fill in all fields')
            return
        }
    //    Sign up user 
    try {
        // set loading - true 
        // make request to register user with strapi 
        // set loading false 
        // put token (to manage uder session) in local storage 
        // redirect user to home page 

    } catch (err) {
        // set loading to false
        // show error message with toast message

    }
 
    }

     isFormEmpty = ({ username, email, password}) => {
      return !username || !email || !password
     }
     
    showToast = toastMessage  => {
        this.setState({ toast: true, toastMessage})
        setTimeout(() => this.setState({ toast: false, toastMessage: ''}), 5000)

    }

    
    render() {
        const {toastMessage, toast} = this.state
        return (
            <Container>
                <Box
                    dangerouslySetInlineStyle={{
                        __style: {
                            backgroundColor: "#ebe2da"
                        }
                    }}
                    margin={4}
                    padding={4}
                    shape="rounded"
                    display="flex"
                    justifyContent="center"
                >

                    {/* Sign Up Form */}
                    <form style={{
                        display: 'inlineBlock',
                        textAlign: 'center',
                        maxwidth: 450
                    }}
                    onSubmit={this.handleSubmit}
                    >
                        {/* Sign Up Form Heading */}
                        <Box
                            marginBottom={2}
                            display='flex'
                            direction="column"
                            alignItems="center"
                        >
                            <Heading color="midnight">Let's Get Started</Heading>
                            <Text italic color="orchid">Sign up to order some brews!</Text>
                        </Box>
                        {/* Username Input */}
                        <TextField
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={this.handleChange}
                        />
                        {/* Email Address Input */}
                        <TextField
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            onChange={this.handleChange}
                        />
                        {/* Password Input */}
                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <Button
                            inline
                            color='blue'
                            text="Submit"
                            type="submit"
                        />
                    </form>

                </Box>
                <ToastMessage show={toast} message={toastMessage}/>
            </Container>
        )

    }
}

export default SignUp;
