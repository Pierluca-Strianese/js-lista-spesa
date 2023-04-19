const arrList = [
	'Acqua',
    'Nutella',
    'Pane',
    'Pasta',
    'Carne',
    'Peperoni'
];

const eleList = document.querySelector('#list');
let i = 0;

while (i < arrList.length) {
    eleList.innerHTML += `<li>${arrList[i]}</li>`
    i++;
}