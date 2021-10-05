import React from 'react'
import { Container } from './homepage-styles'
import UserList from '../UserList'
import UserInput from '../UserInput'

const Home = () => {
  return (
    <Container>
      <h1>GraphQL Demo 🚀</h1>
      <UserInput/>
      <UserList/>
    </Container>
  )
}

export default Home