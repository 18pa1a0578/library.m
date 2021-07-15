
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getdetails').addEventListener('click', mymethod);
});
const mymethod = (ev) => {
    ev.preventDefault();
    let n = document.getElementById('name').value;
    console.log(n);
    let x = localStorage.getItem(n);
    console.log(x);
    let y = localStorage.getItem('cust' + n);
    console.log(y);
    let xa = JSON.parse(x);
    console.log(xa.Name);
    let ya = JSON.parse(y);
    console.log(ya);
    document.getElementById('gname').innerHTML ='  '+ xa.Name;
    document.getElementById('gpnumber').innerHTML ='  '+ xa.ContactNumber;
    document.getElementById('gaadhaar').innerHTML ='  '+ xa.Aadhaar;
    let bar = ya.BooksTaken;
    if(bar.length==1){
        document.getElementById('gbooks').innerHTML = 'NONE';
    }
    else{
    document.getElementById('gbooks').innerHTML = '  '+ bar.slice(1,);
    }
}