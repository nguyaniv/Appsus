export default function NotePreview(props) {
    const { note } = props


    return (
        <article className="note-preview">

            {note && note.type === 'NoteText' &&
                <section>

                    
                    <h2>{note.type}  </h2>
                    <p>{note.info.txt}</p>

                </section>
            }


            {note && note.type === 'NoteImg' &&


                <section>
                    {console.log(note.info.url)}
                    <h2>{note.type}  </h2>
                    <img src={note.info.url} alt="" />

                </section>
            }


            {note && note.type === 'NoteTodos' && 
                <section>
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
