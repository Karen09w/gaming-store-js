const Button = (function () {
    const createRipple = (event) => {
        if (event.type === "keydown" && event.keyCode !== 32) return;

        const button = event.currentTarget;
        const btnRect = button.getBoundingClientRect();

        const circle = document.createElement("span");
        const diameter = Math.max(btnRect.width, btnRect.height);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - btnRect.left - radius}px`;
        circle.style.top = `${event.clientY - btnRect.top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];

        if (ripple) ripple.remove();

        button.appendChild(circle);
    };

    document.querySelectorAll(".btn").forEach((btn) => {
        btn.addEventListener("mousedown", (e) => createRipple(e))
        btn.addEventListener("keydown", (e) => createRipple(e))
    });
})();

export default Button;
