# Title Boxing Ecommerce Application
![Title Boxing Logo](https://raw.githubusercontent.com/BrianDriscollCode/title_boxing_store/master/src/images/logo_titleboxingretail.jpg)

### Objective With this Project

This program represents a way to build a website by creating reusable components so that a client can list products without the hassle of building new web pages for every product type or every single item. Therefore, this shows a cost-effective way to build websites for clients while also enabling account functionality. 

### Reusable Components

This application uses reusable components to create web pages using structured data. Specifically, these are the reusable components in the application code. The React JavaScript files in these folders utilize redux state to populate the page with user account information and product information:

1. components/body/product
2. component/body/product/single
3. component/body/product/options
4. component/body/cart
5. component/body/checkout

#### On the website: 

1. Product:
  a) https://title-boxing-store.vercel.app/#/product/boxing_glove
  b) https://title-boxing-store.vercel.app/#/product/shoes
  c) https://title-boxing-store.vercel.app/#/product/headgear
2. Single Product (just 2 examples, many more on website):
  a) https://title-boxing-store.vercel.app/#/product/headgear/14
  b) https://title-boxing-store.vercel.app/#/product/boxing_glove/2
3. Cart -> https://title-boxing-store.vercel.app/#/cart
4. Checkout -> https://title-boxing-store.vercel.app/#/checkout

### To Start Application 

-**npm start**

### Structured Data 

Files used to populate the webpages are located at the "reducers" folder in ./src 

These files populate item data, accounts, current account, search options, and banners. There are also reducer functions written to allow the data to be changed depending on a user's action. 

To make changes and call these reducers, one must use the the namespace import { connect } or import an action from the /action folder and dispatch it to the reducers.

## Application Functionality

1. Populate product lists and single item pages with structured data (represents pulling from a database on the frontend)
2. Login and create an account
3. Cart management tied to current account (add/delete)
4. Checkout items with different shipping options
5. Filter through items using category, price, and brand


