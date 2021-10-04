import React, { useState } from 'react'
import {
  useQuery,
  gql
} from '@apollo/client'
import { ListContainer, User, CloseIcon } from './userList-styles'

const USER_LIST_QUERY = gql`
  query userListQuery {
  users {
    id
    name
  }
}
`;

const UserList = () => {
  const { loading, error, data } = useQuery(USER_LIST_QUERY)

  const [shouldShowDelete, setShouldShowDelete] = useState(false)

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return  (
    <ListContainer>
      {data.users.map(({ id, name }) => (
        <User 
          key={id}
          onMouseEnter={() => setShouldShowDelete(true)}
          onMouseLeave={() => setShouldShowDelete(false)}
        >
          {name}
          {shouldShowDelete && <div><CloseIcon size="24" /></div>}
        </User>
      ))}
    </ListContainer>
  )
}

export default UserList