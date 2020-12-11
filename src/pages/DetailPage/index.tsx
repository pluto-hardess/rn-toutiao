import React, { useEffect } from 'react'
import styled from 'styled-components/native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewsDetail } from '../../redux/actions/newsDetailAction'

interface Props {
  navigation: any;
  route: any;
}

const Container = styled.View`
  flex: 1;
`

export default ({ navigation, route }: Props) => {
  // console.log('navigation::', navigation)
  // console.log('route:::', route)
  const dispatch = useDispatch()

  useEffect(() => {
    const reg = /\//g
    const id = route.params.url.replace(reg, '')
    dispatch(fetchNewsDetail(id))
  }, [])
  return (
    <Container>
      
    </Container>
  )
}
