function alternatingSums(a: number[]): number[] {
    let teamA = 0
    let teamB = 0
    let isTeamA = true

    a.forEach((weightOfPerson) => {
        if (isTeamA){
            teamA += weightOfPerson
        } else {
            teamB += weightOfPerson
        }
        isTeamA = !isTeamA
    })

    return [teamA, teamB]
}

function alternating(a: number[]): number[] {
    let final = a.reduce((acc, val, i) => {
        acc[i % 2] = acc[i % 2] + val
        return acc
    }, [0, 0])

    return final

}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternating([50, 60, 60, 45, 70]))