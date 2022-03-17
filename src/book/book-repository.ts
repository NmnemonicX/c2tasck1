
import { injectable, inject } from "inversify";
import "reflect-metadata";

import {IBook} from "./book-interface"


@injectable()
export class BookRepository {

    books: Array<IBook> ;

    constructor() {
        this.books= [
            {
                id: 1,
                title: "windows guru",
                description: "for users",
                authors: "i am",
                favorite: "what",
                fileCover: "Cover",
                fileName: "win1.doc",
                fileBook:""
            },
            {
                id: 2,
                title: "linux guru",
                description: "for admins",
                authors: "and me",
                favorite: "aaa",
                fileCover: "Cover2",
                fileName: "lnx.doc",
                fileBook:""

            }
        ]


    }


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

