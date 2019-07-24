/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

//My solution:

function grow(x){
    const reducer=(acc,item)=>acc*item;
    return x.reduce(reducer);
}

//const grow=x=> x.reduce((a,b) => a*b);