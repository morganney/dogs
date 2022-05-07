import styled from 'styled-components'
import { useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

const Heading = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 0;

  > span:first-child {
    cursor: pointer;
  }
`
const Header = () => {
  const navigate = useNavigate()
  const onClickEmoji = useCallback(() => navigate('/'), [navigate])

  return createPortal(
    <Heading>
      <span onClick={onClickEmoji}>{String.fromCodePoint(0x1f415)}</span>
      <span>Dog API Demo</span>
    </Heading>,
    document.getElementById('header')
  )
}

export { Header }
