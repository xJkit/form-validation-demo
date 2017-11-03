# Form validation demo

The validations of this project are under `redux-form`;

```sh
  yarn && yarn start
```

## Sync Validation

Synchronous Form 就是 input 只要有變動就會 dispatch actions: `@@redux-form/EVENT`.

驗證方式：提供 validation/warning function 到 decorator 作為 config parameter,或是作為 props 丟到 decorated form component

請注意，不要直接在 render 裡面寫 inline input, 這會每次都渲染一個新的輸入框；相反地，我們希望盡可能重複使用驗證邏輯和輸入框組件

## Field-level Validation

Field-level Validation 也是 Sync Form, 差別是 validators 邏輯的位置不同

跟Sync Form 相比， Field-level 可以把 validators 全部獨立出去變成外掛，再根據不同的欄位掛上不同的規則

掛在 Field 組件上的 validate 是一個陣列， validators 都是一個個驗證函數，回傳 String 就是錯誤訊息，回傳 undefined 表示通過驗證。

## Submit Validation

Submit Validation 使用後端驗證，模擬發送一個 API 到後端 3 秒回傳認證結果

認證邏輯做在打 API 的 action 上，被包在 handleSubmit，使用 Promise. 認證成功 resolve, 失敗則 Promise.reject 一個 Redux-form 特定的 Error Object: SubmissionError

表單的畫法跟 SyncForm 一模一樣，僅差別在 validation 抽離了 redux-form decorator

照理來說 Sync validation 跟 Submit validation 應該要一起做, 為了程式碼簡潔而分開。

## Initialize Form with initial states

Redux-form 提供一個特別的 props 叫做 initialValues, 這個物件讓你設定 Field 的初始值，根據各欄位的 name 丟值進去就好。

設定 initialValues 的兩種方式：

直接設定 initialValues 這個特別的 props.
你可以從 reduxForm 的 options, 初始化時 hardcode 進去
或是從 store 抓出來，寫在 mapStateToProps 裡面，在這裡指定 initialValues. 注意！！如果 initialValues 要從 store 拿值， reduxForm 的 decorator 必須寫在 connect 裡面。
使用 redux-form 獨有的 action creator: initialize(form: string, data: object, keepDirty: boolean)
設定初始值後，就是這個 form 狀態的 pristine. 使用 reset 將會恢復到 pristine 的狀態。

## Remote Submit Form

Remote Submit 使用場景是當 Button:submit 不在該 form 底下，所以接收不到 child 的 onSubmit 事件

解法是透過 Redux actions.
遙遠的 Button 組件在 onClick 事件來 dispatch 來自 redux-form 的特殊 action creators: submit 或 reset
submit/reset 會指定 form name, 在該 form 的 reduxForm decorator options 中透過 onSubmit 傳自己的 mySubit 函數
而 原本的 form 組件上面的 onSubmit 就依舊是 handleSubmit props.