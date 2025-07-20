🛡️ ACTIVE: Advanced Client-Side Threat Elimination
ACTIVE is a modular security toolkit designed to protect modern web applications from client-side vulnerabilities like XSS, DOM-based attacks, and insecure data flows. It combines machine learning , runtime monitoring , and static analysis to provide proactive defense mechanisms.

🌟 Key Features
Input Sanitization : Real-time ML-powered input validation to block malicious payloads.
Runtime Protection : Blocks unauthorized network requests and enforces Content Security Policies (CSP).
Static Analysis : Detects insecure code patterns during builds using ESLint plugins.
React Integration : Provides hooks and HOCs for seamless integration with React apps.
Zero-Config Agent : A lightweight runtime agent that adds security without code changes.
📦 Packages in the Monorepo
The project is organized into modular packages, each serving a specific purpose:

active-core : Core logic for ML inference, input sanitization, and network monitoring.
active-react : React-specific bindings (hooks, HOCs) for easy integration.
active-eslint : Static analysis plugin to catch insecure JSX patterns during builds.
active-agent : Runtime browser script for zero-config protection.
active-demo : Example React app to test and demonstrate ACTIVE's features.
🚀 Quick Start

1. Clone the Repository
   bash

1
2
git clone https://github.com/yourusername/active.git
cd active-monorepo 2. Install Dependencies
bash

1
npm install 3. Build All Packages
bash

1
npm run build 4. Run the Demo App
bash

1
2
cd packages/active-demo
npm run dev
Open your browser at http://localhost:3000 to see ACTIVE in action.

🛠️ Usage

1. Input Sanitization (React)
   Use the useMLSanitizer hook to validate user inputs:

jsx

1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
⌄
⌄
⌄
⌄
import { useMLSanitizer } from 'active-react';

function SecureForm() {
const { sanitize } = useMLSanitizer();

const handleSubmit = async (e) => {
e.preventDefault();
const input = e.target.username.value;
const sanitized = await sanitize(input);
if (sanitized) {
console.log('Safe input:', sanitized);
} else {
console.error('Blocked malicious input.');
}
};

return <form onSubmit={handleSubmit}>...</form>;
} 2. Static Analysis (ESLint Plugin)
Add the active-eslint plugin to your ESLint config:

json

1
2
3
4
5
6
⌄
⌄
{
"plugins": ["active-eslint"],
"rules": {
"active-eslint/no-dangerous-jsx": "error"
}
}
Run ESLint to detect insecure JSX:

bash

1
npm run lint 3. Runtime Agent
Include the runtime agent in your HTML:

html

1

<script src="https://cdn.active-sec.com/v1/agent.js "></script>

This enforces CSP and blocks unsafe operations like eval().

🧠 Machine Learning Model
ACTIVE uses a pre-trained DistilBERT model fine-tuned for XSS detection. The model is hosted on a CDN and loaded dynamically via TensorFlow.js.

How It Works
User inputs are tokenized and passed through the model.
If the confidence score exceeds a threshold (e.g., 0.8), the input is flagged as malicious.
📂 Project Structure
bash

1
2
3
4
5
6
7
8
active-monorepo/
├── packages/
│ ├── active-core/ # ML models + core security logic
│ ├── active-react/ # React bindings (hooks, HOCs)
│ ├── active-eslint/ # Static analysis (ESLint plugin)
│ ├── active-agent/ # Runtime agent (browser script)
│ └── active-demo/ # Example React app for testing
└── turbo.json # Monorepo tooling (Turborepo)
🤝 Contributing
We welcome contributions! Here’s how you can help:

Report Bugs : Open an issue with details about the problem.
Suggest Features : Propose new ideas or enhancements.
Submit PRs : Fork the repo, make changes, and submit a pull request.
Development Workflow
Clone the repo and install dependencies:
bash

1
2
3
git clone https://github.com/yourusername/active.git
cd active-monorepo
npm install
Make changes to the relevant package (e.g., active-core, active-react).
Test your changes locally:
bash

1
npm run test
Submit a PR with a clear description of your changes.
⚖️ License
This project is licensed under the MIT License . See LICENSE for details.

🙏 Acknowledgments
TensorFlow.js : For enabling browser-side ML inference.
DistilBERT : For providing a lightweight NLP model.
Turborepo : For efficient monorepo management.
📢 Stay Updated
Follow us on GitHub and star this repo to stay updated with the latest features and improvements.

⚠️ Disclaimer
This is an alpha version of ACTIVE , and it is not yet complete . While we have implemented foundational features, the tool is still under active development and may contain bugs or incomplete functionality.

We strongly advise against using this in production environments until the project reaches a stable release. However, we warmly welcome you to test, experiment, and contribute to help us improve and complete the tool. Your feedback and contributions are invaluable!
