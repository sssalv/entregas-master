// CLONE
obj = {
    podriamos: 'podriamos',
    haber: 'haber',
    podido: 'podido',
}

const cloneViaAssign = (source) => {
    let newObj = {}
    Object.assign(newObj, source)

    console.log('[ObjectAssign Method] El objeto original es:',obj)
    console.log('[ObjectAssign Method] El objeto nuevo es:',newObj)
}
cloneViaAssign(obj)

const cloneViaSpread = (source) => {
    let newObj = { ...source}

    console.log('[Spread Method] El objeto original es:',obj)
    console.log('[Spread Method] El objeto nuevo es:',newObj)
}
cloneViaSpread(obj)

const cloneViaJson = (source) => {
    let newObj = JSON.parse(JSON.stringify(source));    

    console.log('[JSON Method] El objeto original es:',obj)
    console.log('[JSON Method] El objeto nuevo es:',newObj)
}
cloneViaJson(obj)

const cloneViaStructuredClone = (source) => {
    let newObj = structuredClone(source)

    console.log('[StructuredClone Method] El objeto original es:',obj)
    console.log('[StructuredClone Method] El objeto nuevo es:',newObj)
}
cloneViaStructuredClone(obj)

// MERGE
a = {
    nombre: "Jaime",
    apellidos: "Zapata",
}
b = {
    apellidos: "López",
    edad: "28"
}

const merge = (target,source) => {
    //Por defecto se sobrescriben de derecha a izquierda,
    //asi que intercambio el orden y siempre prevalecerá
    //el primer argumento de la función:

    const merged = {...source,...target} 
    console.log(merged)
}

merge(a,b)