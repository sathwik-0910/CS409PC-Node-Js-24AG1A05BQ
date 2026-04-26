async function loadUsers() {

    let loader = document.getElementById("loader");
    let outputDiv = document.getElementById("output");

    loader.style.display = "block";
    outputDiv.innerHTML = "";

    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();

        loader.style.display = "none";

        let output = "";

        data.forEach(user => {
            output += `
                <div class="card">
                    <h3>${user.name}</h3>
                    <p><b>Email:</b> ${user.email}</p>
                    <p><b>City:</b> ${user.address.city}</p>
                </div>
            `;
        });

        outputDiv.innerHTML = output;

    } catch (error) {
        loader.style.display = "none";
        outputDiv.innerHTML = "<p>Error loading data</p>";
    }
}