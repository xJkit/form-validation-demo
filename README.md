# Form validation demo

The validations of this project are under `redux-form`;

```sh
  yarn && yarn start
```

## Sync Validation

Synchronous Form 就是 input 只要有變動就會 dispatch actions: `@@redux-form/EVENT`.

驗證方式：提供 validation/warning function 到 decorator 作為 config parameter,或是作為 props 丟到 decorated form component

請注意，不要直接在 render 裡面寫 inline input, 這會每次都渲染一個新的輸入框；相反地，我們希望盡可能重複使用驗證邏輯和輸入框組件
