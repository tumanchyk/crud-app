import { Input } from "@material-ui/core";
import CustomInput from "../CustomInput/CustomInput";
import { Form } from "./Form.styled";
import Button from "@material-ui/core/Button";
import { useState } from 'react';

const LoginForm = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    const handleChange = e => {
        const { id, value } = e.currentTarget;
        setUser(prevUser => ({
        ...prevUser,
        [id]: value,
        }));
    };
    const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setErrors({
        email: !user.email ? "Email is required" : "",
        password: !user.password ? "Password is required" : "",
      });
    } else {
        console.log("Form submitted:", user);
        setUser({ email: "", password: "" })
    }
    };
    
    return <Form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Login</h1>
          <CustomInput
            label="Email"
            id="email"
            value={user.email}
            handleChange={handleChange}
            error={errors.email}
            type="email"
          />
          <CustomInput
            label="Password"
            id="password"
            value={user.password}
            handleChange={handleChange}
            error={errors.password}
            type="password"
          />

          <Button type="submit" color="primary" >
            Log in
          </Button>
        </Form>
}
export default LoginForm;