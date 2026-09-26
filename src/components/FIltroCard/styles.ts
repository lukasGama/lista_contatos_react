import styled from 'styled-components'

type TagProps = {
  ativo: boolean
}

export const Card = styled.div<TagProps>`
  padding: 0.5rem;
  border: ${(props) =>
    props.ativo ? '0.150rem solid #4B4B4B' : '0.150rem solid #a1a1a1'};
  background-color: #fcfcfcfc;
  color: #5e5e5e;
  margin: 1rem 0;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`

export const Label = styled.span`
  font-size: 0.875rem;
`
