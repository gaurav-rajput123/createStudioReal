function pushToArray(arrayA, arrayIndex){
    let array = [...arrayA]
    let duplicateArrayObject = {...array[arrayIndex]}
    let newArr = []
    for(let i= 0; i<= arrayIndex; i++){
        newArr.push(array[i])
    }
    newArr.push(duplicateArrayObject)
    for(let i = arrayIndex+1; i<array.length; i++){
        newArr.push(array[i])
    }

    return newArr
}

let obj = {
    name: "Gaurav",
    topic: [
        "gaurav", "neha", "deepak", "vaibhav"
    ]
}

let obj2 = {...obj}
obj2.topic = ["deepak", "neha"]

obj.topic = ["qwerty"]
console.log(obj2)
console.log(obj)


