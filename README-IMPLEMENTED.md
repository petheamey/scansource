# Installation
I have built the React-Typescript Set Up using npx create-react-app --template typescript. This will also provide support for writing Unit Tests.

# Solution Implementation
## Bidirectional Communication using OOP
Using browser store accessed as the localStorage property of Window, as the store to save state which is accessible to both the old component and the React Component.
Set up EventListeners for button click for both old and React Components.
On click of the buttons we dispatch an event, which is then caught by event listener
The call back function changes the UI.

## My Own Component
I have implemented a Stop Watch with following features, using a function based React Component.<br>
Start & Stop button<br>
Reset button.

I have also implemented tests using Jest and Testing Library

