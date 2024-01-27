var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");
var searchInput=document.getElementById("search");
var productList;
if(localStorage.getItem("theProducts")==null){
    productList=[];
}else{
    productList=JSON.parse(localStorage.getItem("theProducts"));
    displayProduct(productList);
}

function addProduct(){
var product={
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    description:productDescriptionInput.value
};
 productList.push(product);
 displayProduct(productList); 
 localStorage.setItem("theProducts",JSON.stringify(productList));
 clearForm();
};
function displayProduct(anArray){
var cart="";
 for(var i=0; i<anArray.length; i++ ){
    cart+=`<tr>
               <td>${i+1}</td>
               <td>${anArray[i].name}</td>
               <td>${anArray[i].price}</td>
               <td>${anArray[i].category}</td>
               <td>${anArray[i].description}</td>
               <td><button onclick="updateProduct(${i})" class="btn btn-warning"> Update</button></td>
               <td><button onclick="deleteProduct(${i})" class="btn btn-danger"> Delete</button></td>
            </tr>`;

 }
 document.getElementById("tableProduct").innerHTML=cart;

};

function clearForm(){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescriptionInput.value="";
};
function deleteProduct(i){
    productList.splice(i,1);
    localStorage.setItem("theProducts",JSON.stringify(productList));
    displayProduct(productList); 
};

function searchProduct(){
    var word=searchInput.value;
    var newProducts=[];
    for(var i=0;i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(word.toLowerCase())){
            newProducts.push(productList[i]);
            
        }
    }
            displayProduct(newProducts);
}
function updateProduct(i){
    productNameInput.value=productList[i].name;
    productPriceInput.value=productList[i].price;
    productCategoryInput.value=productList[i].category;
    productDescriptionInput.value=productList[i].description;
    deleteProduct(i);
    localStorage.setItem("theProducts",JSON.stringify(productList));
    document.getElementById("Add Product").innerHTML="Save";
}