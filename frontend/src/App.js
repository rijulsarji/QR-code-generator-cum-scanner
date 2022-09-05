import './App.css';
import QrCodeGen from './QrCode';

function App() {

  const details = {name: "Rijul", age: 18}
  return (
    <div>
      <QrCodeGen 
      text={details}
      />
    </div>
  );
}

export default App;
