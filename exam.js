/*
  JS Alapok - Modulzáró - 2024.06.22.

  Ez a fájl tartalmazza a modulzáró gyakorlati részének feladatait. A megoldásaidat kérlek ebben a fájlban helyezd el, de dolgozni dolgozhatsz külön fájlokban is.

  Néhány jótanács:
  - mindenképpen olvasd el figyelmesen a feladatokat, különösképpen a példában megadott teszteseteket!
  - a példákban a -> jelölés után vagy a függvény visszatérési értéke, vagy a függvény által kiírandó dolog szerepel
  - ha valamivel nagyon elakadtál, inkább menj tovább és térj vissza később
  - mielőtt feltöltenéd a megoldásaidat nézd át őket
  - győződj meg róla, hogy minden kód, amit le akartál írni le van írva, és amit nem akartál leírni az nincs :)
  - a megoldásokat alapvetően a kijelölt helyekre várjuk, de segédfüggvényeket és függvényen kívüli változókat bármikor létrehozhatsz
*/

// 1. Feladat - faktoriális

// Írj egy függvényt, ami visszaadja egy beadott, nemnegatív szám faktoriálisát!
// Faktoriális: egy szám faktoriálisa az összes olyan pozitív egész szám szorzatát jelenti, ami a számnál kisebb vagy azzal egyenlő
// Jelölése a matematikában: !
// pl.: 5 faktoriálisa: 5! = 1 * 2 * 3 * 4 * 5 = 120
// megegyezés alapján a 0! = 1
// pl.: factorial(5) -> 120
// pl.: factorial(0) -> 1
// pl.: factorial(3) -> 6
// pl.: factorial(-2) -> undefined

function factorial(num) {
  // Ide jöhet a megoldás
  if (!isNaN(num)) {
    if (num === 0) {
      return 0;
    } else if (num < 0) {
      return undefined;
    } else {
      let calculatedFactorial = 1;
      for (let i = 1; i <= num; i++) {
        calculatedFactorial = calculatedFactorial * i;
      }
      return calculatedFactorial;
    }
  } else {
    alert("A megadott érték nem szám!");
  }
}



// 2. Feladat - FizzBuzz

// Írj egy függvényt, ami a kövektezőképpen működik:
// 1. A konzolra írja egy-től a paraméterként beadott pozitív egész számig a számokat egyesével
// 2. Ha a soron következő szám 3-mal osztható a szám helyett azt írja ki, hogy fizz
// 3. Ha a soron következő szám 5-tel osztható a szám helyett azt írja ki, hogy buzz
// 4. Ha a soron következő szám 3-mal és 5-tel is osztható a szám helyett azt írja ki, hogy fizzbuzz
// pl.: fizzbuzz(20) -> 1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz, 16, 17, fizz, 19, buzz

function fizzbuzz(n) {
  // Ide jöhet a megoldás

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 5 == 0 && i % 3 != 0) {
      console.log("buzz");
    } else if (i % 3 == 0 && i % 5 != 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}


// 3. Feladat - Unicum, csak pozitívan!

// Írj egy függvényt, ami egy egész számokat tartalmazó tömbből visszadja egy tömb formájában azokat a számokat, amelyek pozitívak!
// pl.: getPositives([1, 10, -3, 4, -156, 0, 3, 4]) -> [1, 10, 4, 3, 4]
// pl.: getPositives([-1, -2, -3]) -> []
// pl.: getPositives([3, 20, 54]) -> [3, 20, 54]

function getPositives(arr) {
  // Ide jöhet a megoldás

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      result.push(arr[i]);
    }
  }

  return result;
}


// 4. Feladat - Perdülj, fordulj!

// Írj egy függvényt, ami a paraméterként megadott tömbjét valemlyik irányba "elforgatja"!
// Balra forgatás azt jelenti, hogy a tömb első eleme a tömb utolsó helyére kerül,
// jobbra forgatás esetén a tömb utolsó eleme kerül a tömb első helyére.
// A függvény a művelet végrehajtása után adja vissza a megváltoztatott tömböt, hibás irány esetén pedig az eredetit!
// pl.: rotate("left", [1, 2, 3]) -> [2, 3, 1]
// pl.: rotate("right", [1, 2, 3]) -> [3, 1, 2]
// pl.: rotate("hibás érték", [1, 2, 3]) -> [1, 2, 3]

function rotate(direction, arr) {
  // Ide jöhet a megoldás
  let movedElement;
  if (direction === "left") {
    movedElement = arr.splice(0, 1)[0];
    arr.push(movedElement);
  } else if (direction === "right") {
    movedElement = arr.pop();
    arr.unshift(movedElement);
  } else {
    return arr;
  }

  return arr;
}


// 5. Feladat - Nagy (Betűs) Szavak

