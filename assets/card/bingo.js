/*
Adapted from JavaScript, 9th edition
by Tom Negrino and Dori Smith
PeachPit Press, 2015
ISBN 978-0-321-99670-1
*/

window.onload = initAll;

function initAll() 
{
    document.getElementById("reload").onclick = anotherCard;
    newCard();
}

function newCard() 
{
    for (var i = 0; i < 24; i++) {
        setSquare(i);
    }
}

var colPlace = new Array(0, 0, 0, 0, 0,  // B
                         1, 1, 1, 1, 1,  // I
                         2, 2, 2, 2,     // N
                         3, 3, 3, 3, 3,  // G
                         4, 4, 4, 4, 4); // O

var usedNums = new Array(76);

function setSquare(thisSquare) 
{
    var currSquare = "square" + thisSquare;
    var colBasis = colPlace[thisSquare]*15;
    var newNum;

    do {
        newNum = colBasis + getNewNum() + 1;
    } while (usedNums[newNum]);

    usedNums[newNum] = true;
    document.getElementById(currSquare).innerHTML = newNum;
    document.getElementById(currSquare).className = "";
    document.getElementById(currSquare).onmousedown = toggleColor;
}

function getNewNum() 
{
    return Math.floor(Math.random()*15);
}

function anotherCard() 
{
    for (var i = 1; i < usedNums.length; i++) {
        usedNums[i] = false;
    }
    
    newCard();
    return false;
}

function toggleColor(evt) 
{
    if (evt.target) {
        var thisSquare = evt.target;  // most browsers
    }
    else {
        var thisSquare = window.event.srcElement;  // Windows Internet Explorer
    }
    
    if (thisSquare.className == "") {
        thisSquare.className = "pickedBG";
    }
    else {
        thisSquare.className = "";
    }
}