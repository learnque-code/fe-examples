function outer() {
    var outer = 10;

    function inner() {
        console.log(outer);
    }

    inner();
}

outer();