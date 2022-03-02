function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
        var itKey = key(iterable[i]);
        if (itKey >= key(maximum)) {
            maximum = iterable[i];
        }
    }
    return maximum;
}

const reverser = (a) => (-a);

function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
        key.append(value);
    } else if (typeof prev == 'object' && prev != null) {
        object = changer(object, key, value);
    } else {
        key = value;
    }
    return null;
}

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        setTimeout(______)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await promise_me();
    console.log(five)
    return five
}