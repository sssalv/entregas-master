exampleArray = [1,2,3,4,5,6]

// Head
const head = (arr) => {
    let [first] = arr
    console.log(first)
}
head(exampleArray)

// Tail
const tail = (arr) => {
    let [,...tail] = arr
    console.log(tail)
}
tail(exampleArray)

// Init
const init = (arr) => {
    let init = arr.slice(0, -1);
    console.log(init)
}
init(exampleArray)

// Last
const last = (arr) => {
    //altera el array original
    //let last = arr.pop();

    //moderno
    // let last = arr.at(-1)

    // tradicional
    let last = arr[arr.length - 1]
    
    console.log(last)
}
last(exampleArray)
