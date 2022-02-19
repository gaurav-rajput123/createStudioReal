const convertToString = (arr) => {
    let newString = ``
    console.log(arr)
    if (!Array.isArray(arr)) {
        newString = arr.props.children
    } else {
        for (let object of arr) {
            newString = newString + " \n " + object.props.children
            console.log(object)
        }
    }
    return newString
}

export default convertToString