export default function Fetch({
  loading,
  data,
  renderSuccess,
  loadingFallback = <p>Loading...</p>,
  renderError = <p>Error</p>
}) {
  console.log(loading);
  if (loading === "idle") return loadingFallback;
  if (loading === "loading") return loadingFallback;
  if (loading === "error") return renderError;
  console.log(data);
  return renderSuccess({ data });
}