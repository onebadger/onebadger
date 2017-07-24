<?php 

if(isset($_POST['user_phone1'])) {
  $message = 'Phone: ' .$_POST['user_phone1'];
  mail('on.badger@gmail.com', 'Call-me form', $message);
} else {
  header('Refresh: 3; URL=index.html');
  exit(0);
}
?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="10;url=../index.html" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="noindex,nofollow">
    <title>Badger wood workshop</title>
    <link href="https://fonts.googleapis.com/css?family=Arimo:400,700|Arsenal:400,700|Fira+Sans:400,500,700|Istok+Web:400,700|Open+Sans+Condensed:300,700|Roboto+Condensed:400,700|Roboto:400,500,700|Ubuntu+Condensed|Ubuntu:400,500,700&amp;subset=cyrillic" rel="stylesheet">
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/forms.css">
    <link rel="stylesheet" href="../css/responsive.css">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.js" integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg=" crossorigin="anonymous"></script>
  </head>
  <body>
    <div class="wrapper">
      <div class="nav-top">
        <div class="dropdown">
          <img src="../img/ico-sample.svg" onclick="dropdownClick()" class="svg dropdown-btn">
          <div id="dropdown-menu" class="dropdown-content">
            <a href="#">ГЛАВНАЯ</a>
            <a href="#">МАГАЗИН</a>
            <a href="#">МАСТЕРСКАЯ</a>
            <a href="#">УСЛУГИ</a>
            <a href="#">КОНТАКТЫ</a>
            <a href="#">КОРЗИНА</a>
          </div>
        </div>
        <div class="breadcrumb">
          <p>ГЛАВНАЯ</p>
        </div>
        <div class="cart">
          <img src="../img/ico-sample.svg" onclick="cartClick()" class="svg cart-btn">
          <div id="dropdown-cart" class="cart-content">
            <h4>Ваша корзина пуста</h4>
            <table>
              <tr>
                <td>1.</td>
                <td>Ширма декоративная</td>
                <td>1 штука</td>
                <td>26.000р.</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Ящик для пива из фанеры</td>
                <td>20 штук</td>
                <td>9.000р.</td>
              </tr>
            </table>
            <h4>Оформить заказ</h4>
          </div>
        </div>
        <div class="phone">
          <p class="phone-time">с 11:00 до 17:00</p>
          <p class="phone-number"><a href="tel:+79269269699">8(926)9269699</a></p>
        </div>
      </div> <!-- /.nav-top -->
      <div class="header">
        <div class="logo-box">
          <div class="logo">onebadger</div>
          <div class="logo-text">мастерская декора из дерева</div>
        </div>
        <div class="nav-main">
          <ul>
            <li>главная</li>
            <li>магазин</li>
            <li>мастерская</li>
            <li>услуги</li>
            <li>контакты</li>
          </ul>
        </div>
      </div> <!-- /.header -->
      <div class="thanks">
        <h1>Спасибо, мы перезвоним вам.</h1>
        <p>на главную</p>
      </div>
    </div>
    <footer>
      <hr>
      <div class="social-icons"></div>
      <div class="nav-footer"></div>
      <div class="footer-contacts">
        <p><a>8(926)926-9699</a></p>
        <p><a>seven@badger.one</a></p>
        <p>iMessage Telegram WhatsApp</p>
      </div>
      <div class="copyright">badger.one 2017 c копирование и публикация со сылкой на badger.one</div>
      <div class="developer">дизайн и разработка onebadger</div>
    </footer>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.js" integrity="sha256-tA8y0XqiwnpwmOIl3SGAcFl2RvxHjA8qp0+1uCGmRmg=" crossorigin="anonymous"></script>
    <script src="../js/galleryList.js"></script>
    <script src="../js/app.js"></script>
  </body>
</html>