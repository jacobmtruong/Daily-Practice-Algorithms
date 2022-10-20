

function parseCode(str) {
    let arr = str.split(/0\d*0/g)
    console.log(arr);
    // for (let i = 0; i < arr.length;i++){
    //     if(arr[i] == ""){
    //         arr.splice(i, 1)
    //         i--
    //     }
    // }
    let obj = {
        "firstName": arr[0],
        "lastName": arr[1],
        "id": arr[2]
    }
    return obj
}

console.log(parseCode('Thomas00LEE0000043'));