import './App.css';


function ChildCard() {
  return(
    <div className="cardContents">
      Filler
    </div>
  ) 
}

function App() {
  return (
    <div className="App">
      <div className="Banner">
        <header>
          SEXTANT
        </header>
      </div>

      <div className="Exhibit">
        <header>
          Exhibit
        </header>

        <ChildCard/>
      </div>
    </div>
  );
}

export default App;
