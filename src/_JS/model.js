export async function getHero(name) {
    const res = await fetch(`http://localhost:3000/getHero/${name}`)
    let data = await res.json()
    return data
}



