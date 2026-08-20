// Input Variables
const five_hundred = document.getElementById("note-500");
const two_hundred = document.getElementById("note-200");
const one_hundred = document.getElementById("note-100");
const fifty = document.getElementById("note-50");
const twenty = document.getElementById("note-20");
const ten = document.getElementById("note-10");
const five = document.getElementById("note-5");

// Button event
document.getElementById("calculate").addEventListener("click", sumOfCash);


function sumOfCash() {
    // Get input values
    const cash500 = Number(five_hundred.value);
    const cash200 = Number(two_hundred.value);
    const cash100 = Number(one_hundred.value);
    const cash50 = Number(fifty.value);
    const cash20 = Number(twenty.value);
    const cash10 = Number(ten.value);
    const cash5 = Number(five.value);


    // Total Amount
    let total_notes = 0;
    let total_amount = 0;
    const amount = document.getElementById("totalAmount");
    const notes = document.getElementById("totalNotes");

    total_amount = (cash500 * 500) + (cash200 * 200) + (cash100 * 100) + (cash50 * 50) + (cash20 * 20) + (cash10 * 10) + (cash5 * 5);
    total_notes = Number(cash500 + cash200 + cash100 + cash50 + cash20 + cash10 + cash5);
    amount.value = Number(total_amount);
    notes.value = Number(total_notes);
}

function noTowords(n) {
        if (n == 0) return "zero";

        let result = "";
        const core = Math.floor(n / 10000000);
        n %= 10000000;

        const lakh = Math.floor(n / 100000);
        n %= 100000;

        const thousand = Math.floor(n / 1000);
        n %= 1000;

        const hundred = Math.floor(n / 100);
        n %= 100;

        if(core)
            result += twoDigits(core) + " Crore ";
        if(lakh)
            result += twoDigits(lakh) + " Lakh ";
        if(thousand)
            result += twoDigits(thousand) + " Thousand ";
        if(hundred)
            result += ones[hundred] + " Hundred ";
        if(n)
            result += twoDigits(n);

        return result.trim();
 }
