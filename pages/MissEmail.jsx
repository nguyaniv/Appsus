import mailService from '../Apps/MailApp/mailService.js'
import { MailList } from '../Apps/MailApp/mail-cmps/MailList.jsx'
import { MailCreate } from '../Apps/MailApp/mail-cmps/MailCreate.jsx'
import  MailDetails  from '../Apps/MailApp/mail-cmps/MailDetails.jsx'

export class MissEmail extends React.Component {
    state = {
        mails: null,
        selectedMail: null
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

    render() {
        const {selectedMail, mails } = this.state
        return (
            <section>
                <div>{selectedMail && <MailDetails mail={selectedMail} onBack={this.onClearSelected}></MailDetails>}</div>
                <div> {!selectedMail && <MailCreate onSaveMail={this.onSaveMail}></MailCreate>}</div>
                {!selectedMail && mails && <MailList onSelectMail={ this.onSelectMail } deleteMail={this.onDelete} mails={mails}></MailList>}
            </section>
        )
    }
}

        // onSetFilter() {

        // }