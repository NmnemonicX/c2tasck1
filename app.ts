

interface IBook {
    id: number;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
    fileBook: string;
}

class BookRepository {

    books:IBook[] ;

    createBook(book:IBook){
        this.books.push(book);
    }
    getBook(id:number){
        return this.books.find(book=>book.id===id)
    }
    getBooks(){
        return this.books
    }
    updateBook(book:IBook){
        let updateitem = this.books.find(z=>z.id===book.id)
        let index = this.books.indexOf(updateitem)

        this.books[index]=book
        return this.books[index]
    }
    deleteBook(id:number){
        let deletitem = this.books.find(z=>z.id===id)
        let index = this.books.indexOf(deletitem)
        let deleItems = this.books.splice (index, 1);
        return this.books
    }

}







