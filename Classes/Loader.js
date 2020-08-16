const fs = require('fs');

class Loader {
    constructor(path) {
        this.path = path;
    }
    load() {
        let data = fs.readFileSync(this.path, 'utf-8');
        return data.split('\n').splice(1, data.length);
    }
    save(str) {
        fs.writeFileSync(this.path, str, 'utf-8');
    }
}

module.exports = Loader;
