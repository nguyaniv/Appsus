// Yom Haed Yiaya Po KOD
export default class MailDetails extends React.Component {

    render() {
        
        const { mail, onBack } = this.props
        console.log(mail);
        return (
            <div>
                <button onClick={ onBack }> X </button>
                <h2>Welcome to the { mail.subject } page!</h2>
                <p>Body - { mail.body }</p>
            </div>
        )
    }
}