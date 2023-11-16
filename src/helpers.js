export function toBinaryForHMSD(digit) {
    let arr = [];
    while(digit > 0) {
        arr.unshift(digit % 2);
        digit = parseInt(digit / 2);
    }
    
    while(arr.length != 2)
        arr.unshift(0);

    return arr;
}

export function toBinaryForMSMSD(digit) {
    let arr = [];
    while(digit > 0) {
        arr.unshift(digit % 2);
        digit = parseInt(digit / 2);
    }
    
    while(arr.length != 3)
        arr.unshift(0);

    return arr;
}

export function toBinaryForLSD(digit) {
    let arr = [];
    while(digit > 0) {
        arr.unshift(digit % 2);
        digit = parseInt(digit / 2);
    }
    
    while(arr.length != 4)
        arr.unshift(0);

    return arr;
}
