const { getInitials, createSlug, average, isPalindrome, findPostById } = require('./testsnacks.js')

// 🏆 Snack 1
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione getInitials restituisce le iniziali di un nome completo."

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials("Nicola Argiolas")).toBe("NA");
    expect(getInitials("Jannik Sinner")).toBe("JS");
    expect(getInitials("nicola argiolas")).toBe("NA");
    expect(getInitials("Lionel   Messi")).toBe("LM")
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
    expect(() => average([0, "ciao", 5, 10])).toThrow();
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
    expect(isPalindrome(" otto   ")).toBeTruthy();
    expect(isPalindrome("I Topi Non Avevano Nipoti")).toBeTruthy();
})


// 🏆 Snack 6
// Creare un test che verifichi la seguente descrizione:
// 👉 "La funzione createSlug lancia un errore se il titolo è vuoto o non valido."

test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
    expect(() => createSlug("")).toThrow();
    expect(() => createSlug("      ")).toThrow();
})


// 🏆 Snack 7
// Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
// Creare un test che verifichi le seguenti descrizioni:
// 👉 "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"

// Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico).

let posts;

beforeEach(() => {
    posts = [
        {
            id: 1,
            title: "Come imparare JavaScript",
            slug: "come-imparare-javascript"
        },
        {
            id: 2,
            title: "10 trucchi per HTML e CSS",
            slug: "10-trucchi-per-html-e-css"
        },
        {
            id: 3,
            title: "Introduzione a React",
            slug: "introduzione-a-react"
        },
        {
            id: 4,
            title: "Frontend vs Backend",
            slug: "frontend-vs-backend"
        },
        {
            id: 5,
            title: "Perché usare Jest nei test",
            slug: "perche-usare-jest-nei-test"
        }
    ];
});

test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
    expect(findPostById(posts, 1)).toEqual(posts[0]);
    expect(findPostById(posts, 3)).toEqual(posts[2]);
});


test("Controllo che la struttura dati passati sia conforme", () => {
    posts.forEach(p => {
        expect(p.id).toBeTruthy();
        expect(p.title).toBeTruthy();
        expect(p.slug).toBeTruthy()
    })
})

test("La funzione findPostById accetta solo un id numerico", () => {
    expect(() => findPostById(posts, "ciao")).toThrow();
    expect(() => findPostById(posts, "1")).toThrow();
});