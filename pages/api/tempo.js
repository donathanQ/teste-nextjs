async function tempo(request,response){
    const dynamicDate = new Date();
    
    const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogRespondeJson = await dogResponse.json();
    const imgDog = dogRespondeJson.message;

    response.setHeader('Cach-Control','s-maxage=10', 'stale-while-revalidade');

    response.json({
        date: dynamicDate.toGMTString(),
        imagem: imgDog
    })
}

export default tempo;