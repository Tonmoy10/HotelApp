import axios from 'axios';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './assets/Layout';
import Account from './Pages/Account';
import IndexPage from './Pages/IndexPage'
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import { UserContextProvider } from './userContext';

axios.defaults.baseURL='http://localhost:4000';
axios.defaults.withCredentials = true ;


function App() {  
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>            {/* FOR USING HEADER FOR EVERY PAGE */}
          <Route path='/index' element={<IndexPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegistrationPage/>} />
          <Route path='/account' element={<Account/>} />
        </Route> 
      </Routes>
    </UserContextProvider>   
  );
}

export default App