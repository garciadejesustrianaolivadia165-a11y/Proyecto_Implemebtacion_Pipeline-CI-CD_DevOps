document.getElementById("sendBtn").addEventListener("click", async () => {
    const name = document.getElementById("nameInput").value;

    const response = await fetch("http://localhost:3000/api/hello?name=" + name);
    const data = await response.json();

    document.getElementById("response").innerText = data.message;
});
