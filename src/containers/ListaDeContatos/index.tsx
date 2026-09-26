import { useSelector } from 'react-redux'

import CardContato from '../../components/Contato'
import { MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens: contatosItens } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const { termo, valor, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosResultantes = [...contatosItens]
    if (valor !== undefined) {
      contatosResultantes = contatosResultantes.filter(
        (item) =>
          item.nome.toLowerCase().search((termo ?? '').toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        contatosResultantes = contatosResultantes.filter(
          (item) => item.prioridade === valor
        )
      } else if (criterio === 'status') {
        contatosResultantes = contatosResultantes.filter(
          (item) => item.status === valor
        )
      }

      return contatosResultantes
    } else {
      return contatosItens
    }
  }

  const contatosParaExibir = filtraContatos()

  return (
    <MainContainer>
      <Titulo>Contatos</Titulo>
      <ul>
        {contatosParaExibir.map((c) => (
          <li key={c.id}>
            <CardContato
              nome={c.nome}
              id={c.id}
              descricao={c.descricao}
              status={c.status}
              telefone={c.telefone}
              email={c.email}
              prioridade={c.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaContatos
