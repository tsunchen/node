
// support many functions
module.exports = {

    // func1
    foo1:function(res){
        console.log('foo1 has run');
        res.write('running foo1 on browser');
    },

    // func2  
    foo2:function(res){
        console.log('foo2 has run');
        res.write('running foo2 on browser');
    }

}

// support only one function
// module.exports = func2;
