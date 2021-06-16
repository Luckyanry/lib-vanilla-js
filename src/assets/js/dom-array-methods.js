const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBth = document.getElementById('calculate-wealth');

let data = [];

//Fetch random user and add monay
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Add new obj to data arr
function addData(obj) {
  data.push(obj);

  updateDOM(data);
}

// Double eveyones money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM(data);
}

// Filter only millionaires
function showMillionaires() {
  data = data.filter(user => user.money > 1000000);

  updateDOM(data);
}

// Sort users by richest
function sortByRichest() {
  data = data.sort((a, b) => b.money - a.money);

  updateDOM(data);
}

// Calculate the total wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);

  // updateDOM(data);
}

// Update DOM
function updateDOM(providedData = data) {
  main.innerHTML = '<h3><strong>Person</strong> Wealth</h3>';

  providedData.forEach(item => {
    const el = document.createElement('div');
    el.classList.add('person');
    el.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;

    main.appendChild(el);
  });
}

// Format number as money
function formatMoney(number) {
  return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
showMillionairesBtn.addEventListener('click', showMillionaires);
sortBtn.addEventListener('click', sortByRichest);
calculateWealthBth.addEventListener('click', calculateWealth);
