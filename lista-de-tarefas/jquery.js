$("#btn").click(function(e) {
  const tarefa = $("#tarefa").val()
  if(tarefa == ''){
    alert('Digite uma tarefa válida!!!')
  } else {
    $('#lista').append(
      `
      <li>
        <i class="fas fa-check-circle check"></i
        ><span>${tarefa}</span
        ><i class="fa-solid fa-trash-can close"></i>
      </li>
      `
    )
    $('#tarefa').val('')
    $('#tarefa').focus()
  }

  // método para remover tarefa da lista
  $('.close').each(function(){
    $(this).click(function(){
      $(this).parent().remove()
    })
  })

  // método para marcar como completo
  $('#lista li').click(function(){
    $(this).find('.check').css('color',"#349323")
    $(this).find('span').css("textDecoration", "line-through")
  })

})