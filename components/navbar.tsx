import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import { SignOut } from "@phosphor-icons/react";

// components
import ButtonMobileMenu from "./button/buttonMobileMenu";

const Navbar = () => {
  return (
    <nav className="bg-white px-6">
      <div className="flex h-20 items-center justify-between xl:justify-end">
        <ButtonMobileMenu />

        <Dropdown>
          <DropdownTrigger>
            <div className="inline-flex items-center gap-2 hover:cursor-pointer">
              <Avatar
                isBordered
                size="sm"
                color="primary"
                src="https://i.pravatar.cc/150?u=a04258114e29026302d"
              />

              <div className="-space-y-1">
                <h6 className="text-default-900 mb-1 text-sm font-bold">
                  Super Admin
                </h6>
                <p className="text-default-500 text-[12px] font-medium uppercase">
                  FGLabs Agency
                </p>
              </div>
            </div>
          </DropdownTrigger>

          <DropdownMenu aria-label="profile actions">
            <DropdownSection
              aria-label="danger zone section"
              title="Anda Yakin?"
            >
              <DropdownItem
                key="logout"
                color="danger"
                startContent={<SignOut weight="bold" size={18} />}
                onClick={() => confirm("apakah anda yakin?")}
                className="text-danger-600 font-bold"
              >
                Keluar
              </DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
