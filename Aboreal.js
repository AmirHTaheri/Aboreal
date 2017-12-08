/**
 * We need to add a class of `responsive-nav--open` to
 * `#js-responsive-nav` ONLY when the nav is clicked AND
 * when we’re on a viewport of less than `responsiveNavBreakpoint`.
 * It needs removing when someone re-clicks the nav icon, or
 * when the viewport no longer matches `responsiveNavBreakpoint`.
 */


function sendme() {
  var filled = true;
  $('.form-filled').each(function() {
    if ($(this).val() === '') {
      filled = false;
      alert("You should fill the fields!");
      return false;
    }
  });
  if (filled) {
    alert("Your information was sent!");
    location.reload();
  }
  return;
}
