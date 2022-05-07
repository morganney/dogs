import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link as LinkBase } from 'react-router-dom'

const List = styled.ul`
  margin: 0;
  padding: 0;
  line-height: normal;
  list-style-type: none;
  list-style-position: inside;
  display: flex;
  flex-wrap: wrap;
`
const Item = styled.li`
  width: 20%;
  padding: 5px;

  @media (min-width: 992px) {
    width: auto;
    flex: 1;
  }
`
const Figure = styled.figure`
  margin: 0;
`
const Picture = styled.picture`
  display: block;
  overflow: hidden;
  border: 1px solid black;
  background: #e5e5e5;
`
const Image = styled.img`
  display: block;
  margin: 0 auto;
`
const FigCaption = styled.figcaption`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 3px;
`
const Link = styled(LinkBase)`
  text-decoration: none;

  &:visited {
    color: #0000ee;
  }
`
const Footer = ({ dogs }) => {
  return createPortal(
    <List>
      {dogs.map((dog, idx) => (
        <Item key={dog.img}>
          <Link to={String(idx + 1)}>
            <Figure>
              <Picture>
                <Image src={dog.img} width="auto" height="50px" alt={dog.breed} />
              </Picture>
              <FigCaption title={dog.breed}>{dog.breed}</FigCaption>
            </Figure>
          </Link>
        </Item>
      ))}
    </List>,
    document.getElementById('footer')
  )
}

Footer.propTypes = {
  dogs: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      breed: PropTypes.string.isRequired
    })
  ).isRequired
}

export { Footer }
