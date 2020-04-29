import React, { Component } from 'react';
import { Container, Box, Heading, Card, Image, Text } from 'gestalt'
import { Link } from 'react-router-dom'
import './App.css';
import Strapi from 'strapi-sdk-javascript/build/main'

const apiUrl = process.env.API_URL || 'http://localhost:8082'
const strapi = new Strapi(apiUrl)

class App extends Component {
  state = {
    brands: []
  }


  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: `query {
          brands {
            _id
            name
            Description
            Image {
              url
            }
          }
        }`
        }
      })
      this.setState({ brands: response.data.brands })
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { brands } = this.state
    return (
      <Container>
        {/* Brands Section */}
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={2}
        >
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
        </Heading>
        </Box>
        {/* Brands */}
        <Box display="flex" justifyContent="around">
          {brands.map(brand => (
            <Box key={brand._id}>
              <Card
              image={
                <Box height={200} width={200}>
                 <Image
                 alt="Brand"
                 naturalHeight={1}
                 naturalWidth={1}
                   src={`${apiUrl}${brand.Image[0].url}`}
                 />
                </Box>
              }>
                <Text size="xl">{brand.name}</Text>
                <Text>{brand.Description}</Text>
                <Text size="xl"><Link to={`/${brand._id}`}>See Brews</Link></Text>
              </Card>
            </Box>

          ))}
        </Box>
      </Container>
    );
  }
}

export default App;
