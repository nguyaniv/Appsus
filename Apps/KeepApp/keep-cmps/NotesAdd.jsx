
export default class NotesAdd extends React.Component {

    state = {
        info: {
            txt: ''
        },
        type: 'NoteText'
    }



    handleChangeType = (ev) => {
        this.setState({ type: ev.target.value })
        console.log(this.state);



    }

    onSaveNote = (ev) => {
        ev.preventDefault()
        this.props.addnote({ ...this.state })
        ev.target.reset()
    }


    onAddTodo = (ev) => {
        ev.preventDefault()
        this.props.addtodo({...this.state})
    }



    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState(prevState => {
            return {
                info: {
                    ...prevState.info,
                    [field]: value
                }
            }
        })
    }

    render() {

        return (
            <div>
                {/* first type text */}
                {this.state.type === 'NoteText' &&
                    <form className="keep-form" onSubmit={this.onSaveNote}>
                        <span>add a note:</span><input onChange={this.handleInput} type="text" name="txt" />
                        <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                            <option value="NoteText">txt</option>
                            <option value="NoteImg">image</option>
                            <option value="NoteTodos">todo</option>
                            <option value="video">video</option>
                            <option value="youtube">youtube</option>
                            <option value="audio">audio</option>
                        </select>
                        <button className="keep-btn">Add</button>
                    </form>

                }


                {/* 2nd type img */}


                {this.state.type === 'NoteImg' &&

                    <form className="keep-form" onSubmit={this.onSaveNote}>
                        <span>add an image URL:</span><input onChange={this.handleInput} type="text" name="url" />
                        <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                            <option value="NoteText">txt</option>
                            <option value="NoteImg">image</option>
                            <option value="NoteTodos">todo</option>
                            <option value="video">video</option>
                            <option value="youtube">youtube</option>
                            <option value="audio">audio</option>
                        </select>
                        <button className ="keep-btn">Add</button>
                    </form>

                }


                {this.state.type === 'video' &&

                    <form className="keep-form" onSubmit={this.onSaveNote}>
                        <span>add an video URL:</span><input onChange={this.handleInput} type="text" name="url" />
                        <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                            <option value="NoteText">txt</option>
                            <option value="NoteImg">image</option>
                            <option value="NoteTodos">todo</option>
                            <option value="video">video</option>
                            <option value="youtube">youtube</option>
                            <option value="audio">audio</option>
                        </select>
                        <button className ="keep-btn">Add</button>
                    </form>

                }



                {this.state.type === 'audio' &&

                    <form className="keep-form" onSubmit={this.onSaveNote}>
                        <span>add an audio URL:</span><input onChange={this.handleInput} type="text" name="url" />
                        <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                            <option value="NoteText">txt</option>
                            <option value="NoteImg">image</option>
                            <option value="NoteTodos">todo</option>
                            <option value="video">video</option>
                            <option value="youtube">youtube</option>
                            <option value="audio">audio</option>
                        </select>
                        <button className ="keep-btn">Add</button>
                    </form>

                }


                {this.state.type === 'youtube' &&

                    <form className="keep-form" onSubmit={this.onSaveNote}>
                        <span>add youtube <strong>embed</strong> URL:</span><input onChange={this.handleInput} type="text" name="url" />
                        <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                            <option value="NoteText">txt</option>
                            <option value="NoteImg">image</option>
                            <option value="NoteTodos">todo</option>
                            <option value="video">video</option>
                            <option value="youtube">youtube</option>
                            <option value="audio">audio</option>
                        </select>
                        <button className ="keep-btn">Add</button>
                    </form>

                }

                {/* 3rd type todo */}


                {this.state.type === 'NoteTodos' &&

                    <form className="keep-form" onSubmit={this.onAddTodo}>
                        <span>add a todo:</span><input onChange={this.handleInput} placeholder="pliz enter your todo sepereted by comma" type="text" name="NoteTodos" />
                        <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                            <option value="NoteText">txt</option>
                            <option value="NoteImg">image</option>
                            <option value="NoteTodos">todo</option>
                            <option value="video">video</option>
                            <option value="youtube">youtube</option>
                            <option value="audio">audio</option>
                        </select>
                        <button className ="keep-btn">Add</button>
                    </form>

                }

                {/* take string from input */}
                {/* make split with , */}
                {/* save it to obj */}


            </div>
        )
    }
}