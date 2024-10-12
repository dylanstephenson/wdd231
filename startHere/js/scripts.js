const currentUrl = window.location.href;
const everything = currentUrl.split("?");
const formData = everything[1].split("&");

const appointmentDetails = document.getElementById("results");

function show(name) {
    formData.forEach((element) => {
        if (element.startsWith(name)) {
            result = element.split("=")[1].replace("%40", "@");
        }
    })
    return(result);
}

appointmentDetails.innerHTML = `
<p>Appointment for ${show("first")} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show("fecha")} in the ${show("location")} Temple</p>
<p>Phone: ${show("phone")}</p>
<p>Email: <a href="mailto:${show("email")}" target="_blank">${show("email")}</a></p>
`