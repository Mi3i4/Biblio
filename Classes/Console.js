const readline = require('readline');

class Console {
     getNewBookFromConsole() {
         //TODO вынести rl в класс
         //TODO внутри функции возвр Promise
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: 'welcome (text + to add a new book)> '
        });
        rl.prompt();
        const new_book = rl.on('line', (line) => {
            switch(line.trim()) {
                case '+':
                    rl.question('Чтобы добавить книгу укажите через `;` - id; name; author; - ', (answer) => {
                        //TODO вызывать resolve от Promise
                        return answer;
                    })
                    break;
                default:
                    console.log('text + to add a new book');
                    break;
            }
            rl.prompt();
        }).on('close', () => {
            console.log('Have a great day!');
            process.exit(0);
        });
    }
}

const cnsl = new Console();
console.log(cnsl.getNewBookFromConsole());
module.exports = Console;

