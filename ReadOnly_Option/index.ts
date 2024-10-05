type User = {
    readonly _id : string //will give error for updating _id
    name : string
    email : string
    address ?: string //? before : is used for optional which will allow even if we don't define address
}

let user1: User ={
    _id : "123",
    name : "JD",
    email : "Jd@emal.com"
}

user1.name = "DJ" //This will work
user1._id = "321" //This will give error because of readonly