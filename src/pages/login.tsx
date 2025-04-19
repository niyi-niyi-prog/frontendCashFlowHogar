// src/pages/Login.tsx

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', {
                email,
                password
            }, {
                withCredentials: true
            });

            console.log('Login exitoso:', response.data);
            navigate('/transaccion');
        } catch (error: any) {
            console.error('Error al iniciar sesión:', error);
            setErrorMsg(error.response?.data?.message || 'Error al iniciar sesión');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar Sesión</h2>

            <input
                type="text"
                placeholder="usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Iniciar Sesión</button>

            {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
        </form>
    );
};

export default Login;
