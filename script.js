
const productImg = document.getElementById("product-img");
const btns = document.querySelectorAll(".btn");



for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", () => {
        productImg.src = `images/image${i + 1}.png`;
        btns.forEach(btn => btn.classList.remove("active"));
        btns[i].classList.toggle("active");
    })
}