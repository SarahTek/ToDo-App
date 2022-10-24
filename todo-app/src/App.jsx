import TodoProvider from './Providers/TodoProvider';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header >
        <h1>Todo List App</h1>
      </header>
      <TodoProvider>
        <TodoForm />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
