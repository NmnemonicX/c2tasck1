import { Container } from "inversify";
import { BookRepository } from "./Repository";


const myContainer = new Container();

myContainer.bind(BookRepository).toSelf()

export { myContainer };
