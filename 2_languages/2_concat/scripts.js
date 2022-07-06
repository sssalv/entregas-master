// concatenacion

let n = [1,2,3]
let a = ['a','a','a']
let b = ['b','b','b']
let c = ['c','c','c']
let d = ['d','d','d']
let e = ['e','e','e']

const concat = (a, b) => {
    let concatMethod = a.concat(b)  //metodo 1

    let restOperator = [            //metodo 2
        ...a,
        ...b
    ]

    console.log(concatMethod)
    console.log(restOperator)
}

concat(a,b)


// opcional

const concatAll = (...concatAll) => {
    let baseArr = []
    let result = baseArr.concat(...concatAll)
    console.log(result)
}

concatAll(a,b,c,d,e,n)