var module = angular.module('serviceMod', []);

/*module.provider('testProvider', function(){
    console.log('execute test provider');
    this.$get = function(){
        return "Test Value";
    }
})*/


/*module.factory('testProvider', function(){
    console.log("test Factory execution time");
    return new function(){
        this.getValue = function(){
            return "testObj return";
        }
    };
});*/

module.service('testProvider', function(){
    console.log('service declared');
    this.getValue = function(){
        return "testObj return";
    };
});
module.controller('serviceCntl', function(testProvider){
    console.log("test provider = "+ testProvider.getValue());
});

module.controller('serviceCntl2', function(testProvider){
    console.log("test provider2 = "+ testProvider.getValue());
});