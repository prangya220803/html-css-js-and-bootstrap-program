fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const list = document.getElementById("employeeList");
    data.forEach(user => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.name} - ${user.email}`;
      list.appendChild(listItem);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });