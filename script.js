/*let input = document.getElementById("input");
console.log(input);

input.addEventListener("keypress", logaj);


function logaj(e) {
    // console.log(e.target.value.toUpperCase())
    console.log(e);
}*/


let filterInput = document.getElementById("filter-input");

filterInput.addEventListener("keyup", filter)

function filter() {
    let filterValue = document.getElementById("filter-input").value.toUpperCase()
    // console.log(e.target.value);
    console.log(filterValue);

    let Ulnames = document.querySelectorAll("#names");
    // console.log(Ulnames);

    let liNames = document.getElementsByClassName("collection-item");
    // let liNames = document.getElementsByTagName("a");


    //console.log(liNames);


    for (let i = 0; i < liNames.length; i++) {
        // console.log(liNames[i].textContent.toUpperCase());
        let a = (liNames[i].getElementsByTagName("a")[0]);
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            console.log(liNames[i]);

            liNames[i].style.display = "";
            //liNames[i].style.backgroundColor = "red"
            console.log(a.innerHTML.toUpperCase());
        }
        else {
            liNames[i].style.display = "none"
            console.log("else je");
        }
    }



};