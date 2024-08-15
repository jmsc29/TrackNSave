import React from 'react';
import backgroundImage from '../../assets/fondo-info.jpg';

const Info: React.FC = () => {
    return (
        <div className="relative flex items-center justify-center w-full h-full p-8">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                }}
            ></div>

            <div className="relative max-w-4xl w-full p-8 bg-white bg-opacity-80 rounded-lg shadow-lg text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Welcome to TrackNSave</h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    Welcome to TrackNSave, your ultimate solution for efficient financial management. Our platform is designed to simplify your financial life by providing powerful tools to track your expenses, set personalized budgets, and achieve your financial goals.
                </p>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    With TrackNSave, you can easily monitor your spending habits, categorize your expenses, and receive insightful reports to help you make informed financial decisions. Whether you're planning for a major purchase, saving for a special occasion, or just trying to stay within your budget, TrackNSave is here to assist you every step of the way.
                </p>
            </div>
        </div>
    );
};

export default Info;
