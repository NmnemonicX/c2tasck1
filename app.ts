import { myContainer } from "./container";
import {BookRepository} from "./Repository";
import express  = require('express');

console.log("hello");

let book1 =new BookRepository()

console.log("book.getBooks()");
console.log(book1.getBooks()); //это без контейнера

class App2{

    public run(id:number){
        const repo = myContainer.get(BookRepository);
        const book = repo.getBook(id);
        return book
    }
    public getAll(){
        const repo = myContainer.get(BookRepository);
        const book = repo.getBooks();
        return book
    }

}

const app2= new App2()

console.log("вывод с контейнером");

console.log(app2.run(1))  //вариант с  контейнером


console.log("end");



const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json(app2.getAll());
});
app.get('/:id',(req, res, next) => { //вариант с  контейнероми express - ом
    const {id} = req.params;
    const id_number = +id;
   
    res.json(app2.run(id_number));
    
})


app.listen(PORT, () => {
    console.log(`Express with Typescript! http://localhost:${PORT}`);
});





