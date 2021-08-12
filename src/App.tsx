import './App.css';
import { Button } from './atoms';

function App() {
  return (
    <div className="flex flex-column space-x-2">
      <Button title="Text Button" />
      <Button title="Outlined Button" type="outlined" />
      <Button title="Contained Button" type="contained" />
    </div>
  );
}

export default App;
