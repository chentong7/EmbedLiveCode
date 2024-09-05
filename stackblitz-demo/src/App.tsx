import sdk from "@stackblitz/sdk";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <script type="module">
        import sdk from 'https://unpkg.com/@stackblitz/sdk@1/bundles/sdk.m.js';
        sdk.embedGithubProject('embed', 'chentong7/FluidExamples', {});
      </script>
    </div>
  );
}

// Imports https://github.com/username/repository-name to StackBlitz,
// and embeds the resulting StackBlitz project in the current page
// sdk.embedGithubProject("embed", "chentong7/FluidExamples", {
//   terminalHeight: 45,
// });
sdk.openGithubProject("chentong7/FluidExamples", {
  newWindow: false,
  clickToLoad: true,
  forceEmbedLayout: true,
  theme: "light",
  view: "editor",
});

// Imports the 'examples/getting-started' sub-folder of the 'main' branch of
// the https://github.com/username/repository-name repository to StackBlitz,
// and opens the resulting StackBlitz project in a new tab
// sdk.openGithubProject("chentong7/FluidExamples/tree/main/README.md");

export default App;
