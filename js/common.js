$(function() {

  $( ".chat-sidebar__message-delete" ).click(function() {
    $( this ).closest(".chat-sidebar__message").hide();
  });

  $(".chat-sidebar__message").click(function() {
    $(".chat-sidebar__message").removeClass("active");
    $( this ).addClass("active");
  });

  $(".enterText-input").keyup(function() {
    var wtf = $('.chat-section__messages-container');
    var height = wtf[0].scrollHeight;
    wtf.scrollTop(height);
  });

  var messageLast = $('.chat-section__messages');
  var height = messageLast[0].scrollHeight;
  messageLast.scrollTop(height);


  $(".chat-panel__sidebar").click(function() {
    $(".chat-mobile-messages").removeClass("open");
    $( this ).toggleClass("active");
    $(".chat-sidebar").toggleClass("open");
  });

  $(".chat-panel__mobile-messages").click(function() {
    $(".chat-sidebar").removeClass("open");
    $( this ).toggleClass("active");
    $(".chat-mobile-messages").toggleClass("open");
  });

  var data = [
      { id: 0, text: '<div class="modalAddGoods-option"><img src="img/1.jpg" alt="good-img"><p>Ipad pro 2017</p><span>$1</span></div>' },
      { id: 1, text: '<div class="modalAddGoods-option"><img src="img/2.jpg" alt="good-img"><p>Imac pro 2011</p><span>$1200</span></div>' },
      { id: 2, text: '<div class="modalAddGoods-option"><img src="img/3.jpg" alt="good-img"><p>Sega mega drive 2</p><span>$1200</span></div>' },
      { id: 3, text: '<div class="modalAddGoods-option"><img src="img/1.jpg" alt="good-img"><p>The lord fo the rings. Second edition</p><span>$12000</span></div>' },
      { id: 4, text: '<div class="modalAddGoods-option"><img src="img/1.jpg" alt="good-img"><p>Ipad pro 2asdasds017</p><span>$1</span></div>' },
      { id: 5, text: '<div class="modalAddGoods-option"><img src="img/2.jpg" alt="good-img"><p>Imac pro 2011asdasdasd</p><span>$1200</span></div>' },
      { id: 6, text: '<div class="modalAddGoods-option"><img src="img/3.jpg" alt="good-img"><p>Sega mega drivsasasdsde 2</p><span>$1200</span></div>' },
  ];

  $("select").select2({
    data: data,
    templateResult: function (d) { return $(d.text); },
    templateSelection: function (d) { return $(d.text); },
  });


  $('textarea').each(function () {
    this.setAttribute('style', 'height:' + (this.scrollHeight) + 'px;overflow-y:hidden;');
  }).on('input', function () {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });

});
