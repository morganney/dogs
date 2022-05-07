import styled, { keyframes } from 'styled-components'
import { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import { getBreedFromDog } from './utils'
import { Header } from './components/header'
import { Main } from './components/main'
import { Footer } from './components/footer'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`
const Spinner = styled.span`
  display: block;
  content: '';
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 1);
  border-width: 3px;
  border-color: #0000ee;
  border-bottom-color: rgba(255, 255, 255, 0);
  animation: ${spin} 1s linear infinite;
`
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`
const App = () => {
  const { id } = useParams()
  const [dogs, setDogs] = useState(null)
  const { data, isError } = useQuery('dogs', async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random/11')

    if (!response.ok) {
      throw new Error('Unable to fetch dogs from API')
    }

    return response.json()
  })

  useEffect(() => {
    if (data && Array.isArray(data.message)) {
      setDogs(data.message.map(dog => ({ img: dog, breed: getBreedFromDog(dog) })))
    }
  }, [data])

  if (isError) {
    return (
      <Center>
        <p>Snap! Something broke</p>
      </Center>
    )
  }

  if (dogs) {
    return (
      <>
        <Header />
        <Main dog={dogs[id ?? 0]} />
        <Footer dogs={dogs.slice(1)} />
      </>
    )
  }

  return (
    <Center>
      <Spinner />
      <p>Loading dogs...</p>
    </Center>
  )
}

export { App }
