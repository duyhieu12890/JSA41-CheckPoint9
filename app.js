let menu = ['Rau xao', 'Thit luoc', 'ga ran'];

const option = document.getElementById('btn-lc');
option.addEventListener("click", function() {
    var lc = document.getElementById('value-lc').value;
    if (lc == 'C' || lc == 'c') {
        create();
    } else if (lc == 'R' || lc == 'r') {
        read();
    } else if (lc == 'U' || lc == 'u') {
        update();
    } else if (lc == 'D' || lc == 'd') {
        Delete();
    }
})

function create() {
    let newFood = prompt('Moi Nhap mon an moi');
    menu.push(newFood);
    localStorage.setItem("menu", JSON.stringify('menu'));
    alert('Ok');
};

function read() {
    let storedMenu = JSON.parse(localStorage.getItem("menu"));
    alert("Menu :" + storedMenu.join(", "));
};

function update() {};

// function Delete() {
//     let needDel = prompt('Moi nhap mon an muon xoa');
//     let index = 0;
//     while () {}
// };