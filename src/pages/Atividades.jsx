function Atividades() {
  return (
    <div>
      <div className="pagina-topo">
        <div>
          <p className="dashboard-label">ATIVIDADES</p>
          <h1>Minhas atividades</h1>
          <p className="pagina-descricao">
            Acompanhe as atividades cadastradas nas suas disciplinas.
          </p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          Nova atividade
        </button>
      </div>

      <div className="row g-4 mt-2">
        <div className="col-lg-4 col-md-6">
          <div className="card atividade-card h-100">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <i className="bi bi-list-check atividade-icon"></i>
                <span className="status-pendente">Pendente</span>
              </div>

              <h3>Trabalho de Programação para Internet</h3>
              <p>
                <i className="bi bi-book me-2"></i>
                Programação para Internet
              </p>
              <p>
                <i className="bi bi-calendar-event me-2"></i>
                Prazo: 20/11/2026
              </p>

              <button className="btn btn-outline-primary mt-auto align-self-start">
                <i className="bi bi-eye me-2"></i>
                Ver atividade
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card atividade-card h-100">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <i className="bi bi-list-check atividade-icon"></i>
                <span className="status-andamento">Em andamento</span>
              </div>

              <h3>Entrega do Projeto Final</h3>
              <p>
                <i className="bi bi-book me-2"></i>
                Projeto Final de Curso
              </p>
              <p>
                <i className="bi bi-calendar-event me-2"></i>
                Prazo: 30/11/2026
              </p>

              <button className="btn btn-outline-primary mt-auto align-self-start">
                <i className="bi bi-eye me-2"></i>
                Ver atividade
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card atividade-card h-100">
            <div className="card-body d-flex flex-column">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <i className="bi bi-list-check atividade-icon"></i>
                <span className="status-concluida">Concluída</span>
              </div>

              <h3>Exercício de Banco de Dados</h3>
              <p>
                <i className="bi bi-book me-2"></i>
                Banco de Dados
              </p>
              <p>
                <i className="bi bi-calendar-event me-2"></i>
                Prazo: 15/11/2026
              </p>

              <button className="btn btn-outline-primary mt-auto align-self-start">
                <i className="bi bi-eye me-2"></i>
                Ver atividade
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Atividades
