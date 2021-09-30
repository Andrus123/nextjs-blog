import React from 'react'
import utilStyles from '../styles/utils.module.css'

function SocialButtons() {
    return (
        <div className={utilStyles.socialSection}>
            <a className={utilStyles.social}><img src="../images/github-brands.svg"/></a>
            <a className={utilStyles.social}><img src="../images/facebook-brands.svg"/></a>
            <a className={utilStyles.social}><img src="../images/linkedin-brands.svg"/></a>
            <a className={utilStyles.social}><img src="../images/envelope-solid.svg"/></a>
        </div>
    )
}

export default SocialButtons
