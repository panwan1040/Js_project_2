let apiOrder = "http://localhost:5000/api/order";
let setUser = document.querySelector(".set-user"); // show ww,as/ak
let setComment = document.querySelector(".set-comment"); // ขอเผ็ดๆ
let setContact = document.querySelector(".set-contact"); // 09854022255
let setPrice = document.querySelector(".set-price"); // 09854022255
let setClick = document.querySelector(".set-click");
let clickNext = document.querySelector(".click-next");

getOurder();

async function getOurder() {
  let orderObj = await axios.get(apiOrder);
  /////////////////////
  let i = 0;
  //setUser.innerHTML = orderObj.data[i].user;
  function nextObj() {
    if (orderObj.data.length <= i) i = 0;
    setUser.innerHTML = orderObj.data[i].user;
    setClick.innerHTML = i + 1;
    show_menu(i); // table
    setPrice.innerHTML = orderObj.data[i].price;
    setComment.innerHTML = orderObj.data[i].comment;
    setContact.innerHTML = orderObj.data[i].contact;
    i++;
  }

  function show_menu(i) {
    let str = orderObj.data[i].orders;
    str = str.split("[").join("").split("]").join("");
    str = str.split(",");
    showTable(str);
  }

  function unique(array) {
    return array.filter(function (el, index, arr) {
      return index == arr.indexOf(el);
    });
  }

  function showTable(arr) {
    document.getElementById("showTable").innerHTML = "";
    let count = {};
    arr.forEach(function (item) {
      item = item.split('"').join("");
      count[item] = (count[item] || 0) + 1;
    });
    let unqStr = unique(arr);
    var body = document.getElementById("showTable");
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    unqStr.forEach((item, index) => {
      item = item.split('"').join("");
      var row = document.createElement("tr");
      var cell = document.createElement("td");
      var cell2 = document.createElement("td");
      var cellText = document.createTextNode(item);
      var cellText2 = document.createTextNode(count[item]);
      cell.appendChild(cellText);
      cell2.appendChild(cellText2);
      row.appendChild(cell);
      row.appendChild(cell2);
      tblBody.appendChild(row);
    });
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "0");
  }

  clickNext.addEventListener("click", nextObj);
  /////////////////////
  //set user
}
