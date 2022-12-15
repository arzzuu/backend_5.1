const express = require('express');
const app = express();

const goods = [ 
    { "name": 'mirror', "price": "20", "amount": 30, "id": "0"  },
    { "name": 'phone', "price": "1000", "amount": 30, "id": "1"  },
    { "name": 'book', "price": "600", "amount": 20, "id": "2"  },
    { "name": 'bag', "price": "800", "amount": 10, "id": "3"  },
    { "name": 'sofa', "price": "1400", "amount": 10, "id": "4"  },
    { "name": 'pen', "price": "60", "amount": 30, "id": "5"  },
    { "name": 'cup', "price": "500", "amount": 20, "id": "6"  },
    { "name": 'bag', "price": "50", "amount": 15, "id": "7"  },
    { "name": 'tablet', "price": "50", "amount": 10, "id": "8"  },
    { "name": 'case', "price": "40", "amount": 5, "id": "9"  }
];
 app.get('/products', function (req, res) {
    console.log(req.query);

  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  res.send({ goods: goods.slice(offset, offset + count), count: goods.length });


 });

 app.get('/products/:id', function (req, res) {
    let n = goods.find((item) => item.id == req.params.id)
    res.send(JSON.stringify(n));
 });
 app.get("/products/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const n = goods.find((item) => item.id === id);
  console.log(n)
  if (!n) {
     console.log(res.status(404).send())
  }
  else console.log(res.status(200).json(n))
 });

 app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
 });