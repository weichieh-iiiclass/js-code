const arr = [];
function deDuplicate (...theArgs){
    // const i = theArgs.length;

    for (let i=0; i<theArgs.length-1; i++){
        arr = theArgs[i].concat(theArgs[i+1]);

        // arr = arr.concat(theArgs[i].filter((e)=>{ 
        //     return arr.indexOf(e) === -1}
        // ));
        console.log(arr);
    }
    return arr;
}

deDuplicate([1, 2, 3], [1, 3, 5]);