// english keyboard keys
//zhuyin keyboard keys
const toTypeBox = document.querySelector('#toType');
const numBox = document.querySelector('#numBox');
var heartDivs = document.querySelectorAll('.pixelheart');
var heartBox = document.querySelector('#heartBox');
let num = 6;
let numberOfWords = 25;
// let letterListArr = ["a", "s", "d", "f", "j", "k", "l", "e", "n", "i", "o", "b", "u", "t"];
let fullLetterList = "enitrlsauodychgmpbkvwfzxqj";
let wordArray;
let toTypeArr = [];
let nuTypeArr = [];
let wholeString = "";
let thisNum = 0;
let testingChar;
function letterCountDown() {
    if (num === 5) {
        return
    } else {
        num--;
        pickWords();
    }
};
function letterCountUp() {
    if (num === 26) {
        return
    } else {
        num++;
        pickWords();
    }
}
function wordCountDown() {
    if (numberOfWords === 10) {
        return
    } else {
        numberOfWords--;
        pickWords();
    }
};
function wordCountUp() {
    if (numberOfWords === 45) {
        return
    } else {
        numberOfWords++;
        pickWords();
    }
}
pickWords();
function pickWords() {
    toTypeArr = [];
    nuTypeArr = [];
    removeAllChildren(toTypeBox);
    let letterList = fullLetterList.substring(0, num);
    numBox.textContent = num + " letters";
    wordNumBox.textContent = numberOfWords + " words";
    englishWords.forEach(word => {
        wordArray = [];
        for (let i = 0; i < word.length; i++) {
            // console.log(word[i]);
            if (!letterList.includes(word[i])) {
                // console.log("YES: ", word);
                // wordArray.push(word);
                return;
            } else {
                wordArray.push(word);
            }
        }
        // console.log(wordArray)
        // console.log(wordArray.length)
        if (wordArray.length === word.length) {
            // console.log(word);
            toTypeArr.push(word);
        };
    });
    shuffleAndPost();
}
function shuffleAndPost() {
    // console.log("before: ", toTypeArr);
    shuffleArray(toTypeArr);
    // console.log("after ", toTypeArr);
    for (let i = 0; i < numberOfWords; i++) {
        nuTypeArr.push(toTypeArr[i])
        // console.log(toTypeArr[i]);
    }
    nuTypeArr.forEach(word => {
        let nuDiv = document.createElement('div');
        nuDiv.textContent = word + "_";
        toTypeBox.append(nuDiv);
    });
    wholeString = toTypeBox.textContent;
    let nuArr = wholeString.split("");
    removeAllChildren(toTypeBox);
    removeAllChildren(heartBox);
    nuArr.forEach(letter => {
        let nuItem = "<span class='textInputItem'>" + letter + "</span>";
        let nuDiv = document.createElement('div');
        nuDiv.innerHTML = nuItem;
        toTypeBox.append(nuDiv)
    })
    initiateTest();
}
function initiateTest() {
    thisNum = 0;
    // console.log(toTypeBox.textContent.charAt(thisNum));
    toTypeBox.children[thisNum].classList.add('white');
    testingChar = toTypeBox.textContent.charAt(thisNum);
    document.addEventListener("keyup", (event) => {
        // console.log(event.key);
        if (event.key === testingChar) {
            continueTest();
        }
    }, { once: true });
};
function continueTest() {
    if (typeof toTypeBox.children[thisNum] === "undefined") {
        let nuDiv = document.createElement('div');
        nuDiv.classList.add('pixelheartBIG');
        heartBox.append(nuDiv);
        setTimeout(function () {
            window.location.reload();
        }, 3400);
    } else {
        thisNum++;
        console.log("num is now: ", thisNum);
        toTypeBox.children[thisNum - 1].classList.remove('white');
        toTypeBox.children[thisNum].classList.add('white');
        testingChar = toTypeBox.textContent.charAt(thisNum);
        document.addEventListener("keyup", (event) => {
            // console.log(event.key);
            // console.log("SHOULD BE:", testingChar);
            if (testingChar === "_" && event.code === "Space") {
                addHeart();
                continueTest();
            } else if (event.key === testingChar) {
                continueTest();
            } else { return }
        })
    }
}
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
function addHeart() {
    let nuDiv = document.createElement('div');
    nuDiv.classList.add('pixelheart');
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    nuDiv.style.top = randomTop + 'px';
    nuDiv.style.left = randomLeft + 'px';
    heartBox.append(nuDiv)
}

// console.log(heartDivs);
// for (var i = 0; i < heartDivs.length; i++) {
//     var thisDiv = heartDivs[i];
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);
//     thisDiv.style.top = randomTop + 'px';
//     thisDiv.style.left = randomLeft + 'px';
// }

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};