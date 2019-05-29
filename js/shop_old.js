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