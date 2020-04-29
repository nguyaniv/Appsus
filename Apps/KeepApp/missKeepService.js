

import utilService from '../../services/utilService.js'

export default {
    query,
    save,
    deleteNote,
    editNote,
    toggleTodo,
    saveTodo
}


var gNotes = [
    {
        id: 1,
        type: "NoteText",
        isPinned: true,
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: 2,
        type: "NoteImg",
        info: {
            url: "https://usercontent2.hubstatic.com/13931149_f1024.jpg",
            title: "Me playing Mi"
        },
        isPinned: true,

        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 3,
        type: "NoteTodos",
        isPinned: true,
        info: {
            label: "How was it:",
            NoteTodos: [
                { id: 0, txt: "Do that", isDone: false },
                { id: 1, txt: "Do this", isDone: false }
            ]
        }
    }
]




function save(noteToSave) {
    console.log('note to save:', noteToSave)

    if (noteToSave.id) {
        const noteIdx = _getIdxById(noteToSave.id)
        gNotes[noteIdx] = noteToSave;
    } else {
        noteToSave.id = utilService.makeId()
        noteToSave.createdAt = Date.now()
        gNotes.push(noteToSave)
    }

    var res = Promise.resolve(noteToSave)
    console.log(gNotes)

    return res;
}




function saveTodo(toDoSave) {
    console.log('note to save:', toDoSave)

    if (toDoSave.id) {
        const noteIdx = _getIdxById(toDoSave.id)
        gNotes[noteIdx] = toDoSave;
    } else {

        gNotes.push(toDoSave)
    }

    var res = Promise.resolve(toDoSave)
    console.log(gNotes)

    return res;
}


function getById(noteId) {
    const note = gNotes.find(note => note.id === noteId)
    return Promise.resolve(note);
}
function _getIdxById(noteId) {
    return gNotes.findIndex(note => note.id === noteId)
}

function _createNote(type, txt) {
    return {
        type,
        txt,
        id: utilService.makeId(),
        createdAt: Date.now()
    }
}


function deleteNote(id) {
    console.log('deleting from service');

    const idx = gNotes.findIndex(note => note.id === id)
    gNotes.splice(idx, 1)

}

function editNote(id, txt) {

    const note = gNotes.find(note => note.id === id)

    note.info.txt = txt
    console.log(note);

}


function toggleTodo(noteId, todoId) {
    const idx = gNotes.findIndex(note => note.id === noteId)
    var todo = gNotes[idx].info.NoteTodos[todoId]
    console.log(todo)

    if (todo.isDone === true) {

        todo.isDone = false
    }
    else if (todo.isDone === false) {
        todo.isDone = true
    }

    console.log(gNotes)
}


function query() {
    console.log(gNotes);

    return gNotes
}


