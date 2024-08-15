import Info from './components/info/Info';
import Login from './components/login/Login';

import { isMobile } from 'react-device-detect';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden pt-16">
        {isMobile ? (
          // Mostrar solo Login en móviles
          <div className="flex-1 flex items-center justify-center overflow-auto">
            <Login />
          </div>
        ) : (
          <>
            {/* Mostrar Info y Login en escritorio */}
            <div className="flex-1 flex items-center justify-center overflow-auto">
              <Info />
            </div>
            <div className="flex-1 flex items-center justify-center overflow-auto">
              <Login />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
