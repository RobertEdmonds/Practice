const capShows = function(array){
    let newArray = []
    for (let shows of array){
        newArray.push(shows.toUpperCase())
    }
    console.log(newArray)
}
const loopThroughArray = function(array){
    for(let item of array){
        console.log(item)
    }
}
function handleShows(fun){
    let tvShows = ['Dexter', 'Sapranos', 'Band of Brothers', 'Rick and Morty', 'American Dad', 'Polar Opisites']

    return fun(tvShows)
}

