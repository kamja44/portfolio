npm i recoil

index.jsx

```jsx
root.render(
  <RecoilRoot>
    <GlobalStyle />
    <App />
  </RecoilRoot>
);
```

create atom.js

```js
import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: true,
});
```

생성한 atom값 사용하기

- useRecoilValue(key)

App.jsx

```jsx
function App() {
  const isDark = useRecoilValue(isDark);
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}></ThemeProvider>
  );
}
```

Atom 값 수정하기

- useSetRecoilState(atom이름)

```jsx
function App() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);
  return <button onClick={toggleDarkAtom}></button>;
}
```
