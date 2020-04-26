
import missKeepService from '../services/missKeepService.js'
import NotesList from '../cmps/NotesList.jsx'
export class MissKeep extends React.Component {



    state = {
        notes: null
    }

    componentDidMount() {

        this.loadNotes()

    }


    loadNotes() {
        var notes = missKeepService.query()
        this.setState({ notes })
    }


    render() {
        const { notes } = this.state


        return (
            <div>
                {notes && <NotesList notes={notes} />}
            </div>

        )
    }
}