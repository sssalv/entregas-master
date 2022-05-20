obj = {
    1: 'podriamos',
    2: 'haber',
    3: 'podido'
}

const clone = (source) => {
    for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
            var element = source[key];
        }
    }
    console.log(element);
}

clone(obj)