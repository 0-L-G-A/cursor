async function getRandomChinese(length = 4){
    let letters = "";
        for (let i = 0; i < length; i++) { 
            let date = Date.now()
            let sign = (date.toString()).substring(-5)
            let letter = String.fromCharCode(sign)
            letters = letters + ' ' + letter;
            await new Promise((resolve) => {
                setTimeout(() => {resolve(letter)}, 50)
            })  
        }
    console.log(letters);
    return letters;    
}
getRandomChinese(8);
