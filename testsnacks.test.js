const { getInitials, createSlug } = require('./testsnacks.js')

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