'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;


/** typeOf: Takes any value and returns the values data type as a string.
*  @param {any value} anything: any value
*  @returns {String} Return a string with the data type.
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

function typeOf(anything){
    if(Array.isArray(anything)){
        return 'array';
    }else if(anything === null){
        return 'null';
    }else{
        return typeof anything;
    }
};

module.exports.typeOf = typeOf;

/** identity : Returns any value unchanged.
* @param {any value} anything: any value
* @returns {value} value unchanged.
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

function identify(anything) {
    return anything;
}
module.exports.identify = identify;

/**
 * first: Prints the first 'x' number of elements in an array. If an array isnt' passed
 * returns an empty array. If a number isn't passed returns the first element in the array.
 * @param {Array} arr: The array over which to iterate.
 * @param {Number} num: The number of places in array to return.
 * @returns {Array}: Returns an array of 'x' elements, an empty array, or the first element of the array.
 * Examples:
 *   _.first("ponies", 1) -> []
 *   _.first(["a", "b", "c"], "ponies") -> "a"
 *   _.first(["a", "b", "c"], 1) -> "a"
 *   _.first(["a", "b", "c"], 2) -> ["a", "b"]
 */

 function first(arr,num){
    let output = []
    if(Array.isArray(arr) === false){
        return [];
    }else if(num === undefined || typeof num !== 'number'){
        return arr[0];
    }else if(num > arr.length){
        return arr;
    }else{
        for(let i = 0; i < num; i++){
            output.push(arr[i]);
        }
    }
    return output;
}

module.exports.first = first;

/**
 * last: Iterates through an array and return the last 'x' number of elements.
 * If an array isn't passed returns an empty array. If no number is passed, returns the last
 * element of the array.
 * @param {Array} arr: the array to iterate over. 
 * @param {Number} num: the number of indexs to return.
 * @returns {Array}: Returns last 'x' number of elements in array, the first elements of array, or an empty array.
 * Examples:
 *   _.last("ponies", 2) -> []
 *   _.last(["a", "b", "c"], "ponies") -> "c"
 *   _.last(["a", "b", "c"], 1) -> "c"
 *   _.last(["a", "b", "c"], 2) -> ["b", "c"]
 */

 function last(arr,num){
    let output = [];
    if(Array.isArray(arr) === false){
        return [];
    }else if (num === undefined || typeof num !== 'number'){
        return arr[arr.length -1];
    }else if (num > arr.length){
        return arr;
    }else if (num < 0){
        return [];
    }{
        for(let i = arr.length -1 ; i > 0 ; i--){
            output.unshift(arr[i]);
        }
    }
    return output;
}
module.exports.last = last;

/**
 * indexOf: Takes an array and a value and returns the first index where the value is found in the array.
 * If the value does not exist in the array returns -1.
 * @param {Array} arr: The array to iterate over. 
 * @param {any value} value: the value we are looking for in the array.
 * @returns {Number}: Returns the index value of the first occurance of value in array, or -1 if it does not exist. 
 * Examples:
 *   _.indexOf(["a","b","c"], "c") -> 2
 *   _.indexOf(["a","b","c"], "d") -> -1
 */

 function indexOf(arr,value){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Loops over an array to search for a certain value and returns true if it exists, false if not.
 * @param {Array} arr: The array to iterate over. 
 * @param {any value} value: The value we're looking for in our array. 
 * @returns {Boolean} true if value exists in array, false if not.
 * Examples:
 *   _.contains([1,"two", 3.14], "two") -> true
 */

 function contains(arr,value){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] === value ){
            return true;
        }
    }
    return false;
}
module.exports.contains = contains;

/**
 * each: Loops over a collection(Array or Object) and applies the 
 * callback Function to each value in the collection.
 * 
 * @param {Array or Object} box: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 *  Examples:
 *   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
 *      -> should log "a" "b" "c" to the console
 */

 function each(col,func){
    if(Array.isArray(col)){
        for(let i = 0;i < col.length; i++){
            func(col[i],i,col);
        }
    }else{
        for(let key in col){
            func(col[key],key,col);
        }
    }
};

