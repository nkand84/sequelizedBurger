$(function () {

    $("#create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#burg").val().trim(),
        };
        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function (data) {
                console.log(data);
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }   
        );
    });

    // update
    $(".btn-devour").on("click", function(event) {
        var id = $(this).data("id");
            
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT"       
        }).then(
          function() {
            console.log("updated");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    

});