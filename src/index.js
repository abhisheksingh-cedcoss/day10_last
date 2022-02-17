var productArr = [];
$(document).ready(function(){
    $("#submit").click(function(){

        var id = document.getElementById('id').value;
        var flag = 0;
		for (var i = 0; i < productArr.length; i++) {
			if (productArr[i].id == id) {
				flag = 1;
			} 
        }
        if(flag == 1){
            alert('id already exist')
        }else{
            add();
        }




    });


});

function add(){
    var id = document.getElementById("id").value;
    var name = document.getElementById("fname").value;
    var price = document.getElementById("price").value;
    var qunatity= document.getElementById("quantity").value;

    var totalPrice = price*qunatity;

    var obj = {
        id : id,
        name : name,
        price : price,
        qunatity:qunatity,
        totalPrice: totalPrice
    };

    productArr.push(obj);

    display();


}


function update(x) {
	console.log(x);
	for (var i = 0; i < productArr.length; i++) {
		if (productArr[i].id == x) {
			var u_value = document.getElementById('update' + [ i ]).value;
			if (u_value == '') {
				alert('please enter a value');
			} else {
				productArr[i].quantity = u_value;
				productArr[i].totalPrice =productArr[i].price*productArr[i].quantity;
				display();
			}
		}
	}
}


function display(){
    var tab = '<table><tr><th>ID</th><th>Name</th><th>Price</th> <th>Quantity</th><th>Total price</th> <th>enter new quantity</th> <th>update</th>      ';
    for (var i =0; i<productArr.length; i++){
        tab +='<tr><td>'+ productArr[i].id + '</td><td>' + productArr[i].name + 
        '</td><td>' + productArr[i].price + 
        '</td><td>'+ productArr[i].qunatity + 
        '</td><td>' + productArr[i].totalPrice +
        '</td><td><input type="text" id="update' +
        [ i ] +
        '"></td><td><button class="Submit" id="btn" value="update" onclick="update(' +
        parseInt(productArr[i].id) +
        ')"</button></td></tr>';
    }

    tab += '</table>'; content
    document.getElementById("content").innerHTML= tab;
}