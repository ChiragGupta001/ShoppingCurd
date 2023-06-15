$(document).ready(function(){

  console.log("Welcome Chirag");

  $.ajax({
    type: "GET",
    url: "./data.json",
    data: "",
    success: successFunction,
    error: "error",
  });
});




function successFunction(data){
console.log(data);
localStorage.setItem("MyData", JSON.stringify(data));
createtable();
};

function createtable(){
    let localdata=JSON.parse(localStorage.getItem("MyData"));
    console.log(localdata);             ``

    // var thead = "<thead><tr><th>Name</th><th>Image</th><th>Price</th><th>Actions</th></tr></thead>";
    //  $("#mytable").append(thead);
    // var tbody ='<tbody id="tableBody"></tbody>';
    // $("#mytable").append(tbody);
    var tr="";
    for(let i=0;i<localdata.length;i++){
        tr =  tr + `<tr><td>${localdata[i].name}</td><td><img src=${localdata[i].image} height=200px width=200px</td><td>${localdata[i].price}</td><td></td></tr>`
       // $("#tableBody").append(tr);
    }
    document.getElementById("tableBody").innerHTML = tr;
    // table = new DataTable('#mytable');
    $("#mytable").DataTable();
}