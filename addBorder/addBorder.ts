function addBorder(picture: string[]): string[] {
    let borderLength = picture[0].length + 2
    let border = ''
    for (let i = 0; i < borderLength; i++){
        border += "*"
    }

    let final = [border, border]
    for (let i = 0; i < picture.length; i++) {
        final.splice((i + 1), 0, `*${picture[i]}*`)
    }

    return final
}



console.log(addBorder(["abc", "ded"]));