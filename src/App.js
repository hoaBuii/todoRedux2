import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Addtodo  from './containers/Addtodo';

function App() {
  return (
    <div style={{display:'flex', position:'relative', flexDirection:'column', padding:'20px'}}>
      <Addtodo/>
      <TodoList/> 
    </div>
  );
}

export default App;