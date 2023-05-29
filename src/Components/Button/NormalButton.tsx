type OutlineBtn = {
  name: string
  icon: string
}

export default function NormalButton(props: OutlineBtn) {
  return (
    <button className=" flex flex-col grow border outline-1 px-4 py-2 align-middle rounded-lg items-center text-sm text-gray-500">
      {props.icon}{props.name}
    </button>
  )
}
