import React from 'react'
import './style.scss'
import userImage from '../../assets/userImage.jpeg'
import project12 from '../../assets/project12.jfif'
import { Grid } from "react-mdl";


class AboutMe extends React.Component {
    render() {
        return (
            <Grid className="about-grid">
            <div className='AboutMe' id='AboutMe'>
                <h1 className="about">About Me</h1>
                <img className='me' src={userImage} alt='' />
                <p className="description">  
                Hi, I am  Salmania Jesamine Putri. I was born in Bandung, June 27th 2001. I'm studying IT and I do enjoy it, most aspects of it. 
                But sometimes i feel tired because there is a lot of hard work and I cannot say that I enjoy all of this. 
                But what I really enjoy is to solving problems in the programs and the feeling when I manage to solve the problems. 💫</p>
            </div>
            </Grid>
        )
    }
}
export default AboutMe