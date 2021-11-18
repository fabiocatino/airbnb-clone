import { Menu, Transition } from '@headlessui/react';
import { MenuAlt1Icon } from '@heroicons/react/outline';
import { UserCircleIcon } from '@heroicons/react/solid';
import { Fragment } from 'react';

export default function Dropdown() {
	return (
		<div>
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white  rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
						<div className="h-[42px] w-[77px] bg-white p-[5px 5px 5px 12px] text-gray-500 flex border rounded-full items-center justify-evenly">
							<MenuAlt1Icon className="h-4 w-4 "></MenuAlt1Icon>
							<UserCircleIcon className="h-[30px] w-[30px]"></UserCircleIcon>
						</div>
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
					<Menu.Items
						className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y 
					divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
					>
						<div className="px-1 py-1 text-black flex flex-col">
							{/* FIRST SECTION  */}

							<Menu.Item className="dropdown-btn font-semibold">
								<button>Messages</button>
							</Menu.Item>
							<Menu.Item className="dropdown-btn font-semibold">
								<button>Trips</button>
							</Menu.Item>
							<Menu.Item className="dropdown-btn border-b w-full border-gray ">
								<button>Whishlists</button>
							</Menu.Item>

							{/* SECOND SECTION  */}

							<Menu.Item className="dropdown-btn ">
								<button>Host your home</button>
							</Menu.Item>
							<Menu.Item className="dropdown-btn">
								<button>Host an experience</button>
							</Menu.Item>
							<Menu.Item className="dropdown-btn">
								<button>Refer a Host</button>
							</Menu.Item>
							<Menu.Item className="dropdown-btn  border-b w-full border-gray">
								<button>Account</button>
							</Menu.Item>

							{/* THIRD SECTION  */}

							<Menu.Item className="dropdown-btn">
								<button>Help</button>
							</Menu.Item>
							<Menu.Item className="dropdown-btn">
								<button>Log out</button>
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	);
}
