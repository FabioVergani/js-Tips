// Array literal (= []) is faster than Array constructor (new Array())
let a=[];

// Object literal (={}) is faster than Object constructor (new Object())
let b={};

//Minimize calls to new Object() and new Array();
let rgb = { R: 255, G: 0, B: 0 }; // slow.
let rgb = [ 255, 0, 0 ]; // faster by 40%
let R = 255, G = 0, B = 0; // faster by 50%

//Pre-calculate as much math as possible;and so on…
var E = Math.E;
var PI = Math.PI;
var SQRT2 = Math.SQRT2;
var SQRT1_2 = Math.SQRT1_2;
var LN2 = Math.LN2;
var LN10 = Math.LN10;
var LOG2E = Math.LOG2E;
var LOG10E = Math.LOG10E;
let RAD2DEG = 180 / PI;
let DEG2RAD =  1 / RAD2DEG;


// property === undefined is faster than hasOwnProperty(property) :don't use this in cases where 'undefined' is a possible value for your propertie
if(obj.property === undefined){}

// createElement('img') is faster than new Image()
let img = createElement('img');

/*
fastest way to set *any* attribute on an element object is element[attribute] = value
to set a data attribute, use setAttribute
For getting data attributes you can use camelCase (e.g. elem['dataName']) - *but!
only if the data-attribute was not created dynamically (i.e. it was already inside the html element),
otherwise use getAttribute('data-x');
*/
elem['attribute'] = value;
// setAttribute('data-x') is faster than dataset.x =
elem.setAttribute('data-x','value');

// className = is faster than classList.add
elem.className = 'classa classb classc';

// textContent = is faster than appendChild(createTextNode)
elem.textContent = 'text';

// Array.isArray() is currently the fastest way to check if a letiable is an Array
Array.isArray(x);


// Using substring and indexOf is *always* much faster than using RegEx


// If you need to dereference more than once - store in a let:
let n = o.one.two.three.four.name;
if (n !== undefined) let w = n;


// this || that, faster than if (!this) that:
let yes = false;
let v = yes || 2;


// typeof faster than isNaN():
typeof(n) === 'number'

// A short, fast way to do String.startsWith() check,
haystack.lastIndexOf(needle,0) === 0

// document.getElementById is faster than document.querySelector
document.getElementById('id');

// Use x | 0 instead of Math.floor
let x = 5.4563432 | 0; // x = 5;
/*
Math.floor: 0|n
Math.round: 0|n+.5
Math.ceil: 0|n+(n!=~~n))
*/


// A list of comprehensive bitwise optimizations (using bitwise operations for common math functions instead of the native ones)
var n = Math.PI;
//
Math.round(n) === n + (n < 0 ? -0.5 : 0.5)>>0
Math.ceil(n) === n + (n < 0 ? 0 : 1) >> 0;
Math.floor(n) === n + (n < 0 ? -1 : 0) >> 0;
//
Math.round(n) === (n + 0.5) >> 0;
Math.ceil(n) === (n + 1) >> 0;
Math.floor(n) === n >> 0;













var numerator = 99999;
var divisor = 4; // divisor must be power of 2
(numerator % divisor) === (numerator & (divisor - 1));

Math.max(a, b) === (a > b) ? a : b;
Math.min(a, b) ===  (a < b) ? a : b;

var n = 99999;
var n = Math.abs(n);
var n = n > 0 ? n : -n; // +/- 10%
var n = (n ^ (n >> 31)) - (n >> 31); // +/- 3%


var n = 99999;
((n % 2) == 0) === ((n & 1) == 0);


var n = 99999;
(n * 2) === (n << 1);
(n * 64) === (n << 6);

var n = 99999;
(n / 2) === (n >> 1);
(n / 64) === (n >> 6);


var a = 1, b = 2;
// standard
var tmp = a;
a = b;
b = tmp;
// bitwise
a ^= b;
b ^= a;
a ^= b;


var n = 99999;
(-n) === (~n + 1);


// 24-bit
var hex = 0x336699;
var r = hex >> 16;
var g = hex >> 8 & 0xFF;
var b = hex & 0xFF;

// 32-bit
var hex = 0xff336699;
var r = hex >> 24;
var g = hex >> 16 & 0xFF;
var b = hex >> 8 & 0xFF;
var a = hex & 0xFF;


// 24-bit
var r = 0x33;
var g = 0x66;
var b = 0x99;
var hex = r << 16 | g << 8 | b;

// 32-bit
var r = 0x33;
var g = 0x66;
var b = 0x99;
var a = 0xff;
var hex = a << 24 | r << 16 | g << 8 | b;


var R8 = (R5 << 3) | (R5 >> 2);
var G8 = (R5 << 3) | (R5 >> 2);
var B8 = (R5 << 3) | (R5 >> 2);





// Array.filter() faster than filtering "manually" with a for loop:
fm = m.filter(function(item) {
  return (item>4);
});


// Trim last character: slice is fastest
let str = "Dollar$";
str = str.slice(0,-1);


/*
if you have a function working on an array,the best place to check for the length of the array - is inside of the function in the beginning.
It is FASTER than first checking for length outside and then calling - and it is FASTER than initializing a for loop for an empty array.
*/
function iterate(m){
 if(m.length === 0) return;
}

//use Park Miller (1988) "minimal standard" linear congruential pseudo-random number generator.


//
for (let i=10; i>0; i--)
for (let i=0; i<10; i++)
for (let i=10; i--;)
