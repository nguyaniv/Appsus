import mailService from '../mailService.js'

export class MailCreate extends React.Component {
    state = {
        // bar: true,
        mail: {
            subject: '',
            body: ''
        }
    }

    componentDidMount() {
        if (this.props.mailId) {
            const mail = mailService.getById(this.props.mailId);
            this.setState({ mail })
            // this.setState({bar:false})
        }
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = target.value
        this.setState(prevState => {
            return {
                mail: {
                    ...prevState.mail,
                    [field]: value
                }
            }
        })
    }

    onSaveMail = (ev) => {
        ev.preventDefault()
        this.props.onSaveMail(this.state.mail)
        this.resetForm()
    }

    resetForm() {
        this.setState({ mail: { subject: '', body: '' } })
    }

    render() {
        const { mail } = this.state
        return (
            <div>
                <h1>add Email:</h1>
                <form onSubmit={this.onSaveMail}>
                    <label>Subject</label>
                    <input type="text" value={mail.subject} placeholder='subject' onChange={this.handleInput} name="subject" />
                    <label>Body</label>
                    <input type="text" value={mail.body} placeholder='body' onChange={this.handleInput} name="body" />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}




