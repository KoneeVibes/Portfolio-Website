import React from 'react'
import styled from 'styled-components'

const ButtonStyle = styled.button`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');

font-family: 'poppins';
font-size: 1em;
background-color: #800080;
color: #fff;
border: none;
border-radius: 2%;
margin: 0 1.5em;
height: 3.75em;
width: 12em;
`

const Button = ({text}) => {
  return (
    <ButtonStyle type="submit">{text}</ButtonStyle>
  )
}

export default Button