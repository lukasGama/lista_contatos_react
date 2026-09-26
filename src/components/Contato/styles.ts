import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  backgorund-color: ${variaveis.cinzaClaro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  width: 100%;

  textarea {
    resize: none;
    width: 217px;
    height: 50px;
  }
`
export const TopCard = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;
`
export const Nome = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0 0.5rem 0 0.5rem;
`

export const DadosEditaveis = styled.ul`
  margin-bottom: 0.5rem;
`
export const ContatoInfos = styled.input`
  height: 1rem;
  width: 15rem;
  margin-left: 0.5rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoEsquerdo = styled.button`
  font-weight: bold;
  font-size: 0.75rem;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 0.5rem 0 0 0.5rem;
`
export const BotaoDireito = styled(BotaoEsquerdo)`
  border-radius: 0 0.5rem 0.5rem 0;
  margin-left: 0.05rem;
  color: ${variaveis.vermelhoEscuro};
`
export const BotaoSalvar = styled(BotaoEsquerdo)`
  color: ${variaveis.verde};
`
export const BotaoCadastrar = styled(BotaoSalvar)`
  border-radius: 0.5rem;
`
export const Editando = styled.em`
  font-weight: bold;
  font-size: 1rem;
`
