// req()
// id = 2
let characteres = []
async function req() {
    let id = $("#id").val()
    console.log(id)
    const response = await fetch("https://rickandmortyapi.com/api/character/" + id)
    const data = await response.json()
    
    write(data)
    return data.name
}
    async function req2() {
    const name = await req()
    console.log(name)
    const response = await fetch("https://rickandmortyapi.com/api/character/?name=" + name)
    const data = await response.json()

    console.log(data)
        
    }
function write(data) {
    $('#name').text(data.name)
    characteres.push(data.name)
    console.log(characteres)
}