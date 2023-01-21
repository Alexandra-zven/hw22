class Product {
    id;
    title;
    manufacture;
    price;

    constructor(id, title, manufacture, price) {
        this.id = id;
        this.title = title;
        this.manufacture = manufacture;
        this.price = price;
    }
}

class Milk extends Product {
    fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.fat = fat;
    }
}

class Chocolate extends Product {
    kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.kind = kind;
    }
}

class Wine extends Product {
    alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.alcohol = alcohol;
    }
}

class Store {
    products = [];

    add(product) {
        this.products.push(product);
    };

    getAll() {
        return this.products;
    };

    getByType(type) {
        return this.products.filter(value => value.constructor.name === type)
    };
}

const milk1 = new Milk(123, 'Milk1', 'Man1', 10, 4);
const chocolate1 = new Chocolate(124, 'Choc1', 'Man2', 12, 'dark');
const wine1 = new Wine(125, 'Wine1', 'Man3', 35, 15);
const wine2 = new Wine(126, 'Wine2', 'Man3', 40, 15);

const store = new Store();
store.add(milk1);
store.add(chocolate1);
store.add(wine1);
store.add(wine2);

let wine_btn = document.getElementById('Wine');
let milk_btn = document.getElementById('Milk');
let chocolate_btn = document.getElementById('Chocolate');
let all_products_btn = document.getElementById('all_products');
let content = document.getElementById('content');

const show_all = function show_all(){
    let temp = store.getAll();
    content.innerHTML = `${temp.map(e => {return 'Name:' + e.title})}`;
}
const click = function clicker(e) {
    let temp = store.getByType(e.target.id);
    console.log(temp);
    content.innerHTML = `${temp.map(e => {return ' Name: ' 
        + e.title + 
        ' Price: ' + e.price + ' '})}`;
    let checking_fat = temp.map(e => {return e.fat});
    let checking_alcohol = temp.map(e => {return e.alcohol});
    let checking_kind = temp.map(e => {return e.kind});
    if(checking_fat.some(checking_all)){
        content.innerHTML += `${temp.map(e => {return 'Fat: ' + e.fat})}`
    };
    if(checking_alcohol.some(checking_all)){
        content.innerHTML += `${temp.map(e => {return 'Alcohol: ' + e.alcohol})}`
    };
    if(checking_kind.some(checking_all)){
        content.innerHTML += `${temp.map(e => {return 'Kind: ' + e.kind})}`
    };
}

function checking_all(value){
    return value != undefined;
}
milk_btn.onclick = click;
wine_btn.onclick = click;
chocolate_btn.onclick = click;
all_products_btn.onclick = show_all;