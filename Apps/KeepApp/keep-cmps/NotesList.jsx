import NotePreview from './NotePreview.jsx'

export default function NotesList(props) {
    // console.log(props.notes[0].info)
    var notes = props.notes
    return (

        <div className="keep-notes-list">

            {notes.map(note =>
                 <NotePreview key={note.id} note={note} />)}

            {/* {props && <h2>{props.notes[0].info}</h2>} */}
        </div>
    )
}