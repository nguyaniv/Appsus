import mailService from '../Apps/MailApp/mailService.js'
import { MailList } from '../Apps/MailApp/mail-cmps/MailList.jsx'
import { MailCreate } from '../Apps/MailApp/mail-cmps/MailCreate.jsx'
import MailDetails from '../Apps/MailApp/mail-cmps/MailDetails.jsx'

export class MissEmail extends React.Component {
    state = {
        mails: null,
        selectedMail: null,
        isAddClick: false
    }

    componentDidMount() {
        this.loadMails()
    }

    onSaveMail = (mail) => {
        mailService.save(mail)
        this.loadMails()
    }

    loadMails = () => {
        const mails = mailService.query()
        this.setState({ mails })
    }

    onDelete = (id) => {
        mailService.deleteMail(id)
        this.loadMails()
    }
    onSelectMail = (selectedMail) => {
        // call function in the service that will change the isRead
        this.setState({ selectedMail })
    }

    onClearSelected = () => {
        this.setState({ selectedMail: null })
    }

    onOpenEmail = (id) => {
        mailService.setAsRead(id);
        this.loadMails()
    }
    toggleAddMail = () => {
        this.setState(prevState => (
            { isAddClick: !prevState.isAddClick }
        ))
    }

    render() {
        const { selectedMail, mails, isAddClick } = this.state
        return (
            <section className="flex">
                <div className="flex column control-menu">
                    <button onClick={this.toggleAddMail}>Compose</button>
                    <button>Sent</button>
                    <button>Trash</button>
                </div>
                <div className="email-container">
                    <div>{selectedMail && <MailDetails mail={selectedMail} onBack={this.onClearSelected} openEmail={this.onOpenEmail} ></MailDetails>}</div>
                    <div> {isAddClick && !selectedMail && <MailCreate onSaveMail={this.onSaveMail}></MailCreate>}</div>
                    <div>{!selectedMail && mails && <MailList onSelectMail={this.onSelectMail} deleteMail={this.onDelete} mails={mails}></MailList>} </div>
                </div>
            </section >
        )
    }
}

        // onSetFilter() {

        // }