//=====Events in DOM=====

/*
const showMessage = () => {
    alert("Hello")
}
*/


// 2 Try

/*
const btn = document.getElementById("btn")

btn.onclick = () => {
    document.body.style.background = "#fff"
}

btn.onmouseover = () => {
    document.body.style.background = "red"
}*
*/

/*
const image = document.querySelector("img")

image.onmouseover = () => {
    image.style.cssText = `
    width: 400px;
    height: 600px;
    `
}

image.onmouseleave = () => {
    image.style.cssText = `
    width: 200px;
    height: 400px;
    `
}
    */

/*
const resizeImg = () => {
    Image.style.transform = "scale(1.2)"
}

const normalImg = () => {
    Image.style.transform = 'scale(1)'
}

Image.onmouseover = resizeImg
Image.onmouseleave = normalImg
*/


//=====3 Try, Use Event listener=====

/*
const btn = document.querySelector("#btn")

btn.addEventListener("click", () => {
    alert("Hello World")
})
*/

/*
const showMessage = () => {
    alert("hola!!")
}

btn.addEventListener("click" ,showMessage)
*/


//=====Value===== - key score of input

/*
const btn = document.querySelector("#btn")
const inp1 = document.querySelector("#inp1")
const inp2 = document.querySelector("#inp2")
const inp3 = document.querySelector("#inp3")
const output = document.querySelector("#output")


btn.addEventListener("click", () => {
    console.log(inp1.value);
})
*/


/*
btn.addEventListener("click", () => {
    console.log(inp1.value);
})

inp2.addEventListener("click", () => {
    console.log(inp2.value);
})

inp3.addEventListener('click', () => {
    console.log(inp3.value);
})
*/

/*
btn.addEventListener("click",() => {
    console.log(inp2.value);
})

btn.addEventListener("click",() => {
    console.log(inp3.value);
})

if (btn + inp2 + inp1 + inp3) {
    console.log(btn);
}
*/


/*
btn.addEventListener("click", () => {
    /*
    let result = null
    if (inp2.value == '+') {
        result = +inp1.value + +inp3.value
    }
       else if (inp2.value == '-') {
            result = +inp1.value - +inp3.value
    }
     else if (inp2.value == '/') {
        result = +inp1.value / +inp3.value
}   else if (inp2.value == '*') {
    result = +inp1.value * +inp3.value
output.textContent = result

output.textContent = eval(inp1.value + inp2.value + inp3.value)
inp1.value = ""
inp2.value = ""
inp3.value = ""
})
*/


let result = ""
const display = document.createElement("input")
display.type = "text"
display.value = result
display.disabled = true
const btnWrapper = document.createElement("div")
document.body.append(display, btnWrapper)

document.body.append(display)



const arr = [
    "1", "2", "3", 
    "4", "5", "6",
    "7", "8", "9",
    "0", "+", "-",
    "*", "/", "C",
    "AC", "=",
]

arr.style.cssText = `
    width = "100px"
`

const getNum = (e) => {
    //console.log(e.target.innerHTML);
    let btnValue = e.target.innerHTML
if (btnValue == "AC") {
        result = ""
    } else if (btnValue == "C") {
        result = result.substring(0, result.length - 1)
    } else if (btnValue == "=") {
        result = `${eval(result)}`
    } else {
        result += btnValue
    }
    display.value = result
}

arr.forEach(el => {
    //  console.log(el);
    const btn = document.createElement("button")
    btn.innerHTML = el
    btnWrapper.append(btn)
    btn.addEventListener("click", getNum)
})



// event - event object
const btn = document.querySelector("#btn")


btn.addEventListener("click", (event) => {
    console.log(event.target.innerHTML);
})


const showEvent = (e) => {
console.log(e.target.innerHTML);
}


btn.addEventListener("click", showEvent)


/*
const addEng = document.querySelector("#engword")
const addRus = document.querySelector("#rusword")
const addForm = document.querySelector("form")
const testModal = document.querySelector("#textModal")
testModal.style = 'display: none;'
const btnTest = document.querySelector("#btnTest")
const h2 = document.querySelector("h2")
const answer = document.querySelector("#answer")
const check = document.querySelector("#check")
const points = document.querySelector("#points")

const dict = {
    apple: "Yabloko",
    pear: "Grusha",
    orange: "Apelsin",
    apricot: "Apricos",
    peach: "persik",
}

const engArr = []
const rusArr = []
let i = 0
let point = 0
let dictLength = Object.keys(dict).length
//.log(dictLength);

addForm.addEventListener = 'submit', (event) => {
    event.preventDefault()
    if(!addEng.value.trim().length || !addRus.value.trim().length) {
        alert("Enter Words!")
    } else {
        dict[addEng.value] = addRus.value
        alert("Slova Dobavleny!")
        addEng.value = ""
        addRus.value = ""
        dictLength = Object.keys(dict).length
        addQuestion()
        addPoints()
    }
    //console.log(dict);
}

const test = () => {
for(let key in dict) {
    engArr.push(key)
    rusArr.push(dict[key])
}
    //console.log(engArr);
    //console.log(rusArr);
    addQuestion()
} 

const addQuestion = () => {
    h2.innerHTML = engArr[i]
}

const addPoints = () => {
    points.innerHTML = `${point} / ${dictLength} `
}

const checkWord = () => {
    if (answer.value.toLowerCase() == rusArr[i].toLowerCase()) {
            alert("Pravilno")
            point++
            addPoints()
                } else {
                    alert("Ne pravilno")
                    }
                    i++

                    if(engArr.length <= i) {
                        i = 0
                        testModal.style = "display: none"
                    }

                    addQuestion()
                    answer.value = ""
            }

btnTest.addEventListener("click", test) 
    testModal.style = "display: block;"
*/