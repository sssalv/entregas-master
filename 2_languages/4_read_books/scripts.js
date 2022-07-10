// Read Books

const books = [ 
    {title: "Harry Potter y la piedra filosofal", isRead: true}, 
    {title: "Canción de hielo y fuego", isRead: false}, 
    {title: "Devastación", isRead: true}, 
]; 

const isBookRead = (books,titleToSearch) => {
    const bookCheck = books.find(e => e.title === titleToSearch) ?? false
    return bookCheck.isRead === true ? true : false 
}

console.log(isBookRead(books, "Devastación"))
console.log(isBookRead(books, "Canción de hielo y fuego"))
console.log(isBookRead(books, "Los Pilares de la Tierra"))