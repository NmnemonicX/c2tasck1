import { Container } from "inversify";
import { BookRepository } from "../book/book-repository";


const myContainer = new Container();

myContainer.bind(BookRepository).toSelf()

export { myContainer };
