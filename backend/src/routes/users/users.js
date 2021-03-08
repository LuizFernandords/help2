const [pool] = require('../../controllers/db')

const getUsers = (request, response) => {
    pool.query('SELECT id,usuario,email FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const getUserById = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('SELECT id,usuario,email FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }

  const createUser = (request, response) => {
    const { usuario, senha, email } = request.body
    if(usuario){
    pool.query('INSERT INTO users (usuario, senha, email) VALUES ($1, $2, $3)', [usuario, senha, email], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`[HELP] Usuário Helper adicionado: ${usuario}`)
    })
  }
}
  

  module.exports = {
    getUsers,
    getUserById,
    createUser,
  }