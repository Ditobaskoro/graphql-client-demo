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
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
  background: linear-gradient(to right, #ededed, #ededed);
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: background-size 0.5s 0s;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    background-size: 100% 100%;
  }
`
export const Name = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden; 
`

export const CloseIcon = styled(Close)`
  color: red;
  cursor: pointer;
`
