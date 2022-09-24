import React from 'react';
import { Routes } from 'react-router-dom';
import { Test } from './components/Test';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuView />} />
      <Route path="/game" element={<GameView />} />
      <Route path="/question" element={<QuestionView />} />
    </Routes>
  );
}

