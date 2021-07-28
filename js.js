'use strict'




// 送信チェック

function ButtonClick() {
  var Name;
  var TelNum;
  var Mail;
  var Contents;
  Name=document.mail_form.yourname;
  TelNum=document.mail_form.telnum;
  Mail=document.mail_form.mailaddress;
  Contents=document.mail_form.contents;
  
  if(Name.value==""){
  alert("名前を入力してください");
  Name.focus();
  return false;
  }
  if(TelNum.value=="") {
  alert("電話番号を入力してください");
  TelNum.focus();
  return false;
  }
  if(Mail.value=="") {
  alert("メールアドレスを入力してください");
  Mail.focus();
  return false;
  }
  if(Contents.value=="") {
  alert("電話番号を入力してください");
  Contents.focus();
  return false;
  }
  document.Name.value = navigator.userAgent;
  alert ('送信しますか?');
  return true;
  }

// }function checkcont(){
//   if (){
//       //条件に一致する場合(メールアドレスが空の場合)
//       alert ("お問い合わせ内容を入力してください");    //エラーメッセージを出力
//       return false;    //送信ボタン本来の動作をキャンセルします
//   }else{
//       //条件に一致しない場合(メールアドレスが入力されている場合)
//       return true;    //送信ボタン本来の動作を実行します
//   }
// }