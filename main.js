const count = 10;
let array = new Array(count);

fillMatrix();
console.log(array);
showMatrix();

function fillMatrix() {
    for (let i = 0; i < count; ++i) {
        array[i] = new Array(count);
        for (let j = 0; j < count; ++j) {
            array[i][j] = i * 10 + j + 1;
        }
    }
}
function showMatrix() {
    for (let i = 0; i < count; ++i) {
        for (let j = 0; j < count; ++j) {
            // Вывести с выравниванием
            document.write(array[i][j].toString().padStart(4,"\u00A0"));
            // Если выравнивание не интересует, то:
            // document.write(array[i][j] +" ");
        }
        document.write("<br />");
    }
}