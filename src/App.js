import './App.css';
import Hello from './Components/Hello';

function App() {

  const person = {
    name: 'raghu',
    message: 'Hello...',
    age: 24,
    seatNumber : [1,2,3,4,5]
  }

  // const seatNumber = [1,2,3,4,5]
  return (
    <div className="App">
      <Hello
        person = {person}
      />
    </div>
  );
}

export default App;
