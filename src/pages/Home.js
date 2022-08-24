import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Headshot from '../images/Headshot.jpg'


const HomeStyle = styled.div`
color: #000;
padding: 0.5em 1.5em;
display: flex;
justify-content: center;
align-items: center;

.wrapper-div{
  display: flex;
  align-items: center;
  padding: 5em;
}

img{
  height: 15em;
  width: 15em;
  border: solid;
  border-radius: 8%;
  border-color: #fff;
  position: relative;
  right: 5%;
}

.text-content{
  position: relative;
  left: 5%;
  border-left: solid 1px #800080;
  padding-left: 2em;
}

// .text-content h4{
//   line-height: 0.1em;
// }

.border-line{
  border-left: solid 1px #800080;
}

.wave-text{
  display: flex;
  align-items: center;
}

.wave{
  animation: wave-animation 2.5s infinite;
  transform-origin: 70% 70%;
  display: inline-block;
}

@keyframes wave-animation {
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }  
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(14.0deg) }
   40% { transform: rotate(-4.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }  
  100% { transform: rotate( 0.0deg) }
}
`
const ButtonBoxStyle = styled.div`
display: flex;
justify-content: center;

.button-box{
  display: flex;
  align-items: center;
}
`

const Home = () => {
  return (
    <div>
      <HomeStyle>
        <div className='wrapper-div'>
          <img src={Headshot} alt='Headshot'/>
          <div className='text-content'>
            <div className='wave-text'>
              <h4>Hi there!<span className="wave">👋</span></h4>
            </div>
            <h1>My name is Ofofonono,</h1>
            <p>I'm a full-stack developer with about 1yr experience in web development and operations.</p>
            <p>My area of professional expertise is limited to React.js and Django.</p> 
            <p>In addition, I possess a Bachelors degree in Chemical Engineering from the University of Uyo, Uyo.</p>
          </div>
        </div>
      </HomeStyle>
      <ButtonBoxStyle>
        <div className='button-box'>
          <Button text={'Send a Mail'}/>
          <Button text={'Leave a Comment'}/>
        </div>
      </ButtonBoxStyle>
    </div>
  )
}

export default Home