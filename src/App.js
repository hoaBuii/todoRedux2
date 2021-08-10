import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Addtodo  from './containers/Addtodo';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{display:'flex', position:'relative', flexDirection:'column', padding:'20px'}}>
      <Addtodo/>
      <TodoList/>
      <Footer/> 
    </div>
  );
}

export default App;