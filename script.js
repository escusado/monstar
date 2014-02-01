var naruto = {
    name    : 'Naruto',
    surname : 'Uzumaki',
    age     : 29,
    parents : {
        mother : 'Lina',
        father : 'Minato'
    },
    getFullName : function(){
        return this.name+' '+this.surname;
    }
};

console.log('El Toily', naruto);

var action = 'draw';

switch(action) {
    case 'draw':
        console.log('esto es draw');
        break;
    case 'eat':
        console.log('esto es eat');
        break;
    default:
        console.log('entro el default');
}

/////////////////////

var myElements = document.getElementsByClassName('box');

var myNameElement = myElements[0];

myNameElement.innerHTML = naruto.getFullName();

myNameElement.addEventListener('mouseout', function(){
   myNameElement.innerHTML = 'Clicked name!!!';
});

myElements[1].appendChild(myNameElement);

/////////////////////

