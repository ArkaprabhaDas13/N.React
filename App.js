
import React from 'react'
import ReactDOM from 'react-dom/client'


const heading = React.createElement("h1", {id:"heading"}, "Hello World !! from React !!")

const parent = React.createElement("div", {id:'parent'}, [
    React.createElement("div", {id:"child"}, "This is a child!!"),
    React.createElement("div", {id:"child"}, "This is a child!!"),
    React.createElement("div", {id:"child"}, "This is a child!!")
])

console.log(heading)
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent) 