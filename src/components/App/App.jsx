import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from '../../pages/dashboard/dashboard';
import Home from '../../pages/home/home';
import Header from "../../components/header/header"
import VerticalBar from "../../components/verticalBar/verticalBar"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <VerticalBar />
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/user/:id' element={<Dashboard/>} />
				</Routes>
			</BrowserRouter>
    </div>
  );
}

export default App;
