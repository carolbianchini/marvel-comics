const timeStamp = '1686228811'
const apiKey = '5655e781f8175f537604d75a2ff2d0cc'
const md5 = 'bac1217b8540f7845d08273bb6f3a25b'

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    const divHero = document.getElementById('herois');

    jsonParsed.data.results.forEach(element => {
        const srcImage = element.thumbnail.path + '.' + element.thumbnail.extension
        const nameHero = element.name
        const desc = element.description

        createDivHero(srcImage, nameHero, desc, divHero);
    });

    console.log(jsonParsed);
})

function createDivHero(srcImage, nameHero, desc, divToAppend, ) {
    const divPai = document.createElement('div')
    const divFilho = document.createElement('div')
    const textName = document.createElement('text')
    const img = document.createElement('img')
    const descricao = document.createElement('p')


    textName.textContent = nameHero
    descricao.textContent = desc
    img.src = srcImage

    divFilho.appendChild(img)
    divFilho.appendChild(textName)
    divFilho.appendChild(descricao)
    divPai.appendChild(divFilho)
    divToAppend.appendChild(divPai)

    divPai.classList.add('personagem');
}
