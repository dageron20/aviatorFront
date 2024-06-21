import { useState } from 'react'

export const Admin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [message, setMessage] = useState('');

    const ipAdress = "http://147.45.185.47:5000"

    const handleLogin = (e) => {
        e.preventDefault();
        fetch(`${ipAdress}/api/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setMessage('Logged in successfully');
                } else {
                    setMessage('Login failed');
                }
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch('/api/update-fields', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ field1, field2 })
        })
            .then(response => response.json())
            .then(data => setMessage(data.message));
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
            <form onSubmit={handleUpdate}>
                <input type="number" placeholder="Field 1" value={field1} onChange={(e) => setField1(e.target.value)} />
                <input type="number" placeholder="Field 2" value={field2} onChange={(e) => setField2(e.target.value)} />
                <button type="submit">Update Fields</button>
            </form>
            <p>{message}</p>
        </div>
    );
}