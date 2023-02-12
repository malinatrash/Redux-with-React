import './App.css';
import Likes from "./Likes";
import Title from "./redux/Title";

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="https://random.imagecdn.app/1000/1000" alt=""/>
            <Title />
            <Likes />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
