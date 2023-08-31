import React from "react"

import Skill from "./Skill"
import figmaIcon from "assets/icons/figma"
import reactIcon from "assets/icons/react-icon"
import nodeIcon from "assets/icons/node"
import sassIcon from "assets/icons/sass"
import pythonIcon from "assets/icons/python"
import uxIcon from "assets/icons/ux"
import "./style.scss"

function Skills() {
	return (
		<div id="skills" className="skills">
			<div className="skills__container">
				<div className="section__title">
					<h3>My skill set</h3>
				</div>
				<div className="skills__lists">
					<Skill
						name="Front-end"
						detail="React, Next, Typescript, Redux, Context, Redux thunk, Angular, Vue, Vuex, Gatsby, Responsive, Pixel Perfect"
						icon={reactIcon}
					/>
					<Skill
						name="Back-end + DevOps"
						detail="Node, Express, Django, Laravel, Symfony, CI, SQL, NoSQL, Docker, Google Cloud, Kubernetes"
						icon={nodeIcon}
					/>
					<Skill
						name="Style/Library"
						detail="CSS, SASS, LESS, Material UI, Vuetify, Bootstrap"
						icon={sassIcon}
					/>
					<Skill
						name="UX/UI"
						detail="Research, user journey, wireframe, prototype, interaction, test"
						icon={uxIcon}
					/>
					<Skill
						name="Additional"
						detail="Python, PHP,Socket.io, Git, Shopify, WordPress, WIX"
						icon={pythonIcon}
					/>
					<Skill
						name="Tools"
						detail="Figma, XD, Draw.io, Adobe suite, Jira, Intercom, Postman, Lens"
						icon={figmaIcon}
					/>
				</div>
			</div>
		</div>
	)
}

export default Skills
