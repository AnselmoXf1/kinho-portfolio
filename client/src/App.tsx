import Home from "@/pages/Home";

function App() {
  try {
    return <Home />;
  } catch (error) {
    console.error('Error rendering Home:', error);
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        <h1>Error loading portfolio</h1>
        <p>Check console for details</p>
        <pre>{String(error)}</pre>
      </div>
    );
  }
}

export default App;
