import { Button, FormControl, Input, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { regiterUser } from "../../api/UserApi";

function Register() {
  const initialState = { name: "", email: "", password: "" };
  const [user, setUser] = useState(initialState);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    return await regiterUser(user);
  };

  return (
    <div>
      <FormControl>
        <Input
          placeholder="Enter your name"
          name="name"
          type="text"
          onChange={handleChange}
          value={user.name}
        />
        <Input
          placeholder="Enter your email"
          name="email"
          type="text"
          onChange={handleChange}
          value={user.email}
        />
        <Input
          placeholder="Enter your password"
          name="password"
          type="password"
          onChange={handleChange}
          value={user.password}
        />
        <Button type="submit" onClick={handleSubmit}>
          Register
        </Button>
      </FormControl>
      <Typography>
        Already have an account <Link to="/login"> Login here </Link>
      </Typography>
    </div>
  );
}

export default Register;
