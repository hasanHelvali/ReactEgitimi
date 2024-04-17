import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import GeneralForm from './components/GeneralForm';
import PortalForm from './components/PortalForm';
function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route lar tanımlanmaya baslandı. */}
        {/* <Route path='' element={<GeneralForm></GeneralForm>}></Route> */}
        <Route path='/' element={<GeneralForm/>}></Route>
        {/* Ana route GenralForm seklinde ayarlandı. localhost:3000 de calısacak*/}
        <Route path='/portal' element={<PortalForm/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
