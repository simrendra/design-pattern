const Foo = (function() {
    let instance;
    const getInstance = function() {
        if(!instance) {
        instance =  function() {
            this.foo = 1
        }
    }
    return instance;

    }
    return getInstance
 
})()

// Example usage
var foo1 = new Foo()
var foo2 = new Foo()

console.log(foo1 === foo2)