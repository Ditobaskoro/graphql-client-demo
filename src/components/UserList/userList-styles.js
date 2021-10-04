import styled from 'styled-components'
import { Close } from '@styled-icons/evaicons-solid'

export const ListContainer = styled.div`
  border: 1px solid #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  padding: 20px;
`

export const User = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
  &:hover {
    background-color: #ededed;
  }
`

export const CloseIcon = styled(Close)`
  color: red;
`
