
var colors = ['red','green','black','blue'];

var usercolor = prompt('which color you want in the begging ?');

colors.unshift(usercolor);

console.log(colors);

var hiscolor = prompt('which color you want in the end ?');

colors.push(hiscolor);

console.log(hiscolors);

colors.shift();

console.log(colors);

colors.pop();

console.log(colors);

var colors = ['red','green','black','blue','purple'];

console.log(colors);

colors.splice(2, 1);

console.log(colors);
