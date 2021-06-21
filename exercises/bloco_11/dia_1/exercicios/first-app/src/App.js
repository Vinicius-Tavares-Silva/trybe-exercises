import logo from './logo.svg';
import Task from './components/taskList';
import './App.css';

const tasks = ['Limpar casa', 'Academia', 'Aula online', 'Fazer jantar'];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul> {tasks.map((task) => <Task tarefa={task}/>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
