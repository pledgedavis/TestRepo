// document.getElementById("loginForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;

//     fetch("https://frontend-take-home-service.fetch.com/auth/login", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             name: name,
//             email: email,
//         }),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log("Login successful:", data);
//         Redirect to index.html after successful login
//         window.location.href = 'index.html';
//     })
//     .catch(error => {
//         console.error("Error during login:", error);
//     });
// });
// login.js

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("pswd").value;

    fetch("https://frontend-take-home-service.fetch.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Login successful:", data);

            // You can handle the successful login response here
            // For example, redirect to another page
            window.location.href = "index.html";
        })
        .catch(error => {
            console.error("Error during login:", error);

            // You can handle login errors here
        });
});

