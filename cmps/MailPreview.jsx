export default function MailList(props) {
 
    return (

        <div>
            <h1>{props.mail.subject}<button onClick={() => props.deleteMail(props.mail.id)}>X</button></h1>
        </div>
    )
}