export default function Fetch({
  loading,
  data,
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = <p>Error</p>
}) {
  if (loading === "idle") return loadingFallback;
  if (loading === "loading") return loadingFallback;
  if (loading === "error") return renderError;
  return renderSuccess({ data });
}