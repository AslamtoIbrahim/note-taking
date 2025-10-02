const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-2 px-4 text-center">
      <p>Oops!</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-lg font-bold capitalize md:text-xl">404 not found</p>
    </div>
  );
};

export default NotFoundPage;
