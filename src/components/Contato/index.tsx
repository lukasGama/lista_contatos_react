import { useState, useEffect, ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'

import { remover, editar, alteraStatus } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { validaSalvamento } from '../../utils/validacoes/validacoes'
import { Editando } from './styles'

import * as enums from '../../utils/enums/Contato'

type Props = Contato

const CardContato = ({
  descricao: descricaoOriginal,
  nome,
  telefone,
  email,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [telefoneEditado, setTelefoneEditado] = useState(telefone)
  const [emailEditado, setEmailEditado] = useState(email)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  const clickRemover = () => {
    const confirma = window.confirm('Tem certeza que deseja remover o contato?')
    if (confirma) {
      dispatch(remover(id))
      alert('O contato será removido')
    } else {
      alert('Operação cancelada.')
    }
  }

  function alteraStatusContato(evento: ChangeEvent<HTMLInputElement>) {
    dispatch(
      alteraStatus({
        id,
        finalizado: evento.target.checked
      })
    )
  }

  const clickSalvar = () => {
    if (!validaSalvamento(telefoneEditado, emailEditado)) {
      return
    }
    dispatch(
      editar({
        id: id,
        telefone: telefoneEditado,
        email: emailEditado
      })
    )
    setEstaEditando(false)
  }

  return (
    <S.Card>
      <label htmlFor={`contato-${id}`}>
        <input
          type="checkbox"
          id={`contato-${id}`}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alteraStatusContato}
        />
      </label>
      <S.TopCard>
        <S.Nome>
          {nome}
          {estaEditando && <Editando> - Editando</Editando>}
        </S.Nome>
      </S.TopCard>
      <S.DadosEditaveis>
        <li>
          <S.ContatoInfos
            value={telefoneEditado}
            onChange={(evento: ChangeEvent<HTMLInputElement>) =>
              setTelefoneEditado(evento.target.value)
            }
            disabled={!estaEditando}
            placeholder="telefone"
          />
        </li>
        <li>
          <S.ContatoInfos
            value={emailEditado}
            onChange={(evento: ChangeEvent<HTMLInputElement>) =>
              setEmailEditado(evento.target.value)
            }
            disabled={!estaEditando}
            placeholder="e-mail"
          />
        </li>
      </S.DadosEditaveis>
      <textarea
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
        placeholder="textarea"
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar onClick={clickSalvar}>Salvar</S.BotaoSalvar>
            <S.BotaoDireito onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoDireito>
          </>
        ) : (
          <>
            <S.BotaoEsquerdo onClick={() => setEstaEditando(true)}>
              Editar
            </S.BotaoEsquerdo>
            <S.BotaoDireito onClick={clickRemover}>Remover</S.BotaoDireito>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default CardContato
