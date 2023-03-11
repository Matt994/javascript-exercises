const repeatString = function(string, num) {
    let i = 0;
    let str = "";
    while (i < num) {
        str += string;
        i++;
    }
    
    if (num < 0) {
        return "ERROR";
    } else {
        return str;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
