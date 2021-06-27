import React from "react"
import "./style.scss"

class Contact extends React.Component {
	render() {
		return (
			<div className="contactContainer">
			<h1 className="contact">Contact</h1>
				<div className="contactWrapper">
					<div className="mail">
						Feel free to ask anything! <br></br><br></br>
						email: salmania2001@gmail.com <br></br><br></br>
						Click text below to find me on social media. 
					</div> 
					
				</div>
				<div className="contactWrapper">
				<div className="linksContainer">
						<li><a className="linkContact" href="https://github.com/Salmania27" target="_blank">Github</a></li>
						<li><a className="linkContact" href="https://www.facebook.com/salmaniajesamine.putri" target="_blank">Facebook</a></li>
						<li><a className="linkContact" href="https://www.youtube.com/channel/UCGTbQJ5NcPJgLH3VgQQ-byg" target="_blank">Youtube</a></li>
						<li><a className="linkContact" href="https://api.whatsapp.com/send?phone=628994512120" target="_blank">Whatsapp</a></li>
						<li><a className="linkContact" href="https://instagram.com/jesamineputri" target="_blank">Instagram</a></li>
						<li><a className="linkContact" href="https://twitter.com/jesamineputri" target="_blank">Twitter</a></li>			
					</div>
				</div>
			</div>


		)
	}
}
export default Contact