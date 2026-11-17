function Perfil() {
  return (
    <div>
      <div className="pagina-topo">
        <div>
          <p className="dashboard-label">PERFIL</p>
          <h1>Meu perfil</h1>
          <p className="pagina-descricao">
            Consulte suas informações pessoais e acadêmicas.
          </p>
        </div>

        <button className="btn btn-primary">
          <i className="bi bi-pencil me-2"></i>
          Editar perfil
        </button>
      </div>

      <div className="row g-4 mt-2">
        <div className="col-lg-4">
          <div className="card perfil-card h-100">
            <div className="card-body text-center">
              <div className="perfil-avatar">
                OR
              </div>

              <h3 className="mt-3">Otávio Ramos Ribeiro</h3>

              <p>Sistemas de Informação</p>

              <span className="badge text-bg-primary">
                8º semestre
              </span>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card perfil-card h-100">
            <div className="card-body">
              <p className="dashboard-label">DADOS ACADÊMICOS</p>

              <div className="row g-4 mt-2">
                <div className="col-md-6">
                  <p className="perfil-label">Nome</p>
                  <p className="perfil-valor">Otávio Ramos Ribeiro</p>
                </div>

                <div className="col-md-6">
                  <p className="perfil-label">Curso</p>
                  <p className="perfil-valor">Sistemas de Informação</p>
                </div>

                <div className="col-md-6">
                  <p className="perfil-label">Semestre</p>
                  <p className="perfil-valor">8º semestre</p>
                </div>

                <div className="col-md-6">
                  <p className="perfil-label">Período</p>
                  <p className="perfil-valor">Noturno</p>
                </div>

                <div className="col-md-6">
                  <p className="perfil-label">Instituição</p>
                  <p className="perfil-valor">
                    Universidade de Mogi das Cruzes
                  </p>
                </div>

                <div className="col-md-6">
                  <p className="perfil-label">Status</p>
                  <p className="perfil-valor">
                    <span className="badge text-bg-success">
                      Ativo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="dashboard-bloco mt-5">
        <p className="dashboard-label">CONTA</p>
        <h2>Configurações</h2>

        <div className="d-flex gap-3 flex-wrap mt-4">
          <button className="btn btn-outline-primary">
            <i className="bi bi-lock me-2"></i>
            Alterar senha
          </button>

          <button className="btn btn-outline-secondary">
            <i className="bi bi-shield-check me-2"></i>
            Privacidade
          </button>
        </div>
      </section>
    </div>
  )
}

export default Perfil