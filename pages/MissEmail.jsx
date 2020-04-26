

import mailService from '../Apps/MailApp/mailService.js'
import { MailList } from '../Apps/MailApp/mail-cmps/MailList.jsx'

export class MissEmail extends React.Component {
    state = {
        mails: null
    }

    componentDidMount() {
        this.loadMails()
    }

    loadMails = () => {
        const mails = mailService.query()
        this.setState({ mails })
    }

    // onSetFilter() {

    // }
    onDelete = (id) => {
        mailService.deleteMail(id)
        this.loadMails()
    }

    render() {
        const { mails } = this.state
        return (
            <div>
                <h2>test3</h2>
                {
                    mails && <MailList deleteMail={this.onDelete} mails={mails}></MailList>
                }
            </div>
        )
    }

}