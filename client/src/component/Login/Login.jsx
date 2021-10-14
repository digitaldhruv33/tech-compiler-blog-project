import { Button, FormControl, Input, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div>
             <FormControl>
               <Input placeholder="Enter your email" />
               <Input placeholder="Enter your password" />
               <Button type="submit"> Log In </Button>
           </FormControl>
           <Typography>New here? <Link to='/register'> Create an account </Link></Typography>
        </div>
    )
}

export default Login
