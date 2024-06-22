import { useState, useEffect } from 'react';

export const Admin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [message, setMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const ipAdress = "http://147.45.185.47:5000";

    useEffect(() => {
        if (isLoggedIn) {
            fetch(`${ipAdress}/api/fields`)
                .then(response => response.json())
                .then(data => {
                    setField1(data.field_1);
                    setField2(data.field_2);
                })
                .catch(err => console.error(err));
        }
    }, [isLoggedIn]);

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
                    setIsLoggedIn(true);
                } else {
                    setMessage('Login failed');
                }
            });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        fetch(`${ipAdress}/api/update-fields`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ field_1: field1, field_2: field2 })
        })
            .then(response => response.json())
            .then(data => setMessage(data.message));
    };

    return (
        <div>
            {!isLoggedIn ? (
                <form onSubmit={handleLogin}>
                    <input type="text" placeholder="Login" value={login} onChange={(e) => setLogin(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <form onSubmit={handleUpdate}>
                    <input type="text" placeholder="Field 1" value={field1} onChange={(e) => setField1(e.target.value)} />
                    <input type="text" placeholder="Field 2" value={field2} onChange={(e) => setField2(e.target.value)} />
                    <button type="submit">Update Fields</button>
                </form>
            )}
            <p>{message}</p>
        </div>
    );
};
