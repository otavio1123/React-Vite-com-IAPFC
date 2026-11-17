
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Organizador <span className="text-primary">Acadêmico</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Início
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/semestres">
                Semestres
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/disciplinas">
                Disciplinas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/atividades">
                <i className="bi bi-list-check me-2"></i>
                Atividades
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/perfil">
                Perfil
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
