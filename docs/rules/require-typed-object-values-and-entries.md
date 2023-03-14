# Require Object.values() and Object.entries() calls to have generic type specified (`@sofie-automation/require-typed-object-values-and-entries`)

💼 This rule is enabled in the 🌐 `all` config.

<!-- end auto-generated rule header -->

This enforces that explicit typings must be provided to `Object.values` and `Object.entries` calls.  
Sometimes Typescript will determine that the output type is `any`, often if an invalid object is supplied, this will let typescript to a type check to make sure the input object matches the requested output type

### ❌ Incorrect

```ts
Object.values(a)

Object.entries(a)
```

### ✅ Correct

```ts
Object.values<string>(a)

Object.entries<string>(a)
```
