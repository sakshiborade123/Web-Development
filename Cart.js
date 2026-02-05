// Select all product divs
let products = document.querySelectorAll("section div");

products.forEach((product) => {
    let addBtn = product.querySelector(".add");
    let removeBtn = product.querySelector(".remove");
    let countSpan = product.querySelector(".count");

    let count = 0;

    // Add to cart
    addBtn.addEventListener("click", () => {
        count++;
        countSpan.innerText = count;
    });

    // Remove from cart
    removeBtn.addEventListener("click", () => {
        if (count > 0) {
            count--;
            countSpan.innerText = count;
        }
    });
});
