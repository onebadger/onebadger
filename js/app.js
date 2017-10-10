// nav dropdown button

function dropdownClick() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

// cart dropdown button

function cartClick() {
    document.getElementById("dropdown-cart").classList.toggle("show");
}

// close nav-dropdown & cart-dropdown onclick outside the buttons

window.onclick = function(event) {
  
  if (!event.target.matches('.svg')) {
    
    var dropdownContent = document.getElementsByClassName("dropdown-content");
    var cartContent = document.getElementsByClassName("cart-content");
    
    var i;
    for (i = 0; i < dropdownContent.length; i++) {
      var openDropdown = dropdownContent[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    var j;
    for (i = 0; i < cartContent.length; i++) {
      var openDropdowns = cartContent[i];
      if (openDropdowns.classList.contains('show')) {
        openDropdowns.classList.remove('show');
      }
    }
    
  } else if (!event.target.matches('.dropdown-btn')) {
    
    var dropdownContent = document.getElementsByClassName("dropdown-content");
    
    var i;
    for (i = 0; i < dropdownContent.length; i++) {
      var openDropdown = dropdownContent[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
    
  } else if (!event.target.matches('.cart-btn')) {
        
    var cartContent = document.getElementsByClassName("cart-content");
    
    var j;
    for (i = 0; i < cartContent.length; i++) {
      var openDropdowns = cartContent[i];
      if (openDropdowns.classList.contains('show')) {
        openDropdowns.classList.remove('show');
      }
    }
  }
};


// #portfolio

var portfolioImgCounter = 0;
var lastPortfolioIndex = galleryImg.length - 1;

function portfolioImgLoader () {
  $('.gallery-img').attr('src', galleryImg[portfolioImgCounter].image);
  $('.gallery-text').text(galleryImg[portfolioImgCounter].info);
};


function portfolioClick () {
  
  $('.arrow-right').click(function(event) {
    event.preventDefault();
    if (portfolioImgCounter == lastPortfolioIndex) {
      portfolioImgCounter = 0;
      portfolioImgLoader();
    } else {
      portfolioImgCounter += 1;
      portfolioImgLoader();
    }      
  });

  $('.arrow-left').click(function(event) {
    event.preventDefault();
  
    if (portfolioImgCounter == 0) {
      portfolioImgCounter = lastPortfolioIndex;
      portfolioImgLoader();
    } else {
      portfolioImgCounter -= 1;
      portfolioImgLoader();
    }
  });
}

portfolioImgLoader();
portfolioClick();



// tagged shop list 

var $selectedGoodsValue = $('.select-goods option:selected').val();
var $selector = $('.select-goods');
var shopTaggedList = [];
var shopListLength = shopList.length;
var shopIndexCounter = 0;
var lastShopIndex;

function getTaggedList () {
  $selectedGoodsValue = $('.select-goods option:selected').val();
  shopIndexCounter = 0;
  shopTaggedList = [];
  for (var j = 0; j < shopListLength; j++) {
    for (var i = 0; i < shopList[j].tags.length; i++) {
      if (shopList[j].tags[i] === $selectedGoodsValue) {
        shopTaggedList.push(shopList[j]);
      }
    }
  }
  lastShopIndex = shopTaggedList.length - 1;
  console.log(shopTaggedList);
  return shopTaggedList;
}

getTaggedList();

$selector.on('change', function () {
  getTaggedList();
  lastShopIndex = shopTaggedList.length - 1;
  shopListLoader();
});


function shopListLoader () {
  $('.shop-gallery-img').attr('src', shopTaggedList[shopIndexCounter].image);
  $('.shop-gallery-text').text(shopTaggedList[shopIndexCounter].info);
};


function shopGalleryOnClick () {
  
  $('.shop-arrow-right').click(function(event) {
    event.preventDefault();
    if (shopIndexCounter === lastShopIndex) {
      shopIndexCounter = 0;
      shopListLoader();
    } else {
      shopIndexCounter += 1;
      shopListLoader();
    }      
  });

  $('.shop-arrow-left').click(function(event) {
    event.preventDefault();
  
    if (shopIndexCounter == 0) {
      shopIndexCounter = lastShopIndex;
      shopListLoader();
    } else {
      shopIndexCounter -= 1;
      shopListLoader();
    }
  });
}

shopListLoader();
shopGalleryOnClick();







