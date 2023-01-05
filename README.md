# Shopping Cart

## Browse items, add or remove them to/from your cart

Made to practice React, client-side routing, and TTD in React. Also experimenting combining context with reducers and wrapping it all in a provider.

#### TODO NEXT

- add credit

#### TODO LATER

##### Features

- integration test
- ? add ability to sort items

##### Behavior

##### Style

- change header font at least for home page
- play with body font
- style home page better
- decide if product cards are going to use the gradient
- ? play with colors
- add more shop items

#### DONE

_0.4.7_

- fill out home page text
- make shopping page show two columns on mobile instead of three
- add checkout and clear cart buttons to Cart page
- adjust font sizes on desktop vs. mobile
- adjust Cart spacing
- add "clear" button to each Quantity Selector
- add option to offset Delete button in Quantity Selector for when it's centered (like on the product cards)

_0.4.6_

- make Cart page way better
  - add quantity selector to each Cart item
  - move item totals to right side
  - add dividers between Cart items
- add icons for in- and decrement arrows of QuantitySelector
- center icons
- adjust QS font size
- make web icons invisible until they load

_0.4.5_

- make Cart nav button a single width
- make Cart page prettier
- add quantity selectors to each cart item

_0.4.4_

- fix shopping page on mobile
- fix nav bar on mobile
- fix home page on mobile
- fix mobile button press color changes vs desktop hovering

_0.4.3_

- fix cart preview on mobile

_0.4.2_

- lower product cap to 99
- get product page working and looking decent

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
