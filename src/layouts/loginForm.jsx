import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validationErrors = {};

    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      validationErrors.password = "Please enter your password";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <h1>Login</h1>
          <br />
          <Label for="email">Email:</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.email && <span>{errors.email}</span>}
        </FormGroup>
        <FormGroup>
          <Label for="password">Password:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.password && <span>{errors.password}</span>}
        </FormGroup>
        <Button type="submit" className="btn btn-primary">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginForm;
