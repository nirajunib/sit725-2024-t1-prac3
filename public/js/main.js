const cardList = [
    {
        title: "Nissan GT-R",
        image: "images/nissan.jpg",
        link: "About GT-R",
        description: "Demo description about Nissan GT-R"
    },
    {
        title: "Dogde Hellcat",
        image: "images/dodge.jpg",
        link: "About Hellcat",
        description: "Demo description about Dogde Hellcat"
    },
    {
        title: "Jaquar F-Type",
        image: "images/jaquar.jpg",
        link: "About F-Type",
        description: "Demo description about Jaquar F-Type"
    }
]

const submitForm = () => {
    // alert("Form Submitted")
    let formData = {};
    formData.first_name = $('#first_name').val();
    formData.last_name = $('#last_name').val();
    formData.password = $('#password').val();
    formData.email = $('#email').val();
    console.log("Form Data Submitted: ", formData);
}
const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.image + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
}
$(document).ready(function () {
    $('.materialboxed-image').materialbox();
    addCards(cardList);
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
});