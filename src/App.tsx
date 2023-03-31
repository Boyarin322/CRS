import React from 'react';
import './App.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCheck,
} from '@fortawesome/free-solid-svg-icons';
import MainPage from "./pages/MainPage";

library.add(faCheck);

function App() {
  return (
    <MainPage/>
  );
}

export default App;
