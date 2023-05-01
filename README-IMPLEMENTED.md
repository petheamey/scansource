# Installation
I have built the React-Typescript Set Up using npx create-react-app --template typescript. This will also provide support for writing Unit Tests.

# Solution Implementation
## Bidirectional Communication using OOP
Using browser store accessed as the localStorage property of Window, as the store to save state which is accessible to both the old component and the React Component.<br>
Set up EventListeners for button click for both old and React Components.<br>
On click of the buttons we dispatch an event, which is then caught by event listener<br>
The call back function changes the UI.<br>
    For ex: If Button One is clicked in old Component the text in New Component changes to 'One'.<br>
    For ex: If Button on New Component is clicked then text in old Component changes to Modern Component'.<br>

## My Own Component
I have implemented a Stop Watch with following features, using a function based React Component.<br>
Start & Stop button<br>
Reset button.

I have also implemented tests using Jest and Testing Library.

