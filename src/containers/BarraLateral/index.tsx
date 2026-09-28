import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../components/FIltroCard'
import { Aside, BotaoVoltar, Campo } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'

import { useNavigate } from 'react-router-dom'

import { ChangeEvent } from 'react'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <>
      <Aside>
        <div>
          {mostrarFiltro ? (
            <>
              <Campo
                type="text"
                placeholder="Buscar"
                value={termo}
                onChange={(evento: ChangeEvent<HTMLInputElement>) =>
                  dispatch(alterarTermo(evento.target.value))
                }
              />
              <FiltroContato
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
                quantidadeContatos={0}
                ativo={false}
              />
              <FiltroContato
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluidas"
                quantidadeContatos={0}
                ativo={false}
              />
              <FiltroContato
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
                quantidadeContatos={0}
                ativo={false}
              />
              <FiltroContato
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
                quantidadeContatos={0}
                ativo={false}
              />
              <FiltroContato
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
                quantidadeContatos={0}
                ativo={false}
              />
              <FiltroContato
                criterio="todos"
                legenda="todos"
                quantidadeContatos={0}
                ativo={false}
              />
            </>
          ) : (
            <BotaoVoltar onClick={() => navigate('/')}>Voltar</BotaoVoltar>
          )}
        </div>
      </Aside>
    </>
  )
}

export default BarraLateral
