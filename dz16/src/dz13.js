const dz13 = () => {
console.log('VERSION 3')

const scr = document.createElement('script');
scr.src = "https://unpkg.com/axios/dist/axios.min.js";

const header = document.createElement('header');
const getInfoButton = document.createElement('button');
getInfoButton.className="button13";
getInfoButton.innerHTML = 'Characters';
const getPlanetsButton = document.createElement('button');
getPlanetsButton.className="button13";
getPlanetsButton.innerHTML = 'Planets';
const container = document.createElement('div');
container.id = 'container13';




getInfoButton.addEventListener('click', () => getData('https://swapi.dev/api/films/2/', showCharacters));
getPlanetsButton.addEventListener('click', () => getData('https://swapi.dev/api/planets/', showPlanets));
let getNextButton;
let url = '';

const body = document.querySelector('body');

function getData(url, foo){
    if (url.slice(0, 5) ===  'http:') url.replace('http', 'https')
    axios.get(url).then(response => foo(response.data));
    }

function showCharacters(data){
    if(container.hasChildNodes()){container.querySelectorAll('*').forEach(node => node.remove());}
    if(document.getElementById('next')){ getNextButton.remove()};
    data.characters.forEach(async user => {
        if (user.slice(0, 5) === 'http:') user = user.replace('http', 'https')

        let useri = await axios.get(user)

        let name = useri.data.name;
        let dateOfBirth = useri.data.birth_year;
        let gender = useri.data.gender;

        const element = document.createElement('div');
        container.appendChild(element);
        element.classList.add('char13')

        function createElement(data, typeOfChildName){
            const childName = document.createElement(typeOfChildName)
            childName.innerHTML = data
            element.append(childName)  
        }

        createElement(name, 'h2');
        createElement(dateOfBirth, 'h5')
        createElement(gender, 'h4')

    });
}

function showPlanets(data){
    url = data.next;
    if (url.slice(0, 5) ===  'http:') url = url.replace('http', 'https')
    if(container.hasChildNodes()){container.querySelectorAll('*').forEach(node => node.remove());}
    data.results.forEach(async planet => {
        const name = planet.name;
        
        const element = document.createElement('div');
        container.appendChild(element);
        element.classList.add('planets13')

        function createElement(data, typeOfChildName){
            const childName = document.createElement(typeOfChildName)
            childName.innerHTML = data
            element.append(childName)  
        }

        createElement(name, 'h2');
        
    });
    if(document.getElementById('next')) return;
    getNextButton = document.createElement('button')
    getNextButton.id = 'next'
    getNextButton.classList.add('button13')
    getNextButton.innerHTML = 'NEXT'
    body.append(getNextButton) 
    getNextButton.addEventListener('click', () => getData(url, showPlanets));
}
return "HW 13";
}

export default dz13;