import './App.css';

function CardBorderProperty(props) {
  return (
    <div className="CardBorder">
      {props.children}
    </div>
  );
}

function ChildCard() {
  return(
    <CardBorderProperty>
      <div className="cardContents">
        Filler
      </div>
    </CardBorderProperty>
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
        <h1>
          Exhibit
        </h1>

        <ChildCard />
      </div>
    </div>
  );
}

export default App;
