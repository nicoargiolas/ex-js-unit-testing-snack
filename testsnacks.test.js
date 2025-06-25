const { getInitials, createSlug, average, isPalindrome } = require('./testsnacks.js')

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Nicola Argiolas")).toBe("NA");
    expect(getInitials("Jannik Sinner")).toBe("JS");
    expect(getInitials("nicola argiolas")).toBe("NA")
});


// 🏆 Snack 2
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug restituisce una stringa in lowercase."

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug("Testiamo questa funzione")).toBe("testiamo-questa-funzione");
    expect(createSlug("NON FUNZIONA PORCA PUTTANA")).toBe("non-funziona-porca-puttana");
    expect(createSlug("Ok Finalmente Ora Funziona")).toBe("ok-finalmente-ora-funziona");
});


// 🏆 Snack 3
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione average calcola la media aritmetica di un array di numeri."

test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([2, 2, 10, 18, 18])).toBe(10);
    expect(average([0, 5, 5, 10])).toBe(5);
})

// 🏆 Snack 4
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug sostituisce gli spazi con -."
// 📌 Esempi:
// createSlug("Questo è un test") → "questo-e-un-test"

// Già fatto nello snack 2


// 🏆 Snack 5
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione isPalindrome verifica se una stringa è un palindromo."

test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
    expect(isPalindrome("otto")).toBeTruthy();
    expect(isPalindrome("jest")).toBeFalsy();
    expect(isPalindrome("Anna")).toBeTruthy();
    expect(isPalindrome("I Topi Non Avevano Nipoti")).toBeTruthy();
})