const getBreedFromDog = url =>
  url
    .split(/.+\/breeds\/(.+)\/.+/)
    .filter(Boolean)
    .pop()
    .split('-')
    .reverse()
    .map(part => `${part[0].toUpperCase()}${part.substring(1)}`)
    .join(' ')

export { getBreedFromDog }
