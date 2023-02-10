import { Token } from './Token.js'

//Determines if a digit character is 0 or 1

function stringToTokenArray(expression) {
    let array = [];
    let i = 0;
    while(i < expression.length) {
        if(i <= expression.length - 3) {
            if(expression.substring(i, i + 3) == "<->") {
                array.push(new Token("<->"));
                i += 3;
            }
        }
        if(i <= expression.length - 2) {
            if(expression.substring(i, i + 2) == "->")  {
                array.push(new Token("->"));
                i += 2;
            }
        }
        if(expression[i] == '~') {
            array.push(new Token("~"));
            i++;
        }
        else if(expression[i] == '^')  {
            array.push(new Token("^"));
            i++;
        }
        else if(expression[i] == 'v') {
            array.push(new Token("v"));
            i++;
        }
        else if(expression[i] == '(') {
            array.push(new Token("("));
            i++;
        }
        else if(expression[i] == ')') {
            array.push(new Token(")"));
            i++;
        }
        else if(expression[i] == '0' || expression[1] == '1') {
            array.push(new Token(""))
        }
        else if(expression[i] == '2' || expression[i] == '3' || expression[i] == '4' || expression[i] == '5' || expression[i] == '6' || expression[i] == '7' || expression[i] == '8' || expression[i] == '9') {
            //Throw error here
        }
        else {
            array.push(new Token(expression[i]));
            i++;
        }
    }
    return array;
}

//returns the number of input variables so that the size of the truth table can be predetermined
function variablesOfExpression(tokens) {
    let variables = new Set();
    for(let i = 0; i < tokens.length; i++)
        if(tokens[i].getType() == "variable") //There must be a new type called variable implemeneted into the constructor for Token.js
            variables.add(tokens[i].getLexeme());
    return variables;
}

function validateTokenArray(tokensInput) {

}

function shuntingYardAlgorithm(tokens) {

}

function evaluateRPN(expression) {

}
//variables: a set of the different types of variable inputs that the function depends on. Ex: {A, B, C}
//values: the values that each variable in the expression will take on so it can be evaluated. Ex: [1, 0, 1] so that A = 1, B = 0, and C = 1
function evaluateEquation(expression, variables, values) {//The variables depends on what the user put so some more work will need to be done

}

function generateTruthTable(userInput, expression) {
    let variables = variablesOfExpression(expression);
    let variableMap = {};
    let iterator = 0;
    variables.forEach(variable => {
        variableMap[variable] = iterator;
        iterator++;
    })
    
    //Initilizes the table as a 2D array
    let table = [];
    for(let i = 0; i < 2 ** variables.size + 1; i++) {
        table[i] = []
        for(let j = 0; j < variables.size + 1; j++)
            table[i][j] = 0;
    }

    table[0][variables.size] = userInput; //Labels the function output column

    //Labels the variable columns
    variables.forEach(variable => {
        table[0][variableMap[variable]] = variable;
    })

    /*
    for(let i = 2 ** num / 2; i < 2 ** num; i++) {

    }*/

    //Make sure that the bounds are right for the table
    document.write("<table border = '1'>");
        for(let i = 0; i < 2 ** variables.size + 1; i++) {
            document.write("<tr>");
            for(let j = 0; j < variables.size + 1; j++) {
                document.write("<td>" + table[i][j] + "</td>");
            }
            document.write("</tr>");
        }
    document.write("</table>");
}


document.getElementById("calculate").onclick = function() {
    console.log("clicked");
    var userInput = document.getElementById("userInput").value;
    try {
        var expression = stringToTokenArray(userInput);
        //validateTokenArray(expression);
        generateTruthTable(userInput, expression);
    }
    catch(err) {
        window.alert("Invalid logic expression");
    }
}

function printTokenArray(tokens) {
    for(let i = 0; i < tokens.length; i++)
        console.log(tokens[i].getLexeme());
}

function printTokenArrayTypes(tokens) {
    for(let i = 0; i < tokens.length; i++)
        console.log(tokens[i].getType());
}

/*
document.getElementById("calculate").onclick = function() {
    console.log("clicked");
    var userInput = document.getElementById("userInput").value;

    var expression = stringToTokenArray(userInput);
    console.log(numberOfInputVariables(expression));
}*/