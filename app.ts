import { myContainer } from "./container";
import {BookRepository} from "./Repository"


console.log("hello");

let book1 =new BookRepository()

console.log("book.getBooks()");
console.log(book1.getBooks()); //это без контейнера

class App{

    public run(){
        const repo = myContainer.get(BookRepository);
        const book = repo.getBook(1);     
        return book
    }

}


const app= new App()

console.log("вывод с контейнером");

console.log(app.run())  //это с  контейнером


console.log("end");







