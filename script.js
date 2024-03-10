let buyAppleBtn = document.getElementById("apple-juice-buy-btn")
let buyOrangeBtn = document.getElementById("orange-juice-buy-btn")
let buyGrapeBtn = document.getElementById("grape-juice-buy-btn")

let appleAction = document.getElementById("apple-btn-action")
let orangeAction = document.getElementById("orange-btn-action")
let grapeAction = document.getElementById("grape-btn-action")



buyAppleBtn.addEventListener("click", function() {
    appleAction.textContent = "* Out of stock"
})

buyOrangeBtn.addEventListener("click", function() {
    orangeAction.textContent = "* Out of stock"
})

buyGrapeBtn.addEventListener("click", function() {
    grapeAction.innerHTML = "<a href='https://www.youtube.com/watch?v=BjDebmqFRuc' target='_blank'><button id='confirm'>Confirm Order</button></a>"
})