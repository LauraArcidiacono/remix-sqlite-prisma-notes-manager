import type { User, Note } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Note };

export function getNote({
  id,
  userId,
}: Pick<Note, "id"> & {
  userId: User["id"];
}) {
  return prisma.note.findFirst({
    select: { id: true, body: true, title: true, topic: true, favorites: true },
    where: { id, userId },
  });
}

export function getNoteListItems({ userId }: { userId: User["id"] }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true, favorites: true },
    orderBy: { updatedAt: "desc" },
  });
}

export function createNote({
  body,
  title,
  topic,
  favorites,
  userId,
}: Pick<Note, "body" | "title" | "topic" | "favorites"> & {
  userId: User["id"];
}) {
  return prisma.note.create({
    data: {
      title,
      body,
      topic,
      favorites,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteNote({
  id,
  userId,
}: Pick<Note, "id"> & { userId: User["id"] }) {
  return prisma.note.deleteMany({
    where: { id, userId },
  });
}
