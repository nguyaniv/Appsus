export default class NotePreview extends React.Component {

    state = {
        text: '',
    }

    editNote = () => {
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
                            </span>
                        </button>
                    </section>
                }

                {note && note.type === 'NoteImg' &&
                    <section className="keep-img-note">
                        <h2>{note.type}  </h2>
                        <img src={note.info.url} />
                        <br />
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>
                    </section>
                }

                {note && note.type === 'video' &&
                    <section className="keep-img-note">
                        <h2>{note.type}  </h2>
                        <video controls autoPlay src={note.info.url}> </video>
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>
                    </section>
                }

                {note && note.type === 'audio' &&
                    <section className="keep-img-note">
                        <h2>{note.type}  </h2>
                        <audio controls autoPlay src={note.info.url}> </audio>
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>
                    </section>
                }

                {note && note.type === 'youtube' &&
                    <section className="keep-img-note">
                        <h2>{note.type}  </h2>
                        <iframe width="560" height="315"
                            src={note.info.url} frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>
                    </section>
                }

                {

                    note && note.type === 'NoteTodos' &&
                    <section className="keep-todo">
                        <h2>{note.type}</h2>
                        {note.info.NoteTodos.map((todo, idx) => {
                            return <div key={idx}>
                                <p className={todo.isDone === true ? 'keep-line' : ''} onClick={() => {
                                    this.props.todotoggleline(note.id, todo.id)
                                }} >{todo.txt} </p>
                                <hr />
                            </div>
                        })}
                        <button onClick={() => this.props.deleteNote(note.id)}> <span className="keep-icon">
                            <i className="fas fa-trash-alt"></i>
                        </span></button>
                    </section>
                }
            </article >
        )
    }
}


