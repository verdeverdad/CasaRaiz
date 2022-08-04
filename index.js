$(function () {
    //console.log("el modal se esta mostrando");
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();

    $('.carousel').carousel({
        interval: 2000
    });
    $('#contacto').on('show.bs.modal', function () {
        console.log("el modal se esta mostrando");

        $('#contactobtn').removeClass('btn btn-success');
        $('#contactobtn').addClass('btn btn-dark');
        $('#contacto').prop('disabled', true);
    });

    $('#contacto').on('shown.bs.modal', function () {
        console.log("el modal se mostro");
    });
    $('#contacto').on('hide.bs.modal', function () {
        console.log("el modal se oclta");
    }); $('#contacto').on('hidden.bs.modal', function () {
        console.log("el modal se oculto");
        $('#contactobtn').prop('disabled', true);
        $('#contactobtn').removeClass('btn btn-danger');
        $('#contactobtn').addClass('btn btn-success');
    });
});


$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        // a card is already in view
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          // this card was showing - reset the grid
          $("div.cards")
            .removeClass("showing");
        } else {
          // this card isn't showing - get in with it
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        // no cards in view
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });




  const cards = document.querySelectorAll('.card');

function transition() {
  if (this.classList.contains('active')) {
    this.classList.remove('active')
  } else {
    this.classList.add('active');
  }
}

cards.forEach(card => card.addEventListener('click', transition));
 