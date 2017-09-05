var module = angular.module('serviceMod', []);

/*module.provider('testProvider', function(){
    this.value = "My value";
    this.setValue = function(newVal){
        this.value = newVal;
    }
    console.log('execute test provider');
    this.$get = function(){
        return this.value;
    }
})*/


/*function Person(name){
    this.name = name;
}

module.factory('testProvider', function(){
    console.log("test Factory execution time");
    //use constructor argument for setting up value which cannot be done at services
    return new Person('mostafa');
});*/

/*module.service('testProvider', function(){
    console.log('service declared');
    this.getValue = function(){
        return "testObj return";
    };
});*/

// just to returning a litaral value dont use factory, use value
module.value('testProvider', 'print me value');

// constant can be set for once after initialization and can be accessed from the config phase
module.constant('testProvider', 'print me constant');

module.controller('serviceCntl', function(testProvider){
    console.log("test provider = "+ testProvider.name);
});

module.controller('serviceCntl2', function(testProvider){
    console.log("test provider2 = "+ testProvider.name);
});

// provider can be accessed in the configuration phase
/*
module.config(function(testProviderProvider){
   testProviderProvider.setValue('new value');
});*/
