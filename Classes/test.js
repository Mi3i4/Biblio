// function test(callback) {
//     console.log('test');
//     console.log(callback());
// }
//
// console.log(test(() => {
//     return '1234';
// }));

function foo() {
    console.log('bar');
    console.log(function (){
        return '123';
    }());
}

console.log(foo(() => {
    return 'foo-bar';
}));
