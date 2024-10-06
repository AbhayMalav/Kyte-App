import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Welcome to Kyte Marketplace</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/cart">Cart</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
