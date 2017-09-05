var module = angular.module('serviceMod', []);

module.provider('testProvider', function(){
    this.value = "My value";
    this.setValue = function(newVal){
        this.value = newVal;
    }
    console.log('execute test provider');
    this.$get = function(){
        return this.value;
    }
})


/*module.factory('testProvider', function(){
    console.log("test Factory execution time");
    return new function(){
        this.getValue = function(){
            return "testObj return";
        }
    };
});*/

/*module.service('testProvider', function(){
    console.log('service declared');
    this.getValue = function(){
        return "testObj return";
    };
});*/
module.controller('serviceCntl', function(testProvider){
    console.log("test provider = "+ testProvider);
});

module.controller('serviceCntl2', function(testProvider){
    console.log("test provider2 = "+ testProvider);
});

// provider can be accessed in the configuration phase
module.config(function(testProviderProvider){
   testProviderProvider.setValue('new value');
});