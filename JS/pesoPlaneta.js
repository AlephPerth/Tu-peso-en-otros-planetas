const g_earth = 9.8;
const i_weight = document.getElementById('input_weight')
const gravity = document.getElementById('calculate')
const planet = document.getElementsByName('planet')

let mercury = null;
let venus = null;
let mart = null;
let jupiter = null;
let saturno = null;
let uranus = null;
let neptune = null;
let pluto = null;
let planet_name = null;
let result = null;
let final_weight = null;
let u_weight = null;
let arr_planets = []
let planets = null;

document.getElementById("section-B").style.display = "none"
document.getElementById("section-C").style.display = "none"

class Planets {

    constructor (name, picture, rotation, radio, gravity) {

        this.name = name
        this.picture = picture
        this.rotation = rotation
        this.radio = radio
        this.gravity = gravity
        this.planetPicture = new Image()
        this.planetPicture.src = picture
    }
}

const planetMercury = new Planets ('Mercurio', './img/Mercurio.jpg', '58,7 días', '57.894.376KM',3.7)
const planetVenus = new Planets ('Venus', './img/Venus.jpg', '243,0187 días', '6051.8KM', 8.87)
const planetMart = new Planets ('Marte', './img/Marte.jpg', '24h 39min 35s', '3389.5KM', 3.7)
const planetJupiter = new Planets ('Jupiter', './img/Jupiter.jpg', '9h 55m 30s', '71492.0KM', 24.8)
const planetSaturn = new Planets ('Saturno', './img/Saturno.png', '10h 33m 38s', '58232.0KM', 10.44)
const planetUranus = new Planets ('Urano', './img/Urano.jpg', '-17h 14m', '51.118KM', '8.87')
const planetNeptune = new Planets ('Neptuno', './img/Neptuno.jpg', '16h 6m 14s', '24622KM', 11.15)
const planetPluto = new Planets ('Pluton', './img/Pluton.jpg', '153hs','1185KM','0.62', 7)

arr_planets.push(planetMercury, planetVenus, planetMart, planetJupiter, planetSaturn, planetUranus, planetNeptune, planetPluto)

i_weight.addEventListener('click', () => { 

    u_weight = document.getElementById('user_weight').value;
    document.getElementById("section-A").style.display = "none"
    document.getElementById("section-B").style.display = "grid"

})

arr_planets.forEach((Planets) => {

    planets = 
    `
        <div>  
            <label for='${Planets.name}'>
                <img src='${Planets.picture}' alt='${Planets.name}' id='img_planet'/>
                <span class='grid gap-3'>
                ${Planets.name}
                <input type='radio' value=${Planets.gravity} id=${Planets.name} name='planet'/>
                </span>
            </label>
        </div>
    `
    document.getElementById('grid').innerHTML += planets

}) 

mercury = document.getElementById("Mercurio")
venus = document.getElementById("Venus")
mart = document.getElementById("Marte")
jupiter = document.getElementById("Jupiter")
saturno = document.getElementById("Saturno")
uranus = document.getElementById("Urano")
neptune = document.getElementById("Neptuno")
pluto = document.getElementById("Pluton")

gravity.addEventListener('click', () => {

document.getElementById("section-B").style.display = "none"
document.getElementById("section-C").style.display = "block"

if(mercury.checked) {
        planets = planetMercury
} else if (venus.checked) {
        planets = planetVenus
} else if (mart.checked) {
        planets = planetMart
} else if (jupiter.checked) {
        planets = planetJupiter
} else if (saturno.checked) {
        planets = planetSaturn
} else if (uranus.checked) {
        planets = planetUranus
} else if (neptune.checked) {
        planets = planetNeptune
} else if (pluto.checked) {
        planets = planetPluto
    }

    data_planet()
})

let data_planet = () => {

final_weight = parseInt(u_weight * planets.gravity / g_earth)

result = 
`
    <h2 class= 'text-center pt-4 mt-4'> En ${planets.name} los dias duran ${planets.rotation} 
        y su radio es de ${planets.radio}. La fuerza de gravedad en 
        ${planets.name} es de ${planets.gravity} m/s </h2> 
        
        <div class= "d-flex justify-content-center py-4">
            <img id= img_planet_xl src = ${planets.picture}>
        </div>
        
        <h3 class= 'text-center pr-4'> Tu peso en ${planets.name} seria de: ${final_weight} Kg </h3>   
    
    <div class='col-12 pt-4 d-flex justify-content-center pr-4'>
        <button id=refresh onClick="window.location.reload();" class='btn btn-primary btn-lg'>VOLVER</button>
    </div>
`

document.getElementById("section-C").innerHTML = result

}