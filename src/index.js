'use strict'

const fibonacci = () => {
    var result = [];
    
    do
    {
        result.push(getFibonnaciOf(result.length))
    }
    while (result[result.length-1] < 350)

    return result;
}

function getFibonnaciOf(n)
{
    if (n == 0)
        return 0;
    
    if (n == 1)
        return 1;

    return getFibonnaciOf(n-1) + getFibonnaciOf(n-2);
}

const isFibonnaci = (num) => {
    return fibonacci().indexOf(num) != -1;
}

module.exports = {
    fibonacci,
    isFibonnaci
}
