// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(completeName) {
    return completeName.trim()[0].toUpperCase() + (completeName.trim().split(" "))[1][0].toUpperCase()
}


// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

function createSlug(string) {
    return string.replaceAll(" ", "-").toLowerCase();
}


// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

function average(array) {
    const somma = array.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return somma / array.length
}


// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

function isPalindrome(string) {
    let stringToCheck = string.trim().replaceAll(" ", "").toLowerCase();
    let reversedString = stringToCheck.split("").reverse().join("");
    if (stringToCheck === reversedString) {
        return true
    } else {
        return false
    }
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome
}