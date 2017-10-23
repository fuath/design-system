import styled from 'styled-components'
import Box from './Box'
import PropTypes from 'prop-types'

const boxShadow = (props) => {

  const boxShadows = {
    'sm': {
      'box-shadow': props.theme.boxShadows[0]
    },
    'md': {
      'box-shadow': props.theme.boxShadows.slice(0,2).join(', ')
    },
    'lg': {
      'box-shadow': props.theme.boxShadows.slice(0,3).join(', ')
    },
    'xl': {
      'box-shadow': props.theme.boxShadows.join(', ')
    }
  }
  return boxShadows[props.boxShadowSize]
}

const boxBorder = (props) => {
  return {
    border: `${props.borderWidth}px solid ${props.theme.colors.borderGray}`
  }
}

const Card = styled(Box)`
  ${boxShadow}
  ${boxBorder}
`

Card.propTypes = {
  boxShadowSize: PropTypes.oneOf([
    'sm',
    'md',
    'lg',
    'xl'
  ]),
  borderColor: PropTypes.string,
  borderWidth: PropTypes.oneOf([1, 2])
}

Card.defaultProps = {
  borderWidth: 1
}

export default Card