export function toBinaryForHMSD(digit) {
    let arr = [];

    for(let i = 2 - 1; i >= 0; i--) 
        arr.push((digit & (1 << i)) ? 1 : 0);

    return arr;
}

export function toBinaryForMSMSD(digit) {
    let arr = [];
    
    for(let i = 3 - 1; i >= 0; i--) 
        arr.push((digit & (1 << i)) ? 1 : 0);

    return arr;
}

export function toBinaryForLSD(digit) {
    let arr = [];

    for(let i = 4 - 1; i >= 0; i--) 
        arr.push((digit & (1 << i)) ? 1 : 0);
    
    return arr;
}
