var S1 = prompt("Enter Your First Preference Company Name");
var S2 = prompt("Enter Your Second Preference Company Name");
var S3 = prompt("Enter Your Third Preference Company Name");

var D1 = prompt("Enter your first Selected Company Name");
var D2 = prompt("Enter your Second Selected Company Name");

if (S1 == D1 || S1 == D2) {
    console.log(S1);
} else if (S2 == D1 || S2 == D2) {
    console.log(S2);
} else if (S3 == D1 || S3 == D2) {
    console.log(S3);
}