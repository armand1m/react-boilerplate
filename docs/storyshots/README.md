# Storyshots

You can use the `@kadira/storyshots` module to use your React Storybook to generate snapshot tests using Jest.

The generated storyshots are stored in `.storybook/__storyshots__`.

## Testing  


```Shell
# run once
$ npm run storybook:test
```

```
# watch mode
$ npm run storybook:test -- -w
```

## Updating snapshots

```Shell
# update all
$ npm run storybook:test -- -u
```

```
# update in interactive mode
$ npm run storybook:test -- -i
```
