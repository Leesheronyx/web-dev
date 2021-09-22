//callBack_Funtion;
function test (lang, hi) {
    (console.log(`я учу ${lang}`));
    hi();
}
test('javascript', function() {
    console.log('privet mir');
});

function test (lang, hi) {
    (console.log(`я учу ${lang}`));
    hi();
}

function a() {
    console.log('privet dodik');
}

test('javascript', a);

let num = '12.0px';
console.log(parseInt(num), typeof(num));