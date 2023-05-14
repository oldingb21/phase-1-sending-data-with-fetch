// Add your code here
const submitData = (userName, userEmail) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
          },
        body: JSON.stringify({
            name: userName,
            email: userEmail})
    })
    .then((res) => res.json())
    .then((userData) => {
        const userId = document.createElement('p');
        const body = document.querySelector('body')
        userId.textContent = userData.id;
        body.appendChild(userId);
    })
    .catch((error) => {
        const errorOnDOM = document.createElement('p');
        const body = document.querySelector('body');
        errorOnDOM.textContent = error.message;
        body.appendChild(errorOnDOM);
    })
}