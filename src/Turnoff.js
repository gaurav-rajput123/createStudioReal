import { Button } from '@mui/material'
import React, { useContext } from 'react'
import { userContext } from './App'
function Turnoff() {
    const userScope = useContext(userContext)
  return (
    <div>
        <Button fullWidth
        variant='outlined' onClick={()=>{
            userScope.setUser(undefined)
        }}>DO as u want to do</Button>
    </div>
  )
}

export default Turnoff