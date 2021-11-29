//variable to target dom
var userCountryInput = document.querySelector("#user-country-input");

//function to take user input and call the data to the console. 
userCountryInput.addEventListener("click", (e) => {
    e.preventDefault();
    var countryInput = document.querySelector('#country-input').value;
    population(countryInput);

    function population(countryInput) {
        fetch("https://world-population.p.rapidapi.com/population?country_name=" + countryInput, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "world-population.p.rapidapi.com",
                "x-rapidapi-key": "bb2565e4e3msh03afa59d6e059b2p1f662cjsn993ece23cd23"
            }
        })
            .then(response => {
                console.log((response).json());
            })
            .catch(err => {
                console.error(err);
            });
    };
