$( document ).ready(function() {
    console.log( "ready!" );
  
    
    $('#emailSubmit').click(function() {
      
      var email = $('#emailForm').val();
      
      if (email == '') {
      alert("Please Fill Required Fields");  // Checking for blank fields.
      } else { 
        $( "#confirmMessage" ).append( "<strong>Thanks for signing up!</strong> </br> Unfortunately, Greta+Olivia is a fake website and does not have a mailing list.</br> However, <a href='https://www.glassbreakers.co/'>Glassbreakers</a> is a great (and real!) resource for empowering women </br> Thanks for stopping by & don't forget to check out Glassbreakers" );
      }
    })
});