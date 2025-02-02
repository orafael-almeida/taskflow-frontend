import { CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import { SearchInput } from "../ui/input";
import Container from "./Container";

const MenuOptions = () => {
  return (
    <Container>
      <div className="flex justify-between items-center py-6">
        <h1 className="text-4xl font-semibold text-slate-700">My Notes</h1>

        <Button className="flex items-center space-x-2 bg-[#202D40] hover:bg-[#334977]">
          <CirclePlus />
          New Task
        </Button>
      </div>

      <div className="py-6">
        <SearchInput className="max-w-[400px]" placeholder="Search Notes" />
      </div>
    </Container>
  );
};

export default MenuOptions;
