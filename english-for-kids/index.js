/*** BURGER ***/
const burgerMenu = document.querySelector(".burger-menu");
const burgerButton = document.querySelector(".btn-outline-warning");
const burgerIcon = document.querySelector(".material-icons");
const overlay = document.querySelector(".overlay");




burgerButton.addEventListener("click", () => {
    if (burgerMenu.classList.contains("hidden") === true) {
        burgerMenu.classList.remove("hidden");
        burgerMenu.classList.add("visible");
        overlay.classList.add("overlay-visible");
        burgerIcon.innerHTML = "clear";
        burgerButton.style.transition = "all 0.9s linear";

    } else {
        burgerMenu.classList.remove("visible");
        overlay.classList.remove("overlay-visible");
        burgerMenu.classList.add("hidden");
        burgerIcon.innerHTML = "clear_all";
    };


});

function closeBurger() {
    if (burgerMenu.classList.contains("visible") === true) {
        burgerMenu.classList.remove("visible");
        burgerMenu.classList.add("hidden");
        overlay.classList.remove("overlay-visible");
        burgerIcon.innerHTML = "clear_all";
        burgerButton.style.transition = "all 0.9s linear";

    }
}

overlay.addEventListener(("click"), () => {
    closeBurger();
});


/*** PAGE FUNCTION ***/
const namePage = document.querySelector(".name-page");
const mainPage = document.querySelector(".main-page");
const audioPlay = document.querySelector(".play");
const nameCategory = document.querySelector(".name-category");


const cardTitle = document.querySelectorAll(".card-title");
const cardImage = document.querySelectorAll(".card-img-top");
const cardAudio = document.querySelectorAll(".card-audio");
const translateButton = document.querySelectorAll(".bth-translate");
const card = document.querySelectorAll(".card");


function flipCard(categoryName, categoryNameRus) {
    for (let i = 0; i < cardTitle.length; i++) {
        translateButton[i].addEventListener("click", () => {
            cardAudio[i].pause();
            card[i].addEventListener("mouseover", function(event) {
                cardTitle[i].innerHTML = categoryNameRus[i];
                event.target.style.transform = "rotateY(180deg)";
                event.target.style.transition = "1s";
            });
            card[i].addEventListener("mouseout", function(event) {
                cardTitle[i].innerHTML = categoryName[i];
                event.target.style.transform = "rotateY(0deg)";
                event.target.style.transition = "1s";
            });
        });
    }
};

function generateMainCards() {

    const categoryArr = [{
            category: 'Farm animals',
            image: 'farm-animal'
        },
        {
            category: 'Wild animals',
            image: 'wild-animal'
        },
        {
            category: 'Verbs',
            image: 'verbs'
        },
        {
            category: 'Vegetable',
            image: 'vegetable'
        },
        {
            category: 'Fruits',
            image: 'fruit'
        },
        {
            category: 'Fast food',
            image: 'fast-food'
        },

        {
            category: 'Fish',
            image: 'fish'
        },

        {
            category: 'Birds',
            image: 'birds'
        }
    ];

    let categoryName = categoryArr.map(a => a.category);
    let imageForCard = categoryArr.map(a => a.image);

    for (let i = 0; i < cardTitle.length; i++) {
        translateButton[i].innerHTML = "";
        cardTitle[i].innerHTML = categoryName[i];
        cardImage[i].src = `/english-for-kids/assets/category/${imageForCard[i]}.png`;
        cardAudio[i].src = "";
    }

}

function showMainPage() {
    nameCategory.innerHTML = "";
    generateMainCards();
    closeBurger();
}


