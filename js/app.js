$(".phone-mask").mask("(999) 999-9999");

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

// workshop slider

var workshopCurrentIndex = 0;
var workshopLastIndex = schmList.length - 1;

function workshopListLoader () {
  $('#workshop-img').attr('src', schmList[workshopCurrentIndex].image);
  $('#workshop-text').text(schmList[workshopCurrentIndex].info);
};

workshopListLoader();

function workshopClick () {
  
  $('#workshop-arr-right').click(function(event) {
    event.preventDefault();
    if (workshopCurrentIndex == workshopLastIndex) {
      workshopCurrentIndex = 0;
      workshopListLoader();
    } else {
      workshopCurrentIndex += 1;
      workshopListLoader();
    }      
  });

  $('#workshop-arr-left').click(function(event) {
    event.preventDefault();
  
    if (workshopCurrentIndex == 0) {
      workshopCurrentIndex = workshopLastIndex;
      workshopListLoader();
    } else {
      workshopCurrentIndex -= 1;
      workshopListLoader();
    }
  });
}

workshopListLoader();
workshopClick();


// portfolio slider

var portfolioCurrentIndex = 0;
var portfolioLastIndex = portfolioList.length - 1;

function portfolioLoader () {
  $('#portfolio-img').attr('src', portfolioList[portfolioCurrentIndex].image);
  $('#portfolio-text').text(portfolioList[portfolioCurrentIndex].info);
}


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


// shop lists sliders

var $selectedGoodsValue = $('.select-goods option:selected').val();
var $selector = $('.select-goods');
var shopTaggedList = [];
var shopNotTaggedList = [];
var shopListLength = shopList.length;
var shopCurrentIndex = 0;
var otherCurrentIndex = 0;
var shopLastIndex;
var otherLastIndex;

function shopListLoader () {
  $('#shop-img').attr('src', shopTaggedList[shopCurrentIndex].image);
  $('#shop-text').text(shopTaggedList[shopCurrentIndex].info);
}

function otherListLoader () {
  $('#other-img').attr('src', shopNotTaggedList[otherCurrentIndex].image);
  $('#other-text').text(shopNotTaggedList[otherCurrentIndex].info);
}

function getShopLists () {
  shopTaggedList = [];
  shopNotTaggedList = [];
  for (var i = 0; i < shopListLength; i++) {
    if (shopList[i].tags.includes($selectedGoodsValue)) {
      shopTaggedList.push(shopList[i]);
    } else {
      shopNotTaggedList.push(shopList[i]);
    }
  }
  shopCurrentIndex = 0;
  otherCurrentIndex = 0;
  shopLastIndex = shopTaggedList.length - 1;
  otherLastIndex = shopNotTaggedList.length - 1;
  return [shopTaggedList, shopNotTaggedList];
}

getShopLists();
shopListLoader();
otherListLoader();

$selector.on('change', function () {
  $selectedGoodsValue = $('.select-goods option:selected').val();
  getShopLists();
  shopListLoader();
  otherListLoader();
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
shopListClick();

function otherListClick () {
  
  $('#other-arr-right').click(function(event) {
    event.preventDefault();
    if (otherCurrentIndex === otherLastIndex) {
      otherCurrentIndex = 0;
      otherListLoader();
    } else {
      otherCurrentIndex += 1;
      otherListLoader();
    }
  });

  $('#other-arr-left').click(function(event) {
    event.preventDefault();
    if (otherCurrentIndex == 0) {
      otherCurrentIndex = otherLastIndex;
      otherListLoader();
    } else {
      otherCurrentIndex -= 1;
      otherListLoader();
    }
  });
}
otherListClick();










