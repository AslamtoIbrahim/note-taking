

type ButtonProp = {
  text: string
}
const SubmitButton = ({text}: ButtonProp) => {
  return (
    <button className="capitalize bg-primary  rounded w-full hover:bg-primary/80 cursor-pointer py-1 text-white" type="submit" >
        {text}
    </button>
  )
}

export default SubmitButton
