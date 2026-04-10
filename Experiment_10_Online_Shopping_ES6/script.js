const outputDiv = document.getElementById("output");
const orderBtn = document.getElementById("orderBtn");

// Arrow function to display message on browser.
const showMessage = (message) => {
  outputDiv.innerHTML += `${message}<br>`;
};

// Callback function.
function placeOrder(product, callback) {
  showMessage(`Order placed for: ${product}`);
  callback(product);
}

// Promise for payment.
function processPayment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Payment Successful");
    }, 2000);
  });
}

// Async/Await main function.
async function orderProcess(product) {
  outputDiv.innerHTML = "";

  showMessage("Starting order process...");

  placeOrder(product, (item) => {
    showMessage(`Order confirmed for: ${item}`);
  });

  const paymentStatus = await processPayment();
  showMessage(paymentStatus);

  showMessage("Order will be delivered soon");
}

orderBtn.addEventListener("click", () => {
  orderProcess("Smartphone");
});
