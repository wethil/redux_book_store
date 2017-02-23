var bookId =0;
export const createBook = (book) => {
    return {
        type : 'CREATE_BOOK',
        book: book,
        id:book.id
    };
};

export const edit = (book) => {
    return {
        type : 'EDIT',
        book: book,
        id:book.id
    };
};

