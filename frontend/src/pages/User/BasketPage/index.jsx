import React from 'react';
import { useState } from 'react';

const BasketPage = () => {
    const [basket, setBasket] = useState([]);

    return (
        <>
            <h1>Basket</h1>
            {basket.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Publisher</th>
                            <th>Platform</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {basket.map((game, index) => (
                            <tr key={index}>
                                <td>{game.name}</td>
                                <td>{game.publisher}</td>
                                <td>{game.platform}</td>
                                <td>${game.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Your basket is empty.</p>
            )}
        </>
    );
};

export default BasketPage;
