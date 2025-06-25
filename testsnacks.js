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

module.exports = {
    getInitials,
    createSlug
}