import * as enums from '../utils/enums/Contato'

class Contato {
  nome: string
  prioridade: enums.Prioridade
  telefone: string
  email: string
  status: enums.Status
  descricao: string
  id: number

  constructor(
    nome: string,
    prioridade: enums.Prioridade,
    telefone: string,
    email: string,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.prioridade = prioridade
    this.telefone = telefone
    this.email = email
    this.status = status
    this.descricao = descricao
    this.id = id
  }
}

export default Contato
