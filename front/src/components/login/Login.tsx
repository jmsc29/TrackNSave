import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import backgroundImage from '../../assets/fondo-login.jpg';
import { jwtDecode } from 'jwt-decode'

const Login: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleGoogleSuccess = (credentialResponse: any) => {
        console.log('Google login success:', credentialResponse);
        const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
        console.log(credentialResponseDecoded);
        // Aquí puedes manejar la respuesta e iniciar sesión en tu backend.
    };

    const handleGoogleFailure = () => {
        console.error('Google login error');
        // Aquí puedes manejar el error de inicio de sesión.
    };

    return (
        <div className="relative flex items-center justify-center w-full h-full p-8 overflow-auto">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: 0.8,
                }}
            ></div>

            <div className="relative max-w-md w-full p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center">Login</h2>

                {/* Formulario tradicional de inicio de sesión */}
                <form>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Separador visual */}
                <div className="my-4 flex items-center justify-center">
                    <div className="w-full h-px bg-gray-300"></div>
                    <span className="mx-2 text-gray-500">or</span>
                    <div className="w-full h-px bg-gray-300"></div>
                </div>

                {/* Botón de inicio de sesión con Google */}
                <div>
                    <GoogleOAuthProvider clientId="1066554920516-cn0cevpuo9qn4kjid0a5q947inlv87au.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleFailure}
                            theme="outline"
                            shape="pill"
                            size="large"
                            text="signin_with"
                            logo_alignment="center"
                        />
                    </GoogleOAuthProvider>
                </div>
            </div>
        </div>
    );
};

export default Login;