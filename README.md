# Loren's Full-Stack E-Commerce Site, "Sell It!"

## Introduction

I developed this app to demonstrate knowledge of Ruby on Rails with a React frontend while also utilizing Redux and primarily using Tailwind for styling. A user is able to securely log in/out while browsing audio gear and instruments that they can add to a cart and "purchase".

## Getting Started

In order to use this application, you will need to clone the repository onto your machine, navigate into the directory and then do the following:

```
$ bundle install
```

Once finished installing, you will need to make sure there is data seeded into your database. Do this by executing the following in your console:

```
$ rails db:migrate db:seed
```

This will reset any data in the database and make sure you have good data to start with.

Then, start up a server to utilize the app:

```
rails s
```

And start your React server:

```
npm start --prefix client
```

The application should start in your browser and show you the homepage, where you can see a logo, login/signup buttons and pictures of gear being sold by other users. The user can navigate to see details of any item but must be logged in to add anything to a cart. Once logged in, the user has access to a profile page where they can see a list of their items for sale. Here they can choose to delete a listing or navigate to the listing page, where they will also be able to delete if necessary. Any items that are not listed by the current user can be added to a cart. If there are no active carts one will be made when adding something. Cart contents can be edited by either clicking Empty Cart, or clicking the Remove button next to each item in the cart. Upon checkout, a cart is made uneditable, as it is now considered a purchase.

### Errors

If you have database errors, try these commands to check and restart the server:

```
service postgresql status
sudo service postgresql restart
```

### Future Plans

Here is a list of the future plans I have in mind for this project:

- Adding functionality to items to allow for more than 1 item to be sold at once and be taken from an item's available qty upon purchase.
- I plan to change some of the navigation and clean up my Redux store significantly in the coming days. 
- I plan to go over the entire project to make sure it is as accessible as possible, similar to the functionality of the Sign Up and Login pages.
- Significant styling cleanup, especially for carts and item cards.
- I plan to deploy this as part of a personal website portfolio.