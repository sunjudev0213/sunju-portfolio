import React from "react"

import TelegramIcon from "@material-ui/icons/Telegram"
import GitHubIcon from "@material-ui/icons/GitHub"
import DiscordImg from "../../../assets/icons/discordIcon.svg"
import SkypeImg from "../../../assets/icons/skypeIcon.png"

import "./style.scss"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<h4>Follow me on social media</h4>
				<div className="footer__social-icons">
					<a
						href="https://github.com/sunshine0213"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<GitHubIcon className="social-icon" />
					</a>
					<a
						href="https://t.me/Sunshinee0213"
						target="_blank"
						rel="noopener noreferrer">
						<TelegramIcon className="social-icon" />
					</a>
					<a
						href="https://discord.com/channels/@sunshinee0213"
						target="_blank"
						rel="noopener noreferrer">
						<img className="social-icon" src={DiscordImg} alt="sunshine_discord"/>
					</a>
					<a
						href="https://join.skype.com/invite/rjAIQ4PS3kmI"
						target="_blank"
						rel="noopener noreferrer">
						<img className="social-icon" src={SkypeImg} alt="sunshine_skype" style={{width: "auto"}} />
					</a>
					{/* <a
						href="https://bikashxsharma.medium.com/"
						target="_blank"
						rel="noopener noreferrer">
						<span style={{fontSize: "20px"}}>Medium</span>
					</a> */}
				</div>
				<p>
					Designed and developed by sunshine. Built with React, Typescript.
				</p>
				<p>Copyright © Sun {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
