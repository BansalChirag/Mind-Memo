import './App.css';
import Home from './components/Home';
import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
      <Home style={{backgroundColor:'black'}} />
    </DataProvider>
  );
}

export default App;
