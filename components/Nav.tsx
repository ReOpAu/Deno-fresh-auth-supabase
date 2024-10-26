interface NavProps {
  isLoggedIn: boolean;
  active: string;
}

export default function Nav({ isLoggedIn, active }: NavProps) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
  ];

  const loggedInMenus = [
    { name: "Dashboard", href: "/auth/dashboard" },
    { name: "Logout", href: "/logout" },
  ];

  const nonLoggedInMenus = [
    { name: "Login", href: "/login" },
    { name: "SignUp", href: "/signup" },
  ];

  const isActive = (href: string) => active === href ? "font-bold" : "";

  return (
    <div class="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="text-2xl ml-1 font-bold">
        <a href="/">Fresh Auth</a>
      </div>
      <ul class="flex gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={`text-gray-500 hover:text-gray-700 py-1 border-gray-500 ${isActive(menu.href)}`}
            >
              {menu.name}
            </a>
          </li>
        ))}

        {isLoggedIn ? (
          loggedInMenus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={`text-gray-500 hover:text-gray-700 py-1 border-gray-500 ${isActive(menu.href)}`}
              >
                {menu.name}
              </a>
            </li>
          ))
        ) : (
          nonLoggedInMenus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={`text-gray-500 hover:text-gray-700 py-1 border-gray-500 ${isActive(menu.href)}`}
              >
                {menu.name}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
