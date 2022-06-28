# Title Boxing Ecommerce Application
![Title Boxing Logo](https://raw.githubusercontent.com/BrianDriscollCode/title_boxing_store/master/src/images/logo_titleboxingretail.jpg)

This application uses reusable components to create web pages using structured data. Specifically, these are the reusable components in the application:

1. components/body/product
2. component/body/product/single
3. component/body/product/options
4. component/body/cart
5. component/body/checkout

The React JavaScript files in these folders utilize redux state to populate the page with user account information and product information. 

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

### Application Structure

The goal was to follow this structure as much as possible. 

->FOLDER NAME (Ex: Item_Page)

--> Page.js (connects to redux, manages top level logic, passes down necessary data from redux)

---> Page-level-components (receives state information from Page.js, manages individual component logic, and calls page level functions ONLY when necessary)

### Last Thoughts 

This program represents a way to build a website by creating reusable components so that a client can list products without the hassle of building new web pages for every product type or every single item. Therefore, this shows a cost-effective way to build websites for clients while also enabling account functionality. 


