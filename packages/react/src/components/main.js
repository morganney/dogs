import styled from 'styled-components'
import PropTypes from 'prop-types'

const Figure = styled.figure`
  margin: 0;
`
const FigCaption = styled.figcaption`
  text-align: center;

  h2 {
    margin: 0 0 10px 0;
  }
`
const Image = styled.img`
  display: block;
  max-width: 100%;
  margin: 0 auto;
  border: 1px solid black;
`
const Main = ({ dog }) => {
  return (
    <Figure>
      <FigCaption>
        <h2>{dog.breed}</h2>
      </FigCaption>
      <Image src={dog.img} alt={dog.breed} />
    </Figure>
  )
}

Main.propTypes = {
  dog: PropTypes.shape({
    img: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired
  }).isRequired
}

export { Main }
