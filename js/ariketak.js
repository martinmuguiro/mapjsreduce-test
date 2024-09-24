// idatzi hemen zure funtzioak
function ariketa1( arrays ){
    return arrays.map(e => e *2);
}

function ariketa2( arrays ){
    return arrays.map(e => e.izena + '-k ' + e.adina + ' urte ditu');
}

function ariketa3( arrays ){
    return arrays.filter(elem => elem % 2 == 0)
}

function ariketa4( arrays ){
    return arrays.filter(elem => elem.adina >= 18)
}

function ariketa5( arrays ){
    return arrays.reduce(function (accumulator, elem){
        return accumulator + elem
    }, 0)
}

function ariketa6( arrays ){
    return arrays.reduce(function (oldest, elem){
        let experience = oldest.adina || 0
        if (experience > elem.adina){
            return oldest
        }else{
            return elem
        }
    })
}

function ariketa7( arrays ){
    return arrays.filter(elem => elem % 2 == 0).map(elem => elem * 2).reduce(function (accumulator, elem){
        return accumulator += elem
    })
}

function ariketa8( arrays ){
    return arrays.reduce(function (emaitza, elem){
        return emaitza.concat(elem.items)
    }, [])
}

function ariketa9( arrays ){
    return arrays.filter(elem => elem.adina >= 18).map(elem => {
        return elem.erosketak.reduce((guztira, erosketa) => guztira += erosketa, 0)
        }).reduce((emaitza, elem) => emaitza += elem)
}

function ariketa10(arrays) {
    return arrays.map(elem => ({
            name: elem.name,
            batezbestekoa: elem.scores.reduce((accumulator, nota) => accumulator + nota, 0) / elem.scores.length
        })).reduce((altuena, current) => {
            let nota = altuena.batezbestekoa || 0
            if (current.batezbestekoa > nota){
                return current
            }else{
                return altuena
            }
        })
}


export {ariketa1, ariketa2, ariketa3, ariketa4, ariketa5, ariketa6, ariketa7, ariketa8, ariketa9, ariketa10}