function generateFarmCards() {

    const folderName = 'farm-animals';

    const categoryArr = [{
            category: 'Cat',
            categoryRus: 'Кот',
            image: 'cat',
            audio: 'cat'
        },
        {
            category: 'Horse',
            categoryRus: 'Лошадь',
            image: 'horse',
            audio: 'horse'
        },
        {
            category: 'Chicken',
            categoryRus: 'Курица',
            image: 'chicken',
            audio: 'chicken'
        },
        {
            category: 'Cow',
            categoryRus: 'Корова',
            image: 'cow',
            audio: 'cow'
        },
        {
            category: 'Pig',
            categoryRus: 'Свинья',
            image: 'pig',
            audio: 'pig'
        },
        {
            category: 'Goat',
            categoryRus: 'Коза',
            image: 'goat',
            audio: 'goat'
        },

        {
            category: 'Turkey',
            categoryRus: 'Индюк',
            image: 'turkey',
            audio: 'turkey'
        },

        {
            category: 'Rabbit',
            categoryRus: 'Заяц',
            image: 'rabbit',
            audio: 'rabbit'
        }
    ];
    createContentCards(categoryArr, folderName);
};



function showFarmPage() {
    nameCategory.innerHTML = 'Farm animals';
    generateFarmCards();
    closeBurger();
}



function generateWildCards() {
    const folderName = 'wild-animals';

    const categoryArr = [{
            category: 'Elephant',
            categoryRus: 'Слон',
            image: 'elephant',
            audio: 'elephant'
        },
        {
            category: 'Lion',
            categoryRus: 'Лев',
            image: 'lion',
            audio: 'lion'
        },
        {
            category: 'Hippo',
            categoryRus: 'Гиппопотам',
            image: 'hippo',
            audio: 'hippo'
        },
        {
            category: 'Tiger',
            categoryRus: 'Тигр',
            image: 'tiger',
            audio: 'tiger'
        },
        {
            category: 'Zebra',
            categoryRus: 'Зебра',
            image: 'zebra',
            audio: 'zebra'
        },
        {
            category: 'Fox',
            categoryRus: 'Лиса',
            image: 'fox',
            audio: 'fox'
        },

        {
            category: 'Monkey',
            categoryRus: 'Обезьяна',
            image: 'monkey',
            audio: 'monkey'
        },

        {
            category: 'Crocodile',
            categoryRus: 'Крокодил',
            image: 'crocodile',
            audio: 'crocodile'
        }
    ];
    createContentCards(categoryArr, folderName);
}




function showWildPage() {
    nameCategory.innerHTML = 'Wild animals';
    generateWildCards();
    closeBurger();
}


function generateVerbsCards() {

    const folderName = 'verbs';
    const categoryArr = [{
            category: 'Cook',
            categoryRus: 'Готовить',
            image: 'cook',
            audio: 'cook'
        },
        {
            category: 'Relax',
            categoryRus: 'Расслабляться',
            image: 'relax',
            audio: 'relax'
        },
        {
            category: 'Sleep',
            categoryRus: 'Спать',
            image: 'sleep',
            audio: 'sleep'
        },
        {
            category: 'Dance',
            categoryRus: 'Танцевать',
            image: 'dance',
            audio: 'dance'
        },
        {
            category: 'Work',
            categoryRus: 'Работать',
            image: 'work',
            audio: 'work'
        },
        {
            category: 'Walk',
            categoryRus: 'Гулять',
            image: 'walk',
            audio: 'walk'
        },

        {
            category: 'Play',
            categoryRus: 'Играть',
            image: 'play',
            audio: 'play'
        },

        {
            category: 'Paint',
            categoryRus: 'Рисовать',
            image: 'paint',
            audio: 'paint'
        }
    ];

    createContentCards(categoryArr, folderName);
}

function showVerbsPage() {
    nameCategory.innerHTML = 'Verbs';
    generateVerbsCards();
    closeBurger();
}

