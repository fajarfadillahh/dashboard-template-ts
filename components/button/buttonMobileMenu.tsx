import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  ArchiveBox,
  ChartBar,
  House,
  Images,
  List,
  ListPlus,
} from "@phosphor-icons/react";
import { useRouter } from "next/router";

const ButtonMobileMenu = () => {
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          aria-label="menu list mobile view button"
          variant="bordered"
          size="sm"
          radius="md"
          color="default"
          className="xl:hidden"
        >
          <List weight="bold" size={16} className="text-default-900" />
        </Button>
      </DropdownTrigger>

      <DropdownMenu aria-label="profile actions">
        <DropdownItem
          key="dashboard"
          startContent={<House weight="bold" size={20} />}
          onClick={() => router.push("/dashboard")}
        >
          Dashboard
        </DropdownItem>

        <DropdownItem
          key="product"
          startContent={<ArchiveBox weight="bold" size={20} />}
          onClick={() => router.push("/product")}
        >
          Produk
        </DropdownItem>

        <DropdownItem
          key="statistic"
          startContent={<ChartBar weight="bold" size={20} />}
          onClick={() => router.push("/statistic")}
        >
          Statistik
        </DropdownItem>

        <DropdownItem
          key="banner"
          startContent={<Images weight="bold" size={20} />}
          onClick={() => router.push("/banner")}
        >
          Banner
        </DropdownItem>

        <DropdownItem
          key="category"
          startContent={<ListPlus weight="bold" size={20} />}
          onClick={() => router.push("/category")}
        >
          Kategori
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ButtonMobileMenu;
