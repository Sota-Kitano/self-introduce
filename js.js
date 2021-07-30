'use strict'




// 送信チェック

function ButtonClick() {
  var Name;
  var TelNum;
  var Mail;
  var Contents;
  Name=document.mail_form.your_name;
  TelNum=document.mail_form.tel_num;
  Mail=document.mail_form.mail_address;
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
  alert ('送信しますか?');
  return true;
  }
