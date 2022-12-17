import React from 'react'
import { Button, TextField } from '@mui/material'

import { bigNumberToEther, getBalance } from '../utils/alchemy'

const PageBalance = () => {
  const [address, setaddress] = React.useState('')
  const [balance, setbalance] = React.useState('0')
  const [isLoading, setisLoading] = React.useState(false)
  const handleGetBalance = async () => {
    try {
      setisLoading(true)
      const fetchedBalance = await getBalance(address)
      setbalance(bigNumberToEther(fetchedBalance))
      setisLoading(false)
    } catch {
      setisLoading(false)
    }
  }
  return (
    <div>
      <div>Page Balance</div>
      <div>
        <TextField
          label="Address"
          placeholder='Fill your address'
          value={address}
          onChange={(e) => {
            setaddress(e.target.value)
          }}
        />
        <Button onClick={handleGetBalance}>Submit</Button>
      </div>
      <div>
        Your balance : {isLoading ? 'loading...' : balance}
      </div>
    </div>
  )
}

export default PageBalance