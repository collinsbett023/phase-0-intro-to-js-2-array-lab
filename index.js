// Write your solution here!
cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
    return cats
}

function destructivelyPrependCat(){
    cats.unshift("Bob")
    return cats
}

function destructivelyRemoveLastCat(){
    cats.pop()
    return cats
}

function destructivelyRemoveFirstCat(){
    cats.shift()
    return cats
}

function appendCat(name){
    let copyCats = [...cats,name]

    return copyCats
}

function prependCat(name){
    let copyCats = [name,...cats]

    return copyCats
}

function removeLastCat(){
    let copyCats = cats.slice(0,2)
    return copyCats
}

function removeFirstCat(){
    let copyCats = cats.slice(1)
    return copyCats
}
