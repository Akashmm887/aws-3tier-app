document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  fetch("http://13.61.182.212:5000/api/data")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      output.innerText = data.message;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      output.innerText = "⚠️ Unable to fetch data from backend.";
    });
});
