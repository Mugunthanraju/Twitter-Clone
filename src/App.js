import React from 'react';
import './App.css';

import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    //BEM Convention
    <div className="app">
      
    {/* SideBar */}
    <Sidebar />

    {/* Feed */}
    <Feed />

    {/* Widgets */}
    <Widgets />

    </div>
  );
}

export default App;
