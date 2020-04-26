
export default {
    query
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
                {id:1, txt: "Do that", doneAt: null },
                {id:2, txt: "Do this", doneAt: 187111111 }
            ]
        }
    }
]



function query(){
    return gNotes
}