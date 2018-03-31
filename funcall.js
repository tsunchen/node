
var fs = require('fs');
// support many functions
module.exports = {

    readfileSync: function(path){

        var data = fs.readFileSync(path, 'utf-8');
        console.log(data);
        console.log("Sync called");
    },

    readfile: function(path){

        fs.readFile(path, function (err, data) {

            if (err) {
                console.log(err);
            } else {
                console.log(data.toString());
            }
        });
        console.log("ASync called");
    },

    // func3  
    foo3:function(resp){
        console.log('foo3 has run');
        resp.write('running foo3 on browser');
    },

    // func1
    foo1:function(resp){
        console.log('foo1 has run运行');
        resp.write('运行running foo1 on browser');
    },

    // func2  
    foo2:function(resp){
        console.log('foo2 has run');
        resp.write('running foo2 on browser');
    }

}

// support only one function
// module.exports = func2;
