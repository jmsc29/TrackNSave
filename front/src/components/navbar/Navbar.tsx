import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-16">
            <div className="text-white text-lg font-bold">TrackNSave</div>
            <div className="hidden md:flex space-x-4">
                <a href="#signup" className="text-white">Sign Up</a>
            </div>
            <div className="md:hidden">
                <button className="text-white">Menu</button>
            </div>
        </nav>
    );
};

export default NavBar;
