import { css } from 'styled-components'

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  giant: 1170
}

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)}
      }
    `
  return acc
}, {})

export default media;