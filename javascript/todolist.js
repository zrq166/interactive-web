$(document).ready(function () {
    load();
    $(".add-row").click(function () {
        var title = $("#title").val();
        var description = $("#description").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + title + "</td><td>" + description + "</td></tr>";
        $("table tbody").append(markup);
        var data = getData();
        data.push({
            title: title,
            description: description
        });
        saveData(data);
    });

    // Find and remove selected table rows
    $(".delete-row").click(function () {
        $("table tbody").find('input[name="record"]').each(function () {
            if ($(this).is(":checked")) {
                var data = getData();
                var index =$("table tbody tr").index($(this).parents("tr"));
                console.log(index);
                data.splice(index, 1);
                saveData(data);
                $(this).parents("tr").remove();
            }
        });


    });


    function getData() {
        var data = localStorage.getItem("todolist");

        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }


    function saveData(data) {

        localStorage.setItem("todolist", JSON.stringify(data));
    }

    function load() {
        var data = getData();
        $.each(data, function (i, n) {
                var title = n.title;
                var description = n.description;
                var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + title + "</td><td>" + description + "</td></tr>";
                $("table tbody").append(markup);
            }
        )
    }


});
