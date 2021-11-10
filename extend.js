(function(){
    var initializing = false, 
    fnTest = /xyz/.test(function(){xyz;}) ? /\b_super\b/ : /.*/;

    this.Class = function(){};

     Class.extend = function(prop) {
         var _super = this.prototype,
         initizlizing = true;

         var prototype = new this();
         initializing = false;


         for(var name in prop) {
             prototype[name] = (
                typeof prop[name] === 'function' && 
                typeof _super[name] === 'function' && 
                fnTest.test(prop[name])
             ) ?
             (function(name, fn){
                return function() {
                  var tmp = this._super;
                   
                  // Add a new ._super() method that is the same method
                  // but on the super-class
                  this._super = _super[name];
                   
                  // The method only need to be bound temporarily, so we
                  // remove it when we're done executing
                  var ret = fn.apply(this, arguments);        
                  this._super = tmp;
                   
                  return ret;
                };
              })(name, prop[name]) :
              prop[name];
         }

         function Class() {
             if(!initializing && this.init) {
                 this.init.apply(this, arguments)
             }
         }

         Class.prototype = prototype;

         Class.prototype.constructor = Class;

         Class.extend = arguments.callee;

         return Class;
     }



})();