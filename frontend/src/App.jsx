import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    comments: '', // Nuevo campo de comentarios
  });

  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mern-backend.onrender.com/api/users/register', formData);

      setMessage({ type: 'success', text: response.data.message });
      setFormData({ name: '', email: '', password: '', comments: '' }); // Resetear el formulario
    } catch (error) {
      setMessage({ type: 'error', text: error.response?.data?.error || 'Error al registrar' });
    }
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Registro Curso de Diseño Web </h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Register</button>
        {message.text && (
          <div className={message.type === 'success' ? 'success' : 'error'}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}

export default App;



