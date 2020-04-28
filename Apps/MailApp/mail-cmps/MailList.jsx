import MailPreview from './MailPreview.jsx'

export function MailList(props) {
   
    return (
        <div>
            <h1>Emails:</h1>
            {props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} openEmail={props.openEmail} key={mail.id} onSelectMail={props.onSelectMail}></MailPreview>)}
        </div>
    )
}