// contacts
var username = document.forms['form']['username'];
var email = document.forms['form']['email'];
var message = document.forms['form']['message'];

var username_error = document.getElementById('username_error');
var textu = document.getElementById('textu');
var email_error = document.getElementById('email_error');
var texte = document.getElementById('texte');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
var message_error = document.getElementById('message_error');
var textm = document.getElementById('textm');

username.addEventListener('textInput', username_succes);
email.addEventListener('textInput', email_succes);
message.addEventListener('textInput', message_succes);
// form.addEventListener('textInput', email_username_succes);

function validation() {
  if (username.value.length <= 4) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    textu.innerHTML = 'Wrong Username';
    textu.style.color = '#ff0000';
    return false;
  }

  if (email.value.length == '') {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    texte.innerHTML = 'Email Has Not Filled';
    texte.style.color = '#ff0000';
    return false;
  }

  if (message.value.length <= 10) {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    textm.innerHTML = 'Minimum 20 Letters';
    textm.style.color = '#ff0000';
    return false;
  }
}

function username_succes() {
  if (username.value.length >= 4) {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    textu.innerHTML = 'Username Success';
    textu.style.color = '#00ff00';
    return true;
  }
}
function email_succes() {
  if (email.value.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    texte.innerHTML = 'Email Success';
    texte.style.color = '#00ff00';
    return true;
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    texte.innerHTML = 'Please Enter Valid Email';
    texte.style.color = '#ff0000';
    return false;
  }
}
function message_succes() {
  if (message.value.length >= 10) {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    textm.innerHTML = 'Message Success';
    textm.style.color = '#00ff00';
    return true;
  }
}

// WA
$(document).on('click', '.send', function () {
  var input_blanter = document.getElementById('email');

  /* Whatsapp Settings */
  var walink = 'https://web.whatsapp.com/send',
    phone = '6285854708692',
    walink2 = 'Halo, saya :',
    text_yes = 'Terkirim.',
    text_no = 'Isi semua Formulir lalu klik Send.';

  /* Smartphone Support */
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    var walink = 'whatsapp://send';
  }

  if ('' != input_blanter.value) {
    /* Call Input Form */
    var input_nama = $('#username').val(),
      input_jumlah = $('#email').val(), 
      input_catatan = $('#message').val();

    /* Final Whatsapp URL */
    var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%20' + input_nama + '%0A%0A' +
      '*Email* : ' + input_jumlah + '%0A' + 
      '*Pesan* : ' + input_catatan + '%0A';

    /* Whatsapp Window Open */
    window.open(blanter_whatsapp, '_blank');
  }
});




// const scriptURL = 'https://script.google.com/macros/s/AKfycbw3Olzt8afxFoSats6ZyhfyjgAMEbaVbNsvYXwr2xKbx0hM8yIUVXXRJfhesSi8lLQ/exec';
// const form = document.forms['form'];
// const btnKirim = document.querySelector('.btn-kirim');
// const btnLoading = document.querySelector('.btn-loading');
// const myAlert = document.querySelector('.my-alert');
// var textu = document.getElementById('textu');
// var texte = document.getElementById('texte');
// var textm = document.getElementById('textm');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // ketika tombol submit diklik
//   // tampilkan tombol loading, hilangkan tombol kirim
//   btnLoading.classList.toggle('d-none');
//   btnKirim.classList.toggle('d-none');
//   fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//     .then((response) => {
//       // tampilkan tombol kirim, hilangkan tombol loading
//       btnLoading.classList.toggle('d-none');
//       btnKirim.classList.toggle('d-none');
//       // tampilkan alert
//       myAlert.classList.toggle('d-none');
//       // kembali normal
//       // username
//       textu.style.color = '#111';
//       textu.style.fontSize = '16px';
//       textu.innerHTML = 'Username';
//       // email
//       texte.style.color = '#111';
//       texte.style.fontSize = '16px';
//       texte.innerHTML = 'Email';
//       // message
//       textm.style.color = '#111';
//       textm.style.fontSize = '16px';
//       textm.innerHTML = 'Message';
//       // reset formnya
//       form.reset();
//       console.log('Success!', response);
//     })
//     .catch((error) => console.error('Error!', error.message));
// });