module.exports.each = each;

/**
 * unique: Takes an array, returns a new array without duplicate values.
 * @param {Array} arr: the array to iterate over.
 * @return {Array}: new array without duplicate values.
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 */

function unique(arr){
    return [... new Set(arr)];
};

module.exports.unique = unique;

/**
 * filter: Takes in an array and a callback function, iterates through the array and
 * then returns a new array with all values of the original array that were truthy when
 * passed into the function.
 * @param {Array} arr: the array to iterate over
 * @param {Function} func: the function that will be invoked over each element of 'arr'
 * @returns {Array}: a new array filtered.
 * Examples:
 *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
 */

 function filter(arr, func){
    let output = [];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i],i,arr) === true){
            output.push(arr[i]);
        }
    }
    return output;
};

module.exports.filter = filter;


/**
 * reject: Takes in an array and a callback function, iterates through the array and
 * returns a new array with all the values that were falsey when passed through the callback function.
 * @param {Array} arr: the array to iterate over
 * @param {Function} func: the function to that will be invoked over each element of 'arr'
 * @returns {Array}: a new array of elements that returned false when passed thru a function.
 * Examples:
 *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
 */

 function reject(arr,func){
    let output = [];
    for(let i = 0; i < arr.length;i++){
        if(func(arr[i],i,arr) === false){
            output.push(arr[i])
        }
    }
    return output;
}

module.exports.reject = reject;

/**
 * partition: Takes in an array and a callback function, iterates through the array and 
 * then returns a new array of sub arrays. The first sub array is all the values that returned
 * something truthy. The second sub array is all the values that returned something falsy.
 * @param {Array} arr: the array to iterate over
 * @param {Function} func: the function to invoke on each element of 'arr'
 * @returns {Array}: sub-arrays of [[truthy values], [falsy values]] when passed thru func
 * Examples:
 *   _.partition([1,2,3,4,5], function(element,index,arr){
 *     return element % 2 === 0;
 *   }); -> [[2,4],[1,3,5]]
 */

 function partition(arr,func){
    let output = [[],[]];
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i],i,arr) === true){
            output[0].push(arr[i]);
        }else{
            output[1].push(arr[i]);
        }
    }
    return output;
}

module.exports.partition = partition;

/**
 * map: Takes in a colleciton (array or object) and a callback function, iterates through the collection and
 * return a new array of the collection's properties passed through the function depending on the type of collection.
 *  if collection is an array: the element, it's index, <collection>
 *  if collection is an object: the value, it's key, <collection>
 * @param {Collection} box: the collection to iterate through.
 * @param {Function} func: the function to invoke against the properties of the collection
 * @returns {Array}: an array of the values returned when invoking func with the properties
 * of box.
 * Examples:
 *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
 */

 function map(col,func){
    let output = [];
    if(Array.isArray(col)){
        for(let i = 0; i < col.length; i++){
            let result = func(col[i],i,col);
            output.push(result);
        }
    }else{
        for(let key in col){
            let result = func(col[key],key,col);
            output.push(result);
        }
    }
    return output;
}

module.exports.map = map;

/**
 * pluck: Takes in an array of objects and a property, iterates through the array
 * and returns a new array of the property for every object in the original array.
 * @param {Array} arr: the array of objects to iterate over.
 * @param {Property} prop: the property/key to look for in each object of the original array.
 * @returns {Array}: an array filled with the <property> of each object of the original array.
 * Examples:
 *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
 */

function pluck(arr,prop){
    let output = [];
    _.map(arr,function(x){
        for(let key in x){
            if(key === prop){
                output.push(x[key]);
            }
        }
    })

    return output;
}

module.exports.pluck = pluck;

