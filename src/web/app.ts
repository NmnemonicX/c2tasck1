import { myContainer } from "../infrastructure/container";
import {BookRepository} from "../book/book-repository";
import express  = require('express');

console.log("hello");

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





