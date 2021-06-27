import React from 'react'
import './style.scss'
import CSS from '../../assets/css.png'
import Github from '../../assets/github.png'
import Git from '../../assets/Git.png'
import HTML5 from '../../assets/html5.png'
import Javascript from '../../assets/js.png'
import Reactjs from '../../assets/react.png'
import Sketchup from '../../assets/sketchup.png'
import Laravel from '../../assets/laravel.png'
import Corel from '../../assets/corel.png'
import Python from '../../assets/python.png'



class Skills extends React.Component {
	render() {
		return (

			<div className='skillsWrapper' id='Skills'>
				<h1 className="skills">Skills</h1>
				<h4 className="ket">Here are some of my skills✨</h4>
				<div className="skillsContainer">
					<div data-tip="HTML5">
						<img src={HTML5} />
					</div>
					<div data-tip="CSS3">
						<img src={CSS} />
					</div>
				
					<div data-tip="Javscript">
						<img src={Javascript} />
					</div>
					<div data-tip="React Js">
						<img src={Reactjs} />
					</div>
					<div data-tip="Github">
						<img src={Github} />
					</div>
					<div data-tip="Git">
						<img src={Git} />
					</div>
					<div data-tip="Sketch Up">
						<img src={Sketchup} />
					</div>
					<div data-tip="Laravel">
						<img src={Laravel} />
					</div>
					<div data-tip="Corel Draw">
						<img src={Corel} />
					</div>
					<div data-tip="Python">
						<img src={Python} />
					</div>
					
					
				</div>
			</div>
		)
	}
}
export default Skills