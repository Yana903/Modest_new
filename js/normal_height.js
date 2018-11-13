window.addEventListener("resize", myFunction);
window.onload = myFunction();

function myFunction() {
    var max_col_height = 0; // максимальная высота, первоначально 0
    var columns = document.getElementsByClassName("person-data"); // получаем массив колонок (всех элементов класса column)
    console.log("columns=" + columns);
    console.log("max_col_height=" + max_col_height);
    for (var i = columns.length - 1; i >= 0; i--) { // прокручиваем каждую колонку в цикле
        console.log("max_col_height!=" + max_col_height);
        if (columns[i].offsetHeight > max_col_height) {
            max_col_height = columns[i].offsetHeight; // устанавливаем новое значение максимальной высоты
        }
    }
    console.log("max_col_height!!=" + max_col_height);
    console.log("columns.length=" + columns.length);
    for (var i = columns.length - 1; i >= 0; i--) {
        columns[i].style.height = max_col_height + 'px'; // устанавливаем высоту каждой колонки равной максимальной
        console.log(columns[i].style);
    }
}
