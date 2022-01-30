export default function Fetch({
  loading,
  data = [],
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = <p>Error</p>
}) {
  switch (loading) {
    case "idle":
      return loadingFallback;
    case "loading":
      return loadingFallback;
    case "error":
      return renderError;
    default:
      return renderSuccess({ data });
  }

}