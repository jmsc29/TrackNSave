import React from 'react';
import NavBar from './components/navbar/NavBar';
import Info from './components/info/Info';
import Login from './components/login/Login';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden pt-16">
        {/* Mostrar solo Login en móviles */}
        <div className="md:hidden flex-1 flex items-center justify-center overflow-hidden">
          <Login />
        </div>
        {/* Mostrar Info en escritorio y Login en móviles */}
        <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden">
          <Info />
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center overflow-hidden">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
