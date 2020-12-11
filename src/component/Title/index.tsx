import React from 'react'
import styled from 'styled-components/native'
import { s } from '../../utils';

interface Props {
  title: string;
  marginRight?: number;
}

const ListText = styled.Text<{ right: number }>`
  color: #222;
  font-size: ${s(34)}px;
  font-family: Helvetica;
  margin-right: ${props => props.right}px;
`;

const Title = ({ title, marginRight }: Props) => {
  return (
    <ListText right={marginRight as number}>
      {title}
    </ListText>
  )
}

export default Title
