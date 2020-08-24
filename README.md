# React Mini Challenge: Inverse Data Flow

## Instructions

Fork this repo, then run `git clone` to download it locally. Then `cd` into the downloaded directory and open it in your text editor with `code .`.

To get started, run:

```
npm install
npm start
```

## Submitting

When you’re finished, run the following commands in your terminal to submit:

```
git add .
git commit -m 'Done'
git push
```

To get feedback on your code, make sure to enable issues on this repo as well! Go to the Settings page for your fork, find the checkbox for 'Issues' and make sure it is checked.

## Assignment

We're going to refactor our Spice Store app to better isolate out separate components, and understand how to pass data from a child to a parent using **inverse data flow**.

The started code should feel similar to the State & Events Mini Challenge. One thing has changed - we introduced a new component, `Filter`, that is a child of the `SpiceList` component.

Update the `Filter` and `SpiceList` components to complete these deliverables:

- [ ] When a user types in the search bar, the list of spices displayed should be filtered to match based on the text in the input field and the *notes* property of the spice. For example, if the user types 'warm', the list should show Allspice, Cardamom Pods, and Garam Masala.
- [ ] When the user clicks the checkbox next to '4 Star Only', the list of spices should be filtered to only display the spices with a *rating* of 4 or higher.

For both these deliverables, you'll need to set state in the `SpiceList` component after an event occurs in the `Filter` component.

## Tips
You will need to find a way to pass data up from a child to a parent component, instead of the normal flow of a parent passing down data to a child. Refer to the [Thinking In React - Inverse Data Flow](https://reactjs.org/docs/thinking-in-react.html#step-5-add-inverse-data-flow) section for an example.

Make sure you are comfortable passing callbacks around and understand the difference between a function *definition* and a function *invocation*.