/**
 * every: Takes in a collection (array or object) and a callback function, iterates through the
 * collection's properties and calls the callback function for each property. If the function returns true for
 * every single property in the collection then it will return true. Otherwise, return false.
 * @param {Collection} col: the collection to iterate through.
 * @param {Function} func: the function to invoke over every property of the colleciton.
 * @returns {Boolean}: returns true if every property of the collection returns true when invoked
 * with the callback function.
 * Examples:
 *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
 *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
 */

function every(col,func){
    if(Array.isArray(col)){
        if(func === undefined){
            for(let i = 0;i < col.length;i++){
                 if(col[i]){
                    return true;
                }else{
                    return false;
                }
            }
        }
        let state = [];
        for(let i = 0; i < col.length;i++){
           state.push(func(col[i],i,col));
        }
        if(state.includes(false)){
            return false;
        }else{
            return true;
        }
    }else{
        let state = [];
        if(func === undefined){
            for(let key in col){
                if(col[key]){
                    return true;
                }else{
                    return false;
                }
            }
        }
        for(let key in col){
            state.push(func(col[key],key,col))
        }
        if(state.includes(false)){
            return false;
        }else{
            return true;
        }
    }
}

module.exports.every = every;

/**
 * some: Takes in a collection (array or object) and a callback function, iterates through the
 * collection's properties and calls the callback function at each property. If the function returns true for
 * any property in the colleciton then return true. Else, return false.
 * @param {Collection} col: the collection to iterate over
 * @param {Function} func: the function to invoke at each property of the collection.
 * @returns {Boolean}: returns true if a single property of the collection returns true when invoked
 * with the func.
 * Examples:
 *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
 *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
 */

 _.some = function(col,func){
    if(Array.isArray(col)){
        if(func === undefined){
            for(let i = 0;i < col.length;i++){
                 if(col[i]){
                    return true;
                }else{
                    return false;
                }
            }
        }
        let state = [];
        for(let i = 0; i < col.length;i++){
           state.push(func(col[i],i,col));
        }
        if(state.includes(true)){
            return true;
        }else{
            return false;
        }
    }else{
        let state = [];
        if(func === undefined){
            for(let key in col){
                if(col[key]){
                    return true;
                }else{
                    return false;
                }
            }
        }
        for(let key in col){
            state.push(func(col[key],key,col))
        }
        if(state.includes(true)){
            return true;
        }else{
            return false;
        }
    }
}

module.exports.some = some;

/**
 * reduce: Takes in an array, a callback function, and a seed value. If no seed is passed into the
 * function it is initialized to the first element in the array. Reduce will then iterate over
 * the array and call the function for each element in the array. It will store that value as the
 * new seed value and at the end of it's iterations return seed.
 * @param {Array} array: the array to iterate over.
 * @param {Function} func: the function to invoke at each element of array.
 * @param {Seed} seed: the inital value of "accumulator" seed.
 * @returns: a new array with just the seed value in it.
 * Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
 */

function reduce(array,func,seed){
    // if no seed was provided
    if(seed === undefined){
        seed = array[0];
        for(let i = 1; i < array.length; i++){
            seed = func(seed,array[i],i);
        }
    }else{
        for(let i = 0; i< array.length;i++){
            seed = func(seed,array[i],i)
        }
    }
    return seed;
}
module.exports.reduce = reduce;

/**
 * extend: Takes in an object, and then infinte more objects. Copies all 
 * properties from the additonal objects into the first object and returns the first object.
 * @param {Object} obj1: the initial object to be filled with new properties.
 * @returns: inital obj filled with new properties. 
 * Examples:
 *   var data = {a:"one"};
 *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
 *   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
 */

 _.extend = function(obj1){
    let arr = Array.from(arguments);
    for(let i = 1; i < arr.length;i++){
        obj1 = Object.assign(obj1,arr[i]);
    };
    return obj1;
}

module.exports.extend = extend;