import styled from 'styled-components'

export const StyledWallpaper = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))`
  z-index: -1;
  position: fixed;
  top: -50%;
  left: -20%;
  width: 120%;
  height: 150%;
`
