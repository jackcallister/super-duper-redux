I've been playing around with Redux lately. It's a bit different from the usual Flux implementations and there's a bit of a lexicon shift. This App is just me playing around and learning a thing or two.

Redux is really, really nice to use. The exciting thing is it's early days too, so things like warnings and informative errors are still on the way, but for the most part it's small enough to understand and use today. Before walking through this code base I'll explain a couple of concepts to help you.

In typical Flux you create stores which hold and manage your data. In Redux there is one `Store` (behind the scene) which holds the data and `reducers` which modify sections of that data.

Our `Store` contains meals and ingredients:

```
{
  meals: [
    {
      name: 'Butter chicken',
      id: 1,
      ingredientIds: [1, 2]
    },
    {
      name: 'Bacon and eggs',
      id: 2,
      ingredientIds: [1]
    }
  ],

  ingredients: [
    {
      name: 'Butter',
      id: 1,
    },
    {
      name: 'Chicken',
      id: 2
    }
  ]
}
```

A `reducer` is a just a function which takes modifies a section of this `Store`. For example when the `DELETE_MEAL` action type is received the reducer returns a copy of the state without that particular meal.

```
function meals(state = initialState, action) {
  switch (action.type) {

  case DELETE_MEAL:
    return state.filter( meal =>
      meal.id !== action.payload
    );
```

Ok, so there is one big store tree and functions which change it's data when actions are called. The really cool part is how you get this data to your views.

```
<Connector select={selectMeals}>
  {({ meals }) =>
    <Meals meals={meals} />
  }
</Connector>
```

This looks weird, but I'll explain the syntax. First there is a Connector component which is accepting a select function. More on that in a moment. The biggest strange part is that the child of the component is a function. This is because behind the scenes the child can be called (since it's a function!) and passed the state it needs. Pretty neat. You can see the state being passed here from Redux (source):

```
return children({ dispatch, ...slice });
```

A dispatch object and state 'slice' object are passed to the child, in this case `<Meals meals={meals} />`.
Oh and the ... is a [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).

Where does this slice of data come from, well the big `Store` data tree we saw earlier! And we tell the Connector what slice to get from the store with the select function we pass in.

```
function selectMeals(store) {
  return { meals: store.meals };
}
```

The select is passed the entire store and we return all the meals. Now the really fun part... you can compute or derive your data for your views with the select function! Let's look at this in practice.

Each `<Meal>` needs to display it's ingredients so it's connector function would look like this.

```
function selectIngredientsFromMeal(meal) {

  return function (store) {
    const ingredients = store.ingredients.filter((ingredient) => {
      return includes(meal.ingredientIds, ingredient.id);
    });

    return { meal: meal, ingredients: ingredients };
  }
}
```

We pass the function the meal which returns a function that gets the ingredients from the store for that meal. Pretty cool, now check out the `selectShoppingList` function for deriving ingredient counts based on the selected meals!

```

function selectShoppingList(store) {
  const meals = store.meals.filter((meal) => {
    return includes(store.shoppingList, meal.id);
  });

  const ingredients = reduce(meals, (ingredients, meal) => {
    meal.ingredientIds.forEach((ingredientId) => {
      let ingredient;

      ingredient = ingredients.find((ingredient) => {
        return ingredient.id === ingredientId;
      });

      if (ingredient) {
        ingredient.count += 1;
      } else {
        ingredient = store.ingredients.find((ingredient) => {
          return ingredient.id === ingredientId;
        });
        ingredient.count = 1;
        ingredients.push(ingredient);
      }
    });

    return ingredients;
  }, []);

  return { meals: meals, ingredients: ingredients };
}
```

I could most definitely write this more efficiently but you get the idea! Get the selected meals, add a count to each ingredient and return the derived data. Fun times!
