obj = {
    podriamos: 'podriamos',
    haber: 'haber',
    podido: 'podido',
    funcionar: (e) => {console.log(e*2)}
}

const clone = (source) => {
    let newObj = {}
    Object.assign(newObj, source)
    
    console.log('El objeto original es:',obj)
    console.log('El objeto nuevo es:',newObj)

    newObj.funcionar = (e) => {console.log(e*3)}
    obj.funcionar(3)
    newObj.funcionar(3)
}
clone(obj)