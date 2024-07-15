import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { LandingPage } from './components/Page/LandingPage'
import { Login } from './components/Auth/Login/Login'
import { Register } from './components/Auth/Register/Register'

import { Home } from './components/Home/Home'
import { FavPage } from './components/Home/FavPage'
import { useState } from 'react'
import { Materiales } from './components/Home/Materiales/Materiales'
import { OneMateria } from './components/Home/OneMaterial/OneMateria'
import { MateriaAll } from './components/Home/MateriaAll/MateriaAll'
import { Reporte } from './components/Home/Reporte/Reporte'
import Login_Admin from './components/Admin/Login/Admin_Login'
import Admin from './components/Admin/Admin'

function App() {

  const [activeCamp, setActiveCamp] = useState(true);

  const[userLog, setUserLog] = useState({});

  const[nameMateria, setNameMateria] = useState('');


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='login' element={<Login userLog={userLog} setUserLog={setUserLog}/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='home' element={<Home activeCamp={activeCamp} setActiveCamp={setActiveCamp} userLog={userLog} setNameMateria={setNameMateria}/>}/>
        <Route path='materiaAll' element={<MateriaAll nameMateria={nameMateria}/>}/>
        <Route path='favorites' element={<FavPage/>}/>
        <Route path='materiales' element={<Materiales/>}/>
        <Route path='oneMateria' element={<OneMateria/>}/>
        <Route path='reporte' element={<Reporte/>}/>

        {/* Ruta para la seccion de los administradores */}
        <Route path='adminlog' element={<Login_Admin />} />
        <Route path='admin/*' element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
