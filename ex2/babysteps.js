# initialise
var result = 0;
# loop starting at 2nd argument until end of all arguments
for (var i = 2; i < process.argv.length; i++) {
# add arguments together while converting strings to numbers
    result += Number(process.argv[i]);
}
# print the result
console.log(result);
