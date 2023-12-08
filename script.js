const inputEl = document.getElementById("input");
const incCurEl = document.getElementById("incCur");
const outCurEl = document.getElementById("outCur");
const convertEl = document.getElementById("convert");
const outputEl = document.getElementById("output");

incCurEl.addEventListener("change", function () {
  console.log("Input: " + incCurEl.value);
});

outCurEl.addEventListener("change", function () {
  console.log("Output: " + outCurEl.value);
});

const currencySymbols = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "JPY", symbol: "¥" },
  { code: "GBP", symbol: "£" },
  { code: "CNY", symbol: "¥" },
  { code: "AUD", symbol: "$" },
  { code: "CAD", symbol: "$" },
  { code: "CHF", symbol: "CHF" },
  { code: "HKD", symbol: "$" },
  { code: "SGD", symbol: "$" },
  { code: "SEK", symbol: "kr" },
  { code: "KRW", symbol: "₩" },
  { code: "NOK", symbol: "kr" },
  { code: "NZD", symbol: "$" },
  { code: "INR", symbol: "₹" },
  { code: "MXN", symbol: "$" },
  { code: "TWD", symbol: "NT$" },
  { code: "ZAR", symbol: "R" },
  { code: "BRL", symbol: "R$" },
  { code: "DKK", symbol: "kr" },
  { code: "PLN", symbol: "zł" },
  { code: "THB", symbol: "฿" },
  { code: "ILS", symbol: "₪" },
];

console.log(
  currencySymbols.find((item) => item.code === outCurEl.value).symbol
);

convertEl.addEventListener("click", () => {
  fetch(
    "https://v6.exchangerate-api.com/v6/" +
      config.apiKey +
      "/latest/" +
      incCurEl.value
  )
    .then((res) => res.json())
    .then((data) => {
      const conversionRate = data.conversion_rates[outCurEl.value];
      const convertedValue = (inputEl.value * conversionRate).toFixed(2);
      const currMarkup = `<h3>${convertedValue}${
        currencySymbols.find((item) => item.code === outCurEl.value).symbol
      }</h3>`;

      outputEl.innerHTML = currMarkup; // Clear previous results and display new result
    })
    .catch((err) => console.log(err));
});
