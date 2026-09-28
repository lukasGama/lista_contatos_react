import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CampoCadastro, MainContainer, Titulo } from '../../styles'
import { ContainerRadio, Form } from './styles'
import * as enums from '../../utils/enums/Contato'

import { cadastrar } from '../../store/reducers/contatos'
import { validaSalvamento } from '../../utils/validacoes/validacoes'
import { BotaoCadastrar } from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [prioridade, setPrioridade] = useState<enums.Prioridade>(
    enums.Prioridade.NORMAL
  )
  const [descricao, setDescricao] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const contatoParaAdicionar = {
      nome,
      telefone,
      email,
      prioridade,
      descricao,
      status: enums.Status.PENDENTE
    }
    if (!validaSalvamento(telefone, email)) {
      return
    }
    console.log(telefone)
    console.log(nome)
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <CampoCadastro
          value={nome}
          onChange={(evento: ChangeEvent<HTMLInputElement>) =>
            setNome(evento.target.value)
          }
          type="text"
          placeholder="Nome"
        />
        <CampoCadastro
          value={telefone}
          onChange={(evento: ChangeEvent<HTMLInputElement>) =>
            setTelefone(evento.target.value)
          }
          type="tel"
          placeholder="Telefone - (DD)XXXXX-XXXX"
        />
        <CampoCadastro
          value={email}
          onChange={(evento: ChangeEvent<HTMLInputElement>) =>
            setEmail(evento.target.value)
          }
          type="text"
          placeholder="Email - exemplo@email.com.br"
        />
        <CampoCadastro
          value={descricao}
          onChange={(evento: ChangeEvent<HTMLInputElement>) =>
            setDescricao(evento.target.value)
          }
          as="textarea"
          placeholder="Caixa de Recado"
        />
        <ContainerRadio>
          <p>Prioridade:</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <div key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </div>
          ))}
        </ContainerRadio>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
