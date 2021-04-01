'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000'
const caps = io.connect(host)
const faker = require('faker');

caps.on('delievered', hasBeenDelievered)

setInterval(() => {
  let fakeOrder = {
    storeName: faker.company.companyName(),
    orderId: faker.address.zipCode(),
    customerName: faker.name.findName(),
    address: faker.address.streetAddress()
  }

  caps.emit('pickup', fakeOrder)
}, 5000)

function hasBeenDelievered(payload) {
  console.log(`***DELIEVERY COMPLETE.. PACKAGE ${payload.orderId} ON ${new Date()} THANK YOU`)
}

module.exports = {
  hasBeenDelievered: hasBeenDelievered
}

console.log('VENDOR TURNED ON...')