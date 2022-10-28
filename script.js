let add1 = document.querySelector('.add1')
let add2 = document.querySelector('.add2')
let add3 = document.querySelector('.add3')
let show1 = document.querySelector('.show1')
let show2 = document.querySelector('.show2')
let show3 = document.querySelector('.show3')
axios.get("http://localhost:7777/cars")
    .then(res => {
        for(let item of res.data){
            item.year = 2022 - item.year
            if(item.year <= 15){
                less15.push(item)
            } else if(item.year <= 25){
                less25.push(item)
            } else {
                other.push(item)
            }
        }
        let arr1 = [less15[0], less15[1], less15[2], less15[3]]
        let arr2 = [less25[0], less25[1], less25[2], less25[3]]
        let arr3 = [other[0], other[1], other[2], other[3]]
        reload(arr1, add1)
        reload2(arr2, add2)
        reload3(arr3, add3)
    });
let less15 = []
let less25 = []
let other = []
function create(item , add) {
    let box = document.createElement('div')
    let name = document.createElement('p')
    let company = document.createElement('p')
    let year = document.createElement('p')
    let btn_more = document.createElement('button')
    box.classList.add("box")
    name.classList.add("name")
    company.classList.add("company")
    year.classList.add("year")
    btn_more.classList.add("btn_more")
    name.innerHTML = item.model
    company.innerHTML = item.make
    year.innerHTML = 2022 - item.year
    btn_more.innerHTML = "Подробнее"
    box.append(name, company, year, btn_more)
    add.append(box)
}
function reload(arr , add) {
    for(let item of arr){
        create(item, add)
    }
}
function reload2(arr , add) {
    for(let item of arr){
        create(item, add)
    }
}
function reload3(arr , add) {
    for(let item of arr){
        create(item, add)
    }
}
show1.onclick = () => {
    add1.innerHTML = ""
    reload(less15, add1)
    show1.innerHTML = "Свернуть"
}
show2.onclick = () => {
    add2.innerHTML = ""
    reload2(less25, add2)
    show2.innerHTML = "Свернуть"
}
show3.onclick = () => {
    add3.innerHTML = ""
    reload3(other, add3)
    show2.innerHTML = "Свернуть"
}
show1.ondblclick = () => {
    add1.innerHTML = ""
    reload([less15[0], less15[1], less15[2], less15[3]], add1)
    show1.innerHTML = "Показать все автомобили"
}
show2.ondblclick = () => {
    add2.innerHTML = ""
    reload2([less25[0], less25[1], less25[2], less25[3]], add2)
    show2.innerHTML = "Показать все автомобили"
}
show3.ondblclick = () => {
    add3.innerHTML = ""
    reload3([other[0], other[1], other[2], other[3]], add3)
    show3.innerHTML = "Показать все автомобили"
}