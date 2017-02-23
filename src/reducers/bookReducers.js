
export default (state=[], action ) => {
    switch (action.type) {
        case 'CREATE_BOOK':
             return [
                    ...state,
                    Object.assign({}, action.book)
                ];
         case 'EDIT' :
         
         state.map(book=>{
             if (book.id === action.id) {
             console.log('same')
         }
         })

            return state.map(book =>
                book.id === action.id ?
                { ...book, title: action.book.title, desc:action.book.desc } :
                book
            )
    
        default:
            return state;   
    }
};