import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

function Signup() {
  const [avatarError,setAvatarError]=useState('')
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      fullName: '',
      avatar: null,
      coverImage: null
    },
    onSubmit: async (values) => {
      if (!values.avatar) {
        setAvatarError('Avatar image is required.');
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append('username', values.username);
      formDataToSend.append('email', values.email);
      formDataToSend.append('password', values.password);
      formDataToSend.append('fullName', values.fullName);
      formDataToSend.append('avatar', values.avatar);
      formDataToSend.append('coverImage', values.coverImage);

      try {
        const response = await axios.post('/api/users/register', formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        console.log('Success:', response.data);
        formik.resetForm();
        setAvatarError('');
      } catch (error) {
        console.error('Axios Error:', error);
        console.error('Response Data:', error.response.data);
        // Handle error responses more gracefully
        // Example: setErrorMessage(error.response.data.message);
      }
    }
  });

  const handleFileChange = (e) => {
    formik.setFieldValue(e.target.name, e.target.files[0]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          required
        />
      </label>
      <br />
      <label>
        Full Name:
        <input
          type="text"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
      </label>
      <br />
      <label>
        Avatar:
        <input
          type="file"
          name="avatar"
          onChange={handleFileChange}
          accept="image/*"
          required
        />
      </label>
      {formik.errors.avatar && <p style={{ color: 'red' }}>{formik.errors.avatar}</p>}
      <br />
      <label>
        Cover Image:
        <input
          type="file"
          name="coverImage"
          onChange={handleFileChange}
          accept="image/*"
        />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

export default Signup;
