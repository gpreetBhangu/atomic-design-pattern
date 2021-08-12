import './App.css';
import { Button } from './atoms';

function App() {
  return (
    <div className="flex flex-row space-x-1">
      <Button title="Save Button" />
      <Button title="Save Button" type="outlined" />
      <Button title="Save Button" type="contained" />
    </div>
  );
}

export default App;
