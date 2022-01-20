let productImg = document.getElementById ('productImg')
let small_img = document.getElementsByClassName ('small_img')

small_img[0].onclick = function(){
    productImg.src = small_img[0].src
}
small_img[1].onclick = function(){
    productImg.src = small_img[1].src
}
small_img[2].onclick = function(){
    productImg.src = small_img[2].src
}
small_img[3].onclick = function(){
    productImg.src = small_img[3].src
}
small_img[4].onclick = function(){
    productImg.src = small_img[4].src
}
small_img[5].onclick = function(){
    productImg.src = small_img[5].src
}
small_img[6].onclick = function(){
    productImg.src = small_img[6].src
}
small_img[7].onclick = function(){
    productImg.src = small_img[7].src
}
small_img[8].onclick = function(){
    productImg.src = small_img[8].src
}
small_img[9].onclick = function(){
    productImg.src = small_img[9].src
}
small_img[10].onclick = function(){
    productImg.src = small_img[10].src
}
function carregarCompras(){
    
    modelsJson.map(
        function (product,){
        let contCol  = document.getElementById ('product_container')//result
        
        
        let colContent = `
        <div class="row_product">
                <div class="col_product">
                    <img id= "productImg"  src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_001.jpg" width="100%">
                    
                    <div class="small_img_row">
                        <div class="small_img_col">
                            <img class="small_img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_001.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_002.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_003.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_004.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_005.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_006.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_007.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_008.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_009.jpg" width="100%" alt="">
                        </div>
                        <div class="small_img_col">
                            <img class="small_img img" src="Images/Nike/CU9225-001 Supreme x Nike Air Force 1 Low Bl/CU9225-001_SUPREME_X_NIKE_AIR_FORCE_1_LOW_BLACK_010.jpg" width="100%" alt="">
                        </div>
                    </div>
                
                </div>
                <div class="col_product">
                    <p>Home / kicks / SUPREME X NIKE AIR FORCE 1 LOW BLACK</p>
                    <h1 id="item_in_detail_title">SUPREME X NIKE AIR FORCE 1 LOW BLACK</h1>
                    <h4i id="tem_in_detail_price">$148.00</h4>
                    <select>
                        <option>Select Size</option>
                        <option>40 (EU)</option>
                        <option>40,5 (EU)</option>
                        <option>41 (EU)</option>
                        <option>42 (EU)</option>
                        <option>42,5 (EU)</option>
                        <option>43 (EU)</option>
                        <option>44 (EU)</option>
                        <option>44,5 (EU)</option>
                        <option>45 (EU)</option>
                    </select>
                    <div class="addDiv">
                        <input type="number" name="" id="input_quant" value="1">
                        <input type="button" value="ADD TO CART" id="addCart">
                    </div>                    
                    
                </div>
            </div>
         `

       
        

        contCol.innerHTML = colContent      
        
        
    })  

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers') 
        if (productNumbers){
            document.querySelector('.cart-notification').textContent = productNumbers
            document.querySelector('.cart-notification').style.visibility = 'visible'
        }
    }

    
    onLoadCartNumbers()
    displayCart()
    
}
