
const person = [
 {
    maticen: 1,
    ime: "Stavre",
    godini: 20
},

{
    maticen: 2,
    ime: "Mia",
    godini: 19
},

{
    maticen: 3,
    ime: "Petko",
    godini: 56
},

{
    maticen: 4,
    ime: "Messi",
    godini: 35
},
]


const PersonIterator = () => {

    return person.map( person => {
        // return <li>{person.ime} : {person.godini}</li>
        return <li key={person.maticen}> {`${person.ime} : ${person.godini}`}</li>
    })
}

export default PersonIterator