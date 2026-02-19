function calculateTip() {
  const bill = parseFloat(document.getElementById("billAmount").value);
  const tipPercent = parseFloat(document.getElementById("tipPercent").value);
  const people = parseInt(document.getElementById("peopleCount").value, 10);
  const out = document.getElementById("tipResult");

  if (isNaN(bill) || isNaN(tipPercent) || isNaN(people) || people <= 0) {
    out.textContent = "Please enter valid values.";
    return;
  }

  const tipTotal = bill * (tipPercent / 100);
  const total = bill + tipTotal;
  const perPerson = total / people;

  out.textContent =
    `Tip: $${tipTotal.toFixed(2)} | Total: $${total.toFixed(2)} | Per person: $${perPerson.toFixed(2)}`;
}
const lengthFactors = {
  m: 1,
  km: 1000,
  ft: 0.3048,
  mi: 1609.34
};

function convertUnit() {
  const value = parseFloat(document.getElementById("unitValue").value);
  const from = document.getElementById("unitFrom").value;
  const to = document.getElementById("unitTo").value;
  const out = document.getElementById("unitResult");

  if (isNaN(value)) {
    out.textContent = "Enter a numeric value.";
    return;
  }

  const inMeters = value * lengthFactors[from];
  const converted = inMeters / lengthFactors[to];

  out.textContent = `${value} ${from} = ${converted.toFixed(4)} ${to}`;
}
function pickName() {
  const raw = document.getElementById("namesInput").value;
  const out = document.getElementById("nameResult");

  const names = raw
    .split(/\r?\n/)
    .map(n => n.trim())
    .filter(n => n.length > 0);

  if (names.length === 0) {
    out.textContent = "Add at least one name (one per line).";
    return;
  }

  const idx = Math.floor(Math.random() * names.length);
  out.textContent = `Winner: ${names[idx]}`;
}
