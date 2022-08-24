import React from 'react'
import styled from 'styled-components'
import SideHustle from '../images/SideHustle.jpg'
import ZurixI4G from '../images/ZurixI4G.jpg'

const ResumeStyle = styled.div`
  display: flex;
  justify-content: center;

  .wrapper{
    margin-bottom: -3.5em;
    color: #000;
    display: flex;
  }

  .headerTop{
    padding: 1.35em 1.35em 0.1em;
  }

  .experience{
    display: flex;
    align-items: flex-start;
    // flex-wrap: wrap;
  }

  .workExperienceItem{
    margin: 0em 1.5em;
    // word-wrap: break-word;
  }

  .experienceBox, .skillBox{
    margin: 0em -5.5em;
  }

  .flex-item-one{
    flex: 1;
  }

  .flex-item-two{
    flex: 1;
  }

  .skillBoxItem{
    margin: 0em 1.5em;
  }

  .headerBottom{
    padding: 1.35em 1.35em 0em 0.1em;
  }
}
`

const Resume = () => {
  return (
    <ResumeStyle>
      <div className='wrapper'>
        <div className='skillBox flex-item-two'>
          <h4 className='headerTop'>Skills:</h4>
          <ul>
            <li>Django</li>
            <li>React.js</li>
            <li>Microsoft Word</li>
            <li>Microsoft Excel</li>
          </ul>

          <div className='skillBoxItem'>
            <h4 className='headerBottom'>Education:</h4>
            <h3>University of Uyo, Uyo</h3>
            <p>Bachelor of Engineering, B.Eng.</p>
            <p>July 2016 - Present · 6 years</p>

            <h3>St. Brian Model College, Uyo</h3>
            <p>WASSCE, NECO</p>
            <p>September 2010 - July 2016 · 6 years</p>
          
          </div>
        </div>
        <div className='experienceBox flex-item-one'>
          <h4 className='headerTop'>Experience:</h4>
          <div className='experience'>
            <img src={SideHustle} alt='logo of side hustle' className='workExperienceItem'/>
            <div className='workExperienceItem'>
              <h3>Internship Trainee</h3>
              <p>Side Hustle · Internship</p>
              <p>Aug 2022 - Present · 1 mo</p>
              <p>Lagos, Nigeria</p>
              <p>Getting trained on React.js with real life projects.</p>
            </div>
          </div>
          <div className='experience'>
            <img src={ZurixI4G} alt='logo of side hustle' className='workExperienceItem'/>
            <div className='workExperienceItem'>
              <h3>Project Intern</h3>
              <p>Zuri Team, Inc. · Full-time</p>
              <p>May 2022 - Aug 2022 · 4 mos</p>
              <p>Lagos, Nigeria</p>
              <p>Skilled on Django backend framework and exposed to practical experience with real life projects.</p>
            </div>
          </div>
        </div>
      </div>
    </ResumeStyle>
  )
}

export default Resume