- Clear out that Readme! Add your cat! Meow!
- Add more validations into `pastOrder` and other models.
- Great to keep these options as models (Size, Category, etc.) allows us to keep them 'first class' so that you can query/update them independently of the Product model. Downside is the complication in models.
- Token?.js?
- Ensure catching all of your possible errors in your routes.
- Keep your data in cents, i.e. Sequelize.INTEGER
- /api/products.js: `productsById` versus `products` may be redundant.
- ***Add in gatekeeper middleware `isAdminOrSelf` to `/api/users.js`***
- ngrok - http 8080 links to your computer
- standardize the names in your cart reducer or comments about the code
- catch your errors & possibly send something back to the user, possibly a toast notif. (esp in cart.js)
- React Toaster
- lodash methods! i.e. filtering objects => collection subset
- move some interesting logic into a utils file so that you can reuse them => you can then use them as middleware prior to your main route handler
- keeping containers in a separate folder will maximize its reusability
- maintaining a base case in your components to handle rendering a component at first without having loaded information yet
- console.logs should not be in master
- Refactor Allproducts into utility functions
- `Array.prototype.every`, `Array.prototype.some`
- YAY TESTS!


Q&A
- Redux store state: you can't do anything to protect your Redux store. It belongs to the client, and the client can do anything.
  - Front end is more about UX (users should see what they should see), not so much about control.
- Database security: database URI, password should not be public (i.e. accidentally pushing to github)
- Injection: worrisome if you need to run someone else's code - need to proceed safely (i.e. eval on server side)
  - SQL query templating => arbitrary SQL commands can cause issues
- `delete req.body.password` in requests on SERVER SIDE

router.put('/users/:id', (req, res, next) => {
  delete req.body.password
  req.user.update(req.body)
})
