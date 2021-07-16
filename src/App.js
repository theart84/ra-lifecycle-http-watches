import './App.css';
import Control from "./components/Control/Control";
import {useState} from "react";
import WorldWatches from "./components/WorldWatches/WorldWatches";

const initialState = [
  {id: 'w1', name: 'Челябинск', timeZone: -5},
  {id: 'w2', name: 'Москва', timeZone: -3},
]

function App() {
  const [watches, setWatches] = useState(initialState);

  const addNewWatchesHandler = (data) => {
    setWatches(prevState => [...prevState, data])
  }

  const deleteWatchHandler = (id) => {
    setWatches(prevState => {
      const filteredWatches = prevState.filter(watch => watch.id !== id);
      setWatches(filteredWatches)
    })
  }

  return (
    <div className="container pt-5">
      <Control addNewWatches={addNewWatchesHandler}/>
      <WorldWatches watches={watches} deleteWatch={deleteWatchHandler}/>
    </div>
  );
}

export default App;
