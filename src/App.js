
import './App.css';
import FiltrPublicacyj from './components/FiltrPublicacyj/FiltrPublicacyj';
import SelectDate from './components/SelectDate/SelectDate';

function App() {
  return (
    <div className='wrapper'>
      <SelectDate/>
      <FiltrPublicacyj/>
    </div>
  );
}

export default App;
