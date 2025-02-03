import { CircleCheckBig, CircleX } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./button";
import { Card, CardContent, CardFooter, CardHeader } from "./card";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { useNoteStore, Note } from "@/store/useNotesStore";

interface UpdateCardProps {
  note?: Note;
  onCancel?: () => void;
  onNoteAdded?: () => void;
}

export const UpdateCard = ({
  note,
  onCancel,
  onNoteAdded,
}: UpdateCardProps) => {
  const [noteToCreate, setNoteToCreate] = useState<Note>({
    id: note?.id || "",
    title: note?.title || "",
    content: note?.content || "",
    date: note?.date || "",
    status: note?.status || "toStart",
  });

  const addNote = useNoteStore((state) => state.addNote);
  const updateNote = useNoteStore((state) => state.updateNote);

  useEffect(() => {
    if (note) {
      setNoteToCreate(note);
    }
  }, [note]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 36) {
      setNoteToCreate({ ...noteToCreate, title: e.target.value });
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length <= 200) {
      setNoteToCreate({ ...noteToCreate, content: e.target.value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!noteToCreate.title.trim() || !noteToCreate.content.trim()) return;

    if (note) {
      updateNote(noteToCreate.id, noteToCreate.title, noteToCreate.content);
    } else {
      addNote(noteToCreate.title, noteToCreate.content);
      if (onNoteAdded) onNoteAdded();
    }

    setNoteToCreate({
      title: "",
      content: "",
      id: "",
      date: "",
      status: "toStart",
    });
    if (onCancel) onCancel();
  };

  return (
    <Card>
      <CardHeader className="pr-6">
        <Input
          placeholder="Note Title"
          value={noteToCreate.title}
          onChange={handleTitleChange}
        />
      </CardHeader>
      <CardContent>
        <Textarea
          className="resize-none"
          placeholder="Something cool to note"
          value={noteToCreate.content}
          onChange={handleContentChange}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        {note ? (
          <>
            <Button
              className="bg-[#202D40] hover:bg-[#334977]"
              onClick={handleSubmit}
            >
              <CircleCheckBig className="h-5 w-5" />
            </Button>
            {onCancel && (
              <Button
                className="bg-red-500 hover:bg-red-700"
                onClick={onCancel}
              >
                <CircleX className="h-5 w-5" />
              </Button>
            )}
          </>
        ) : (
          <Button
            className="w-full bg-[#202D40] hover:bg-[#334977]"
            onClick={handleSubmit}
          >
            Add Note
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
