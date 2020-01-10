$(function(){
  function buildHTML(message){
    if(message.image){
      var html =
        `<div class="chat-topic" data-message-id=${message.id}>
            <div class="chat-topic__box">
                <div class="chat-topic__box__messenger">
                  ${message.user_name}
                </div>
                <div class="chat-topic__box__year_time">
                  ${message.created_at}
                </div>
            </div>
            <div class="chat-topic__message">
              <p class="lower-message__content">
                ${message.content}
              </p>
              <img src=${message.image} >
            </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="chat-topic" data-message-id=${message.id}>
           <div class="chat-topic__box">
             <div class="chat-topic__box__messenger">
              ${message.user_name}
             </div>
             <div class="chat-topic__box__year_time">
              ${message.created_at}
             </div>
           </div>
           <div class="chat-topic__message">
             <p class="lower-message__content">
              ${message.content}
             </p>
           </div>
        </div>`
        return html;
    };
  }

$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url:url,
      type:"POST",
      data: formData,
      dataType:'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-mainbox').append(html); 
      $('form')[0].reset();
      $('.chat-mainbox').animate({ scrollTop: $('.chat-mainbox')[0].scrollHeight},'fast');
      $('.send-btn').prop('disabled',false);
    })
    .fail(function(){
      alert("メッセージ送信に失敗しました");
    });
  })
});