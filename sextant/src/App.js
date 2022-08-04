import './App.css';

function CardBorderProperty(props) {
  return (
    <div className="CardBorder">
      {props.children}
    </div>
  );
}

function Card(props) {
  return(
    <CardBorderProperty>
      <div className="cardContents">
        {props.content}
      </div>
    </CardBorderProperty>
  ) 
}

async function getIP() {
  var val = "";
  
  fetch('https://api64.ipify.org?format=json')
  .then((response) => response.json())
  //.then((data) => val = data);
  .then((data) => {
    val = data.ip;
    console.log(data.ip);}
  );

  return val;
}

function App() {
  var val = getIP();
  console.log(val.ip);

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

        <div className="ChildCard">
          <Card content = {''} />
          <Card />
        </div>
        
      </div>
    </div>
  );
}

export default App;
