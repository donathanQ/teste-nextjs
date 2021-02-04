async function tempo(request,response){
    const dynamicDate = new Date();
    
    const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogRespondeJson = await dogResponse.json();
    const imgDog = dogRespondeJson.message;
    response.json({
        date: dynamicDate.toGMTString(),
        imagem: imgDog
    })
}

export default tempo;