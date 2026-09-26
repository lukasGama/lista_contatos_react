import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as S from './styles'
import * as enums from '../../utils/enums/Contato'
import { RootReducer } from '../../store'
// * as S para importar todos os estilos,sem precisar importar um de cada
//?=para deixar opcional

export type Props = {
  ativo: boolean
  legenda: string
  criterio: 'prioridade' | 'status' | 'todos'
  valor?: enums.Prioridade | enums.Status
  quantidadeContatos: number
}

const FiltroContato = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)
  const itens = useSelector((state: RootReducer) => state.contatos.itens)

  const verificaEstaAtivo = () => {
    const mesmoValor = filtro.valor === valor
    const mesmoCriterio = filtro.criterio === criterio

    return mesmoCriterio && mesmoValor
  }

  const quantidadeContatos = () => {
    if (criterio === 'todos') return itens.length
    if (criterio === 'prioridade') {
      return itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const contador = quantidadeContatos()
  const ativo = verificaEstaAtivo()

  return (
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador} Contatos</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroContato
