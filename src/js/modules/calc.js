// const calc = (size, material, options, promocode, result) => {
//     const siteBlock = document.querySelector(size),
//         materialBlock = document.querySelector(material),
//         optionsBlock = document.querySelector(options),
//         promocodeBlock = document.querySelector(promocode),
//         resultlBlock = document.querySelector(result);

//     let sum = 0;

//     const calcFunc = () => {
//         sum = Math.round((+siteBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
//         if (siteBlock.value == "" || materialBlock.value == "") {
//             resultlBlock.textContent = "Пожалуйста, выберите размер и материал картины";
//         } else if (promocodeBlock.value === "IWANTPOPART") {
//             resultlBlock.textContent = Math.round(sum * 0.7);
//         } else {
//             resultlBlock.textContent = sum;
//         }
//     };

//     siteBlock.addEventListener("change", calcFunc);
//     materialBlock.addEventListener("change", calcFunc);
//     optionsBlock.addEventListener("change", calcFunc);
//     promocodeBlock.addEventListener("input", calcFunc);
    
// };

const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};


export default calc;