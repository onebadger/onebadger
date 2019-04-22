<?php 

if(isset($_POST['user_email2'])) {
  $message = 'Name: ' .$_POST['user_name2'] . "\n"
    .'Email: ' .$_POST['user_email2'] . "\n"
    .'Phone: ' .$_POST['user_phone2'];
  mail('on.badger@gmail.com', 'Main offer form', $message);
} else {
  header('Refresh: 3; URL=index.html');
  exit(0);
}
?>

<!DOCTYPE html>
<html>

<head>
  <meta http-equiv="refresh" content="10;url=../index.html" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="robots" content="noindex,nofollow">
  <title>Badger wood workshop</title>
  <link href="https://fonts.googleapis.com/css?family=Arimo:400,700|Arsenal:400,700|Fira+Sans:400,500,700|Istok+Web:400,700|Open+Sans+Condensed:300,700|Roboto+Condensed:400,700|Roboto:400,500,700|Ubuntu+Condensed|Ubuntu:400,500,700&amp;subset=cyrillic" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="../css/normalize.css">
  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <link rel="stylesheet" type="text/css" href="../css/forms.css">
  <link rel="stylesheet" type="text/css" href="../css/responsive.css">

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript" src="../js/jquery.maskedinput.min.js"></script>
</head>

<body>
  <div class="nav-wrapper js-index">
    <div class="nav-top">
      <div class="dropdown">
        <div id="hamburger" class="svg dropdown-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="dropdown-menu" class="dropdown-content dropdown-item">
          <a href="../index.html" class="link selected">ГЛАВНАЯ</a>
          <a href="../shop.html" class="link">МАГАЗИН</a>
          <a href="../workshop.html" class="link">МАСТЕРСКАЯ</a>
          <a href="../services.html" class="link">УСЛУГИ</a>
          <a href="../contacts.html" class="link">КОНТАКТЫ</a>
          <!--<a href="#">FAQ - ВОПРОСЫ</a>-->
          <!--<a href="#">КОРЗИНА</a>-->
        </div>
        <div id="navigation">
          <div class="nav-logo">
            <img src="../img/badger.svg" class="svg">
          </div>
          <ul>
            <li>
              <p class="selected"><a href="../index.html">ГЛАВНАЯ</a></p>
            </li>
            <li>
              <p><a href="../shop.html">МАГАЗИН</a></p>
            </li>
            <li>
              <p><a href="../workshop.html">МАСТЕРСКАЯ</a></p>
            </li>
            <li>
              <p><a href="../services.html">УСЛУГИ</a></p>
            </li>
            <li>
              <p><a href="../contacts.html">КОНТАКТЫ</a></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="breadcrumb">
        <p class="text-500">ГЛАВНАЯ</p>
      </div>
      <div class="cart">
        <img src="../img/ico-cart.svg" id="cart-icon" class="svg cart-btn">
        <div id="dropdown-cart" class="cart-content dropdown-item">
          <p class="text text-500">Для заказа изделия воспользуйтесь, пожалуйста, формой обратной связи в разделе <a href="contacts.html">КОНТАКТЫ</a></p>
          <br>
          <!--
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
    -->
          <p class="text">Корзина покупок в процессе доработки. Приносим извинения за возможные неудобства.</p>
          <div class="cart-emoji"><img src="../img/emoji/1f3ff.png"></div>
        </div>
      </div>
      <div class="phone">
        <p class="phone-time">с 11:00 до 17:00</p>
        <p class="phone-number"><a href="tel:+79269269699">8(926)9269699</a></p>
      </div>
    </div> <!-- /.nav-top -->
  </div> <!-- /.nav-wrapper -->
  <div class="wrapper">

    <div class="header">
      <div class="logo-box">
        <div class="logo"><a href="index.html">onebadger</a></div>
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
      <h1>Спасибо, мы перезвоним</h1>
      <p><a href="../index.html">вернуться на главную</a></p>
    </div>
  </div>
  <hr>
  <footer class="margin-x">
    <div class="social-icons">
      <a href="https://www.instagram.com/onebadger/" target="_blank"><img class="ico-instagram" src="../img/ico-instagram.svg"></a>
    </div>
    <div class="nav-footer"></div>
    <div class="footer-contacts">
      <p class="footer-phone"><a href="tel:+79269269699">8(926)926-9699</a></p>
      <p class="footer-messengers">- Telegram WhatsApp iMessage -</p>
      <p class="text-enlarged footer-mail"><a href="mailto:on.badger@gmail.com">on.badger@gmail.com</a></p>
      <p class="text-enlarged footer-address"><a href="#">Электрозаводская, 21</a></p>
    </div>
    <div class="copyright">&copy; 2019 копирование и публикация со сылкой на badger.one</div>
    <div class="developer">дизайн и разработка <a href="mailto:yakov.barsukov@gmail.com">onebadger</a></div>
  </footer>
  <script src="../js/app.js"></script>
</body>

</html>
