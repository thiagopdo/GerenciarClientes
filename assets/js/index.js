$("#add_user").submit(function (event) {
  alert("Data Inserted Successfully!");
});

$("#update_user").submit(function (event) {
  event.preventDefault();

  let unindexed_array = $(this).serializeArray();
  let data = {};

  $.map(unindexed_array, (n, i) => {
    data[n.name] = n.value;
  });

  let request = {
    url: `http://localhost:3333/api/users/${data.id}`,
    method: "PUT",
    data,
  };
  $.ajax(request).done(function (response) {
    alert("Dados atualizados com sucesso!");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");

    let request = {
      url: `http://localhost:3333/api/users/${id}`,
      method: "DELETE",
    };
    if (confirm("Deseja excluir este cliente?")) {
      $.ajax(request).done((response) => {
        alert("Cliente excluído com sucesso!");
        location.reload();
      });
    }
  });
}
