# Saching Trading Website

This website is built with Next.js, which uses React.js and Typescript. I am going to walk you through every directory so you understand what everything does

## Installation

## /data

The /data directory is the main way of interfacing with the website without needing to write or modify html or css, the only thing that you need to do is create or modify Javascript objects

### /data/data.ts

This is the data that it's used by the pages on build, for simplicity sake all of the data actual data is on another directory

### /data/pages

The data you change here will be reflected on the pages. For example, if you add a card in /cereals, just go into /data/pages/cereals.ts and add a card object. If you use VSCode, you will get nice Intelisense telling you the defined properties and what each property does

## /components

In this directory you will find subdirectories that contain UI elements, such as the Footer, Navigation Bar, etc. The ones that you are more likely to need are:\

- /Contact/Telegram.tsx which is the telegram contact component\
- /Footer/Footer.tsx which is the Footer
- /SideBar/SideBar.tsx\

### Be careful

There are some components you should be careful if you want to edit them, some of them are\

- /Contact/ContactContext.ts\
- /Contact/Dialogs.tsx\
- /Products/ProductsSection.tsx\
- /Sidebar/Navigation.tsx\
- /Sidebar/SideBar.tsx\
- /TopBar/Topbar.tsx

## /pages

This is where the actual pages live, but I do not recommend to change this ones, as all of the UI can be changed by changing the components

## /public

This is where all of you will find all of the public resources, such as images

## /styles

This is where the custom.css stylesheet lives. All of the other css is made with tailwind.css
