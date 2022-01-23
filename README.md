# Getting Started with React Router Dom (V6)
> Simple Quote storing application, while will access your browser local storage and store
all the quotes and thoughts.

```
Changes in React Router v6
```
> Routes introduce, no need to use exact anymore
> NavLink usages change (active nav link)
> useHistory() ---> useNavigate() 

```
Description
```
+ `useNavigate()` -> help to navigate to different pages, add or update query parameter dynamically.
+ `useLocation()` -> get the current URL( path ).
+ `new URLSearchParams()` -> extract the params from useLocation's search value (pure JS element).


| [Live Application (👆)]() |
| ------ |  

<p align="center">
<img alt="GIF" src="https://github.com/krishdu/Your-Pen/blob/master/your-pen-v1.gif?raw=true" width="800" height="400"/>
</p>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


```
Phase 1 : Start with creating different pages
```
+ created Quote, Quote Detail and not found pages
+ Define route to navigate

```
Phase 2: Use dummy data
```
+ defined arrays of dummy data
+ Get all the data and show it to Quote page
+ Link all quote Id in view button to get particular Quote

```
Phase 3 : Replace dummy data with local storage 
```
+ created some API to interact with local storage (store and retrive quotes, thoughts etc.)
+ Created custom hook to call the APIs
    + use Reducer to perform to hold the state

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

