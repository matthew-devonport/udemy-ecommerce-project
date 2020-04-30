import React from 'react'

import Strapi from 'strapi-sdk-javascript/build/main'
import { Box, Heading, Text, Image, Card, Button, Mask } from 'gestalt'
import { Link } from 'react-router-dom'

const apiUrl = process.env.API_URL || 'http://localhost:8082'
const strapi = new Strapi(apiUrl)


class Brews extends React.Component {
    state = {
        brews: [],
        brand: '',
        cartItems: []
    }

    async componentDidMount() {
        try {
            const response = await strapi.request('POST', '/graphql', {
                data: {
                    query: `query {
                brand(id: "${this.props.match.params.brandId}") {
                  _id
                  name
                  brews {
                    _id
                    name
                    description
                    image {
                      url
                    }
                    price
                    }
                  }
                }`
                }
            })
            this.setState({
                brews: response.data.brand.brews,
                brand: response.data.brand.name
            })
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const { brand, brews, cartItems } = this.state
        return (
            <Box
                marginTop={4}
                display="flex"
                justifyContent="center"
                alignItems="start">

                {/* Brews Section */}
                <Box display="flex" direction="column" alignItems="center">
                    {/* Brews Heading */}
                    <Box margin={2}>
                        <Heading color="orchid">{brand}</Heading>
                    </Box>
                    {/* Brews */}
                    <Box
                        dangerouslySetInlineStyle={{
                            __style: {
                                backgroundColor: '#bdcdd9'
                            }
                        }}
                        wrap
                        shape="rounded"
                        display="flex"
                        justifyContent="center"
                        padding={4}
                    >
                        {brews.map(brew => (
                            <Box paddingY={4} margin={2} width={210} key={brew._id}>
                                <Card
                                    image={
                                        <Box height={250} width={200}>
                                            <Image
                                                fit="cover"
                                                alt="Brew"
                                                naturalHeight={1}
                                                naturalWidth={1}
                                                src={`${apiUrl}${brew.image[0].url}`}
                                            />
                                        </Box>
                                    }>
                                    <Box display="flex" alignItems="center" justifyContent="center" direction="column">
                                        <Box marginBottom={2}>
                                            <Text bold size="xl">{brew.name}</Text>
                                        </Box>
                                        <Text color="orchid">${brew.price}</Text>
                                        <Box marginTop={2}>
                                            <Text>{brew.description}</Text>
                                        </Box>
                                        <Text bold size="xl"><Button color="blue" text="Add to Cart"></Button></Text>
                                    </Box>
                                </Card>
                            </Box>))}
                    </Box>
                </Box>
                {/* User Cart */}
                <Box marginTop={2} marginLeft={8}>
                 <Mask shape="rounded" wash>
                     <Box display="flex" direction="column" alignItems="center">

                     </Box>
                 </Mask>

                </Box>
            </Box>
        )
    }
}


export default Brews