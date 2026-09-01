let cart = [];

function addProduct() {
    let name = document.getElementById("name").value.trim();
    let price = parseFloat(document.getElementById("price").value);
    let qty = parseInt(document.getElementById("qty").value);

    if (name === "" || isNaN(price) || isNaN(qty) || price <= 0 || qty <= 0) {
        alert("Please enter valid product details");
        return;
    }

    let product = {
        id: cart.length + 1,
        name: name,
        price: price,
        quantity: qty
    };

    cart.push(product);
    displayCart();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("qty").value = "";
}

function displayCart() {
    let tableBody = document.querySelector("#cartTable tbody");
    if (!tableBody) {
        let table = document.getElementById("cartTable");
        tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
    }
    
    tableBody.innerHTML = "";

    cart.forEach(function(item) {
        tableBody.innerHTML += `
            <tr> 
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
        `;
    });

    let total = cart.reduce(function(sum, item) {
        return sum + (item.price * item.quantity);
    }, 0);

    let discount = 0;
    let discountPercent = 0;

    if (total >= 50000) {
        discountPercent = 20;
        discount = total * 0.20;
    } else if (total >= 20000) {
        discountPercent = 10;
        discount = total * 0.10;
    } else if (total >= 5000) {
        discountPercent = 5;
        discount = total * 0.05;
    }

    let finalAmount = total - discount;

    document.getElementById("result").innerHTML = `
        <p><b>Total Amount :</b> ₹${total.toFixed(2)}</p>
        <p><b>Discount (${discountPercent}%) :</b> -₹${discount.toFixed(2)}</p>
        <p><b>Final Amount :</b> ₹${finalAmount.toFixed(2)}</p>
    `;

    let summary = document.getElementById("summary");
    summary.innerHTML = "";
    cart.map(function(item) {
        summary.innerHTML += `<li>${item.name} : ${(item.price * item.quantity).toFixed(2)}</li>`;
    });

    let expensive = document.getElementById("expensive");
    expensive.innerHTML = "";

    let exp = cart.filter(function(item) {
        return item.price > 1000;
    });

    exp.forEach(function(item) {
        expensive.innerHTML += `<li>${item.name} (${item.price.toFixed(2)})</li>`;
    });
}
