// english keyboard keys
//zhuyin keyboard keys
const toTypeBox = document.querySelector('#toType');
const numBox = document.querySelector('#numBox');
var heartDivs = document.querySelectorAll('.pixelheart');
var heartBox = document.querySelector('#heartBox');
var checkBox = document.querySelector('#imgToggle');
var keyboardImgENG = document.querySelector('#engKeyboard')
var keyboardImgZH = document.querySelector('#zhKeyboard')
var keyboardImgRUS = document.querySelector('#rusKeyboard')
var langSwitch = document.querySelector('#langSwitch');
let numberOfWords = 25;
let fullLetterList = "enitrlsauodychgmpbkvwfzxqj";
let fullLetterListZH = "ㄧㄕㄝㄨㄉㄢㄒㄥㄅㄤㄑㄡㄐㄟㄌㄊㄜㄓㄆㄠㄩㄘㄣㄈㄔㄖㄇㄏㄋㄍㄗㄚㄎㄙㄛㄦ";
// let fullLetterListRUS = "ЕИАОТНЛРКУМВСЯЬЫДЙЮГЧШХЗБПЖЩЦФЪЭЁ";
let fullLetterListRUS = "еиаотнлркумвсяьыдйюгчшхзбпжщфъэё";

let wordArray;
let toTypeArr = [];
let nuTypeArr = [];
let wholeString = "";
let thisNum = 0;
let testingChar;
let ENG = true;
let ZH = false;
let RUS = false;

let num = 6;
pickWords();
function zhLang() {
    ZH = true;
    ENG = false;
    RUS = false;
    num = 8;
    keyboardImgENG.style.display = "none";
    keyboardImgRUS.style.display = "none";
    checkBox.checked = false;
    pickWordsZH();
}
function engLang() {
    ENG = true;
    ZH = false;
    RUS = false;
    keyboardImgZH.style.display = "none";
    keyboardImgRUS.style.display = "none";
    checkBox.checked = false;
    pickWords();
}
function rusLang() {
    RUS = true;
    ENG = false;
    ZH = false;
    num = 8;
    keyboardImgZH.style.display = "none";
    keyboardImgENG.style.display = "none";
    checkBox.checked = false;
    pickWordsRUS();
}
function letterCountDown() {
    if (ZH) {
        if (num === 8) {
            return
        } else {
            num--;
            pickWordsZH();
            toTypeBox.focus();
        }
    } else if (RUS) {
        if (num === 8) {
            return
        } else {
            num--;
            pickWordsRUS();
            toTypeBox.focus();
        }
    } else {
        if (num === 5) {
            return
        } else {
            num--;
            pickWords();
            toTypeBox.focus();
        }
    };
}
function letterCountUp() {
    if (ZH === true) {
        if (num === 36) {
            return
        } else {
            num++;
            pickWordsZH();
            toTypeBox.focus();
        }
    } else if (RUS) {
        if (num === 32) {
            return
        } else {
            num++;
            pickWordsRUS();
            toTypeBox.focus();
        }
    } else {
        if (num === 26) {
            return
        } else {
            num++;
            pickWords();
            toTypeBox.focus();
        }
    }
}
function wordCountDown() {
    if (ZH) {
        if (numberOfWords === 10) {
            return
        } else {
            numberOfWords--;
            pickWordsZH();
            toTypeBox.focus();
        }
    } else if (RUS) {
        if (numberOfWords === 10) {
            return
        } else {
            numberOfWords--;
            pickWordsRUS();
            toTypeBox.focus();
        }
    } else {
        if (numberOfWords === 10) {
            return
        } else {
            numberOfWords--;
            pickWords();
            toTypeBox.focus();
        }
    }
};
function wordCountUp() {
    if (ZH) {
        if (numberOfWords === 45) {
            return
        } else {
            numberOfWords++;
            pickWordsZH();
            toTypeBox.focus();
        }
    } else if (RUS) {
        if (numberOfWords === 45) {
            return
        } else {
            numberOfWords++;
            pickWordsRUS();
            toTypeBox.focus();
        }
    } else {
        if (numberOfWords === 45) {
            return
        } else {
            numberOfWords++;
            pickWords();
            toTypeBox.focus();
        }
    }
}

