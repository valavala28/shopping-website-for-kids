var productData = [{
    image_url: "1food.jpeg",
    brand: "Access World",
    para: "Chocos For Child",
    price: "Rs. 649 ",
    rs: 649,
    strikedoffprice: "Rs 999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "2food.jpeg",
    brand: "Nestle",
    para: "Creamy venilla Powder",
    price: "Rs. 729 ",
    rs: 729,
    strikedoffprice: "Rs 999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "5food.jpeg",
    brand: "Breads",
    para: "Cradle",
    price: "Rs. 430 ",
    rs: 430,
    strikedoffprice: "Rs 639 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "4food.jpeg",
    brand: "Access World",
    para: "Fruit Mix",
    price: "Rs. 480 ",
    rs: 480,
    strikedoffprice: "Rs 699 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "3food.jpeg",
    brand: "Nestle",
    para: "Milk Powder",
    price: "Rs. 749 ",
    rs: 749,
    strikedoffprice: "Rs 999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "6food.jpeg",
    brand: "Breads",
    para: "Breads",
    price: "Rs. 449 ",
    rs: 449,
    strikedoffprice: "Rs 799 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "7food.jpeg",
    brand: "Nestle",
    para: "Cerelac",
    price: "Rs. 899 ",
    rs: 899,
    strikedoffprice: "Rs 999 ",
    offer: "(25% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "8food.jpeg",
    brand: "Biscuits",
    para: "BOurbun BIscuits",
    price: "Rs. 389 ",
    rs: 389,
    strikedoffprice: "Rs 699 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "9food.jpeg",
    brand: "Biscuits",
    para: "Healthy Biscuits",
    price: "Rs.240 ",
    rs: 240,
    strikedoffprice: "Rs 499 ",
    offer: "(35% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},
{
    image_url: "10food.jpeg",
    brand: "Nestle",
    para: "Millet Biscuits",
    price: "Rs. 649 ",
    rs: 649,
    strikedoffprice: "Rs 999 ",
    offer: "(45% OFF) ",
    atc: "Add to Bag",
    atw: "Add to Whishlist",
    category: "Food Items",
},


];

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
        if (element.brand == selected) {
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
            atw.innerText = "ADDED TO WISHLIST"
        })


      
        var atc = document.createElement("p")
        atc.setAttribute("class", "addToBagp")
        atc.textContent = elem.atc;
        atc.style.cursor = "pointer"


        atc.addEventListener("click", function() {
            addToBag(elem)
            atc.innerText = "ADDED TO BAG"
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

