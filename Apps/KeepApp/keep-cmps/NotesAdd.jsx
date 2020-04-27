
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
                            <option value="todo">todo</option>
                        </select>
                        <button>Add</button>
                    </form>

                }


                {/* 2nd type img */}


                {this.state.type === 'NoteImg' &&

                    <div className="div">
                        <h2>sdsds</h2>
                    </div>







                }

                {/* 3rd type todo */}

            </div>
        )
    }
}