function generateVegetableCards() {

    const folderName = 'vegetable';

    const categoryArr = [{
            category: 'Corn',
            categoryRus: 'Кукуруза',
            image: 'corn',
            audio: 'corn'
        },
        {
            category: 'Beet',
            categoryRus: 'Свекла',
            image: 'beet',
            audio: 'beet'
        },
        {
            category: 'Pepper',
            categoryRus: 'Перец',
            image: 'pepper',
            audio: 'pepper'
        },
        {
            category: 'Onion',
            categoryRus: 'Лук',
            image: 'onion',
            audio: 'onion'
        },
        {
            category: 'Tomato',
            categoryRus: 'Помидор',
            image: 'tomato',
            audio: 'tomato'
        },
        {
            category: 'Hot pepper',
            categoryRus: 'Острый перец',
            image: 'hot-pepper',
            audio: 'hot-pepper'
        },

        {
            category: 'Zucchini',
            categoryRus: 'Цукини',
            image: 'zucchini',
            audio: 'zucchini'
        },

        {
            category: 'Eggplant',
            categoryRus: 'Баклажан',
            image: 'eggplant',
            audio: 'eggplant'
        }
    ];

    createContentCards(categoryArr, folderName);
}


function showVegetablePage() {
    nameCategory.innerHTML = 'Vegetables';
    generateVegetableCards();
    closeBurger();
}



function generateFruitCards() {
    const folderName = 'fruits';
    const categoryArr = [{
            category: 'Orange',
            categoryRus: 'Апельсин',
            image: 'orange',
            audio: "orange"
        },
        {
            category: 'Apple',
            categoryRus: 'Яблоко',
            image: 'apple',
            audio: "apple"
        },
        {
            category: 'Coconut',
            categoryRus: 'Кокос',
            image: 'coconut',
            audio: "coconut"
        },
        {
            category: 'Kiwi',
            categoryRus: 'Киви',
            image: 'kiwi',
            audio: "kiwi"
        },
        {
            category: 'Peach',
            categoryRus: 'Персик',
            image: 'peach',
            audio: "peach"
        },
        {
            category: 'Banana',
            categoryRus: 'Банан',
            image: 'banana',
            audio: "banana"
        },

        {
            category: 'Lemon',
            categoryRus: 'Лемон',
            image: 'lemon',
            audio: "lemon"
        },

        {
            category: 'Pear',
            categoryRus: 'Груша',
            image: 'pear',
            audio: "pear"
        }
    ];
    createContentCards(categoryArr, folderName);

}


function showFruitPage() {
    nameCategory.innerHTML = 'Fruits';
    generateFruitCards();
    closeBurger();
}




function generateFastFoodCards() {
    const folderName = 'fast-food'
    const categoryArr = [{
            category: 'Burger',
            categoryRus: 'Бургер',
            image: 'burger',
            audio: 'burger'
        },
        {
            category: 'Pizza',
            categoryRus: 'Пицца',
            image: 'pizza',
            audio: 'pizza'
        },
        {
            category: 'Sandwich',
            categoryRus: 'Сендвич',
            image: 'sandwich',
            audio: 'sandwich'
        },
        {
            category: 'Hot dog',
            categoryRus: 'Хот дог',
            image: 'hot-dog',
            audio: 'hot-dog'
        },
        {
            category: 'Sushi',
            categoryRus: 'Суши',
            image: 'sushi',
            audio: 'sushi'
        },
        {
            category: 'Taco',
            categoryRus: 'Тако',
            image: 'taco',
            audio: 'taco'
        },

        {
            category: 'Ice cream',
            categoryRus: 'Мороженое',
            image: 'ice-cream',
            audio: 'ice-cream'
        },

        {
            category: 'French fries',
            categoryRus: 'Картошка фри',
            image: 'french-fries',
            audio: 'french-fries'
        }
    ];

    createContentCards(categoryArr, folderName);
}

function showFastFoodPage() {
    nameCategory.innerHTML = 'Fast food';
    generateFastFoodCards();
    closeBurger();
}



