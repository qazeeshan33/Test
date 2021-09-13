
const fs = require('fs');

//const dataBuffer = fs.readFileSync('example.json');
//const dataJSON = dataBuffer.toString();
//const data = JSON.parse(dataJSON);
//console.log(data.Test);

//const abc= data.Test

//console.log(abc);

 //   console.log(credentials.email, credentials.pass);

/// <reference types="cypress" />
// abc

describe('VeeDoc Application', function(){

    before(function(){

    // cy.fixture('example.json').then(function(data){

    // this.data=data
    
    //savings_data = JSON.stringify(data);
  
   // const a=data

   cy.fixture('example.json').as('gifts')


 
})
// const testData = [
//     {
//         url:'https://qa-aws.veemed.com/admin/#/login',
//         email: 'rahim@veemed.com',
//         pass: 'Test@12345'
//     },
//    {
//        url:'https://qa-aws.veemed.com/veedoc/#/login',
//        email: 'Name2',
//        pass: 'Pass2'
//     },
//     {
//        url:'https://qa-aws.veemed.com/veedoc/#/login',
//        email: 'Name3',
//        pass: 'Pass3'
//    }
// ]


    it('VeeDoc Login' , function(){

        cy.visit('https://qa-aws.veemed.com/admin/#/login')
//         testData.forEach((credentials) => {
// cy.visit(credentials.url)
 //cy.log('There are ${this.gifts.GiftCards} .')
        const gCards = this.gifts.Test

         cy.get(gCards).each((giftobject) => 
         {
            cy.get(':nth-child(1) > .vm-input').type(giftobject.email)
cy.get(':nth-child(2) > .vm-input').type(giftobject.pass)

cy.get('.text-center > .btn-vm-auth').click()  //Write all your business logic test case code here.
cy.get('.navbar-toggler').click()  //Write all your business logic test case code here.

cy.get('.icon_vm_logout').click()  //Write all your business logic test case code here.

        



// cy.get('.navbar-toggler').click()

// cy.get('.icon_vm_partner_site').click()

// cy.get('.navbar-toggler').click()

// // check value presence anywhere in the table
// cy.get('table[class="table soc-table"]').contains('td', 'AAA Hospital').should('be.visible')

// // check value presence in the specific row & column
// cy.get('table[class="table soc-table"]>tbody>tr:nth-child(1) td:nth-child(2)').contains('AAA Hospital').should('be.visible')

// // verify the state name 'AAA hospital' whose decriptiin is 'AAA Hospital'
// cy.get('table[class="table soc-table"]>tbody>tr td:nth-child(2)').each(($e, index, $list) =>{

//     const text=$e.text()
//     if(text.includes('AAA Hospital'))
//     {

//         cy.get('table[class="table soc-table"]>tbody>tr td:nth-child(3)').eq(index).then(function(nameqw){

// const bookname= nameqw.text()
// expect(bookname).to.equal("Alaska")  

// })
//     }
// })

//     })

})


   
})
})