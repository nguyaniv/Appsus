export default class MailDetails extends React.Component {

    componentDidMount() {
        this.props.openEmail(this.props.mail.id)
    }
    render() {
        
        const { mail, onBack } = this.props
        return (
            <div>
                <button onClick={ onBack }> X </button>
                <h2>Welcome to the { mail.subject } page!</h2>
                <p>Body - { mail.body }</p>
                <p>isRead?  {mail.isRead ? 'true' : 'false'}</p>
            </div>
        )
    }
}