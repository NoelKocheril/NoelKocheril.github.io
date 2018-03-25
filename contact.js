<script src="assets/js/jquery.min.js"></script>
<script type="text/javascript">var submitted=false;</script>
<script type="text/javascript">
$('#contact-form').on('submit', function(e) {
  $('#contact-form *').fadeOut(2000);
  $('#contact-form').prepend('Your submission has been processed...');
  var form = document.getElementById("contact-form");
	form.reset();
  });
</script>