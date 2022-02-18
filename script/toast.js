// document.querySelectorAll(".toast").addEventListener("click", () => {
//     document.querySelector(".toast").classList.remove("blck_")
// })

function toastrSuccess(ta) {
    document.querySelector(".success-alert-toast").classList.remove("blck_")
    setTimeout(() => {
        document.querySelector(".success-alert-toast").classList.add("blck_")
    }, 3000)
}

function toastrError(ta) {
    document.querySelector(".error-alert-toast").classList.remove("blck_")
    setTimeout(() => {
        document.querySelector(".error-alert-toast").classList.add("blck_")
    }, 3000)
}

function toastrWarning(ta) {
    document.querySelector(".warning-alert-toast").classList.remove("blck_")
    setTimeout(() => {
        document.querySelector(".warning-alert-toast").classList.add("blck_")
    }, 3000)
}

function toastrInfo(ta) {
    document.querySelector(".info-alert-toast").classList.remove("blck_")
    setTimeout(() => {
        document.querySelector(".info-alert-toast").classList.add("blck_")
    }, 3000)
}

function close() {
    debugger;
    document.querySelector(".toastr").classList.toggle("blck_")
    console.log("clicked")
}