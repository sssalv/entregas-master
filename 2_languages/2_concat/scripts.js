// concatenacion

let a = [1,2,3]
let b = ['a','b','c']
let c = ['ccc','ccc','ccc']
let d = ['ddd','ddd','ddd']
let e = ['eee','eee','eee']

const concat = (a, b) => {
    let concatMethod = a.concat(b)  //metodo 1

    let restOperator = [            //metodo 2
        ...a,
        ...b
    ]

    console.log(concatMethod,restOperator)
}

concat(a,b)


// opcional

const optional = (a, ...optional) => {
    let concatAll = a.concat(...optional)

    console.log(concatAll)
}

optional(a,b,c,d,e)