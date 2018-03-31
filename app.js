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
  $(this).val("");
  let li = $("<li>" +text+ "<span> X</span></li>");
  li.addClass("liStyle");
  $('#list').append(li);
}
})

$("ul").on("click", "li",function () {
  console.log("clicked");
  $(this).toggleClass("cross");
})

$("ul").on("click", "span", function (e) {
  $(this).parent().remove();
  e.stopPropagation();
})
