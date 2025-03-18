 document.getElementById("userForm").addEventListener("submit", async (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/users", {
        methos: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ nome, email })
    });
 });