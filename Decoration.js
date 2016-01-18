/**
 * Created by GB115151 on 18/01/2016.
 */

//    required jQuery
var decoratorApp = decoratorApp || {};
/* define the objects we're going to use*/
decoratorApp = {
    defaults:{
        validate: false,
        limit: 5,
        name: "foo",
        welcome: function(){
            //console.log('welcome!');
        }
    },
    options:{
        validate: true,
        name: "bar",
        helloWorld: function(){
            //console.log('hello');
        }
    },
    settings:{},
    printObj: function(obj) {
        var arr = [];
        $.each(obj, function(key, val) {
            var next = key + ": ";
            next += $.isPlainObject(val) ? printObj(val) : val;
            arr.push( next );
        });
        return "{ " +  arr.join(", ") + " }";
    }

}
/* merge defaults and options, without modifying defaults */
decoratorApp.settings = $.extend({}, decoratorApp.defaults,decoratorApp.options);
/* what we've done here is decorated defaults in a way that provides access to the properties and functionality it has to offer (as well as that of the decorator 'options'). defaults itself is left unchanged*/
$('#log').append("<div><b>settings -- </b>" + decoratorApp.printObj(decoratorApp.settings) + "</div><div><b>options -- </b>" + decoratorApp. printObj(decoratorApp.options) + "</div><div><b>defaults -- </b>" +decoratorApp.printObj(decoratorApp.defaults) + "</div>" );
/*
 settings -- { validate: true, limit: 5, name: bar, welcome: function (){ console.log('welcome!'); }, helloWorld: function (){ console.log('hello!'); } }
 options -- { validate: true, name: bar, helloWorld: function (){ console.log('hello!'); } }
 defaults -- { validate: false, limit: 5, name: foo, welcome: function (){ console.log('welcome!'); } }
 */