// Írj egy függvényt, ami a paraméterként megadott mondatot olyan formában adja vissza, hogy annak minden szava nagybetűvel kezdődjön!
// pl.: capitalizeWords("Ha a győzelem gátja a gát, akkor fel kell robbantani.") -> "Ha A Győzelem Gátja A Gát, Akkor Fel Kell Robbantani."
// A feladathoz felhasználhatod a segítségként megadott isSeparator függvényt.

function isSeparator(c) {
  let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
  return separators.includes(c);
}

function capitalizeWords(text) {
  // Ide jöhet a megoldás
  let result = "";
  for (let i = 0; i < text.length; i++) {
    if (i === 0 || text[i - 1] === " ") {
      result = result + text[i].toUpperCase();
    } else {
      result = result + text[i];
    }
  }
  return result;
}



// 6. Feladat - Felhasználók

// 1. Készíts egy felhasználókat tartalmazó adatbázist!
// 2. Minden felhasználónak van e-mail címe, jelszava, vezeték és keresztneve
// 3. A felhasználókat helyezd el egy tömbben!
// 4. Készíts egy bejelentkezés kezelésére szolgáló függvényt, ami a következőképpen működik
//    - Ha meghívjuk a függvényt, akkor a program a felhasználótól bekér egy e-mail címet
//    - Ha a felhasználó megadott egy e-mail címet, akkor egy másik ablakban bekér egy jelszót
//    - Ha a felhasználó helyes e-mail - jelszó kombinációt adott meg, egy ablakban írja ki a program, hogy sikeres a bejelentkezés
//    - Amennyiben valamelyik megadott adat nem stimmel írja ki, hogy a bejelentkezés sikertelen
// 5. Készíts egy felhasználó e-mail címét megváltoztatni képes függvényt!
//    - A függvénynek két paramétere legyen: a régi és az új e-mail cím
//    - Amennyiben létezik az adatbázisban a megadott e-mail címmel felhasználó változtassa meg az e-mail címét az újra
//    - Ha nincs ilyen e-mail című felhasználó írjon ki egy üzenetet erről
// 6. Készíts egy függvényt, ami létre tud hozni egy új felhasználót az adatbázisban!
//    - Paraméterek: e-mail cím, jelszó, jelszó megerősítése, vezeték és keresztnév
//    - Ha a jelszó és a jelszó megerősítése nem egyeznek meg írjon ki hibaüzenetet!
//    - Ha a megadott e-mail címmel már szerepel felhasználó az adatbázisban írjon ki hibaüzenetet!
//    - Egyébként készítsen el egy új felhasználót és helyezze el a felhasználókat tartalmazó tömbben!

// 1, 2, és 3-as feladat megoldása jöhetnek a komment alá

const users = [
  {
    firstname: "Béla",
    lastname: "Kovács",
    email: "kbela68@gmail.com",
    password: "password123",
  },
  {
    firstname: "János",
    lastname: "Kiss",
    email: "kjanos56@gmail.com",
    password: "password456",
  },
  {
    firstname: "Gyula",
    lastname: "Nagy",
    email: "ngyula75@gmail.com",
    password: "password789",
  },
];

function logIn() {
  // 4-es részfeladat megoldása
  const providedEmail = prompt("Add meg az e-mail címed:");
  if (providedEmail != "" && providedEmail !== null) {
    const providedPassword = prompt("Add meg a jelszavad:");

    let authenticated = false;

    for (let i = 0; i < users.length; i++) {
      if (
        providedEmail === users[i].email &&
        providedPassword === users[i].password
      ) {
        alert("Sikeres bejelentkezés!");
        authenticated = true;
        return;
      }
    }
    if (authenticated === false) {
      alert("Bejelentkezés sikertelen!");
      return;
    }
  } else {
    alert("Nem adtál email címet!");
  }
}


function changeEmail(currentEmail, newEmail) {
  // 5-ös részfeladat megoldása
  let emailChanged = false;
  for (let i = 0; i < users.length; i++) {
    if (currentEmail === users[i].email) {
      users[i].email = newEmail;
      emailChanged = true;
    }
  }
  if (!emailChanged) {
    alert("Nincs ilyen email cím az adatbázisban");
  }
}



function register(email, password, passwordConfirmation, firstName, lastName) {
  // 6-os részfeladat megoldása
  if (password !== passwordConfirmation) {
    alert("A 2 beírt jelszó nem egyezik!");
    return;
  }
  for (let i = 0; i < users.length; i++) {
    if (email === users[i].email) {
      alert("A megadott email cím már létezik!");
      return;
    }
  }

  users.push({
    firstName,
    lastName,
    email,
    password,
  });
}



/*
  Mindenre válaszoltál? Átnézted? Patent?

  Elvileg :)
*/
