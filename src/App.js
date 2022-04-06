import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import CreateTodo from './component/CreateTodo'
import TodosList from './component/TodoList'
import EditTodo from './component/EditTodo'
import './App.css';

function App() {
  return (
    <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Todo App</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Todos</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Todo</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit/:id" className="nav-link">Edit Todo</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/" exact element={< TodosList />} />
            <Route path="/edit/:id" exact element={< EditTodo />} />
            <Route path="/create" exact element={< CreateTodo />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
