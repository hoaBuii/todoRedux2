import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  return (
    <div style={{display:'flex', position:'relative'}}>
      <TodoList/> 
    </div>
  );
}

export default App;