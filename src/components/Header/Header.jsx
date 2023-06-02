import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black text-white flex  gap-10'>
            <p className='p-3'><Link to="/addCoffee">AddCoffee</Link></p>
            <p className='p-3'><Link to="/updateCoffee">updateCoffee</Link></p>
        </div>
    );
};

export default Header;