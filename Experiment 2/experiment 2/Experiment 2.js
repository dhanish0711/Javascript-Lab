function calculateBill() {

    var customerName = document.getElementById("name").value;

    let product = document.getElementById("product").value;
    let price = Number(document.getElementById("price").value);
    let discount = Number(document.getElementById("discount").value);
    let quantity = Number(document.getElementById("quantity").value);

    const GST = 0.18;
    const SHOP_NAME = "ABC Super Store";

    let subtotal = price * quantity;
    let discountAmount = subtotal * (discount / 100);
    let amountAfterDiscount = subtotal - discountAmount;
    let gstAmount = amountAfterDiscount * GST;
    let total = amountAfterDiscount + gstAmount;

    const bill = {
        customerName,
        product,
        price,
        quantity,
        discount,
        subtotal,
        discountAmount,
        amountAfterDiscount,
        gstAmount,
        total
    };

    const {
        customerName: name,
        product: item,
        price: itemPrice,
        quantity: qty,
        discount: disc,
        subtotal: sub,
        discountAmount: discAmount,
        amountAfterDiscount: finalSub,
        gstAmount: gst,
        total: finalAmount
    } = bill;

    document.getElementById("shop").innerHTML = SHOP_NAME;
    document.getElementById("customer").innerHTML = name;
    document.getElementById("productName").innerHTML = item;
    document.getElementById("priceItem").innerHTML = "Rs. " + itemPrice.toFixed(2);
    document.getElementById("qty").innerHTML = qty;
    document.getElementById("subtotal").innerHTML = "Rs. " + sub.toFixed(2);
    document.getElementById("discountValue").innerHTML = disc + "%";
    document.getElementById("discountAmount").innerHTML = "Rs. " + discAmount.toFixed(2);
    document.getElementById("afterDiscount").innerHTML = "Rs. " + finalSub.toFixed(2);
    document.getElementById("gst").innerHTML = "Rs. " + gst.toFixed(2);
    document.getElementById("total").innerHTML = "<b>Rs. " + finalAmount.toFixed(2) + "</b>";

    console.log(`Customer: ${name}`);
    console.log(`Product: ${item}`);
    console.log(`Price Per Item: Rs. ${itemPrice.toFixed(2)}`);
    console.log(`Quantity: ${qty}`);
    console.log(`Subtotal: Rs. ${sub.toFixed(2)}`);
    console.log(`Discount: ${disc}%`);
    console.log(`Discount Amount: Rs. ${discAmount.toFixed(2)}`);
    console.log(`Amount After Discount: Rs. ${finalSub.toFixed(2)}`);
    console.log(`GST: Rs. ${gst.toFixed(2)}`);
    console.log(`Total Bill: Rs. ${finalAmount.toFixed(2)}`);
}