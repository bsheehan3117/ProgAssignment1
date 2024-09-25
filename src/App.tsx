// ************** THIS IS YOUR APP'S ENTRY POINT. CHANGE THIS FILE AS NEEDED. **************
// ************** DEFINE YOUR REACT COMPONENTS in ./components directory **************
import FakeStackOverflow from "./components/fakestackoverflow";

import data from "./data/data";
import Application from "./models/application";

function App() {
    const app = Application.getInstance(data)
    return (
        <section className="fakeso">
            <FakeStackOverflow app={app} />
        </section>
    );
}

export default App;
