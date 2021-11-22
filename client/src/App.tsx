// import from react
import { FC } from 'react';
// import npm
import { Routes, Route } from 'react-router-dom';
// import components
import Navbar from './components/Navbar';
// import views
import Home from './views/Home';
import Todo from './views/Todo';
import Info from './views/Info';
// import stylesheet
import './scss/index.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default App;
