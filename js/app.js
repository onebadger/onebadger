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
