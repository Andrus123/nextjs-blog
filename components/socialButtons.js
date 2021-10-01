import React from 'react'
import utilStyles from '../styles/utils.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

const SocialButtons = () => {
    return (
        <div className={utilStyles.socialSection}>
            <a href="https://github.com/Andrus123" className={utilStyles.social} target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://twitter.com/andykee77" className={utilStyles.social} target="_blank"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="www.linkedin.com/in/andrés-aquin" className={utilStyles.social} target="_blank"><FontAwesomeIcon icon={faLinkedin}/></a>
            <a href="mailto:akaquin@umsa.bo" className={utilStyles.social} target="_blank"><FontAwesomeIcon icon={faGoogle}/></a>
        </div>
    )
}

export default SocialButtons

