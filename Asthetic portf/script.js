const text=[
"BCA Student",
"Web Developer",
"Hackathon Enthusiast"
]

let count=0
let index=0
let current=""
let letter=""

function type(){

if(count===text.length){
count=0
}

current=text[count]
letter=current.slice(0,++index)

document.getElementById("typing").textContent=letter

if(letter.length===current.length){
count++
index=0
}

setTimeout(type,120)

}

type()


function createFlower(){

const flower=document.createElement("div")

flower.innerHTML="🌸"

flower.style.position="fixed"
flower.style.left=Math.random()*100+"vw"
flower.style.top="-10px"
flower.style.fontSize="20px"

document.body.appendChild(flower)

setTimeout(()=>{
flower.remove()
},6000)

}

setInterval(createFlower,700)