'use strict'

function check(){
  if (mail_form.contact_name.value == ""){
      //条件に一致する場合(メールアドレスが空の場合)
      alert ("お名前を入力してください");    //エラーメッセージを出力
      return false;    //送信ボタン本来の動作をキャンセルします
  }else{
      //条件に一致しない場合(メールアドレスが入力されている場合)
      return true;    //送信ボタン本来の動作を実行します
  }
}
function check(){
  if (contactTelNum.value == ""){
      //条件に一致する場合(メールアドレスが空の場合)
      alert ("電話番号を入力してください");    //エラーメッセージを出力
      return false;    //送信ボタン本来の動作をキャンセルします
  }else{
      //条件に一致しない場合(メールアドレスが入力されている場合)
      return true;    //送信ボタン本来の動作を実行します
  }
}function check(){
  if (contactMail.value == ""){
      //条件に一致する場合(メールアドレスが空の場合)
      alert ("メールアドレスを入力してください");    //エラーメッセージを出力
      return false;    //送信ボタン本来の動作をキャンセルします
  }else{
      //条件に一致しない場合(メールアドレスが入力されている場合)
      return true;    //送信ボタン本来の動作を実行します
  }
}function check(){
  if (contactContent.value == ""){
      //条件に一致する場合(メールアドレスが空の場合)
      alert ("お問い合わせ内容を入力してください");    //エラーメッセージを出力
      return false;    //送信ボタン本来の動作をキャンセルします
  }else{
      //条件に一致しない場合(メールアドレスが入力されている場合)
      return true;    //送信ボタン本来の動作を実行します
  }
}