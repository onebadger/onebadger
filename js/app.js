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

var $selectedGoodsValue = $('.select-goods option:selected').val();
var $selector = $('.select-goods option');

var shopTaggedLis = [{image:'img/gallery04.jpg',info:'Магниты из дерева ручной.',tags:['souvenir','storage', 'good']},{image:'img/gallery02.jpg',info:'Blah blah blah blah.',tags:['souvenir', 'popular', 'furniture']},{image:'img/gallery06.jpg',info:'Hey hey hey hey hey hey.',tags:['souvenir', 'popular', 'furniture']}];

function getTaggedList (tag) {
  
}

var shopTaggedList = [];

var shopListLength = shopTaggedLis.length;

for (var j = 0; j < shopListLength; j++) {
  for (var i = 0; i < shopTaggedLis[j].tags.length; i++) {
    if (shopTaggedLis[j].tags[i] === $selectedGoodsValue) {
      shopTaggedList.push(shopTaggedLis[j]);
    }
  }
}




//if ('tags' in shopTaggedLis[0]) {alert('hi')};

var portfolioImgCounter = 0;
var lastPortfolioIndex = shopTaggedList.length - 1;

function portfolioImgLoader () {
  $('.gallery-img').attr('src', shopTaggedList[portfolioImgCounter].image);
  $('.gallery-text').text(shopTaggedList[portfolioImgCounter].info);
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




//var $selected = $('.goods-select option:selected');
//$('.selected_value h3').text() = $selected;
//
//$('.goods-select option').click(function(event) {
//  event.preventDefault();
//  $('.selected_value') = $selected;
//});

//$('.goods-select').change( function () {
//  var selectTxt = '';
//  $('.goods-select option:selected').each(function() {
//    selectTxt += $(this).text();
//  });
//  $('.selected_value').text(selectTxt);
//});




//calculate li according to tag

//var shopTaggedList = [{image : 'img/gallery01.jpg', info : 'Магниты из дерева ручной работы с российской тематикой. Выполнены на тонкой фанере, раскрашены и соединены с  магнитным слоем.', tags : ['souvenir', 'popular', 'storage']},{image : 'img/gallery01.jpg', info : 'Магниты из дерева ручной работы с российской тематикой. Выполнены на тонкой фанере, раскрашены и соединены с  магнитным слоем.', tags : ['souvenir', 'popular', 'furniture']}];//var shopTaggedList = [{image : 'img/gallery01.jpg', info : 'Магниты из дерева ручной работы с российской тематикой. Выполнены на тонкой фанере, раскрашены и соединены с  магнитным слоем.', tags : ['souvenir', 'popular', 'storage']},{image : 'img/gallery01.jpg', info : 'Магниты из дерева ручной работы с российской тематикой. Выполнены на тонкой фанере, раскрашены и соединены с  магнитным слоем.', tags : ['souvenir', 'popular', 'furniture']}];



//$selector.click( function(event) {
//  event.preventDefault();
//  
//});










