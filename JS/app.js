const timeStamp = '1686228811'
const apiKey = '5655e781f8175f537604d75a2ff2d0cc'
const md5 = 'bac1217b8540f7845d08273bb6f3a25b'

fetch(`https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`).then((response) => {
    return response.json();
}).then((jsonParsed) => {
    console.log(jsonParsed);
})
