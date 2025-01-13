import './App.css';

function MyButton(){
  return (
    <button>
      I'm a button
    </button>
  )
}

export default function App() {
  return (
    <>
      <header className="App-header">
        <div>
          <h1>Welcome to my app</h1>
        <MyButton/>
        </div>
      </header>
    </>
  );
} 
