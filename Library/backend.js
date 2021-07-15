document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submit').addEventListener('click', myfunction);
    document.getElementById('takebook').addEventListener('click', myBook);
    document.getElementById('returnbook').addEventListener('click', returnBook);
});
const returnBook = (m) => {
    m.preventDefault();
    let name = document.getElementById('yoursname').value;
    let book = document.getElementById('booksname').value;
    r = 'cust' + name;
    var g = localStorage.getItem(r);
    var d = JSON.parse(g);
    console.log(d);
    let v = d.BooksTaken;
    let f = false;
    for (i = 0; i < v.length; i++) {
        if (!(book == v[i])) {
            continue;
        }
        v.splice(i, 1);
        f = true;
        localStorage.setItem(r, JSON.stringify({ Name: d.Name, BooksTaken:v }));
        break;
    }
    document.getElementById('form3').reset();
}
const myBook = (ev) => {
    ev.preventDefault();
    let a = document.getElementById('yourname').value;
    let b = document.getElementById('bookname').value;
    c = 'cust' + a;
    var f = localStorage.getItem(c);
    let e = JSON.parse(f);
    if(e==null || e==undefined){
        alert('Enter your name strictly same, as the one you have given earlier');
    }
    let ar = e.BooksTaken;
    ar.push(b);
    localStorage.setItem(c, JSON.stringify({ Name: a, BooksTaken: ar }));
    document.getElementById('form2').reset();
}
const myfunction = (ev) => {
    ev.preventDefault();
    var x = document.getElementById('name').value;
    var y = document.getElementById('phonenumber').value;
    var z = document.getElementById('aadhaar').value;
    let f = validName(x);
    let g = validNumber(y);
    let h = validAadhaar(z);
    if (f && g && h) {
        //document.getElementById('form1').reset();
        localStorage.setItem(x, JSON.stringify({
            Name: x,
            ContactNumber: y,
            Aadhaar: z
        }));
        localStorage.setItem('cust'+ x, JSON.stringify({ Name: x, BooksTaken: ['start'] }));
    }
    // else {
    //     document.getElementById('form1').reset();
    // }
}
function validName(name) {
    var str = name;
    let ar = Array.from(str);
    ar.forEach(element => {
        if (!((element >= 'a' && element <= 'z') || (element >= 'A' && element <= 'Z'))) {
            alert('Name should contain alphabetical characters only!!!');
            return false;
        }
    });
    return true;
}
function validNumber(num) {
    if (num < 1000000000 || num > 9999999999) {
        alert('Invalid phone number!!!');
        return false;
    }
    return true;

}
function validAadhaar(num) {
    if (num < 100000000000 || num > 999999999999) {
        alert('Invalid aadhaar number.Please try again!!!');
        return false;
    }
    return true;
}