$(function() {

  new Glide('#red-bc').mount()
  new Glide('#silver-bc').mount()
  new Glide('#villa-bc').mount()
  new Glide('#cherry-bc').mount()

  // $('.c-burger').click(function(){
  //   $(this).toggleClass('is-active')
  //
  // })

	$('input[name="phone"]').mask("+7-(999)-999-9999"); 

  $('.c-form').submit(function (e) {
    e.preventDefault()


    var form = $(this);
    var url = form.attr('action');
    var modalSendSuccess = document.getElementById('send-success')


    $.ajax({
      type: "POST",
      url: url,
      data: form.serialize(), // serializes the form's elements.
      success: function(data)
      {
        console.log('Success send')

        modalSendSuccess.style.display = 'block'
        modalSendSuccess.getElementsByClassName('c-modal__close')[0].onclick = function(e){
          modalSendSuccess.style.display = 'none'
        }

        window.onclick = function (event) {
          if (event.target == modalSendSuccess){
            modalSendSuccess.style.display = 'none'
          }
        }
      }
    });
  })





});
