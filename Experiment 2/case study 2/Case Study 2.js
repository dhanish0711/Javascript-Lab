document.getElementById("billBtn").onclick = () => {
    var customerName = document.getElementById("customerName").value.trim();
    var q1 = Number(document.getElementById("qtyHeadphones").value) || 0;
    var q2 = Number(document.getElementById("qtyWatch").value) || 0;
    var q3 = Number(document.getElementById("qtyKeyboard").value) || 0;
    var q4 = Number(document.getElementById("qtyMouse").value) || 0;
    var q5 = Number(document.getElementById("qtySpeaker").value) || 0;
    var q6 = Number(document.getElementById("qtyEarbuds").value) || 0;
    var q7 = Number(document.getElementById("qtyStand").value) || 0;

    (customerName === "") && alert("Please enter Customer Name!");
    (customerName === "") && document.getElementById("customerName").focus();
    
    (customerName !== "" && q1 === 0 && q2 === 0 && q3 === 0 && q4 === 0 && q5 === 0 && q6 === 0 && q7 === 0) && alert("Please select at least one item quantity!");

    var isValid = (customerName !== "") && (q1 > 0 || q2 > 0 || q3 > 0 || q4 > 0 || q5 > 0 || q6 > 0 || q7 > 0);

    var subtotal = (q1 * 1499.00) + (q2 * 2499.00) + (q3 * 1999.00) + (q4 * 699.00) + (q5 * 999.00) + (q6 * 1299.00) + (q7 * 799.00);

    var code = document.getElementById("promoCode").value.trim().toUpperCase();
    var discountPercentage = (code === "WELCOME10") ? 10 : ((code === "FESTIVE15") ? 15 : ((code === "SAVE20") ? 20 : ((code === "SUPER30") ? 30 : 0)));

    var discountAmount = subtotal * (discountPercentage / 100);
    var amountAfterDiscount = subtotal - discountAmount;
    
    var gstAmount = amountAfterDiscount * 0.18;
    var shippingCost = Number(document.getElementById("shippingSelect").value) || 0;
    var grandTotal = amountAfterDiscount + gstAmount + shippingCost;

    var dateStr = new Date().toLocaleString();
    var orderNo = Math.floor(100000 + Math.random() * 900000);

    var receiptHtml = '<div class="receipt-title">SHOPEASE</div>' +
                      '<div class="receipt-row"><span>Date:</span> <span>' + dateStr + '</span></div>' +
                      '<div class="receipt-row"><span>Receipt No:</span> <span>#' + orderNo + '</span></div>' +
                      '<div class="receipt-row"><span>Customer:</span> <span>' + customerName + '</span></div>' +
                      '<div class="receipt-divider"></div>' +
                      '<div class="receipt-row" style="font-weight:bold">' +
                        '<span style="width:50%">Item</span>' +
                        '<span style="width:15%">Qty</span>' +
                        '<span style="width:35%; text-align:right">Total</span>' +
                      '</div>' +
                      '<div class="receipt-divider"></div>';

    var item1Html = (q1 > 0) ? ('<div class="receipt-row"><span style="width:50%">Wireless Headphones</span><span style="width:15%">x' + q1 + '</span><span style="width:35%; text-align:right">Rs. ' + (q1 * 1499.00).toFixed(2) + '</span></div>') : '';
    var item2Html = (q2 > 0) ? ('<div class="receipt-row"><span style="width:50%">Smart Watch</span><span style="width:15%">x' + q2 + '</span><span style="width:35%; text-align:right">Rs. ' + (q2 * 2499.00).toFixed(2) + '</span></div>') : '';
    var item3Html = (q3 > 0) ? ('<div class="receipt-row"><span style="width:50%">Mechanical Keyboard</span><span style="width:15%">x' + q3 + '</span><span style="width:35%; text-align:right">Rs. ' + (q3 * 1999.00).toFixed(2) + '</span></div>') : '';
    var item4Html = (q4 > 0) ? ('<div class="receipt-row"><span style="width:50%">Wireless Mouse</span><span style="width:15%">x' + q4 + '</span><span style="width:35%; text-align:right">Rs. ' + (q4 * 699.00).toFixed(2) + '</span></div>') : '';
    var item5Html = (q5 > 0) ? ('<div class="receipt-row"><span style="width:50%">Bluetooth Speaker</span><span style="width:15%">x' + q5 + '</span><span style="width:35%; text-align:right">Rs. ' + (q5 * 999.00).toFixed(2) + '</span></div>') : '';
    var item6Html = (q6 > 0) ? ('<div class="receipt-row"><span style="width:50%">Wireless Earbuds</span><span style="width:15%">x' + q6 + '</span><span style="width:35%; text-align:right">Rs. ' + (q6 * 1299.00).toFixed(2) + '</span></div>') : '';
    var item7Html = (q7 > 0) ? ('<div class="receipt-row"><span style="width:50%">Laptop Stand</span><span style="width:15%">x' + q7 + '</span><span style="width:35%; text-align:right">Rs. ' + (q7 * 799.00).toFixed(2) + '</span></div>') : '';

    receiptHtml = receiptHtml + item1Html + item2Html + item3Html + item4Html + item5Html + item6Html + item7Html;

    receiptHtml = receiptHtml + '<div class="receipt-divider"></div>' +
                                '<div class="receipt-row"><span>Subtotal:</span> <span>Rs. ' + subtotal.toFixed(2) + '</span></div>';

    var discountHtml = (discountPercentage > 0) ? ('<div class="receipt-row"><span>Discount (' + discountPercentage + '%):</span> <span>- Rs. ' + discountAmount.toFixed(2) + '</span></div>') : '';
    receiptHtml = receiptHtml + discountHtml;

    var shippingText = (shippingCost > 0) ? ("Rs. " + shippingCost.toFixed(2)) : "FREE";

    receiptHtml = receiptHtml + '<div class="receipt-row"><span>GST (18%):</span> <span>Rs. ' + gstAmount.toFixed(2) + '</span></div>' +
                                '<div class="receipt-row"><span>Shipping:</span> <span>' + shippingText + '</span></div>' +
                                '<div class="receipt-divider"></div>' +
                                '<div class="receipt-row" style="font-weight:bold; font-size:1.15rem"><span>Total:</span> <span>Rs. ' + grandTotal.toFixed(2) + '</span></div>' +
                                '<div class="receipt-divider"></div>' +
                                '<div style="text-align:center; margin-top:15px; font-weight:bold">THANK YOU FOR YOUR VISIT!</div>';

    isValid && (document.getElementById("receiptBox").innerHTML = receiptHtml);
    isValid && (document.getElementById("receiptModal").classList.add("open"));
};

document.getElementById("closeBtn").onclick = () => {
    document.getElementById("receiptModal").classList.remove("open");
};

document.getElementById("printBtn").onclick = () => {
    window.print();
};
