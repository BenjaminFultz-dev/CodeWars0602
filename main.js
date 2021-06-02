function maskify(cc) {
    let str = ""
    let finalFour = cc.substr(-4)
    for (let i = 0; i < cc.length - 4; i++) {
        str += "#"
    }
    return str + finalFour
}