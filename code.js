function divideAndConquerSum(a) {
    if (a.length == 0){
        return 0;
    }
    if (a.length == 1){
        return a[0];
    } 
    if (a.length == 2){
        return a[0] + a[1];
    }

    const thirdFrac = Math.floor(a.length / 3);
    const first = divideAndConquerSum(a.slice(0, thirdFrac));
    const center = divideAndConquerSum(a.slice(thirdFrac, (thirdFrac * 2)));
    const last = divideAndConquerSum(a.slice(thirdFrac * 2));
    
    return first + center + last;
}
