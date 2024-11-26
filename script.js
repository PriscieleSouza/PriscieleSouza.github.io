// O html se chama document no javascript
// O queryselector é uma ferramenta para extrair inforações do html
const image = document.querySelector(".image");
// console.log(image); -> já posso acessar o componente section do site

const myObserver = new IntersectionObserver((entries) => {
  console.log(entries);
});

myObserver.observe(image);