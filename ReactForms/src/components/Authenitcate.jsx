
import React, { useState } from 'react';

export default function Authenticate({ token }) {
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) { 
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setSuccessMessage(data.message);

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="authenticate">
            <h2>Authenticate</h2>
            {error && <p>{error}</p>}
            {successMessage && <p>{successMessage}</p>}
            <button onClick={handleClick}>Authenticate Token</button>
        </div>
    );
}
