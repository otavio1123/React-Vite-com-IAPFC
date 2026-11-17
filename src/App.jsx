import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Semestres from './pages/Semestres'
import Disciplinas from './pages/Disciplinas'
import Atividades from './pages/Atividades'
import Perfil from './pages/Perfil'

import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/semestres" element={<Semestres />} />
          <Route path="/disciplinas" element={<Disciplinas />} />
          <Route path="/atividades" element={<Atividades />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </main>
    </>
  )
}

export default App
