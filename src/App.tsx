import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { GameView } from './views/GameView';
import { MenuView } from './views/MenuView';
import { QuestionFormView } from './views/QuestionFormView';
import { QuestionView } from './views/QuestionView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuView />} />
      <Route path="/game" element={<GameView />} />
      <Route path="/question" element={<QuestionView />} />
      <Route path="/question/form" element={<QuestionFormView />} />
    </Routes>
  );
}

