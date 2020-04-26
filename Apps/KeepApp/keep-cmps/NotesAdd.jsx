import missKeepService from '../missKeepService.js'

export default class NotesAdd extends React.Component {

    state = {
        info: {
            txt:''
        },
        type: 'NoteText'
    }

    handleInput = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? +target.value : target.value
        this.setState(prevState => {
            return {
                info: {...prevState.info,
                    [field]: value}
            }
        })
    }

    handleChangeType=(ev)=>{
           this.setState({type:ev.target}) 
    }




    onSaveNote = (ev) => {
        ev.preventDefault()
        console.log(this.state)
       this.props.addnote(this.state) 
       

    }


    render() {

        return (
            <div>
                <form onSubmit={this.onSaveNote}>
                <span>add a note:</span><input onChange={this.handleInput} type="text" name="txt" />
                <select name="type" value={this.state.type} onChange={this.handleChangeType}>
                    <option value="NoteText">txt</option>
                    <option value="image">image</option>
                    <option value="todo">todo</option>
                </select>
                <button>Add</button>
                </form>
            </div>

        )
    }
}