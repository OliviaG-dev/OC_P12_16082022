import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '../../pages/dashboard/dashboard';
import Home from '../../pages/home/home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/user/:id' element={<Dashboard/>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
