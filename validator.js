
  //insert your code here

$(function() {

  $("form[name='sign_in']").validate({
    rules: {
      emailInput: {
        required: true,
        email: true,
        minlength: 5
      },
      passwordInput: {
        required: true,
        minlength: 5
      }
    }
  });
});
