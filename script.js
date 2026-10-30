
const buyButtons = document.querySelectorAll("#buy");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        const details = button.parentElement;
        const carName = details.querySelector("p").textContent;
        const price = button.textContent;

        alert(`You selected: ${carName}\nPrice: ${price} please sign in`);
    });
});

const form = document.querySelector("form");

form.addEventListener("submit", function() {
   const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert(`⭐⭐⭐⭐⭐ successfully!!!`);
    form.reset();
});

