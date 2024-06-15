var productData = [{
    image_url: "3boyacc.jpeg",
    brand: "Access World",
    para: "Ties For BOy CHild",
    strikedoffprice: "Rs 399 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "4boyacc.jpeg",
    brand: "Access World",
    para: "Belts for boy Child",
    price: "Rs. 449 ",
    rs: 449,
    strikedoffprice: "Rs 599 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "1boyacc.jpeg",
    brand: "Access World",
    para: "Belts for boy Child",
    price: "Rs. 149 ",
    rs: 149,
    strikedoffprice: "Rs 299 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "7boyacc.jpeg",
    brand: "Access World",
    para: "Ties Foy BOy CHild",
    price: "Rs. 120 ",
    rs: 120,
    strikedoffprice: "Rs 299 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "cap12.jpeg",
    brand: "Access World",
    para: "Caps for child",
    price: "Rs. 169 ",
    rs: 169,
    strikedoffprice: "Rs 299 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "8boyacc.jpeg",
    brand: "Access World",
    para: "Ties Foy BOy CHild",
    price: "Rs. 230 ",
    rs: 230,
    strikedoffprice: "Rs 299 ",
    offer: "(25% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "12jwe.jpeg",
    brand: "Access World",
    para: "Hair Band",
    price: "Rs. 79 ",
    rs: 79,
    strikedoffprice: "Rs 199 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "18jwe.jpeg",
    brand: "Access World",
    para: "Fans",
    price: "Rs. 649 ",
    rs: 649,
    strikedoffprice: "Rs 999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "813.jpeg",
    brand: "Access World",
    para: "BIcyle",
    price: "Rs. 1649 ",
    rs: 1649,
    strikedoffprice: "Rs 2999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "911.jpeg",
    brand: "Access World",
    para: "Cradle",
    price: "Rs. 1149 ",
    rs: 1149,
    strikedoffprice: "Rs 2499 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "21station.jpeg",
    brand: "Access World",
    para: "Bottle",
    price: "Rs. 549 ",
    rs: 549,
    strikedoffprice: "Rs 599 ",
    offer: "(5% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "715.jpeg",
    brand: "Access World",
    para: "playing Kit",
    price: "Rs. 449 ",
    rs: 449,
    strikedoffprice: "Rs 699 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},

{
    image_url: "127.jpeg",
    brand: "Access World",
    para: "Cradle",
    price: "Rs. 1649 ",
    rs: 1649,
    strikedoffprice: "Rs 2999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},

{
    image_url: "225.jpeg",
    brand: "Access World",
    para: "Cradle",
    price: "Rs. 1369 ",
    rs: 1369,
    strikedoffprice: "Rs 2999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},
{
    image_url: "cap.jpeg",
    brand: "Access World",
    para: "Caps for child",
    price: "Rs. 140 ",
    rs: 140,
    strikedoffprice: "Rs 199 ",
    offer: "(5% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Accessiors",
},];

var wishListData = JSON.parse(localStorage.getItem("wishListObj")) || []

var bagData = JSON.parse(localStorage.getItem("BagListObj")) || []

window.addEventListener('load', function() {
    displayPage(productData)
})

document.getElementById('nameSort').addEventListener('change', sortNames);

function sortNames() {
    var selected = document.getElementById('nameSort').value;
    if (selected == 'asc') {
        productData.sort(function(a, b) {
            if (a.brand > b.brand) return 1
            if (a.brand < b.brand) return -1
            return 0;
        })

        displayPage(productData);
    } else {
        productData.sort(function(a, b) {
            if (a.brand > b.brand) return -1
            if (a.brand < b.brand) return 1
            return 0
        })

        displayPage(productData)
    }
}

document.getElementById('priceSort').addEventListener('change', sortPrice);

function sortPrice() {
    var selected = document.getElementById('priceSort').value;
    if (selected == 'lth') {
        productData.sort(function(a, b) {
            return a.rs - b.rs;
        })
        displayPage(productData);
    } else {
        productData.sort(function(a, b) {
            return b.rs - a.rs;
        })
        displayPage(productData)
    }
}

document.getElementById('brandFilter').addEventListener('change', filterBrand);

function filterBrand() {
    var selected = document.getElementById('brandFilter').value
    var newArray = productData.filter(function(element) {
        if (element.para == selected) {
            return element;
        }
    })
    displayPage(newArray);
}


function displayPage(productData) {

    document.getElementById("container").innerHTML = "";

    productData.map(function(elem) {
        var box = document.createElement("div")
        box.style.cursor = "pointer"

        var img = document.createElement("img")
        img.src = elem.image_url

        var contentBox = document.createElement('div');
        contentBox.setAttribute('class', 'contentBox')

        var brand = document.createElement("h4")
        brand.textContent = elem.brand

        var productname = document.createElement("p")
        productname.textContent = elem.para


        var mix = document.createElement("div")
        mix.setAttribute("class", "mixbox")


        var price = document.createElement("p")
        price.textContent = elem.price

        var strprice = document.createElement("p")
        strprice.textContent = elem.strikedoffprice
        strprice.setAttribute("class", "strikep")


        var offer = document.createElement("p")
        offer.textContent = elem.offer
        offer.setAttribute("class", "offerp")

        mix.append(price, strprice, offer)

        

        var atw = document.createElement("p")
        atw.setAttribute("class", "wishListp")
        atw.textContent = elem.atw;
        atw.style.cursor = "pointer"

        atw.addEventListener("click", function() {
            addToWishlist(elem)
            atw.style.color = "green"
            atw.innerText = "WISHLISTED"
        })


      
        var atc = document.createElement("p")
        atc.setAttribute("class", "addToBagp")
        atc.textContent = elem.atc;
        atc.style.cursor = "pointer"


        atc.addEventListener("click", function() {
            addToBag(elem)
            atc.innerText = "BAGGED"
        })

        contentBox.append(brand, productname, mix, atw, atc)

        box.append(img, contentBox)

        document.querySelector("#container").append(box);



    });

}



function addToWishlist(element) {
    // console.log(element)
    wishListData.push(element)
    localStorage.setItem("wishListObj", JSON.stringify(wishListData))
}

function addToBag(element) {
    // console.log(element)
    bagData.push(element)
    localStorage.setItem("BagListObj", JSON.stringify(bagData))
}

document.getElementById('landingPage').addEventListener('click', function() {
window.location.href = "index2.php"
}) 

