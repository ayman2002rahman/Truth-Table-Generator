

export class Token {
    constructor(lexeme) {
        this.lexeme = lexeme;
        switch(lexeme) {
            case "~":
                this.type = "operator";
                this.precedence = 4;
                break;
            case "^":
                this.type = "operator";
                this.precedence = 3;
                break;
            case "v":
                this.type = "operator";
                this.precedence = 2;
                break;
            case "->":
                this.type = "operator";
                this.precedence = 1;
                break;
            case "<->":
                this.type = "operator";
                this.precedence = 1;
                break;
            case "(":
                this.type = "parentheses";
                this.precedence = null;
                break;
            case ")":
                this.type = "parentheses";
                this.precedence = null;
                break;
            case "0":
            case "1":
                this.type = "boolean";
                this.precedence = null;
                break;
            default:
                this.type = "variable";
                this.precedence = null;
        }  
    }

    getLexeme() {
        return this.lexeme;
    }
    setLexeme(lexeme) {
        this.lexeme = lexeme;
    }
    getType() {
        return this.type;
    }
    getPrecedence() {
        return this.precedence;
    }
    copy() {
        return new Token(this.lexeme);
    }
}