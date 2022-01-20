
function carregarProdutos(){ 
    let contCol = document.getElementById ('cont_col')//result

    modelsJson.map(
        function (product, index){       
             
        let colContent = `
        <div class="col" id="add_to_cart" data-key="${index}"> 
            
                <a href="singleproduct.html" target="_blank" class="a-tag"><img src="${product.img[0]}" id="item-img"></a>
                <h4 id="item-name">${product.name}</h4>
            
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <div class="price-and-btn">
                <p id="price">$${product.price.toFixed(2)}</p>
                <button type="submit" class="add-to-cart-btn">ADD TO CART</button>
            </div>        
        </div>
         `
         contCol.innerHTML += colContent

    })

    
    function renderCategory(item, index) {                   
        let colContent = `
        <div class="col" id="add_to_cart" data-key="${index}"> 
            
                <a href="singleproduct.html" target="_blank" class="a-tag"><img src="${item.img[0]}" id="item-img"></a>
                <h4 id="item-name">${item.name}</h4>
            
            <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
            </div>
            <div class="price-and-btn">
                <p id="price">$${item.price.toFixed(2)}</p>
                <button type="submit" class="add-to-cart-btn">ADD TO CART</button>
            </div>        
        </div>
            `
        contCol.innerHTML += colContent          
    }

    let filtrados = modelsJson.filter( (item) => {
        if (item.tag === "adidas") {
            return
        }
    })
    console.log(filtrados);
    

    let categorysAdidasBtn = document.querySelector("#categorys-adidas")
    categorysAdidasBtn.addEventListener("click", (e) => {
        e.preventDefault()
    })       


    //________________________________________________________________________
    // Show modal     
        
    function showModal(modalId) {
        let modal = document.getElementById(modalId)
        modal.classList.add('show-modal')
        modal.addEventListener('click', (e) => {
            if(e.target.id == modalId || e.target.className == ('fas fa-times') ){
                modal.classList.remove('show-modal')
            };
        })
    }           
    
    let btnVerProduto = document.querySelectorAll('.a-tag')    
    for(let i = 0; i < btnVerProduto.length; i ++){    
        btnVerProduto[i].addEventListener('click', (e) => {
            e.preventDefault()
            let key = e.target.closest('.col').getAttribute('data-key')
            let modalContent = document.getElementById('modal-product')
            

            let modalRascunho = `
            <div class="modal-item">
                <div class="item-img">
                    <img class="modal-img" src="${modelsJson[key].img}">
                </div>
                <div class="detail-area-modal">
                    <h3 class="modal-title">${modelsJson[key].name}</h3>
                    <div class="size-area">
                        <h4 class="size-area-title">Select a size: <span class="input-size">40 EU</span></h4>
                        <div class="sizes-option">
                            <div class="size-modal" data-size="size1">40 EU</div>
                            <div class="size-modal" data-size="size2">41 EU</div>
                            <div class="size-modal" data-size="size3">42 EU</div>
                            <div class="size-modal" data-size="size4">42,5 EU</div>
                            <div class="size-modal" data-size="size5">43 EU</div>
                            <div class="size-modal" data-size="size6">44 EU</div>
                            <div class="size-modal" data-size="size7">45 EU</div>
                        </div>
                    </div>
                    <div class="price-qty">
                        <div class="price">$${modelsJson[key].price.toFixed(2)}</div>
                        <div class="qty-btn">
                            <button class="item-qty-modal"  id="subtract">-</button>
                            <div class="qty-qty"></div>
                            <button class="item-qty-modal" id="add">+</button>
                        </div>
                        <div class="add-btn-container">
                            <button id="add-btn-modal">ADD TO CART</button>
                        </div>
                    </div>
                </div> 
                <div class="modal-close-btn-div">
                    <button class="modal-close"><i class="fas fa-times"></i></button>
                </div>             
            </div>
            `
            modalContent.innerHTML = modalRascunho
            
            //________________________________________________________________________
            // Add/subtract and sub-total
            let subtractItems = document.querySelector('#subtract')
            let addItems = document.querySelector('#add')
            let itemQty = document.querySelector('.qty-qty')
            console.log(typeof itemQty);
            let price = document.querySelector('.price')
            let modalItem = document.querySelector(".modal-item")            
            
            let numPrice = 0
            let num1 = 0
            subtractItems.addEventListener('click', () => {
                if (num1 <= 0) {
                    itemQty.innerHTML = ""
                    return
                } else {
                    num1 -= 1
                    numPrice -= modelsJson[key].price
                    itemQty.innerHTML = num1
                    price.innerHTML = `$${numPrice.toFixed(2)}`
                }
            })
            
            addItems.addEventListener('click', (e) => {
                num1 += 1
                numPrice = modelsJson[key].price * num1
                itemQty.innerHTML = num1
                price.innerHTML = `$${numPrice.toFixed(2)}`
            })
            showModal('modal-product')
            console.log(num1);
            //____________________________________________________________
            // select size

            let sizeModal = document.querySelectorAll(".size-modal")
            let inputSize = document.querySelector(".input-size")
            for (let i = 0; i < sizeModal.length; i++) {
                sizeModal[i].addEventListener("click", (e) => {
                    console.log(e);
                    inputSize.innerHTML = sizeModal[i].innerHTML
                })            
            }            
                       
            let addBtnModal = document.querySelector("#add-btn-modal")
            addBtnModal.addEventListener("click", () => {
                addToCart(i,num1)
                showItems()
                cartQty()
                num1 = 0
                itemQty.innerHTML = ""
                price.innerHTML = `$${modelsJson[key].price}`
            })
        })
    } 
    //____________________________________________________________
    // Add to cart
   
    let addBtnHomeScreen = document.querySelectorAll(".add-to-cart-btn")
    let showCart = document.getElementById('menu-cart')
    let sideBarCart = document.querySelector('#side-bar-cart')
    let sideBarContainer = document.querySelector('#side-bar-container')
    let sideBarItemsCart = document.getElementById("side-bar-items-cart")
    let cartQuantityEl = document.getElementById("cart-quantity")
    let totalPrice = document.querySelector("#total-price")
    
    let cart = []
    let itemsFromLocalStorage = JSON.parse(localStorage.getItem("myItemsOnLocalStorage"))

   
    function addToCart(i,num1) {        
        for (let index = 0; index < cart.length; index++) {
            if (cart[index].name === modelsJson[i].name) {
                cart[index].qty += num1
                return
            }
        }

        let cartObject = {
            name:`${modelsJson[i].name}`,
            image:`${modelsJson[i].img}`,
            price:`${modelsJson[i].price}`,
            qty: num1
        }
        if (num1 <= 0) {
            return
        } else{
            cart.push(cartObject)
        }
    } 

    function cartQty(){
        let qty = 0
        let totalP = 0
        for (let i = 0; i < cart.length; i++) {
           qty += cart[i].qty 
           totalP = cart[i].price * qty
        }
        cartQuantityEl.innerHTML = qty
        totalPrice.innerHTML = `$${totalP.toFixed(2)}`
        console.log(cart);
    }

    function addQtyCa(name, qty){
        for (let i = 0; i < cart.length; i++) {            
            if(cart[i].name === name ) {
                cart[i].qty += qty
                showItems()
                return
            }          
        }
    }
    

    function removeItem(name, qty = 0) {
        for (let i = cart.length - 1; i >= 0 ; i--) {            
            if(cart[i].name === name ) {
                if(qty > 0){
                    cart[i].qty -= qty
                }
                if(cart[i].qty < 1 || qty === 0){
                    cart.splice(i, 1)
                }
                showItems()           
                console.log(cart.length);
                return
            }                   
        }
    }

    function removeAll(name){
        for(let i = 0; i < cart.length; i++){
            if(cart[i].name === name){
                console.log(cart[i].name);
                cart.splice(i, 1)
                showItems()
                cartQty() 
            }
        }
    }


    function showItems() {
        let res = ""        
        for (let i = 0; i < cart.length; i++) {
            
            let cartItem = `
            <div class="cart_item_container">
                <div class="img_cart_container">
                    <img src="${cart[i].image}">
                </div>
                <div class="title_price_container">
                    <h3>${cart[i].name}</h3>
                    <p>$${cart[i].price}.00</p>
                </div>
                <div class="qty_cart_container_remove">
                <div class="qty_cart_container">
                    <button class="subtract_qty">-</button>
                    <div class="qty_display">${cart[i].qty }</div>
                    <button class="add_qty">+</button>
                </div>                
                <button class="remove">Remove</button>
                </div>
            </div>
            `
            res += cartItem        
        } 
        sideBarItemsCart.innerHTML = res 

        let cartItemContainer = document.querySelector(".cart_item_container")
        let subtractQty = document.querySelectorAll(".subtract_qty")
        let addQtycart = document.querySelectorAll(".add_qty")
        let removeAllBtn = document.querySelectorAll(".remove")
        
        for (let i = 0; i < cart.length; i++) {
            removeAllBtn[i].addEventListener("click", (e) => {
                if(e.target && e.target.classList.contains("remove")){
                    removeAll(cart[i].name)
                }
            })

            subtractQty[i].addEventListener("click", (e) => {
                if (e.target && e.target.classList.contains("subtract_qty")) {
                    removeItem(cart[i].name, num1)
                    cartQty()
                }         
            })

            addQtycart[i].addEventListener("click", (e) => {
                if (e.target && e.target.classList.contains("add_qty")) {
                    addQtyCa(cart[i].name, num1)
                    cartQty()
                }
            })

        }      
    }
    let num1 = 1
    for (let i = 0; i < addBtnHomeScreen.length; i++) {        
        addBtnHomeScreen[i].addEventListener("click", () => {
            addToCart(i,num1)
            showItems()
            cartQty()                       
        })        
    }
    if (itemsFromLocalStorage) {
        myItemsOnLocalStorage = itemsFromLocalStorage
        console.log(myItemsOnLocalStorage);
        renderCart(myItemsOnLocalStorage)
    }
    
    

    //____________________________________________________________
    // show side bar
    function showCartBar() {
        showCart.addEventListener("click", (e) => {                
            sideBarContainer.style.display = "block"
            sideBarCart.style.right = 0
            document.body.style.overflowY = "hidden" 
        })            
    }
    showCartBar()

    sideBarContainer.addEventListener('click', (e) => {
        if(e.target.id === "side-bar-container" || e.target.className === "fas fa-times"){
            sideBarContainer.style.display = "none"
            sideBarCart.style.right =  -510
            document.body.style.overflowY = "visible"
        }
    }) 
    
   
}

