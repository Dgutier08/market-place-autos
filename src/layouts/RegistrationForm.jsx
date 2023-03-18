import React, { useState } from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";

function RegistrationForm({ handleRegister }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
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

    if (!formData.firstName) {
      validationErrors.firstName = "Please enter your first name";
    }
    if (!formData.lastName) {
      validationErrors.lastName = "Please enter your last name";
    }
    if (!emailRegex.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      validationErrors.password = "Please enter your password";
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      handleRegister(formData); // Llamar a la función handleRegister para guardar la información del usuario
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <h1>Register</h1>
          <br></br>
          <Label for="firstName">First Name:</Label>
          <Input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.firstName && <span>{errors.firstName}</span>}
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name:</Label>
          <Input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.lastName && <span>{errors.lastName}</span>}
        </FormGroup>
        <FormGroup>
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
        <FormGroup>
          <Label for="confirmPassword">Confirm Password:</Label>
          <Input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="form-control"
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </FormGroup>
        <Button type="submit">Registrar</Button>
        </Form>
        </Container>
  )}
  export default RegistrationForm();
