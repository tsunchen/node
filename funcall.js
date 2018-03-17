// support many functions
module.exports = {

    // func3  
    foo3:function(res){
        console.log('foo3 has run');
        res.write('running foo3 on browser');
    },

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
