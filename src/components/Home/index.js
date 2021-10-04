import React from 'react'
import { Container } from './homepage-styles'
import UserList from '../UserList'

const Home = () => {
  return (
    <Container>
      <h1>GraphQL Demo 🚀</h1>
      <UserList />
    </Container>
  )
}

export default Home