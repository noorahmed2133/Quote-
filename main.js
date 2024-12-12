
    // Array of quotes
    var quotes = [
      `"The best revenge is massive success."`,
`"You miss 100% of the shots you don't take."`,
`"It's not what happens to you, but how you react to it that matters."`,
`"Resentment is like drinking poison and waiting for your enemies to die."`,
`"Beware of what you become in pursuit of what you want."`,   
 ];
    var authers=[

        "--Epictetus",
        "--Frank Sinatra",
        "--Nelson Mandela",
        "--Wayne Gretzy",
        "--Elbert Hubbard",


    ]

    // Counter to track the current quote index
    var index = 0;

    // Function to display the next quote
    function displayQuote() {
      // Use a for loop to iterate through quotes sequentially
      for (var i = 0; i < quotes.length; i++) {
        if (i === index) {
          // Display the selected quote and exit function
          document.getElementById('quote').textContent = quotes[i];
          document.getElementById('authorOutput').textContent =authers [i];
          index = (index + 1) % quotes.length; // Update index
          return; // Exit the function
        }
      }
    }
