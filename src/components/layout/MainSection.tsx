"use client";

import React, { useState } from "react";
import { useNoteStore } from "@/store/useNotesStore";
import Column from "@/components/ui/Column";
import Container from "@/components/layout/Container";
import MenuOptions from "./MenuOptions";

const MainSection = () => {
  const { getNotesByStatus } = useNoteStore();
  const [searchValue, setSearchValue] = useState("");

  const toStartNotes = getNotesByStatus("toStart").filter((note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const inProgressNotes = getNotesByStatus("inProgress").filter((note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const completedNotes = getNotesByStatus("completed").filter((note) =>
    note.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Container>
      <MenuOptions searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid grid-cols-3 gap-6 h-[calc(100vh-280px)] overflow-y-auto">
        <Column
          title="To Start"
          color="blue"
          notesList={toStartNotes}
          isToStart
        />
        <Column
          title="In Progress"
          color="yellow"
          notesList={inProgressNotes}
        />
        <Column title="Completed" color="green" notesList={completedNotes} />
      </div>
    </Container>
  );
};

export default MainSection;
