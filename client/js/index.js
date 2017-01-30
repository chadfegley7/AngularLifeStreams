
$( document ).ready(function() {
     // variables
  elementWidth = $('ul').width(),
  containerWidth = $('nav').width(),
  difference = elementWidth-containerWidth,
  finalWidth = difference * 1.5,
  element = $('ul');
  
  // active on click
  $('li').on('click', function(){
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
    var tabs =  $(".tabs li a");
  
  tabs.click(function() {
    var content = this.hash.replace('/','');
    tabs.removeClass("active");
    $(this).addClass("active");
    $("#content").find('div').hide();
    $(content).fadeIn(200);
  });


  $( ".openb" ).click(function() {
    $(".modal1").fadeIn(200);
  });
  $(".modal1").click(function(event) {
    event.stopPropagation();
  });
  

  $( ".modal2" ).click(function() {
    $(this).fadeOut(200);
  });
  $( ".open2" ).click(function() {
    $(".modal2").fadeIn(200);
  });
  $(".reg-modal").click(function(event) {
    event.stopPropagation();
  });



    $( ".close-2" ).click(function() {
    $(".modal3").fadeOut(200);
  });

  $( ".open3" ).click(function() {
    $(".modal3").fadeIn(200);
  });
  $(".modal3").click(function(event) {
    event.stopPropagation();
  });
  
  
  // Input label

  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });
  
  $(".watch-button").click(function() {
    $(".searchBar").fadeOut(200);
    $(".summary").fadeOut(200);
    $(".featured-video").animate({width:"97%"}, 800, function() {
    });
  });
  
  // Animations

// -
$('.search-button').click(function(){
  $(this).parent().toggleClass('open');
});

var s = $('.searchBar input'),
    f  = $('.searchBar form'),
    a = $('.after'),
    m = $('.searchBar h4');

s.focus(function(){
  if( f.hasClass('open') ) return;
  f.addClass('in');
  setTimeout(function(){
    f.addClass('open');
    f.removeClass('in');
  }, 1300);
});

a.on('click', function(e){
  e.preventDefault();
  if( !f.hasClass('open') ) return;
   s.val('');
  f.addClass('close');
  f.removeClass('open');
  setTimeout(function(){
    f.removeClass('close');
  }, 1300);
})

f.submit(function(e){
  e.preventDefault();
  m.html('Thanks, high five!').addClass('show');
  f.addClass('explode');
  setTimeout(function(){
    s.val('');
    f.removeClass('explode');
    m.removeClass('show');
  }, 3000);
})


});


