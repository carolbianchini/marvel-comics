const timeStamp = '1686228811'
const apiKey = '5655e781f8175f537604d75a2ff2d0cc'
const md5 = 'bac1217b8540f7845d08273bb6f3a25b'

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=40`).then((response) => {
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


function geraModal(){

    const itens = {
        containerModal: document.getElementById('containerModal'),
        modal: document.getElementById('modal'),
        texto: document.createElement('p'),
        textDesc: document.createElement('text'),
        imagem: document.createElement('img'),
        fechar: document.getElementById('fechar')
    }

    // Evento para aparecer o modal ao clicar no personagem
    divFilho.addEventListener('click', () => {
        itens.containerModal.style.display = 'flex'
        itens.texto.innerHTML = textName.textContent
        itens.imagem.src = srcImage
        itens.textDesc.innerHTML = desc
        itens.textDesc.classList.add('desc')

        itens.modal.appendChild(itens.texto)
        itens.modal.appendChild(itens.imagem)
        itens.modal.appendChild(itens.textDesc)
    })

    // Função para chamar o evento para fechar o modal
    function fechar(item){
        item.addEventListener('click', () => {
            itens.containerModal.style.display = 'none'
            itens.modal.removeChild(itens.texto)
            itens.modal.removeChild(itens.imagem)
            itens.modal.removeChild(itens.textDesc)
        })
    }
    fechar(itens.fechar)
    fechar(itens.containerModal)
    geraModal();
    div.appendChild(divPai)
}


