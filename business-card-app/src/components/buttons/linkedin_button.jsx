import linkedinIcon from '../../assets/linkedin.svg'

function LinkedInButton() {
    return (
        <button className="btn btn-primary d-flex align-items-center gap-2">
            <img src={linkedinIcon} alt="LinkedIn" style={{width: '16px', height: '16px', display: 'block', flexShrink: 0}} />
            LinkedIn
        </button>
    )
}

export default LinkedInButton;