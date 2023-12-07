# Paraply: Minimalistic State Manager

## Introduction
Paraply - a streamlined and efficient state management tool for react.

## Features
- **Lightweight and Minimal**: Paraply is built with simplicity in mind, ensuring minimal overhead.
- **Easy Integration**: Seamlessly integrates into your project with an intuitive API.
- **Global State Management**: Facilitates effective and easy management of global state across your application.

## Installation
To install Paraply, simply run the following command:

```bash
npm install paraply
```

## Usage
Here's how to get started with Paraply in your project:

```javascript
// Example of importing and initializing Paraply
import { createParaply, useParaply } from 'paraply';

let store = createParaply({ count: 0 });

export function Component() {
    const [state, setState] = useParaply(store);

    const inc = () => {
        setState((prev) => ({
            ...prev,
            count: prev.count + 1,
        }));
    };

    return (
        <div>
            <h1>Component</h1>
            <h1>{state.count}</h1>
            <button onClick={inc}>+1</button>
        </div>
    );
}
```

## Documentation
For more detailed information and advanced usage, please refer to our [documentation](https://github.com/syntax-punk/paraply).

## Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make to Paraply are **greatly appreciated**. 

## License
Paraply is licensed under the MIT License - see the [LICENSE](https://github.com/syntax-punk/paraply/blob/master/LICENSE) file for details.

## Support and Questions
For support, questions, or feature requests, please open an issue in the [GitHub repository](https://github.com/syntax-punk/paraply/issues).

Thank you for considering Paraply for your state management needs!
