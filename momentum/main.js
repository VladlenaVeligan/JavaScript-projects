const time = document.getElementById('time'),
    data = document.getElementById('data'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    date = document.getElementById('date'),
    focus = document.querySelector('.focus'),
    quote = document.querySelector('.quote'),
    author = document.querySelector('.author'),
    button = document.querySelector('.button'),
    btn = document.querySelector('.btn'),
    weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    humidity = document.querySelector('.humidity'),
    windSpeed = document.querySelector('.windSpeed'),
    weatherDescription = document.querySelector('.weather-description'),
    city = document.querySelector('.city');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//TIME
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();




    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    // if (min === 00 && sec === 00) {
    //     getImage()
    // }
    setTimeout(showTime, 1000);
}

function showDate() {
    let today = new Date(),
        num = today.getDate(),
        day = today.getDay(),
        month = today.getMonth();

    day = days[day];
    month = months[month];

    date.innerHTML = `${day},  ${num} ${month}`;
}

showDate()

//ADD ZERO
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//GREETING
function setGreet() {
    let today = new Date(),
        hour = today.getHours();

    //NIGHT
    if (hour >= 0 && hour < 6) {
        greeting.textContent = 'Good Night,';
    }
    //MORNING
    if (hour >= 6 && hour < 12) {
        greeting.textContent = 'Good Morning,';
    }
    //DAY
    if (hour >= 12 && hour < 18) {
        greeting.textContent = 'Good Day,';
    }
    //EVENING
    if (hour >= 18) {
        greeting.textContent = 'Good Evening,';
    }

    setTimeout(setGreet, 30000);

}


//GET NAME
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = 'Enter Name';
        localStorage.setItem('name', name.textContent);
    } else {
        name.textContent = localStorage.getItem('name');
    }
}


//SET NAME
function setName(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            if (name.textContent == '')
                name.textContent = localStorage.getItem('name');
            else
                localStorage.setItem('name', name.textContent);
            name.blur();
        }
    } else {
        localStorage.setItem('name', name.textContent);
    }
}

function checkName() {
    if ((name.textContent == '') || (name.textContent.trim().length == 0))
        name.textContent = localStorage.getItem('name');
    else {
        localStorage.setItem('name', name.textContent);
        name.textContent = localStorage.getItem('name');
    }
}

name.addEventListener('click', function() {
    name.textContent = '';
});
name.addEventListener('keypress', setName);
name.addEventListener('blur', checkName);



// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = 'Enter Focus';
        localStorage.setItem('focus', focus.textContent);
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            checkFocus();
            localStorage.setItem('focus', focus.textContent);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', focus.textContent);
    }
}

//checkFocus
function checkFocus() {
    if ((focus.textContent == '') || (focus.textContent.trim().length == 0))
        focus.textContent = localStorage.getItem('focus');
    else {
        localStorage.setItem('focus', focus.textContent);
        focus.textContent = localStorage.getItem('focus');
    }
}

focus.addEventListener('click', function() {
    focus.textContent = '';
});
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', checkFocus);

//QUOTE

async function getQuote() {
    const url = `https://favqs.com/api/qotd`;
    const res = await fetch(url);
    const data = await res.json();
    quote.textContent = data.quote.body;
    author.textContent = data.quote.author;
}
document.addEventListener('DOMContentLoaded', getQuote);
button.addEventListener('click', getQuote);

//IMAGE

const baseNight = '/vladlenaveligan-JS2020Q3/momentum//image/night/';
const baseMorning = '/vladlenaveligan-JS2020Q3/momentum//image/morning/';
const baseDay = '/vladlenaveligan-JS2020Q3/momentum//image/day/';
const baseEvening = '/vladlenaveligan-JS2020Q3/momentum//image/evening/';
const baseAll = '/vladlenaveligan-JS2020Q3/momentum//image/';

const images = [
    "01.jpg",
    "02.jpg",
    "03.jpg",
    "05.jpg",
    "06.jpg",
    "07.jpg",
    "08.jpg",
    "09.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg"

];
let i = 0;

