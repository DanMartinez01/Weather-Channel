
let btn = document.querySelector("button");

function cargarCiudad() {
    let ciudad = document.querySelector("input").value
    let city = document.querySelector("#ciudad")
    let temperatura = document.querySelector("#temperatura");
    let descripcion = document.querySelector("#descripcion")

    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + "&appid=95176c8edea30e33338e0eaddd53a916&units=metric", function (data, status, xhr) {
        document.querySelector(".container").style.visibility = "visible"
        city.textContent = data.name
        temperatura.textContent = data.main.temp
        document.querySelector("#grados").innerHTML = "<sup>°C</sup>"
        descripcion.textContent = data.weather[0].description
        document.querySelector("input").value = ""
        document.querySelector("input").setAttribute("placeholder", "Ingresá una ciudad")

        let img = document.querySelector('#wicon')

        let iconcode = data.weather[0].icon

        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        $('#wicon').attr('src', iconurl);
    })
        .fail(function (xhr, status, error) {
            alert("Ciudad no encontrada");
        });

}
btn.addEventListener('click', cargarCiudad);

