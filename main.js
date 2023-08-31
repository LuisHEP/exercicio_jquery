$(document).ready(function() {
    $("#adicionarTarefa").click(function() {
    var taskName = $("#novaTarefa").val();
    if (taskName) {
        $("#listaTarefas").append("<li>" + taskName + " <button class='completeTask'>Concluir</button></li>");
        $("#novaTarefa").val("");
    }
    });

    $("#listaTarefas").on("click", ".completeTask", function() {
    $(this).parent().toggleClass("completed");
    });
    });