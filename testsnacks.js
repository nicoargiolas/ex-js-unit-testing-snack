// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

function getInitials(completeName) {
    const [nome, cognome] = completeName.trim().split(" ").filter(str => str !== "");
    return nome.charAt(0).toUpperCase() + cognome.charAt(0).toUpperCase()
}


// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

function createSlug(string) {
    if (string.trim()) {
        return string.replaceAll(" ", "-").toLowerCase();
    } else {
        throw new Error("La stringa deve contenere dei caratteri")
    }

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


// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

function findPostById(posts, id) {
    if (typeof id === "number") {
        return posts.find(p => p.id === id)
    } else {
        throw new Error("L'id inserito deve essere di tipo numerico")
    }
}


module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}