/* TODO:- Syntax
enum  Name
{
    ref = value
}
Name.ref;
*/
enum ErrorCodes
{
    OK,
    Success=201,
    NotFound = 404,
    InternalError
}
console.log(`Status Code for Success : ${ErrorCodes.Success}`);
console.log(`Status Code for Success : ${ErrorCodes.OK}`);
console.log(`Status Code for Success : ${ErrorCodes.NotFound}`);
console.log(`Status Code for Success : ${ErrorCodes.InternalError}`);