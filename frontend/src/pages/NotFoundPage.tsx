import { useRouteError } from "react-router-dom"

const NotFoundPage = () => {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="flex flex-col px-4 text-center gap-y-2 items-center justify-center h-screen ">
      <p>Oops!</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="capitalize font-bold text-lg md:text-xl">404 not found</p>
    </div>
  )
}

export default NotFoundPage
