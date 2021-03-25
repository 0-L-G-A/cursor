// function getRandomChineses(length = 4){
//     let letter;
//     for(let i = 0; i < length; i++){
//         let date = Date.now()
//         let sign = (date.toString()).substring(8, 13)
//         letter = String.fromCharCode(sign)
//     }
//     return letter;
// }

// getRandomChinese()
//console.log(getRandomChinese())


//А далі вантажівка з костилями підїхала

function getRandomChinese(length = 4) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let letter;
        for(let i = 0; i < length; i++){
            let date = Date.now()
            let sign = (date.toString()).substring(8, 13)
            letter = String.fromCharCode(sign)
            console.log(letter)
            resolve(letter)
        }
      },length * 50)
    })
    
  }

let string = ""

getRandomChinese(1)
.then(() => getRandomChinese(1))
.then(() => getRandomChinese(1))
.then(() => getRandomChinese(1))
