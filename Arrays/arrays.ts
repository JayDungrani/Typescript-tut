type Book = {
    title : string
    author : string 
    cdn : number
}

let BookList :Book[]= []

BookList.push({title:"book_title", author:"book_author", cdn:123})

// **************************

let numList : Array<number> = []
numList.push(7)

// **************************

let listOfList : number[][] = [
    [255, 255, 255],
    [111, 111, 111]
]

export {}