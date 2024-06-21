import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from './todo';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/todo" Component={TodoPage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
