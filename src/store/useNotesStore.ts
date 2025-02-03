import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

export type Status = "toStart" | "inProgress" | "completed" | undefined;

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  status: Status;
}

interface NoteStore {
  notes: Note[];
  addNote: (title: string, content: string) => void;
  updateNote: (id: string, title: string, content: string) => void;
  updateStatus: (id: string, status: Status) => void;
  removeNote: (id: string) => void;
  getNotesByStatus: (status: Status) => Note[];
  getNoteStatus: (id: string) => Status | undefined;
}

export const useNoteStore = create<NoteStore>((set, get) => ({
  notes: [
    {
      id: "1",
      title: "Learn Golang Basics",
      content:
        "Study the basics of Go, including variables, data types, control structures, and basic syntax. Start with writing simple programs like Hello World and basic math operations.",
      date: "02/02/2025",
      status: "completed",
    },

    {
      id: "3",
      title: "Projeto MasterClass",
      content:
        "Criar uma aplicação completa para gerenciamento de notas pessoais com React/Next e Node.js. Infelizmente não foi possível concluir o projeto, peço desculpas ao mentor.",
      date: "02/02/2025",
      status: "inProgress",
    },
  ],
  addNote: (title, content) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: uuidv4(),
          title,
          content,
          date: format(new Date(), "dd/MM/yyyy"),
          status: "toStart",
        },
      ],
    })),

  updateNote: (id, title, content) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, title, content } : note
      ),
    })),

  updateStatus: (id, status) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, status } : note
      ),
    })),

  removeNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),

  getNotesByStatus: (status) =>
    get().notes.filter((note) => note.status === status),

  getNoteStatus: (id) => get().notes.find((note) => note.id === id)?.status,
}));
