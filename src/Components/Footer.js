import React from 'react'
import './Footer.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';

function Footer() {
    return (
        <div className='footer'>
            <p className="footer-title">Sophia</p>
            <div className="footer-social">
                <a href="https://www.linkedin.com/" className="footer-icon"><LinkedInIcon/></a>
                <a href="#home" className="footer-icon"><TelegramIcon/></a>
                <a href="https://twitter.com/" className="footer-icon"><TwitterIcon/></a>
                <a href="https://github.com/" className="footer-icon"><GitHubIcon/></a>
            </div>
            <p className='footer-copyright'>&#169; 2020 copyright all right reserved</p>
        </div>
    )
}

export default Footer
