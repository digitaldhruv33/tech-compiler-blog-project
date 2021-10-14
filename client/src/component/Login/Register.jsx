import { Button, FormControl, Input, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
    return (
        <div>
          <FormControl>
               <Input placeholder="Enter your name" />
               <Input placeholder="Enter your email" />
               <Input placeholder="Enter your password" />
               <Button type="submit"> Register </Button>
           </FormControl>
           <Typography>Already have an account <Link to='/login'> Login here </Link></Typography>
        </div>
    )
}

export default Register
