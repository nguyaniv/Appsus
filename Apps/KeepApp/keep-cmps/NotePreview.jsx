
export default class NotePreview extends React.Component {

    state = {
        text: ''
    }

    editNote = () => {
        console.log('id:', this.props.note.id);
        console.log('txt:', this.state.text);
        this.props.editNote(this.props.note.id, this.state.text)
    }


    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState({ text: value })
    }


    render() {
        const { note } = this.props
        return (
            <article className="note-preview">
                {note && note.type === 'NoteText' &&
                    <section className="keep-note-txt">
                        <h2>{note.type}  </h2>
                        <p>{note.info.txt}</p>
                        <button onClick={() => this.props.deleteNote(note.id)}>
                            <span className="keep-icon">
                                <i className="fas fa-trash-alt"></i>
                            </span>
                        </button>


                        <input type="text" onChange={this.handleInput} />
                        <button onClick={this.editNote}>
                            <span className="keep-icon">
                                <i className="fas fa-edit"></i>
                            /</span>
                        </button>

                    </section>
                }

                {note && note.type === 'NoteImg' &&
                    <section className="keep-img-note">
                        <h2>{note.type}  </h2>
                        <img src={note.info.url} />
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>
                    </section>
                }

                {note && note.type === 'NoteTodos' &&
                    <section className="keep-todo">
                        <h2>{note.type}</h2>
                        {note.info.todos.map((todo) => {
                            return <div key={todo.id}>
                                {console.log(todo.txt)}
                                <p className="keep-line" >{todo.txt}</p>
                            </div>
                        })}
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>

                    </section>
                }
            </article>
        )
    }
}
