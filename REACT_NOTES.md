# REACT

## React Fragment

## Props

## Reconciliation

## React Hooks

- <span style="color:white; font-weight: 600; font-size: 16px">useState : </span>

hook from react library provides a way to create state variables inside components. *useHook* returns a **state variable** and a **callback function** that can be used to update the value of the variable.

> [!Note]
> Everytime the value of the variable is updated react re-renders the component.

``` javascript
    import { useState } from "react";

    const HomeComponent = () => {
        // Create a state variable with initial value using useState
        const [count, setCount] = useState(0);
        return (
            <h1>Home</h1>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count+1)
            }}>
        );
    }
```

- **useEffect**

## React Router

### React Router Hooks
- **useParams**
- **useRouteError**
