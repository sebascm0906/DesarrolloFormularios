pruebaFormulario.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = pruebaFormulario.getElementById("myForm");
  
    // Add a submit event listener to the form
    form.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the form data
      var formData = {
        name: document.getElementById("name").value,
        email: pruebaFormulario.getElementById("email").value,
        age: pruebaFormulario.getElementById("age").value
      };
  
      // Display the form data on the page
      var displayDiv = pruebaFormulario.getElementById("display-div");
      displayDiv.innerHTML = "Name: " + formData.name + "<br>Email: " + formData.email + "<br>Age: " + formData.age;
    });
  });
  