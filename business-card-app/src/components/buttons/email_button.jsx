import envelopeIcon from '../../assets/mail.svg'

function EmailButton() {
    return (
        <button className="btn btn-light d-flex align-items-center gap-2">
            <img src={envelopeIcon} alt="Email" style={{width: '16px', height: '16px', display: 'block', flexShrink: 0}} />
            Email
        </button>
    )
}

export default EmailButton;