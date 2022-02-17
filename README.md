# StoreProject
## This project based on Billing the product on adding the respective tax and generate the Bill.....

###  This project based on Nodejs that means you have to install nodejs in our Computer system
### I have written this project In Vs code For, Better coding experience
### This project is tested on POSTMAN
### Please follow the instructions to run this project

- Step1:open the storeProject Folder in Vs code 
- Step2:open the terminal in Vs code And Type "cd src",As required module are located in src folder
- Step3:Type "node index.js" in terminal 
- Step4:Open the postMan and Type "localhost:3000/calculateTax" and select  "Post" Method
- Step5:Select the "Body" In Postman and then select "raw" and select format "json"
- Step6:Type the instructed data in Body as Given below:
```yaml
[
    {
        "item":"Headache pills",
        "itemCategory":"Medicine",
        "quantity":5,
        "price":50
    },
    {
        "item":"Sandwich",
        "itemCategory":"Food",
        "quantity":2,
        "price":200
    },
    {
       "item": "Pants",
       "itemCategory": "Clothes",
       "quantity": 2,
       "price": 1200
   },
   {
       "item": "Classical Songs Collection",
       "itemCategory": "Music",
       "quantity": 1,
       "price": 500
   },
   {
       "item": "Perfume",
       "itemCategory": "Imported",
       "quantity": 1,
       "price": 4000
   },
   {
       "item": "Black Swan",
       "itemCategory": "Book",
       "quantity": 1,
       "price": 300
   }
]```
Step7:Then Hit the send Button:
Step8:The Desire Output is givenBelow:
```yaml
{
    "status": true,
    "dataArray": [
        "Poduct:Headache pills,........,FinalPrice:262.5,..,Tax:5%,..,TaxAmount:12.5",
        "Poduct:Sandwich,........,FinalPrice:420,..,Tax:5%,..,TaxAmount:20",
        "Poduct:Pants,........,FinalPrice:2688,..,Tax:12%,..,TaxAmount:288",
        "Poduct:Classical Songs Collection,........,FinalPrice:515,..,Tax:3%,..,TaxAmount:15",
        "Poduct:Perfume,........,FinalPrice:4720,..,Tax:18%,..,TaxAmount:720",
        "Poduct:Black Swan,........,FinalPrice:300,..,Tax:0,..,TaxAmount:0",
        {
            "TotalAmount": 8460.225,
            "Discount": 423.01125
        },
        {
            "DateOfBilling": "Thu Feb 17 2022 18:29:42 GMT+0530 (India Standard Time)"
        }
    ]
}```
