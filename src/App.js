
import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
    
    <h2>FORM</h2>
    <MyForm user = {{name:"josias",email:"bleydin@gmail.com",bio:"sou uber",role:"uber"}}/>

    </div>
  );
}

export default App;
