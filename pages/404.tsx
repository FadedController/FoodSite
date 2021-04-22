const Error404 = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center min-w-full min-h-screen space-y-4 m-3">
      <span className="text-6xl font-bold text-blue-900">Error 404</span>
      <h1 className="text-3xl text-yellow-500 font-semibold text-center">
        Sorry! This page doesn't exist. Yet...
      </h1>
      <a href="/" className="text-lg font-semibold underline pt-2">
        Go back home
      </a>
    </div>
  );
};

export default Error404;
