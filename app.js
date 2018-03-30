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
  alert("Pressed Enter");
  $('#list').append(text);
}
})
