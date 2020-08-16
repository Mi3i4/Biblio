const BooksCollection = require('./Classes/BooksCollection.js');
const Loader = require('./Classes/Loader.js');
const path = require('path');

class Main {
    static init() {
        const csvFilePath = path.join(__dirname, './DB/books_DB.csv');
        const loader = new Loader(csvFilePath);
        const list = new BooksCollection(loader.load());
        // console.log(list.deleteBook('8').toString());
        console.log(list.collection.toString());
        // console.log(loader.save(list.collection.toString()))
    }
}
Main.init();
