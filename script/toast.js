/*
  Below functions are for showing toastr as success, error, warning & danger event.
*/
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
    document.querySelector(".toastr").classList.toggle("blck_")
}