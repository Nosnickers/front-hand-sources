# 引用依赖问题

```js
// 当你决定引入 `useCallback` 来解决重复渲染问题
function App() {
  // 请求 A 所需要的参数
  const [a1, setA1] = useState("");
  const [a2, setA2] = useState("");
  // 请求 B 所需要的参数
  const [b1, setB1] = useState("");
  const [b2, setB2] = useState("");

  // 请求 A，并处理返回结果
  const reqA = useCallback(() => {
    requestA(a1, a2);
  }, [a1, a2]);

  // 请求 A、B，并处理返回结果
  const reqB = useCallback(() => {
    reqA(); // `reqA`的引用始终是最开始的那个，
    requestB(b1, b2); // 当`a1`,`a2`变化后`reqB`中的`reqA`其实是过时的。
  }, [b1, b2]); // 当然，把`reqA`加到`reqB`的依赖数组里不就好了？
  // 但你在调用`reqA`这个函数的时候，
  // 你怎么知道「应该」要加到依赖数组里呢？
  return (
    <>
      <Comp onClick={reqA}></Comp>
      <Comp onClick={reqB}></Comp>
    </>
  );
}
```
