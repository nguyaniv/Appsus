export default function MailList(props) {
    const { mail } = props
    const isReadClass = mail.isRead ? 'read' : 'unread'
    return (
        <tr className={isReadClass} onClick={() => props.onSelectMail(props.mail)}>
            <td className="Sender">Sender</td>
            <td className="subject">{props.mail.subject}</td>
            <td className="Date">Date</td>
            <td><button onClick={() => props.deleteMail(props.mail.id)}>X</button></td>
        </tr>

    )
}
// return (
//     <div className="flex column single-email">
//         <div className={isReadClass} onClick={() => props.onSelectMail(props.mail)}>
//             <div className="flex space-around">
//                 <h1 className="flex grow" >{props.mail.subject}</h1>
//                 <button className="flex grow" onClick={() => props.deleteMail(props.mail.id)}>X</button>
//             </div>
//         </div>
//     </div>
// )