function generateFishCards() {
    const folderName = 'fish';

    const categoryArr = [{
            category: 'Orca',
            categoryRus: 'Косатка',
            image: 'orca',
            audio: 'orca'
        },
        {
            category: 'Seahorse',
            categoryRus: 'Морской конек',
            image: 'seahorse',
            audio: 'seahorse'
        },
        {
            category: 'Whale',
            categoryRus: 'Кит',
            image: 'whale',
            audio: 'whale'
        },
        {
            category: 'Dolphin',
            categoryRus: 'Дельфин',
            image: 'dolphin',
            audio: 'dolphin'
        },
        {
            category: 'Jellyfish',
            categoryRus: 'Медуза',
            image: 'jellyfish',
            audio: 'jellyfish'
        },
        {
            category: 'Shark',
            categoryRus: 'Акула',
            image: 'shark',
            audio: 'shark'
        },

        {
            category: 'Stingray',
            categoryRus: 'Скат',
            image: 'stingray',
            audio: 'stingray'
        },

        {
            category: 'Starfish',
            categoryRus: 'Морская звезда',
            image: 'starfish',
            audio: 'starfish'
        }
    ];
    createContentCards(categoryArr, folderName);
}




function showFishPage() {
    nameCategory.innerHTML = 'Fish';
    generateFishCards();
    closeBurger();
}





function generateBirdsCards() {
    const folderName = 'birds';

    const categoryArr = [{
            category: 'Eagle',
            categoryRus: 'Орел',
            image: 'eagle',
            audio: 'eagle'
        },
        {
            category: 'Owl',
            categoryRus: 'Сова',
            image: 'owl',
            audio: 'owl'
        },
        {
            category: 'Flamingo',
            categoryRus: 'Фламинго',
            image: 'flamingo',
            audio: 'flamingo'
        },
        {
            category: 'Swan',
            categoryRus: 'Лебедь',
            image: 'swan',
            audio: 'swan'
        },
        {
            category: 'Toucan',
            categoryRus: 'Тукан',
            image: 'toucan',
            audio: 'toucan'
        },
        {
            category: 'Pigeon',
            categoryRus: 'Голубь',
            image: 'pigeon',
            audio: 'pigeon'
        },

        {
            category: 'Penguin',
            categoryRus: 'Пенгвин',
            image: 'penguin',
            audio: 'penguin'
        },

        {
            category: 'Hummingbird',
            categoryRus: 'Колибри',
            image: 'hummingbird',
            audio: 'hummingbird'
        }
    ];

    createContentCards(categoryArr, folderName);

}

function showBirdsPage() {
    nameCategory.innerHTML = 'Birds';
    generateBirdsCards();
    closeBurger();
}


function createContentCards(categoryArr, folderName) {
    let categoryName = categoryArr.map(a => a.category);
    let categoryNameRus = categoryArr.map(a => a.categoryRus);
    let imageForCard = categoryArr.map(a => a.image);
    let audioForCard = categoryArr.map(a => a.audio);

    for (let i = 0; i < cardTitle.length; i++) {
        card[i].removeAttribute("onclick");
        translateButton[i].innerHTML = "360";

        cardTitle[i].innerHTML = categoryName[i];
        cardImage[i].src = `/vladlenaveligan-JS2020Q3/english-for-kids/assets/${folderName}/${imageForCard[i]}.png`;
        cardAudio[i].src = `/vladlenaveligan-JS2020Q3/english-for-kids/assets/${folderName}/audio/${audioForCard[i]}.mp3`;

        card[i].addEventListener("click", () => {
            cardAudio[i].play();
        });
    };
    flipCard(categoryName, categoryNameRus);
}


const gameButton = document.querySelector('.game');
const trainButton = document.querySelector('.train');
const startButton = document.querySelector('.btn-start');
const cardBody = document.querySelectorAll('.card-body');

gameButton.addEventListener("click", () => {
    for (let i = 0; i < cardTitle.length; i++) {
        cardBody[i].remove();
    }
    startButton.classList.remove('btn-hidden');
    startButton.classList.add('btn-visible');
});

trainButton.addEventListener("click", () => {
    startButton.classList.remove('btn-visible');
    startButton.classList.add('btn-hidden');
});