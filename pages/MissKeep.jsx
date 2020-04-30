
import missKeepService from '../Apps/KeepApp/missKeepService.js'
import utilService from '../services/utilService.js'
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
        this.loadNotes()
    }

    addNote = (note) => {
        missKeepService.save(note)
            .then(() => {
                this.loadNotes()
            })
            .catch(err => {
            })
    }

    onToggleTodoLine = (noteId, todoId) => {
        missKeepService.toggleTodo(noteId, todoId)
        this.loadNotes()
    }
    addTodo = (todo) => {

        var todos = todo.info.NoteTodos
        var todoList = todos.split(',')
        var newTodoList = todoList.map((todo, idx) => {
            var newId = utilService.createTodoId()
            return { id: idx, txt: todo, doneAt: Date.now(), isDone: false }
        })
        todo.info.NoteTodos = newTodoList

        missKeepService.saveTodo(todo)
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
                {notes && <NotesAdd addtodo={this.addTodo} addnote={this.addNote} handleinput={this.handleInput} />}
                <div>
                    {notes && <NotesList todotoggleline={this.onToggleTodoLine} deleteNote={this.onDeleteNote} handleinput={this.handleInput} editNote={this.onEditNote} notes={notes} />}
                </div>
            </section>
        )
    }
}