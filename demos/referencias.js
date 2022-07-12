const match=['A', 'B']

const matchDay=[match]
const matchIvan=match

const anotherMatch=[[...match]] //[[...match]] => [match^]=> ['A', 'B']

match.push('C')


console.log('match', match)
console.log('matchDay', matchDay)
console.log('matchIvan', matchIvan)
console.log('anotherMatch', anotherMatch)