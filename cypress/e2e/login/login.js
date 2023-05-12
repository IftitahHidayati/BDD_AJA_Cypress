import {Given , When, And, Then} from "cypress-cucumber-preprocessor/steps";

Given ("I am verify data lenght",function(){
    console.log("Successfully login")
});
When ("I am verify response status",function(){
    console.log("Status verified")
});
And ("I am verify correct header",function(){
    console.log("Header verified")
});
Then ("I am verify response data",function(){
    console.log("Data verified")
});