import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GameView } from './views/GameView';
import { MenuView } from './views/MenuView';
import { QuestionView } from './views/QuestionView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuView />} />
      <Route path="/game" element={<GameView />} />
      <Route path="/question" element={<QuestionView />} />
    </Routes>
  );
}

