$(document).ready(function() {

  //PageScrollsToId
  $("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, .mouse_scroll").mPageScroll2id({
    highlightSelector: "nav a"
  });

  //init MixItUp
  $("#projects").mixItUp();

  //FancyBox gallery
  $(".fancybox").fancybox({
    // Default - with fix from scroll to top
    helpers: {
      overlay: {
        locked: false
      }
    }
  });

  // jQuery validate
  $('.contact-form').validate({
    rules: {
      name: { required: true },
      email: { required: true, email: true},
      message: {required: true}
    },

    messages: {
      name: "Введите ваше имя",
      email: {
        required: "Пожалуйста, введите адрес",
        email: "Вы указали адрес неправильно"
      },
      message: "Введите ваше сообщение"
    },

    submitHandler: function(form) {
      ajaxFormSubmit();
    }

  })

  // Функция AJAX запрса на сервер
  function ajaxFormSubmit(){
    var string = $(".contact-form").serialize(); // Соханяем данные введенные в форму в строку.

    // Формируем ajax запрос
    $.ajax({
      type: "POST", // Тип запроса - POST
      url: "php/mail.php", // Куда отправляем запрос
      data: string, // Какие даные отправляем, в данном случае отправляем переменную string

      // Функция если все прошло успешно
      success: function(html){
        $(".contact-form").slideUp(800);
        $('#answer').html(html);
      }
    });

    // Чтобы по Submit больше ничего не выполнялось - делаем возврат false чтобы прервать цепчку срабатывания остальных функций
    return false;
  }

});