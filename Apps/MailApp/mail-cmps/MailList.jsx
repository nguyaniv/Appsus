import MailPreview from './MailPreview.jsx'

export function MailList(props) {
    return (
        <div>
            {
                props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} key={mail.id} onSelectMail={ props.onSelectMail }></MailPreview>) // fix how to map it to be rendered
            }
        </div>
    )
}