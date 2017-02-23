
export default (state=[], action ) => {
    switch (action.type) {
        case 'CREATE_BOOK':
             return [
                    ...state,
                    Object.assign({}, action.book)
                ];
         case 'EDIT' :
                    return state.map(book =>
        book.id === action.id ?
          { ...book, desc: 'edited' } :
          book
      )
    
        default:
            return state;   
    }
};