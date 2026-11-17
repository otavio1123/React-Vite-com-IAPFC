function Semestres() {
  return (
    <div>
      <div className="pagina-topo">
        <div>
          <p className="dashboard-label">SEMESTRES</p>
          <h1>Meus semestres</h1>
          <p className="pagina-descricao">
            Organize e acompanhe os períodos da sua graduação.
          </p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          Novo semestre
        </button>
      </div>

      <div className="row g-4 mt-2">

        <div className="col-md-6">
          <div className="card semestre-card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <span className="badge text-bg-primary mb-3">
                    Atual
                  </span>

                  <h3>2026 / 2</h3>
                  <p>8º semestre</p>
                </div>

                <i className="bi bi-calendar3 semestre-icon"></i>
              </div>

              <hr />

              <p className="mb-2">
                <strong>6 disciplinas</strong> cadastradas
              </p>

              <button className="btn btn-outline-primary btn-sm">
                Ver semestre
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card semestre-card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <span className="badge text-bg-secondary mb-3">
                    Concluído
                  </span>

                  <h3>2026 / 1</h3>
                  <p>7º semestre</p>
                </div>

                <i className="bi bi-calendar-check semestre-icon"></i>
              </div>

              <hr />

              <p className="mb-2">
                <strong>6 disciplinas</strong> cadastradas
              </p>

              <button className="btn btn-outline-secondary btn-sm">
                Ver semestre
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Semestres