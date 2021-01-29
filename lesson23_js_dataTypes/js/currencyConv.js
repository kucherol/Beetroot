const cur = prompt("Enter the currency name (EUR, USD, GBP)");
const val = prompt("Enter the HRN amount");

if (cur == "EUR") {
alert(val/34.12 , "EUR");
} else if (cur == "USD") {
alert(val/28.30 , "USD");
} else if (cur == "GBP") {
alert(val/38.40 , "GBP");
} else {alert("Unknown data");
}