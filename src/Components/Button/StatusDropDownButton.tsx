import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

type NoBgBtn ={
  name: string
}

export default function TestBtn(props: NoBgBtn) {
  return (
    <div className=" z-50">
      <Menu as="div" className="relative lg:inline-block md:inline-block lg:text-left md:text-left ">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm border border-gray-300 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {props.name}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className=" z-50 absolute md:right-0 mt-2 md:w-56 w-full md:origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-green-600' : 'text-gray-900'
                    } group flex w-full items-center rounded-t-md px-2 py-2 text-sm`}
                  >
                    Pending
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-green-600' : 'text-gray-900'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    Accepted
                  </button>
                )}
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-green-600' : 'text-gray-900'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    Overdue
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-green-600' : 'text-gray-900'
                    } group flex w-full items-center px-2 py-2 text-sm`}
                  >
                    Draft
                  </button>
                )}
              </Menu.Item>
            </div>
            <div>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-gray-100 text-green-600' : 'text-gray-900'
                    } group flex w-full items-center  rounded-b-md px-2 py-2 text-sm`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

