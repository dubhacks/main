// Gets a reference to the form element, assuming
// it contains the ID attribute "signup-form".

window.onload = function() {
  var forms = ["form_web", "form_mobile"];

  for (var formNumber in forms) {
    var form = document.getElementById(forms[formNumber]);

    // Adds a listener for the "submit" event.
    form.addEventListener("submit", function(event) {
      console.log("intercepting form submit");
      // Prevents the browser from submitting the form
      // and thus unloading the current page.
      event.preventDefault();

      // Creates a timeout to call submitForm after one second.
      setTimeout(submitForm, 1000);

      // Monitors whether or not the form has been submitted.
      // This prevents the form from being submitted twice in cases
      // where the event callback function fires normally.
      var formSubmitted = false;

      function submitForm() {
        if (!formSubmitted) {
          formSubmitted = true;
          form.submit();
        }
      }
      // Sends the event to Google Analytics and
      // resubmits the form once the hit is done.
      gtag("event", "form", {
        event_label: "splash-signup",
        event_category: "submit",
        event_callback: submitForm
      });
    });
  }
};
