import React from "react"


export const formContext = React.createContext(new FormData())
// module.exports = formContext
let numCon = {
    val: 0,
    
    increment:()=>{
        this.val += 1
    },
    increment: ()=>{
        this.val -= 1
    }
    
}
export let stepNumber = React.createContext(numCon)