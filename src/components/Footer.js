import React from 'react'
import styled from 'styled-components'


const FooterStyle = styled.footer`

border-top: solid 1px #800080;
margin-top: 5.5em;
padding: 0.5em 1.5em;

.footer-div{
  display: flex;
  justify-content: center;
}

.wrapper-div{
  display: flex;
  align-items: center;
  margin-top: 1.6em;
}

.contact-info{
  margin: 0 10em;
}

.contact-info a{
  text-decoration: none;
  color: #800080;
}

.copyright-info{
  color: #800080;
  margin: 0 10em;
}

.footer-link{
  margin-right: 1em;
}
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer-div'>
        <div className='wrapper-div'>
          <div className='contact-info'>
            <a href='https://github.com/KoneeVibes/' className='footer-link'>GitHub</a>
            <a href='https://www.linkedin.com/in/ofofonono-umoren' className='footer-link'>LinkedIn</a>
            <a href='offymoren@gmail.com'>Gmail</a>
          </div>
          <div className='copyright-info'>
            <span>&copy;Copyright2022 Ofofonono Umoren</span>
          </div>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer