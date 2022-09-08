$(function() {
  $('button[type=submit]').on('click', function() {

    // Formに入力されたデータを取得
    var name = $('#name').val();
    var email = $('#email').val();
    var body = $('#inquiry-body').val();

    // 連想配列化
    var postData = {"name":name, "email":email, "body":body};

    // POSTで送信
    $.post(
      "../php/inquiry.php",
      postData,
    );

  });
});