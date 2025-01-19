export const addNote = (data) => {
    return {
        type: 'ADD_NOTE',
        payload: data
    };
};
export const NoteBook = (data) => {
    return {
        type: "NOTE_BOOK",
        payload: data
    }
}
export const deleteNote = (id) => {
    return {
        type: "DELETE_NOTE",
        payload: id
    }
}
