req()

function req() {
    fetch("https://simple-market-backend.herokuapp.com/aboutme")
        .then(response => response.json())
        .then(data => {
            write(data)
        })
}

function write(data) {
    $("#greeting").text(data.greeting)
    $("#aboutMe").text(data.aboutMe)
    $("#email").text(data.email)
    $("#linkedin").text(data.linkedin)
    $("#mobileNumber").text(data.mobileNumber)
    $("#reminder").text(data.reminder)
}