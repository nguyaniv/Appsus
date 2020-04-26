export default function NotePreview(props) {
    const { note } = props


    return (
        <article className="note-preview">

            {note && note.type === 'NoteText' &&
                <section className="keep-note-txt">


                    <h2>{note.type}  </h2>
                    <p>{note.info.txt}</p>

                </section>
            }


            {note && note.type === 'NoteImg' &&


                <section className="keep-img-note">
                    {console.log(note.info.url)}
                    <h2>{note.type}  </h2>
                    <img src={note.info.url}  />

                </section>
            }


            {note && note.type === 'NoteTodos' &&
                <section className= "keep-todo">
                    <h2>{note.type}</h2>

                    {note.info.todos.map((todo) => {
                        return <div key={todo.id}>
                            {console.log(todo.txt)}
                            <p>{todo.txt}</p>
                        </div>

                    })}

                </section>
            }
        </article>
    )
}
