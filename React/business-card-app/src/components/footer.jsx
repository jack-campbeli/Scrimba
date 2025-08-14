import twitterIcon from '../assets/footer/Twitter Icon.svg'
import facebookIcon from '../assets/footer/Facebook Icon.svg'
import instagramIcon from '../assets/footer/Instagram Icon.svg'
import githubIcon from '../assets/footer/GitHub Icon.svg'

function Footer() {
    return (
        <div className="footer">
            <img src={twitterIcon} alt="Twitter" />
            <img src={facebookIcon} alt="Facebook" />
            <img src={instagramIcon} alt="Instagram" />
            <img src={githubIcon} alt="GitHub" />
        </div>
    )
}

export default Footer;