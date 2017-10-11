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


// portfolio gallery

var portfolioCurrentIndex = 0;
var portfolioLastIndex = portfolioList.length - 1;

function portfolioLoader () {
  $('#portfolio-img').attr('src', portfolioList[portfolioCurrentIndex].image);
  $('#portfolio-text').text(portfolioList[portfolioCurrentIndex].info);
};


function portfolioClick () {
  
  $('#portfolio-arr-right').click(function(event) {
    event.preventDefault();
    if (portfolioCurrentIndex == portfolioLastIndex) {
      portfolioCurrentIndex = 0;
      portfolioLoader();
    } else {
      portfolioCurrentIndex += 1;
      portfolioLoader();
    }      
  });

  $('#portfolio-arr-left').click(function(event) {
    event.preventDefault();
  
    if (portfolioCurrentIndex == 0) {
      portfolioCurrentIndex = portfolioLastIndex;
      portfolioLoader();
    } else {
      portfolioCurrentIndex -= 1;
      portfolioLoader();
    }
  });
}

portfolioLoader();
portfolioClick();



// tagged shop gallery

var $selectedGoodsValue = $('.select-goods option:selected').val();
var $selector = $('.select-goods');
var shopTaggedList = [];
var shopListLength = shopList.length;
var shopCurrentIndex = 0;
var shopLastIndex;

function shopListLoader () {
  $('#shop-img').attr('src', shopTaggedList[shopCurrentIndex].image);
  $('#shop-text').text(shopTaggedList[shopCurrentIndex].info);
};

function getTaggedList () {
  $selectedGoodsValue = $('.select-goods option:selected').val();
  shopCurrentIndex = 0;
  shopTaggedList = [];
  for (var j = 0; j < shopListLength; j++) {
    for (var i = 0; i < shopList[j].tags.length; i++) {
      if (shopList[j].tags[i] === $selectedGoodsValue) {
        shopTaggedList.push(shopList[j]);
      }
    }
  }
  shopLastIndex = shopTaggedList.length - 1;
  console.log(shopTaggedList);
  return shopTaggedList;
}

getTaggedList();

$selector.on('change', function () {
  getTaggedList();
  shopLastIndex = shopTaggedList.length - 1;
  shopListLoader();
});

function shopListClick () {
  
  $('#shop-arr-right').click(function(event) {
    event.preventDefault();
    if (shopCurrentIndex === shopLastIndex) {
      shopCurrentIndex = 0;
      shopListLoader();
    } else {
      shopCurrentIndex += 1;
      shopListLoader();
    }
  });

  $('#shop-arr-left').click(function(event) {
    event.preventDefault();
  
    if (shopCurrentIndex == 0) {
      shopCurrentIndex = shopLastIndex;
      shopListLoader();
    } else {
      shopCurrentIndex -= 1;
      shopListLoader();
    }
  });
}

shopListLoader();
shopListClick();




// #workshop-slider

var workshopImgCounter = 0;
var lastWorkshopIndex = schmList.length - 1;

function workshopImgLoader () {
  $('#workshop-img').attr('src', schmList[workshopImgCounter].image);
  $('#workshop-text').text(schmList[workshopImgCounter].info);
};


function workshopClick () {
  
  $('#workshop-arr-right').click(function(event) {
    event.preventDefault();
    if (workshopImgCounter == lastWorkshopIndex) {
      workshopImgCounter = 0;
      workshopImgLoader();
    } else {
      workshopImgCounter += 1;
      workshopImgLoader();
    }      
  });

  $('#workshop-arr-left').click(function(event) {
    event.preventDefault();
  
    if (workshopImgCounter == 0) {
      workshopImgCounter = lastWorkshopIndex;
      workshopImgLoader();
    } else {
      workshopImgCounter -= 1;
      workshopImgLoader();
    }
  });
}

workshopImgLoader();
workshopClick();



