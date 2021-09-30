import React from 'react'
import utilStyles from '../styles/utils.module.css'

function SocialButtons() {
    return (
        <div className={utilStyles.socialSection}>
            <a href="https://github.com/Andrus123" className={utilStyles.social}><img src="../images/github-brands.svg"/></a>
            <a className={utilStyles.social}><img src="../images/facebook-brands.svg"/></a>
            <a href="https://www.linkedin.com/in/andr%C3%A9s-aquin-43a122141/" className={utilStyles.social}><img src="../images/linkedin-brands.svg"/></a>
            <a href="akaquin@umsa.bo" className={utilStyles.social}><img src="../images/envelope-solid.svg"/></a>
        </div>
    )
}

export default SocialButtons
