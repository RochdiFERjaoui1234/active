// active-demo/src/App.jsx
function UnsafeComponent() {
  return <div dangerouslySetInnerHTML={{ __html: "Hacked!" }} />;
}