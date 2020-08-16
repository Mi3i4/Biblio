const Loader = require('./Loader');
const Book = require('./Book');

class BooksCollection {
    constructor(arr_of_str) {
        this.collection = [];
        this.createBooksList(arr_of_str);
        this.toString();
    }
    createBooksList(arr) {
        arr.forEach(item => this.collection.push(new Book(item)));
    }
    createBook(new_item) {
        this.collection.push(new Book(new_item));
    }
    deleteBook(id) {
        let book_to_delete = this.collection.filter(item => item.id === id);
        this.collection = this.collection.filter(item => item.id !== id);
        return book_to_delete;
    }
    toString() {
        let str = '';
        this.collection.forEach(item => {
            str += `${item.toString()}\n`;
        });
        return str;
    }
}

module.exports = BooksCollection;
