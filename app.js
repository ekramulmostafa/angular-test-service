var module = angular.module('serviceMod', []);

/*module.provider('testProvider', function(){
    console.log('execute test provider');
    this.$get = function(){
        return "Test Value";
    }
})*/

module.factory('testProvider', function(){
    console.log("test Factory execution time");
    return "Test Value";
})

module.controller('serviceCntl', function(testProvider){
    console.log("test provider = "+ testProvider);
});

module.controller('serviceCntl2', function(testProvider){
    console.log("test provider2 = "+ testProvider);
});