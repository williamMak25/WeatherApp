import React, { useState } from 'react';
import './App.css';
import { AuthUser } from './components/AuthUser';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Status } from './components/Status';
import { LocationProvider } from './components/Weather/Location';
import { WeatherInterFace } from './components/Weather/Weather';

function App() {
  const [userName,setUserName] = useState('Wai Yan Win Lwin')
  return (
    <div className="App">
    <LocationProvider>
      <WeatherInterFace/>
    </LocationProvider>
    </div>
  );
}

export default App;
