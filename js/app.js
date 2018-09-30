// javascript mediaqueri breakpoint
var cssBreakpoint = $('.js-media');

// phone mask
$('.phone-mask').mask('(999) 999-9999');

// animated nav dropdown button & cart dropdown button
var dropdownToggle = false;
var cartToggle = false;

function openDropdown() {
  $('#dropdown-menu').addClass('show');
  $('#hamburger').addClass('open');
  dropdownToggle = true;
}

function closeDropdown() {
  $('#dropdown-menu').removeClass('show');
  $('#hamburger').removeClass('open');
  dropdownToggle = false;
}

function openCart () {
  $('#dropdown-cart').addClass('show');
  cartToggle = true;
}

function closeCart () {
  $('#dropdown-cart').removeClass('show');
  cartToggle = false;
}

function openCloseDropdown () {
  if ( dropdownToggle ) {
    closeDropdown();
  } else {
    openDropdown();
  }
}

function openCloseCart () {
  if ( cartToggle ) {
    closeCart();
  } else {
    openCart();
  }
}

function onWindowResize() {
  closeDropdown();
  closeCart();
}

$(window).ready( function() {
  $(window).on('resize', onWindowResize)
});

window.addEventListener('click', function(event) {
  if ( !$(event.target).closest('.dropdown-btn').length &&  
      !$(event.target).closest('#dropdown-menu').length ) {
    $('#dropdown-menu').removeClass('show');
    $('#hamburger').removeClass('open');
    dropdownToggle = false;
  }
});

window.addEventListener('click', function(event) {
  if ( !$(event.target).closest('.cart-btn').length && 
      !$(event.target).closest('#dropdown-cart').length ) {
    $('#dropdown-cart').removeClass('show');
    cartToggle = false;
  }
});

$('.dropdown-btn').click(function() {
  openCloseDropdown();
});

$('.cart-btn').click(function() {
  openCloseCart();
});

// index.html
if ($('.js-index').length) {
  
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
  
}

if ($('.js-shop').length) {
  
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
  
} // /.js-shop




if ($('.js-workshop').length) {
    
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

} // /.js-workshop










