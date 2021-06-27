import React from 'react'
import Card from '../Card'
import './style.scss'
import project1 from '../../assets/project1.jpeg'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.jpg'
import project4 from '../../assets/project4.jfif'
import project5 from '../../assets/project5.jpeg'
import project6 from '../../assets/project6.jfif'
import project7 from '../../assets/project7.jfif'
import project8 from '../../assets/project8.jfif'




class Cards extends React.Component {
  render() {
    const Projects = [
      
      {
        img: project1,
        title: '🌴 Sekolah Alam',
        description: 'Mengajar anak-anak desa yang kesulitan belajar sebagai dampak dari COVID-19.',
      },
      {
        img: project2,
        title: 'Remaja Masjid',
        description: 'Mengajar anak-anak TPA dan menjalan kegiatan kegamaan.',
      },
      {
        img: project3,
        title: '🌴 Sekolah Alam',
        description: 'Mengajar anak-anak desa yang kesulitan belajar sebagai dampak dari COVID-19.',
      },
     
      {
        img: project4,
        title: 'Traveler',
        description: 'I like to traveling and learn a new thing.',
      },
     
      {
        img: project5,
        title: 'XXXXXXXX',
        description: 'A skill is the learned ability to perform an action with determined results with good execution often within a given amount of time, energy, or both.',
      },
      {
        img: project6,
        title: 'XXXXXXXX',
        description: 'A skill is the learned ability to perform an action with determined results with good execution often within a given amount of time, energy, or both.',
      },
      {
        img: project7,
        title: 'XXXXXXXX',
        description: 'A skill is the learned ability to perform an action with determined results with good execution often within a given amount of time, energy, or both.',
      },
      {
        img: project8,
        title: 'XXXXXXXX',
        description: 'A skill is the learned ability to perform an action with determined results with good execution often within a given amount of time, energy, or both.',
      },

    ]

    return (

      <div className='portfolioWrapper'id='Cards'>
        <h1 className="experience">Experience</h1>
        <div className='cardWrapper'>

          {Projects.map((project, key) => {
            return (
              <Card key={key} project={project} />
            )
          })}
        </div>
      </div>

    )
  }
}
export default Cards

