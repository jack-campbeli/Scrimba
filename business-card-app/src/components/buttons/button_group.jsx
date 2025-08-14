import EmailButton from './email_button'
import LinkedInButton from './linkedin_button'

function ButtonGroup() {
    return (
        <div className="button-group d-flex gap-2 justify-content-center">
            <EmailButton />
            <LinkedInButton />
        </div>
    )
}

export default ButtonGroup;