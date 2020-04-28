
import missKeepService from '../Apps/KeepApp/missKeepService.js'
import NotesList from '../Apps/KeepApp/keep-cmps/NotesList.jsx'
import NotesAdd from '../Apps/KeepApp/keep-cmps/NotesAdd.jsx'
export class MissKeep extends React.Component {

    state = {
        notes: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        var notes = missKeepService.query()
        this.setState({ notes })
    }

    onDeleteNote = (id) => {
        missKeepService.deleteNote(id)
        this.loadNotes()
    }

    onEditNote = (id, editedTxt) => {
        missKeepService.editNote(id, editedTxt)
        console.log(id, editedTxt);
        this.loadNotes()
    }

    addNote = (note) => {
        missKeepService.save(note)
            .then(() => {
                this.loadNotes()
            })
            .catch(err => {
                console.log('OOPs', err);
            })
    }

    render() {
        const { notes } = this.state
        return (
            <section className="keep-notes">
                {notes && <NotesAdd addnote={this.addNote} handleinput={this.handleInput} />}
                <div>
                    {notes && <NotesList deleteNote={this.onDeleteNote} handleinput={this.handleInput} editNote={this.onEditNote} notes={notes} />}
                </div>
            </section>
        )
    }
}