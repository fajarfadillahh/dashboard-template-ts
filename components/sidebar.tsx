import {
  ArchiveBox,
  ChartBar,
  House,
  Images,
  ListPlus,
} from "@phosphor-icons/react";
import Link from "next/link";

// components
import ButtonSidebar from "@/components/button/buttonSidebar";

const Sidebar = () => {
  return (
    <div className="hidden bg-gray-50 xl:flex xl:h-full xl:min-w-[250px] xl:flex-col xl:gap-[30px] xl:px-[20px] xl:py-[30px]">
      <Link href="/" className="inline-flex items-center justify-center gap-2">
        <div className="bg-primary h-6 w-6 rounded-full" />

        <div className="text-default-900 font-bold">
          FGLabs<span className="text-primary">.</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col overflow-y-scroll">
        <div className="grid gap-1">
          <ButtonSidebar
            label="Dashboard"
            path="/dashboard"
            icon={<House weight="bold" size={20} />}
          />

          <ButtonSidebar
            label="Produk"
            path="/product"
            icon={<ArchiveBox weight="bold" size={20} />}
          />

          <ButtonSidebar
            label="Statistik"
            path="/statistic"
            icon={<ChartBar weight="bold" size={20} />}
          />

          <ButtonSidebar
            label="Banner"
            path="/banner"
            icon={<Images weight="bold" size={20} />}
          />

          <ButtonSidebar
            label="Kategori"
            path="/category"
            icon={<ListPlus weight="bold" size={20} />}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
