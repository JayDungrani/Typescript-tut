type Book = {
    title : String;
    author : String;
    code : Number
}

function createBook(book:Book): Book{
    return book
}

createBook({title:"title", author:"author", code:3 })


export {}