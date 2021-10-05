import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'
import { Input } from './userInput-styles'

const USER_LIST_QUERY = loader('../../queries/userList.gql')
const CREATE_USER_MUTATION = loader('../../queries/userCreate.gql')

const UserInput = () => {
  const [onAddUser] = useMutation(CREATE_USER_MUTATION, {
    refetchQueries: [
      { query: USER_LIST_QUERY }
    ]
  })

  const [name, setName] = useState('')

  const onKeyPress = e => {
    if (e.key === 'Enter' && name) {
      return onAddUser({ variables: { name } })
    }
  }

  return  (
    <Input 
      autoFocus
      placeholder="Input name here"
      value={name}
      onKeyPress={onKeyPress}
      onChange={e => setName(e.target.value)}/>
  )
}

export default UserInput