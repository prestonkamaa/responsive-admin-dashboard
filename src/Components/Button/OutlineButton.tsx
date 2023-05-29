type OutlineBtn = {
  name: string
  icon: string
}

export default function OutlineButton(props: OutlineBtn) {
  return (
    <button className=" flex flex-col grow border outline-1 py-2 align-middle rounded-2xl items-center text-sm text-gray-500">
      {props.icon}{props.name}
    </button>
  )
}
