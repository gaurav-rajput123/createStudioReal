import React from "react"


export const formContext = React.createContext(new FormData())
// module.exports = formContext
let numCon = {
    val: 0,
    
    increment:()=>{
        this.val += 1
    },
    decrement: ()=>{
        this.val -= 1
    },
    setVal: (newVal) => {
        this.val = newVal
    }
    
}
export let stepNumber = React.createContext(numCon)

export const courseArray = React.createContext({
    courseTitle: "", courseNumber: "", organisation: "", courseDuration: "", courseDesciption: "", skillsGained: [], category : "", requirement: "",
    data: [], setCourseState: ()=>{}, courseId: "", orginal: "" , selling: ""
})
export const UserContext = React.createContext({
    authenticated: false,
    user:{},
    setNewUser : ()=>{},
})