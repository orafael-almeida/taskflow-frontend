"use client";

import { CirclePlus } from "lucide-react";
import { Button } from "../ui/button";
import { SearchInput } from "../ui/input";
import Container from "./Container";
import React from "react";

interface MenuOptionsProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}
const MenuOptions = ({ searchValue, setSearchValue }: MenuOptionsProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <div className="flex justify-between items-center py-6">
        <h1 className="text-4xl font-semibold text-slate-700">My Notes</h1>

        <Button className="flex items-center space-x-2 bg-[#334977] hover:bg-[#25375a]">
          <CirclePlus />
          New Task
        </Button>
      </div>

      <div className="py-6">
        <SearchInput
          className="max-w-[400px] focus:ring-1"
          placeholder="Search Notes Title"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
    </Container>
  );
};

export default MenuOptions;
