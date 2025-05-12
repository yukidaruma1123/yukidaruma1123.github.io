const form = document.getElementById("contact_form");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-button");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    })
    .then((response) => {
        if (response.ok) {
            form.reset();
            modal.style.display = "block";
        } else {
            alert("送信に失敗しました。");
        }
    })
    .catch(() => {
        alert("通信エラーが発生しました。");
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
