import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import TodosList from './pages/TodoList';

function App() {
  return (
      <div className="App">
            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<Home title={"Hello this is Typescript and React app"} />}>
                        <Route index element={<Home title={"This is Home"} />} />
                        </Route>
                        <Route path="/todos" element={<TodosList />} >
                              {/* other more specific routes */}
                        </Route >
                  </Routes>
            </BrowserRouter>
      </div>
  );
}

export default App;