const night = "night/";
const morning = "morning/";
const day = "day/";
const evening = "evening/";

let arrSix = [];

function randomImage() {
    const i = Math.floor(Math.random() * images.length);
    let j = i;
    let array = [];

    console.log(j)
    j > 13 ? (j = j - 7) : true;

    for (let o = j; o < images.length; o++) {
        if (o >= 19 || images[o] === undefined) {
            o = o - 10;
            array.push(images[o]);
        } else {
            array.push(images[o]);
            console.log(array)
        }
    }

    let k = 0;
    while (k < 6) {
        arrSix.push(array[k]);
        k++;
    }
    return arrSix;
}

console.log(arrSix)
randomImage();

const arr24 = [...arrSix, ...arrSix, ...arrSix, ...arrSix];
console.log(arr24)
window.onload = function firstBackground() {
    let imageSrc = "";
    let today = new Date();
    let hour = today.getHours();
    let index = Math.floor(Math.random() * arrSix.length);
    if (hour < 6) {
        imageSrc = baseNight + arrSix[index];
    } else if (hour < 12) {
        imageSrc = baseMorning + arrSix[index];
    } else if (hour < 18) {
        imageSrc = baseDay + arrSix[index];
    } else if (hour < 24) {
        imageSrc = baseEvening + arrSix[index];
    }

    viewBgImage(imageSrc);
};

function viewBgImage(data) {
    const body = document.querySelector("body");
    const src = data;
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => {
        body.style.backgroundImage = `url(${src})`;
    };
}

function getImage() {
    const index = Math.floor(Math.random() * images.length);
    let imageSrc = "";
    let today = new Date();
    let hour = today.getHours();
    let pos = hour + i;

    if (pos >= 24) {
        i = i - pos;
    }

    console.log(pos + " pos");
    if (pos < 6 || pos === 24) {
        imageSrc = baseAll + night + arr24[pos - 1];
        console.log("night");
    } else if (pos < 12) {
        imageSrc = baseAll + morning + arr24[pos];
        console.log("morning");
    } else if (pos < 18) {
        imageSrc = baseAll + day + arr24[pos];
        console.log("day");
    } else if (pos < 24) {
        imageSrc = baseAll + evening + arr24[pos];
        console.log("evening");
    }

    viewBgImage(imageSrc);
    i++;

    btn.disabled = true;
    setTimeout(function() {
        btn.disabled = false;
    }, 1000);
}
btn.addEventListener("click", getImage);

// WETHER 

async function getWeather() {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=b3ff8909d1ce77ca40e98317542103c3&units=metric`;
        const res = await fetch(url);
        const data = await res.json();

        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        windSpeed.textContent = `Wind Speed: ${Math.round(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity:${Math.round(data.main.humidity)}%`;
        weatherDescription.textContent = data.weather[0].description;

    } catch (e) {
        alert("Enter the correct city name");
    }

}

function getCity() {
    if (
        localStorage.getItem("city") === null ||
        localStorage.getItem("city") === ""
    ) {
        city.textContent = "Enter City";
        localStorage.setItem("city", city.textContent);
    } else {
        city.textContent = localStorage.getItem("city");
    }
}

function setCity(e) {
    if (e.type === "click") city.textContent = "";
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
            if (city.textContent !== "") {
                localStorage.setItem("city", e.target.innerText);
                getWeather();
                city.blur();
            } else city.textContent = localStorage.getItem("city");
        }
    } else if (e.type === "blur") {
        if (city.textContent !== "")
            localStorage.setItem("city", e.target.innerText);
        else city.textContent = localStorage.getItem("city");
    }
}
document.addEventListener("DOMContentLoaded", getWeather);
city.addEventListener("keypress", setCity);
city.addEventListener("blur", setCity);
city.addEventListener("click", setCity);

//RUN
showTime();
setGreet();
getName();
getFocus();
getQuote();
getCity();