export default function MailList(props) {
    
    const { mail } = props
    const isReadClass = mail.isRead ? 'read':'unread'
    return (
        <div className= {isReadClass}>
            <h1 onClick={() =>  props.onSelectMail(props.mail)} >{props.mail.subject}</h1>
            <button onClick={() => props.deleteMail(props.mail.id)}>X</button>
        </div>
    )
}

