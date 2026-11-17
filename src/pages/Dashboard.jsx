function Dashboard() {
  return (
    <div>
      <section className="dashboard-topo">
        <div>
          <p className="dashboard-label">ORGANIZADOR ACADÊMICO</p>
          <h1>Olá, Otávio 👋</h1>
          <p className="dashboard-descricao">
            Acompanhe sua vida acadêmica em um só lugar.
          </p>
        </div>

        <span className="badge text-bg-primary">
          8º semestre
        </span>
      </section>

      <div className="row g-4 mt-2">

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              <i className="bi bi-calendar3 dashboard-icon"></i>
              <h5 className="card-title mt-3">Semestre atual</h5>
              <h3>2026 / 2</h3>
              <p className="card-text">
                Consulte suas informações do semestre.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              <i className="bi bi-journal-bookmark dashboard-icon"></i>
              <h5 className="card-title mt-3">Disciplinas</h5>
              <h3>6</h3>
              <p className="card-text">
                Disciplinas cadastradas neste semestre.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              <i className="bi bi-clock-history dashboard-icon"></i>
              <h5 className="card-title mt-3">Horas complementares</h5>
              <h3>120h</h3>
              <p className="card-text">
                Acompanhe o progresso das horas realizadas.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="card dashboard-card h-100">
            <div className="card-body">
              <i className="bi bi-mortarboard dashboard-icon"></i>
              <h5 className="card-title mt-3">Curso</h5>
              <h3>SI</h3>
              <p className="card-text">
                Sistemas de Informação.
              </p>
            </div>
          </div>
        </div>

      </div>

      <section className="dashboard-bloco mt-5">
        <div>
          <p className="dashboard-label">VISÃO GERAL</p>
          <h2>Organize sua rotina acadêmica</h2>

          <p>
            Cadastre seus semestres, acompanhe disciplinas, atividades
            e horas acadêmicas de forma simples e organizada.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Dashboard