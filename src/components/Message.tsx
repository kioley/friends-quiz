import { useQuizStore } from "../store"
import { Button } from "./Button"

export function Message() {
  const { message, image } = useQuizStore((s) => s.modal)

  return (
    <div className="fixed w-full h-full flex items-center justify-center">
      <div className="w-11/12 h-[90%] p-[10%] bg-black bg-opacity-50 backdrop-blur border rounded-2xl border-sky-500 flex flex-col justify-between">
        <p className="text-[5cqi] text-white text-center">{message}</p>
        <img src={image} alt="Image" />
        <Button label="OK" onClick={() => true} />
      </div>
    </div>
  )
}