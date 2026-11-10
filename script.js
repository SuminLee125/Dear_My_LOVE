
function openLetter() {
    document.getElementById("letter-content")
        .classList.toggle("hidden");
}

function showSurprise() {
    document.getElementById("surprise-message")
        .classList.toggle("hidden");
}


function openGift() {
    const icon = document.getElementById("gift-icon");
    const content = document.getElementById("gift-content");

    if (content.classList.contains("hidden")) {
        icon.textContent = "💝";
        content.classList.remove("hidden");
    } else {
        icon.textContent = "🎁";
        content.classList.add("hidden");
    }
}