function pickWordsRUS() {
    toTypeArr = [];
    nuTypeArr = [];
    removeAllChildren(toTypeBox);
    let letterList = fullLetterListRUS.substring(0, num);
    numBox.textContent = num + " letters";
    wordNumBox.textContent = numberOfWords + " words";
    russianWords.forEach(word => {
        wordArray = [];
        for (let i = 0; i < word.length; i++) {
            if (!letterList.includes(word[i])) {
                return;
            } else {
                wordArray.push(word);
            }
        }
        if (wordArray.length === word.length) {
            toTypeArr.push(word);
        };
    });
    shuffleAndPostRUS();
}
function pickWordsZH() {
    toTypeArr = [];
    nuTypeArr = [];
    removeAllChildren(toTypeBox);
    let letterList = fullLetterListZH.substring(0, num);
    numBox.textContent = num + " letters";
    wordNumBox.textContent = numberOfWords + " words";
    zhWords.forEach(word => {
        wordArray = [];
        for (let i = 0; i < word.length; i++) {
            if (!letterList.includes(word[i])) {
                return;
            } else {
                wordArray.push(word);
            }
        }
        if (wordArray.length === word.length) {
            toTypeArr.push(word);
        };
    });
    shuffleAndPostZH();
}
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
    toTypeBox.focus();
    initiateTest();
}
function shuffleAndPostZH() {
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
    toTypeBox.focus();
    initiateTestZH();
}
function shuffleAndPostRUS() {
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
    toTypeBox.focus();
    initiateTestRUS();
}
function initiateTest() {
    thisNum = 0;
    // console.log(toTypeBox.textContent.charAt(thisNum));
    toTypeBox.children[thisNum].classList.add('white');
    testingChar = toTypeBox.textContent.charAt(thisNum);
    document.addEventListener("keyup", (event) => {
        // console.log(event.key);
        event.preventDefault();
        if (event.key === testingChar) {
            continueTest();
        }
    }, { once: true });
};
const ZHkeyboard = {}
let testingCharCode;
//comparing keyboard key inputs to zhuyin characters
function initiateTestZH() {
    thisNum = 0;
    testingCharCode = "";
    // console.log(toTypeBox.textContent.charAt(thisNum));
    toTypeBox.children[thisNum].classList.add('white');
    testingChar = toTypeBox.textContent.charAt(thisNum);
    switch (testingChar) {
        case "ㄧ":
            testingCharCode = "u";
            break;
        case "ㄕ":
            testingCharCode = "g";
            break;
        case "ㄝ":
            testingCharCode = ",";
            break;
        case "ㄨ":
            testingCharCode = "j";
            break;
        case "ㄉ":
            testingCharCode = "2";
            break;
        case "ㄢ":
            testingCharCode = "0";
            break;
        case "ㄒ":
            testingCharCode = "v";
            break;
        case "ㄥ":
            testingCharCode = "/";
            break;
        case "ㄅ":
            testingCharCode = "1";
            break;
        case "ㄤ":
            testingCharCode = ";";
            break;
        case "ㄑ":
            testingCharCode = "f";
            break;
        case "ㄡ":
            testingCharCode = ".";
            break;
        case "ㄐ":
            testingCharCode = "r";
            break;
        case "ㄟ":
            testingCharCode = "o";
            break;
        case "ㄌ":
            testingCharCode = "x";
            break;
        case "ㄊ":
            testingCharCode = "w";
            break;
        case "ㄜ":
            testingCharCode = "k";
            break;
        case "ㄓ":
            testingCharCode = "5";
            break;
        case "ㄆ":
            testingCharCode = "q";
            break;
        case "ㄠ":
            testingCharCode = "l";
            break;
        case "ㄩ":
            testingCharCode = "m";
            break;
        case "ㄘ":
            testingCharCode = "h";
            break;
        case "ㄣ":
            testingCharCode = "p";
            break;
        case "ㄈ":
            testingCharCode = "z";
            break;
        case "ㄔ":
            testingCharCode = "t";
            break;
        case "ㄖ":
            testingCharCode = "b";
            break;
        case "ㄇ":
            testingCharCode = "a";
            break;
        case "ㄏ":
            testingCharCode = "c";
            break;
        case "ㄋ":
            testingCharCode = "s";
            break;
        case "ㄍ":
            testingCharCode = "e";
            break;
        case "ㄗ":
            testingCharCode = "y";
            break;
        case "ㄚ":
            testingCharCode = "8";
            break;
        case "ㄎ":
            testingCharCode = "d";
            break;
        case "ㄙ":
            testingCharCode = "n";
            break;
        case "ㄛ":
            testingCharCode = "i";
            break;
        case "ㄦ":
            testingCharCode = "-";
            break;
    }
    document.addEventListener("keyup", (event) => {
        event.preventDefault();
        // console.log(event.key);
        if (event.key === testingCharCode) {
            continueTestZH();
        }
    }, { once: true });
};
function initiateTestRUS() {
    thisNum = 0;
    testingCharCode = "";
    // console.log(toTypeBox.textContent.charAt(thisNum));
    toTypeBox.children[thisNum].classList.add('white');
    testingChar = toTypeBox.textContent.charAt(thisNum);
    switch (testingChar) {
        case "г":
            testingCharCode = "u";
            break;
        case "п":
            testingCharCode = "g";
            break;
        case "б":
            testingCharCode = ",";
            break;
        case "ю":
            testingCharCode = ".";
            break;
        case "о":
            testingCharCode = "j";
            break;
        case "ё":
            testingCharCode = "`";
            break;
        case "х":
            testingCharCode = "[";
            break;
        case "ъ":
            testingCharCode = "]";
            break;
        case "м":
            testingCharCode = "v";
            break;
        case "ж":
            testingCharCode = ";";
            break;
        case "а":
            testingCharCode = "f";
            break;
        case "к":
            testingCharCode = "r";
            break;
        case "щ":
            testingCharCode = "o";
            break;
        case "ч":
            testingCharCode = "x";
            break;
        case "ц":
            testingCharCode = "w";
            break;
        case "л":
            testingCharCode = "k";
            break;
        case "й":
            testingCharCode = "q";
            break;
        case "д":
            testingCharCode = "l";
            break;
        case "ь":
            testingCharCode = "m";
            break;
        case "р":
            testingCharCode = "h";
            break;
        case "з":
            testingCharCode = "p";
            break;
        case "я":
            testingCharCode = "z";
            break;
        case "е":
            testingCharCode = "t";
            break;
        case "и":
            testingCharCode = "b";
            break;
        case "ф":
            testingCharCode = "a";
            break;
        case "с":
            testingCharCode = "c";
            break;
        case "ы":
            testingCharCode = "s";
            break;
        case "у":
            testingCharCode = "e";
            break;
        case "н":
            testingCharCode = "y";
            break;
        case "в":
            testingCharCode = "d";
            break;
        case "т":
            testingCharCode = "n";
            break;
        case "ш":
            testingCharCode = "i";
            break;
        case "э":
            testingCharCode = "'";
            break;
    }
    document.addEventListener("keyup", (event) => {
        event.preventDefault();
        // console.log(event.key);
        if (event.key === testingCharCode) {
            continueTestRUS();
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
        // console.log("num is now: ", thisNum);
        toTypeBox.children[thisNum - 1].classList.remove('white');
        toTypeBox.children[thisNum].classList.add('white');
        testingChar = toTypeBox.textContent.charAt(thisNum);
        document.addEventListener("keyup", (event) => {
            console.log(event.key);
            event.preventDefault();
            // console.log("SHOULD BE:", testingChar);
            if (testingChar === "_" && event.code === "Space") {
                addHeart();
                testingCharCode = "";
                continueTest();
            } else if (event.key === testingChar) {
                addStar();
                testingCharCode = "";
                continueTest();
            } else { return }
        })
    }
}
document.addEventListener("keypress", (event) => {
    event.preventDefault();
})
function continueTestZH() {
    if (typeof toTypeBox.children[thisNum] === "undefined") {
        let nuDiv = document.createElement('div');
        nuDiv.classList.add('pixelheartBIG');
        heartBox.append(nuDiv);
        setTimeout(function () {
            window.location.reload();
        }, 3400);
    } else {
        thisNum++;
        testingCharCode = "";
        // console.log("num is now: ", thisNum);
        toTypeBox.children[thisNum - 1].classList.remove('white');
        toTypeBox.children[thisNum].classList.add('white');
        testingChar = toTypeBox.textContent.charAt(thisNum);
        switch (testingChar) {
            case "ㄧ":
                testingCharCode = "u";
                break;
            case "ㄕ":
                testingCharCode = "g";
                break;
            case "ㄝ":
                testingCharCode = ",";
                break;
            case "ㄨ":
                testingCharCode = "j";
                break;
            case "ㄉ":
                testingCharCode = "2";
                break;
            case "ㄢ":
                testingCharCode = "0";
                break;
            case "ㄒ":
                testingCharCode = "v";
                break;
            case "ㄥ":
                testingCharCode = "/";
                break;
            case "ㄅ":
                testingCharCode = "1";
                break;
            case "ㄤ":
                testingCharCode = ";";
                break;
            case "ㄑ":
                testingCharCode = "f";
                break;
            case "ㄡ":
                testingCharCode = ".";
                break;
            case "ㄐ":
                testingCharCode = "r";
                break;
            case "ㄟ":
                testingCharCode = "o";
                break;
            case "ㄌ":
                testingCharCode = "x";
                break;
            case "ㄊ":
                testingCharCode = "w";
                break;
            case "ㄜ":
                testingCharCode = "k";
                break;
            case "ㄓ":
                testingCharCode = "5";
                break;
            case "ㄆ":
                testingCharCode = "q";
                break;
            case "ㄠ":
                testingCharCode = "l";
                break;
            case "ㄩ":
                testingCharCode = "m";
                break;
            case "ㄘ":
                testingCharCode = "h";
                break;
            case "ㄣ":
                testingCharCode = "p";
                break;
            case "ㄈ":
                testingCharCode = "z";
                break;
            case "ㄔ":
                testingCharCode = "t";
                break;
            case "ㄖ":
                testingCharCode = "b";
                break;
            case "ㄇ":
                testingCharCode = "a";
                break;
            case "ㄏ":
                testingCharCode = "c";
                break;
            case "ㄋ":
                testingCharCode = "s";
                break;
            case "ㄍ":
                testingCharCode = "e";
                break;
            case "ㄗ":
                testingCharCode = "y";
                break;
            case "ㄚ":
                testingCharCode = "8";
                break;
            case "ㄎ":
                testingCharCode = "d";
                break;
            case "ㄙ":
                testingCharCode = "n";
                break;
            case "ㄛ":
                testingCharCode = "i";
                break;
            case "ㄦ":
                testingCharCode = "-";
                break;
        }
        document.addEventListener("keyup", (event) => {
            console.log(event.key);
            event.preventDefault();
            console.log("SHOULD BE:", testingChar);
            if (testingChar === "_" && event.code === "Space") {
                addHeart();
                testingCharCode = "";
                continueTestZH();
            } else if (event.key === testingCharCode) {
                addStar();
                testingCharCode = "";
                continueTestZH();
            } else { return }
        })
    }
    toTypeBox.focus();
}
function continueTestRUS() {
    if (typeof toTypeBox.children[thisNum] === "undefined") {
        let nuDiv = document.createElement('div');
        nuDiv.classList.add('pixelheartBIG');
        heartBox.append(nuDiv);
        setTimeout(function () {
            window.location.reload();
        }, 3400);
    } else {
        thisNum++;
        testingCharCode = "";
        // console.log("num is now: ", thisNum);
        toTypeBox.children[thisNum - 1].classList.remove('white');
        toTypeBox.children[thisNum].classList.add('white');
        testingChar = toTypeBox.textContent.charAt(thisNum);
        switch (testingChar) {
            case "г":
                testingCharCode = "u";
                break;
            case "п":
                testingCharCode = "g";
                break;
            case "б":
                testingCharCode = ",";
                break;
            case "ю":
                testingCharCode = ".";
                break;
            case "о":
                testingCharCode = "j";
                break;
            case "ё":
                testingCharCode = "`";
                break;
            case "х":
                testingCharCode = "[";
                break;
            case "ъ":
                testingCharCode = "]";
                break;
            case "м":
                testingCharCode = "v";
                break;
            case "ж":
                testingCharCode = ";";
                break;
            case "а":
                testingCharCode = "f";
                break;
            case "к":
                testingCharCode = "r";
                break;
            case "щ":
                testingCharCode = "o";
                break;
            case "ч":
                testingCharCode = "x";
                break;
            case "ц":
                testingCharCode = "w";
                break;
            case "л":
                testingCharCode = "k";
                break;
            case "й":
                testingCharCode = "q";
                break;
            case "д":
                testingCharCode = "l";
                break;
            case "ь":
                testingCharCode = "m";
                break;
            case "р":
                testingCharCode = "h";
                break;
            case "з":
                testingCharCode = "p";
                break;
            case "я":
                testingCharCode = "z";
                break;
            case "е":
                testingCharCode = "t";
                break;
            case "и":
                testingCharCode = "b";
                break;
            case "ф":
                testingCharCode = "a";
                break;
            case "с":
                testingCharCode = "c";
                break;
            case "ы":
                testingCharCode = "s";
                break;
            case "у":
                testingCharCode = "e";
                break;
            case "н":
                testingCharCode = "y";
                break;
            case "в":
                testingCharCode = "d";
                break;
            case "т":
                testingCharCode = "n";
                break;
            case "ш":
                testingCharCode = "i";
                break;
            case "э":
                testingCharCode = "'";
                break;
        }
        document.addEventListener("keyup", (event) => {
            console.log(event.key);
            event.preventDefault();
            console.log("SHOULD BE:", testingChar);
            if (testingChar === "_" && event.code === "Space") {
                addHeart();
                testingCharCode = "";
                continueTestRUS();
            } else if (event.key === testingCharCode) {
                addStar();
                testingCharCode = "";
                continueTestRUS();
            } else { return }
        })
    }
    toTypeBox.focus();
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
function addStar() {
    let nuDiv = document.createElement('div');
    nuDiv.classList.add('blips');
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    nuDiv.style.top = randomTop + 'px';
    nuDiv.style.left = randomLeft + 'px';
    heartBox.append(nuDiv)
}
function toggleImg() {
    if (ZH) {
        if (checkBox.checked == true) {
            keyboardImgZH.style.display = "block";
            toTypeBox.focus();
        } else {
            keyboardImgZH.style.display = "none";
            keyboardImgENG.style.display = "none";
            toTypeBox.focus();
        }
    } else if (RUS) {
        if (checkBox.checked == true) {
            keyboardImgRUS.style.display = "block";
            toTypeBox.focus();
        } else {
            keyboardImgENG.style.display = "none";
            keyboardImgZH.style.display = "none";
            toTypeBox.focus();
        }
    } else {
        if (checkBox.checked == true) {
            keyboardImgENG.style.display = "block";
            toTypeBox.focus();
        } else {
            keyboardImgRUS.style.display = "none";
            keyboardImgZH.style.display = "none";
            toTypeBox.focus();
        }
    }

}

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