import React, { useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import Login from './Components/Login';
import Register from './Components/Register';
import Recovery from './Components/PasswordRecovery';


const App = () => {
  const [currentPage, setCurrentPage] = useState('login');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
      case 'register':
        return <Register onSwitch={() => setCurrentPage('login')} />;
      case 'recovery':
        return <Recovery onSwitch={() => setCurrentPage('login')} />;
      default:
        return <Login onSwitch={() => setCurrentPage('recovery')} onRegister={() => setCurrentPage('register')} />;
    }
  };

  return (
    <PaperProvider>
        <View>
          {renderPage()}
        </View>
    </PaperProvider>
  );
};

export default App;