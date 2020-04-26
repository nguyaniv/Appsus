import MailPreview from './MailPreview.jsx'

export function MailList(props) {
    return (
        <div>
            {console.log(props)
            }
            {
                props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} key={mail.id}></MailPreview>) // fix how to map it to be rendered
            }
        </div>
    )
}