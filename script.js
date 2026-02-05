let total = 0;

function addExpense() {
  const name = document.getElementById("name").value;
  const amount = document.getElementById("amount").value;
  const category = document.getElementById("category").value;

  if (name === "" || amount === "" || category === "") {
    alert("Please fill all fields");
    return;
  }

  const list = document.getElementById("expenseList");

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} (${category}) - ₹${amount}
    <button onclick="removeExpense(this, ${amount})">Delete</button>
  `;

  list.appendChild(li);

  total += Number(amount);
  document.getElementById("total").textContent = total;

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
  document.getElementById("category").value = "";
}

function removeExpense(btn, amount) {
  btn.parentElement.remove();
  total -= Number(amount);
  document.getElementById("total").textContent = total;
}

