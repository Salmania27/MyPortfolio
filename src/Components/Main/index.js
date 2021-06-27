import React from 'react'
import '../Main/style.scss'

class Main extends React.Component {
    render() {
        return (
            <div className='Wrapper'>
                <header className='header'>
                    <div className="btnMobile">
                    </div>
                    <ul className="list">
                        <li><a href="#AboutMe">About Me</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Cards">Experience</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </header>
                <div className="Landing">
                    <h1 className='jesa'>SALMANIA JESAMINE PUTRI</h1>
                    <h3 className='student'>Student</h3>
                </div>

            </div >
        )
    }
}
export default Main 