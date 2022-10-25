# Phase 2 Requirements

In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.

- Implement the Context API to make some basic application settings available to components
  - How many To Do Items to show at once
  - Whether or not to show completed items
- Provide the users with a form where they can change the values for those settings
  - This should be given in the form of a new component, perhaps linked to from the main navigation
  - Hint: Use Browser Router to create the page/route/component for this
- Save the users choices in Local Storage
- Retrieve their preferences from Local Storage and apply them to the application on startup



## Technical Requirements / Notes

Technical requirements for the core application are unchanged from the prior phases, with the addition of context behaviors defined in our global Context Provider

1. Extend your `context` provider to include all of the following features:

- Create a `context` for managing application settings and provide this at the application level.
- Display or Hide completed items (boolean).
- Number of items to display per screen (number).
- Default sort field (string).
- Create a function in your context that saves user preferences (for the above) to local storage.
- Implement a `useEffect()` (or `componentDidMount())` in your context to read from local storage and set the values for those 2 state properties on application load.
  - Note: You will need to `stringify` your state prior to saving to local storage, and parse it when you retrieve it.

2. Consume and utilize `Context` values throughout your components:

- Show a maximum of a certain number of items per screen in the `<List />` component.
  - Provide “next” and “previous” links to let the users navigate a long list of items.
- Hide or show completed items in the list.

[PR]()

[UML]()
