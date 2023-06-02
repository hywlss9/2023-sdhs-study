function MyReact() {
  const options = {
    currentStateKey: 0,
    renderCount: 0,
    states: [],
    root: null,
    rootComponent: null,
  };

  function useState(initState) {
    const { currentStateKey: key, states } = options;
    if (states.length === key) {
      states.push(initState);
    }

    // state를 할당
    const state = states[key];
    const setState = (newState) => {
      if (newState === state) return;
      states[key] = newState;
      _render();
    };
    options.currentStateKey += 1;
    return [state, setState];
  }

  function render(rootComponent, root) {
    options.root = root;
    options.rootComponent = rootComponent;
    _render();
  }

  const _render = debounceFrame(() => {
    const { root, rootComponent } = options;
    if (!root || !rootComponent) return;
    root.innerHTML = rootComponent();
    options.currentStateKey = 0;
    options.renderCount += 1;
  });

  return { useState, render };
}

function debounceFrame(callback) {
  let nextFrameCallback = -1;
  return () => {
    cancelAnimationFrame(nextFrameCallback);
    nextFrameCallback = requestAnimationFrame(callback);
  };
}

const { useState, render } = MyReact();

function CounterAndMeow() {
  const [count, setCount] = useState(1);
  const [cat, setCat] = useState("야옹 !");

  function countMeow(newCount) {
    setCount(newCount);
    setCat("야옹! ".repeat(newCount));
  }

  window.increment = () => countMeow(count + 1);
  window.decrement = () => countMeow(count - 1);

  return `
        <div>
          <p>고양이가 ${count}번 울어서 ${cat} </p>
          <button onclick="increment()">증가</button>
          <button onclick="decrement()">감소</button>
        </div>
      `;
}

const App = () => `
  <div>
    ${CounterAndMeow()}
  </div>
`;

render(App, document.querySelector("#app"));
