// ==================================section one===================================
const buttonsOne = document.querySelectorAll(".btn_one");
const contentOne = document.querySelectorAll(".slideOne-content");


function filterSelectionOne(category) {
    // Show all if category is 'all', otherwise filter by category
    contentOne.forEach((a) => {
      if (category === "all" || a.classList.contains(category)) {
        a.classList.add('active-one');
        
      } else {
        a.classList.remove('active-one');
        
      }
    });
  }  
  filterSelectionOne("all");


buttonsOne.forEach((btn) => {
    btn.addEventListener("click", function () {
      
      buttonsOne.forEach((btn) => {
        btn.classList.remove('active-one')
      });
     
      btn.classList.add('active-one');
      
    });
  });


function searchOn() {
    const inputSearch = document.getElementById('searchOne-input').value.toUpperCase();  // Correct method name and use more descriptive variable name
    const contentsOne = document.querySelectorAll('.slideOne-content');  // Simplified variable name

    contentsOne.forEach((content) => {
        const headline = content.querySelector('.headlineOne');
        const headlineText = headline.textContent || headline.innerText;  // Extract text from the headline

        // If the search term is found in the headline text
        if (headlineText.toUpperCase().includes(inputSearch)) {
            content.style.display = "";  // Show the content
        } else {
            content.style.display = "none";  // Hide the content
        }
    });
}

// ==================================section two===================================


function searchTwo() {
    const searchQuery = document.getElementById('searchTwo-input').value.toUpperCase();
    const productsItems = document.querySelectorAll('.secTwo-content')

    productsItems.forEach((item) => {
        const headline = item.querySelector('.h4_two');
        const headlineText = headline ? headline.textContent || headline.innerText : "";

        if (headlineText.toUpperCase().includes(searchQuery)) {
            item.style.display = "";  // or "" to restore default display if needed
        } else {
            item.style.display = "none";
        }
    });
}

// ==================================section three===================================
// ==================================================================================


// 01. --------------cart active and deactive-------------------
const cartIcon = document.querySelector('.cart-menu');
const cartBody = document.querySelector('#cart-body');
const cartClosed = document.querySelector('.cencel-cart');


cartIcon.addEventListener('click', () => {
  cartBody.classList.add('cart-active');
});
cartClosed.addEventListener('click', () => {
  cartBody.classList.remove('cart-active');
});

// 02. --------------shopping cart buttons active-------------------

// 02. step01
const addCartBtns = document.querySelectorAll('.add-cart');
addCartBtns.forEach( (btn) => {
  btn.addEventListener('click', event =>{
    const productBox = event.target.closest('.product-box'); //closest
    addToCart(productBox);
  });
});

// 02. step04
const cartBodyContent = document.querySelector('.cart-body-content');
// 02. step02
const addToCart = productBox =>{
  const productImgSrc = productBox.querySelector('.img-box img').src;
  const productName = productBox.querySelector('.product-name').textContent;
  const productPrice = productBox.querySelector('.price').textContent;

 
  
// 02. step03
  const newCartBox = document.createElement('div');
  newCartBox.classList.add('cart-box');

  newCartBox.innerHTML = `
  <img src="${productImgSrc}" alt="" class="cart-img">
  <div class="cart-details">
      <h2 class="cart-details-name">${productName}</h2>
      <span class="cart-price">${productPrice}</span>
      <div class="cart-qty">
          <button id="minus">-</button>
          <span class="number">1</span>
          <button id="plus">+</button>
      </div>
  </div>
  <i class="fa-regular fa-trash-can" id="card-remove"> </i>
  `;


  //  03. -------------------alert set when selected same item -------------- 
   const selectedSameItem = cartBodyContent.querySelectorAll('.cart-details-name');
   for(let item of selectedSameItem){
     if(item.textContent === productName){
       alert('This product is already in the CART')
       return;
     }
   }


  // 02. step04
  cartBodyContent.appendChild(newCartBox);

   //  04. -------------------remove cart items when click trash box -------------- 
   newCartBox.querySelector('#card-remove').addEventListener('click', () => {
    newCartBox.remove();
   });

   //  05. -------------------remove cart items when click trash box -------------- 

};

