availableProducts = (stores, shoppingList) => {
    const availableProduct = {};
    let maxPurchase = 0;
    let minPurchase = 0;
    let storeMaxPurchase = "";
    let storeMinPurchase = "";
    let productsMaxPurchase = {};
    let productsMinPurchase = {};
  
    // filtro con los productos que existan en shoppingList
    for (const tienda in stores) {
      const productsD = Object.keys(stores[tienda]).filter((product) =>
        shoppingList.includes(product)
      );
  
      // Por medio del largo comparo si tiene todos os prodcutos
      const hasAllProducts = productsD.length === shoppingList.length;
  
      //Si cumple con la condicion de que el tamaño sea gual, se le coloca el valor de la posible compra, sno 0
      let totalPurchase = 0;
      productsD.forEach((product) => {
        if (hasAllProducts) {
          totalPurchase += stores[tienda][product];
        }
      });
  
      //Valido cual es el maximo valor a pagar por la compra
      if (totalPurchase > maxPurchase) {
        maxPurchase = totalPurchase;
        storeMaxPurchase = tienda;
        productsMaxPurchase =productsD ;
      }
  
      //Valido cual es el manimo valor a pagar por la compra y que sea diferente a 0
      if (totalPurchase < minPurchase || totalPurchase !== 0) {
        minPurchase = totalPurchase;
        storeMinPurchase = tienda;
        productsMinPurchase = productsD;
      }
  
      // Agrego a avalialeProduct: los productos que existan - se coloca el true o false - se le agrega el valor de cada compra 
      availableProduct[tienda] = {
        products: {},
        allProductsAvailable: hasAllProducts,
        totalPurchase: totalPurchase,
      }; 
      productsD.forEach((product) => {
        availableProduct[tienda].products[product] = stores[tienda][product];
      });
    
    }
    
    //le agrego un nuevo campo "maxPrchase" para la tienda con mayor valor y evio e vaor de la compra 
    //tienda "store" y los productos en "products"
  
    availableProduct.maxPurchase = {
      value: maxPurchase,
      store: storeMaxPurchase,
      products: productsMaxPurchase,
    };
  
    //le agrego un nuevo campo "minPrchase" para la tienda con menor valor y evio e vaor de la compra 
    //tienda "store" y los productos en "products"
  
    availableProduct.minPurchase = {
      value: minPurchase,
      store: storeMinPurchase,
      products: productsMinPurchase,
    };
  
    return availableProduct;
  };
  
  const stores = {
    d1: {
      papitasBQ: 3500,
      papitasLimon: 3200,
      mani: 800,
      cafe: 8000,
      azucar: 3500,
      papel: 3000,
    },
  
    olimpica: {
      papitasBQ: 3600,
      papitasPollo: 3500,
      mani: 850,
      cafe: 8010,
      azucar: 3200,
      papel: 3500,
    },
    exito: {
      papitasBQ: 3650,
      papitasLimon: 3200,
      mani: 790,
      cafe: 8000,
      azucar: 3500,
      papel: 3000,
      gomitas: 4520,
    },
    otra: {
      papitasBQ: 3700,
      papitasLimon: 3200,
      cafe: 7000,
      azucar: 3000,
      papel: 3200,
      gomitas: 4320,
    },
    ara: {
      papitasBQ: 3700,
      papitasPollo: 3200,
      cafe: 7000,
      azucar: 3000,
      mani: 3200,
      gomitas: 4320,
    },
    isimo: {
      papitasBQ: 3700,
      papitasPollo: 3200,
      cafe: 800,
      azucar: 3000,
      mani: 1800,
      gomitas: 4320,
    },
    dolarcity: {
      papitasBQ: 3700,
      papitasPollo: 3200,
      cafe: 800,
      azucar: 3000,
      mani: 500,
      gomitas: 4320,
    },
  };
  
  const shoppingList = ["papitasPollo", "papitasBQ", "cafe", "gomitas", "mani"];
  const result = availableProducts(stores, shoppingList);
  
  console.log("Resumen:", result);
  