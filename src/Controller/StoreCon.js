const taxCalculate = async (req, res) => {
    try {
        let data = req.body;
        let len=data.length
        if(len<1){
            res.status(400).send({status:false,msg:"Plese provide product details for billing"});
        }
        let dataArray = [];
        let totalAmount = 0
        for (let i = 0; i < len; i++) {

            if (data[i].itemCategory === "Medicine" || data[i].itemCategory === "Food") {
                let totalPrice = (data[i].quantity) * (data[i].price);
                let tax = (totalPrice / 100) * 5;
                let payableAmount = totalPrice + tax;
                let product = `Poduct:${data[i].item},........,FinalPrice:${payableAmount},..,Tax:5%,..,TaxAmount:${tax}`
                totalAmount += payableAmount;
                dataArray.push(product);
            }
            if (data[i].itemCategory === "Clothes") {
                let totalPrice = (data[i].quantity) * (data[i].price);
                if (totalPrice > 1000) {
                    let tax = (totalPrice / 100) * 12;
                    let payableAmount = totalPrice + tax;
                    let product = `Poduct:${data[i].item},........,FinalPrice:${payableAmount},..,Tax:12%,..,TaxAmount:${tax}`
                    totalAmount += payableAmount;
                    dataArray.push(product);
                }
                else {
                    let tax = (totalPrice / 100) * 5;
                    let payableAmount = totalPrice + tax;
                    let product = `Poduct:${data[i].item},........,FinalPrice:${payableAmount},..,Tax:5%,..,TaxAmount:${tax}`
                    totalAmount += payableAmount;
                    dataArray.push(product);
                }
            }
            if (data[i].itemCategory === "Music") {
                let totalPrice = (data[i].quantity) * (data[i].price);
                let tax = (totalPrice / 100) * 3;
                let payableAmount = totalPrice + tax;
                let product = `Poduct:${data[i].item},........,FinalPrice:${payableAmount},..,Tax:3%,..,TaxAmount:${tax}`
                totalAmount += payableAmount;
                dataArray.push(product);
            }
            if (data[i].itemCategory === "Imported") {
                let totalPrice = (data[i].quantity) * (data[i].price);
                let tax = (totalPrice / 100) * 18;
                let payableAmount = totalPrice + tax;
                let product = `Poduct:${data[i].item},........,FinalPrice:${payableAmount},..,Tax:18%,..,TaxAmount:${tax}`
                totalAmount += payableAmount;
                dataArray.push(product);
            }
            if (data[i].itemCategory === "Book") {
                let totalPrice = (data[i].quantity) * (data[i].price);
                let product = `Poduct:${data[i].item},........,FinalPrice:${totalPrice},..,Tax:0,..,TaxAmount:0`
                totalAmount += totalPrice;
                dataArray.push(product);
            }
        }
        if(totalAmount>2000){
            totalAmount=totalAmount-((totalAmount/100)*5);
            dataArray.push({TotalAmount:totalAmount,Discount:(totalAmount/100)*5});
        }
        else dataArray.push({TotalAmount:totalAmount});
        
        dataArray.push({DateOfBilling:new Date().toString()});
        res.status(200).send({ status: true, dataArray });
    }
    catch (err) {
        res.status(500).send({ Status: false, msg: err.message });
    }
}
module.exports = { taxCalculate };