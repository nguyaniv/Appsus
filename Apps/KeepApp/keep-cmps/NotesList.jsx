import NotePreview from './NotePreview.jsx'

export default function NotesList(props) {
    var notes = props.notes
    console.log(props.editNote)
    
    return (
        <div className="keep-notes-list">
            {notes.map(note =>
                 <NotePreview todotoggleline={props.todotoggleline} key={note.id} note={note} editNote={props.editNote} deleteNote={props.deleteNote} />)}
        </div>
    )
}