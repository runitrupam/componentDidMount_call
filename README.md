# componentDidMount

- componentDidMount() only runs once after the first render.
- componentDidMount() may be called multiple times if the key prop value for the component changes.
- componentDidMount method is used for handling all network requests and setting up subscriptions during the mounting phase.
- It is safe to use async/await with the componentDidMount() method.
