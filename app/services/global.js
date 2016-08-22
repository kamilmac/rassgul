export const make = (objPath, value={}) => {
    window.rass = window.rass || {}
    if (objPath.length === 1) {
        window.rass[objPath[0]] = value  
    }
    else if (objPath.length === 2) {
        window.rass[objPath[0]] = window.rass[objPath[0]] || {}  
        window.rass[objPath[0]][objPath[1]] = value  
    }
    else if (objPath.length === 3) {
        window.rass[objPath[0]] = window.rass[objPath[0]] || {}  
        window.rass[objPath[0]][objPath[1]] = window.rass[objPath[0]][objPath[1]] || {}  
        window.rass[objPath[0]][objPath[1]][objPath[2]] = value  
    }
}
