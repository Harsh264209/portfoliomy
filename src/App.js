
import { ToastContainer } from 'react-toastify';
import Home from './Home/Home';
import {Route,Routes} from 'react-router-dom'
// import About from './Components/About'



function App() {
  return (
    <div className="w-full m-0 p-0 " style={{backgroundColor:"#191924"}}>
   {/* <Routes>
    <Route exact path='/about' element={<About/>}/>
   </Routes> */}
    <Home/>
    <ToastContainer/>
    </div>
  );
}

export default App;
