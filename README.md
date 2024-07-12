# Title Boxing Ecommerce Application
![Title Boxing Logo](https://raw.githubusercontent.com/BrianDriscollCode/title_boxing_store/master/src/images/logo_titleboxingretail.jpg)

### Objective With this Project

This program showcases an efficient method for building a website using reusable components. It allows clients to list products without needing to create new web pages for each product type or item. This approach is cost-effective and also supports account functionality, making it ideal for scalable website development.

### Reusable Components

This application uses reusable components to generate web pages from structured data. The React JavaScript files in these folders leverage Redux state to display user account and product information on the page:

1. components/body/product
2. component/body/product/single
3. component/body/product/options
4. component/body/cart
5. component/body/checkout

#### On the website: 

1. Product:
- https://title-boxing-store.vercel.app/#/product/boxing_glove
- https://title-boxing-store.vercel.app/#/product/shoes
-  https://title-boxing-store.vercel.app/#/product/headgear
2. Single Product (just 2 examples, many more on website):
- https://title-boxing-store.vercel.app/#/product/headgear/14
- https://title-boxing-store.vercel.app/#/product/boxing_glove/2
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


