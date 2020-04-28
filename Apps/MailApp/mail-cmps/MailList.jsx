import MailPreview from './MailPreview.jsx'

export function MailList(props) {

    return (
        <table>
            <tbody className="">
                {props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} openEmail={props.openEmail} key={mail.id} onSelectMail={props.onSelectMail}></MailPreview>)}
            </tbody>
        </table>
    )
}

{/* <div className="flex column">
            {props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} openEmail={props.openEmail} key={mail.id} onSelectMail={props.onSelectMail}></MailPreview>)}
        </div> */}

{/* <table>
<tbody className="">
    {props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} openEmail={props.openEmail} key={mail.id} onSelectMail={props.onSelectMail}></MailPreview>)}
</tbody>
</table> */}
{/* <div className="email-list">
<table className="">
    <tbody>

        {props.mails.map(mail => <MailPreview mail={mail} deleteMail={props.deleteMail} openEmail={props.openEmail} key={mail.id} onSelectMail={props.onSelectMail}></MailPreview>)}
    </tbody>
</table >
</div> */}


