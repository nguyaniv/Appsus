export default function MailList(props) {
    const { mail } = props
    return (
        <div>
            <h1 onClick={() => props.onSelectMail(props.mail)} >{props.mail.subject}</h1>
            <button onClick={() => props.deleteMail(props.mail.id)}>X</button>
        </div>
    )
}