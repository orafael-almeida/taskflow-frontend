import { cn } from "@/lib/utils";
import { Circle } from "lucide-react";
import { AddNotesButton } from "./button";
import { Note, useNoteStore } from "@/store/useNotesStore";
import { useState } from "react";
import { UpdateCard } from "./UpdateCard";
import { NoteCard } from "./NoteCard";

interface ColumnProps {
  title: string;
  color: string;
  notesList: Note[];
  isToStart?: boolean;
}

const Column = ({ title, color, notesList, isToStart }: ColumnProps) => {
  const [isAddingNewNote, setIsAddingNewNote] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const { removeNote, updateStatus, getNoteStatus } = useNoteStore();

  const handleCreateNewNote = () => {
    setIsAddingNewNote((prev) => !prev);
  };

  const handleEditNote = (note: Note) => {
    setEditingNote(note);
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
  };

  const handleNoteAdded = () => {
    setIsAddingNewNote(false);
  };

  const handleStatusUpdate = (id: string) => {
    console.log("Update status ativado para o id:", id);
    const noteStatus = getNoteStatus(id);
    if (noteStatus === "toStart") {
      updateStatus(id, "inProgress");
    } else {
      updateStatus(id, "completed");
    }
  };

  const colors: Record<string, string> = {
    blue: "text-blue-200",
    green: "text-green-200",
    yellow: "text-yellow-200",
  };

  return (
    <div>
      <div className="flex gap-2 mb-4 items-center mt-4">
        <Circle
          className={cn(colors[color] || "text-gray-200", "h-[20px]")}
          fill="currentColor"
        />
        <h3 className="text-base">{title}</h3>
      </div>
      <div className="bg-[#F2F6FF] dark:bg-gray-900 min-h-[calc(100vh-360px)] h-max space-y-4 p-4 rounded-xl flex flex-col">
        {notesList.map((note) =>
          editingNote && editingNote.id === note.id ? (
            <UpdateCard
              key={note.id}
              note={editingNote}
              onCancel={handleCancelEdit}
            />
          ) : (
            <NoteCard
              key={note.id}
              title={note.title}
              status={note.status}
              date={note.date}
              content={note.content}
              onEdit={() => handleEditNote(note)}
              onDelete={() => removeNote(note.id)}
              onUpdateStatus={() => handleStatusUpdate(note.id)}
              noteId={note.id}
            />
          )
        )}
        {isAddingNewNote && <UpdateCard onNoteAdded={handleNoteAdded} />}
        {isToStart && (
          <AddNotesButton
            onClick={handleCreateNewNote}
            state={isAddingNewNote}
          />
        )}
      </div>
    </div>
  );
};

export default Column;
