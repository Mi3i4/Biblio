const Loader = require('./Loader');

class Book {
    constructor(str) {
        const arr = str.split(';');
        this.id = arr[0];
        this.name = arr[1];
        this.author = arr[2];
        this.date_rent = arr[3];
        this.days_to_return = arr[4];
    }
    toString() {
        return `${this.id};${this.name};${this.author};${this.date_rent};${this.days_to_return}`;
    }
}

// Book.toStr();
module.exports = Book;
