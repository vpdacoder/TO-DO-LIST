console.log("Working");

// let newTodo = $("#todo").val();




$('#sub').on("click", function (e) {
  e.preventDefault();
  console.log("Subitmitted");
}
)


$("#todo").on("keypress", function (e) {
  if (e.which === 13) {
  let text = $(this).val();
  let li = $("<li></li>").text(text);
  li.addClass("liStyle");
  $('#list').append(li);
}
})

$(".liStyle").on("click", function () {
  console.log("clicked");
  $(this).toggleClass("cross");
})
