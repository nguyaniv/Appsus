

import utilService from '../../services/utilService.js'

export default {
    query,
    save,

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
        style: {
            backgroundColor: "#00d"
        }
    },
    {
        id: 3,
        type: "NoteTodos",
        info: {
            label: "How was it:",
            todos: [
                { id: 1, txt: "Do that", doneAt: null },
                { id: 2, txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
]




function save(noteToSave) {
    var savedNote = noteToSave;
    if (noteToSave.id) {
        const noteIdx = _getIdxById(noteToSave.id)
        gNotes[noteIdx] = noteToSave;
        // gCars.splice(carIdx, 1, car)
    } else {
        savedNote = noteToSave
        savedNote.id = utilService.makeId()
        savedNote.createdAt = Date.now()
        gNotes.push(savedNote)
    }

    var res = Promise.resolve(savedNote)
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

function query() {
    console.log(gNotes);

    return gNotes
}