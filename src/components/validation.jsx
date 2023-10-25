import React, { useState } from 'react';

function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    // If the form is valid, you can submit the data to the server here.
  };

  const validateForm = () => {
    const { email, password } = formData;
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    const newErrors = {
      email: '',
      password: '',
    };

    if (!email.match(emailRegex)) {
      newErrors.email = 'Invalid email address';
    }

    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === '');
  };

}

export default LoginForm;
