let modalBtns = document.querySelectorAll(".modal-show");

let modal = document.querySelector("#modal");
let modalOrder = document.querySelector("#modal-order");
let modalClose = document.querySelector("#modal-hide");
let modalOrderClose = document.querySelector("#modal-order-hide");
let modalSubmit = document.querySelector("#modal-submit");

modalBtns.forEach(btn => {
    btn.addEventListener("click", e => {
        modal.classList.add("modal-active");
    })
})

modalClose.addEventListener("click", e => {
    modal.classList.remove("modal-active");
})

modalSubmit.addEventListener("click", e => {
    e.preventDefault();

    var form = document.forms[0];
    var isValid = form.checkValidity();
    form.reportValidity();
    if (!isValid) {
        return;
    }

    modal.classList.remove("modal-active");
    modalOrder.classList.add("modal-active");
})


modalOrderClose.addEventListener("click", e => {
    modalOrder.classList.remove("modal-active");
})
