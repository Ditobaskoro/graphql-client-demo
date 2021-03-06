import React, { useState } from 'react'
import {
  useQuery,
  useMutation
} from '@apollo/client'
import { loader } from 'graphql.macro'
import { ListContainer, User, Name, CloseIcon } from './userList-styles'

const USER_LIST_QUERY = loader('../../queries/userList.gql')
const DELETE_USER_MUTATION = loader('../../queries/userDelete.gql')

const UserList = () => {
  const { loading, error, data } = useQuery(USER_LIST_QUERY)

  const [onDeleteUser, { mutationLoading, mutationError }] = useMutation(DELETE_USER_MUTATION, {
    refetchQueries: [
      { query: USER_LIST_QUERY }
    ]
  })

  const [shouldShowDelete, setShouldShowDelete] = useState(false)

  const renderUsers = () => {
    if (loading || mutationLoading) return <p>Loading...</p>
    if (error || mutationError) return <p>Error :(</p>

    return data.users.map(({ id, name }) => (
        <User 
          key={id}
          onMouseEnter={() => setShouldShowDelete(true)}
          onMouseLeave={() => setShouldShowDelete(false)}
        >
          <Name>{name}</Name>
          {shouldShowDelete && ( 
            <div onClick={() => onDeleteUser({ variables: { id } })}>
              <CloseIcon size='24' />
            </div>
          )}
        </User>
      )
    )
  }

  return  (
    <ListContainer>
      {renderUsers()}
    </ListContainer>
  )
}

export default UserList