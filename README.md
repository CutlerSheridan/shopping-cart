# Shopping Cart

## Browse items, add or remove them to/from your cart

Made to practice React, client-side routing, and TTD in React. Also experimenting combining context with reducers and wrapping it all in a provider.

#### TODO NEXT

- lower product cap to 99
- get product page working

#### TODO LATER

##### Features

- integration test
- add home page content
- ? add ability to sort items

##### Behavior

##### Style

- make Cart nav button a single width
- add icons for in- and decrement arrows of QuantitySelector
- make Cart page prettier
- fill out home page
- add more shop items
- add credit

#### DONE

_0.4.1_

- fix shopping grid so cart is on right side regardless of number of products
- get dynamic image importing working
  - had to use require() and concatenate the string path instead of using a template literal
- add some shop items and pictures
- refactor prices with toLocaleString() instead of forcing it

_0.4.0_

- swap placement of cart preview on shopping page with product grid
- fix shopping heading
- add some filler Home content
- create and route a Cart page
- make Cart page display items in cart and total

_0.3.1_

- make cart preview look nicer
- make product cards look nicer
- write and test handleTypedQuantity to pass typed values through before assigning them
- add 'Go to cart' button to cart preview
- choose secondary color
- extract shared styling across buttons into parental class

_0.3.0_

- apply color scheme
- restructure shopping layout
- extract quantity controls into component
- add quantity controls to product pages

_0.2.5_

- add CartPreview component
- write deleted_item
- test deleted_item
- write cleared_cart
- test cleared_cart

_0.2.4_

- add tester input for typed_value

_0.2.3_

- write typed_value
- test typed_value

_0.2.2_

- fix incremented and decremented

_0.2.1_

- write decremented
- test decremented
- wire up context provider

_0.2.0_

- create CartContext for context and reducer
- start writing cartReducer
- test Item
- test incremented

_0.1.0_

- set up RouteSwitch and get the routes working for the main pages
- get ProductPage routes set up

_0.0.0_

- Initial commit
