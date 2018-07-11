/*global $*/

$(document).ready(function(){
    $("#add-new-todo-button") .click(function(){
        var todoBlock = $(this).closest ("#to-do-block")
        var description = todoBlock.find ("#new-todo")
        var pomodoroEstimate = todoBlock.find ("#new-number")
        $("ul").append("<li> <input type = 'checkbox'/>"+ "<a href = 'show.html'> "+description.val() + "</a>" + "<span class = 'pomodoro-time'>" + pomodoroEstimate.val() + " pomodoros </span> </li>")
        description.val("")
        pomodoroEstimate.val("")
    })
})

$(document).ready(function(){
    $("ul").on("click","input [type = checkbox]", function(){
        $(this).closest ("li").toggleClass ("completed-todo")
    })
})