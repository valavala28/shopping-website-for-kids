
// <----- OBJECT DATAS -----> //
var dealsArr = [{
    img: "1chudi.webp"
},
{
    img: "frock7frock.jpeg"
},
{
    img: "22boy.jpeg"
},
{
    img: "21combog.jpeg"
},
{
    img: "16toy.jpeg"
},
{
    img: "10jwe.jpeg"
},

{
    img: "127.jpeg"
},

];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});


var topArr = [{
    img: "frock4frock.jpeg"
},
{
    img: "5chudi.jpeg"
},
{
    img: "3combog.jpeg"
},
{
    img: "2nightg.jpeg"
},
{
    img: "16station.jpeg"
},
{
    img: "15toy.jpeg"
},
];

topArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#top").append(box);
});


var categoriesArr = [{
    img: "l6.jpeg"
},
{
    img: "2nightg.jpeg"
},
{
    img: "16combog.jpeg"
},
{
    img: "11chudi.jpeg"
},
{
    img: "frock1frock.jpeg"
},
{
    img: "12combo.jpeg"
},
{
    img: "15boy.jpeg"
},
{
    img: "14boycombo.jpeg"
},
{
    img: "18.jpeg"
},
{
    img: "4boy.jpeg"
},
{
    img: "5station.jpeg"
},
{
    img: "21footg.jpeg"
},
{
    img: "4footg.jpeg"
},
{
    img: "1food.jpeg"
},
{
    img: "20toy.jpeg"
},

{
    img: "911.jpeg"
},


];

categoriesArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#categories").append(box);
});


//LANDING PAGE SCRIPT
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index2.php"
})

