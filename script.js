
let num = parseInt(prompt("Enetr the number :- "))
let pattern = "";

for (let i = 1; i <= num; i++) {

    for (let k = 1; k < i; k++) {
        pattern += "  ";
    }
    for (let j = 1; j <= num - i + 1; j++) {
        if (i == num) {
            pattern += "||*||";
        }
        else if (j == num - i + 1) {
            pattern += "|*||";
        }
        else if (j == 1) {
            pattern += "||*| ";
        }
        else {
            pattern += "|*| ";
        }
    }
    pattern += "\n";    
}


for (let i = 1; i <= num; i++) {
    
    for (let j = 1; j <= num - i; j++) {
        pattern += "  ";
    }
    
    for (let k = 1; k <= i; k++) {
        if (i == 1) {
            pattern += "||*||";
        }
        else if (k == 1) {
            pattern += "||*|";
        }
        else if (k == i) {
            if (k == 1 && k == 2) {
                pattern += "||*| ";
            } else {
                pattern += " |*||";
            }
        }
        else {
            pattern += " |*|";
        }
    }
    
    pattern += "\n";
}
console.log(pattern);
