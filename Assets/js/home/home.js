let searchButton = document.querySelector(".Search-Icon");
let searchBox = document.querySelector(".searchBox");


searchButton.addEventListener("mouseover", () => {
    if (searchBox.classList.contains("closed")) {
        searchBox.classList.remove("closed")
        searchBox.classList.add("opened")
        searchBox.focus();
    }
});


searchBox.addEventListener("blur", () => {
    if (searchBox.classList.contains("opened") && searchBox.value != null) {
        searchBox.classList.remove("opened");
        searchBox.classList.add("closed");
    }
});
