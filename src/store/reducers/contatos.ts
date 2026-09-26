import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contato'

import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Lucas Gama',
      descricao: 'Estou no aguardo do orçamento.',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      telefone: '(11)94265-3396',
      email: 'lucas@gmail.com'
    },
    {
      id: 2,
      nome: 'Mateus Santos',
      descricao: 'sobre o fut de final de semana!',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      telefone: '(19)98988-9956',
      email: 'mateus@hotmail.com'
    },
    {
      id: 3,
      nome: 'Raiane Ribeiro',
      descricao: 'Me retorna assim que der, precisamos conversar',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      telefone: '(11)98855-2225',
      email: 'raiane@yahoo.com'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (
      state,
      action: PayloadAction<{
        id: number
        telefone: string
        email: string
      }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0)
        state.itens[indexDoContato] = {
          ...state.itens[indexDoContato],
          telefone: action.payload.telefone,
          email: action.payload.email
        }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com este nome, insira sobrenome!')
      } else {
        const ultimoId =
          state.itens.length > 0 ? Math.max(...state.itens.map((c) => c.id)) : 0
        const novoId = ultimoId + 1

        const novoContato = {
          ...action.payload,
          id: novoId
        }
        state.itens.push(novoContato as Contato)
      }
    },
    alteraStatus: (
      state,
      action: PayloadAction<{ id: number; finalizado: boolean }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE
      }
    }
  }
})

export const { remover, editar, cadastrar, alteraStatus } =
  contatosSlice.actions

export default contatosSlice.reducer
