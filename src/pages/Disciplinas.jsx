function Disciplinas() {
  const disciplinas = [
    {
      nome: 'Projeto Final de Curso',
      professor: 'Professor responsável',
      semestre: '2026 / 2',
      atividades: 4,
      status: 'Em andamento'
    },
    {
      nome: 'Programação para Internet',
      professor: 'Bruno Messias',
      semestre: '2026 / 2',
      atividades: 6,
      status: 'Em andamento'
    },
    {
      nome: 'Desenvolvimento de Sistemas',
      professor: 'Professor responsável',
      semestre: '2026 / 2',
      atividades: 3,
      status: 'Em andamento'
    },
    {
      nome: 'Banco de Dados',
      professor: 'Professor responsável',
      semestre: '2026 / 2',
      atividades: 5,
      status: 'Em andamento'
    }
  ]

  return (
    <div>
      <div className="pagina-topo">
        <div>
          <p className="dashboard-label">DISCIPLINAS</p>
          <h1>Minhas disciplinas</h1>
          <p className="pagina-descricao">
            Acompanhe as matérias cadastradas no semestre atual.
          </p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-plus-lg me-2"></i>
          Nova disciplina
        </button>
      </div>

      <div className="row g-4 mt-2">
        {disciplinas.map((disciplina, index) => (
          <div className="col-md-6" key={index}>
            <div className="card disciplina-card h-100">
              <div className="card-body">

                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <span className="badge text-bg-primary mb-3">
                      {disciplina.semestre}
                    </span>

                    <h3>{disciplina.nome}</h3>
                  </div>

                  <i className="bi bi-journal-bookmark disciplina-icon"></i>
                </div>

                <p className="mt-3">
                  <i className="bi bi-person me-2"></i>
                  {disciplina.professor}
                </p>

                <p>
                  <i className="bi bi-list-check me-2"></i>
                  {disciplina.atividades} atividades cadastradas
                </p>

                <div className="d-flex justify-content-between align-items-center mt-4">
                  <span className="status-disciplina">
                    {disciplina.status}
                  </span>

                  <button className="btn btn-outline-primary btn-sm">
                    Ver atividades
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Disciplinas