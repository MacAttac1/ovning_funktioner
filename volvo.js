function volvo() {
    let car = "volvo"
    document.querySelectorAll("p")[0].textContent = typeof(car) + " " + car;
}

volvo();

document.querySelectorAll("p")[1].textContent = typeof(car);
