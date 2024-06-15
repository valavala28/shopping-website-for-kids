
// <!-- CATEGORIES DISPALY 1 -->
var categoryBag = [
    {image_url :'https://bit.ly/3wMvK2N'},
    {image_url :'https://bit.ly/3wY0TA6'},
    {image_url :'https://bit.ly/3IWRXxk'},
    {image_url :'https://bit.ly/36I2HCP'},
    {image_url :'https://bit.ly/3LtKeIK'},
    {image_url :'https://bit.ly/3uEEhC2'},
  ]
  categoryBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('categoryBag_women').append(box)
  })
  
  // <!-- BRAND DISPLAY 2 -->
  var brandsBag = [
    {image_url :'https://bit.ly/3qOmNSH'},
    {image_url :'https://bit.ly/3Dx4Lth'},
    {image_url :'https://bit.ly/3uGBVTh'},
    {image_url :'https://bit.ly/3DxPVCY'},
    {image_url :'https://bit.ly/3iQbIfq'},
  ]
  brandsBag.map(function(element){
    var box = document.createElement('div');
    var img =  document.createElement('img');
    img.setAttribute('src', element.image_url)
    box.append(img); 
    document.getElementById('explore_more_women').append(box)
  })
  
  
  // <------- SLIDER IMAGES -------> //
  var slideImages = [
    //FOR TABLET & DEKSTOP VIEW
    [{img_url : "slide5.jpeg"},
    {img_url : "InShot_20231110_120325532.jpg"},
    {img_url : "slide4.jpeg"},
    {img_url : "slide2.jpeg"},
    ],
  
    //FOR MOBILE VIEW
    [{img_url : "slide5.jpeg"},
    {img_url : "InShot_20231110_120325532.jpg"},
    {img_url : "slide4.jpeg"},
    {img_url : "slide2.jpeg"},
    ]
  ]
  
  var z = null; 
  
    //script for media queries
    var value = window.matchMedia("(max-width: 550px)") //FOR TABLET VIEW
      mFunction(value) 
      value.addListener(mFunction) 
      function mFunction(value) {
        if (value.matches) { 
          z = slideImages[1];
        } 
        else {
          z = slideImages[0]
        }
    }
  
  z.map(function(ele, index){
    var slideDiv = document.createElement('div');
    switch(index){
      case 0 :
        slideDiv.setAttribute('class', 'slide first');
        break;
      default :
      slideDiv.setAttribute('class', 'slide')
    }
   
    var images = document.createElement('img');
    images.src = ele.img_url;
    
    slideDiv.append(images); 
    document.getElementById('slides').append(slideDiv)
  })
  
  var images = document.querySelectorAll('img')
  for(let i=0; i<images.length; i++){
    images[i].addEventListener('click', function(){
      window.location.href = "food.html"
    })
  }
  // LANDING PAGE
  document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index2.php"
  })
  
  