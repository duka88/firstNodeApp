const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');
const p = path.join(rootDir, 'data', 'products.json');

const getProductFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};


module.exports = class Product {
    constructor(title, imgUrl, description, price) {
        this.title = title;
        this.description = description;
        this.imageUrl = imgUrl;
        this.price = price;
    }

    save() {
        getProductFromFile(products =>{
            this.id = Math.random().toString();
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    

    }
     
    static finbById(id, cb){
        getProductFromFile(products =>{
            const product = products.find(p => p.id === id);
            cb(product);
        });
    }
    
    static fetchAll(cb) {
        getProductFromFile(cb);

    }

}