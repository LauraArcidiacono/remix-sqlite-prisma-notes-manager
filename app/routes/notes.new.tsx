import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { createNote } from "~/models/note.server";
import { requireUserId } from "~/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const title = formData.get("title");
  const body = formData.get("body");
  const topic = formData.get("topic");
  const favorites = formData.get("favorites") === "true";

  // Validations
  if (typeof title !== "string" || title.length === 0) {
    return json(
      {
        errors: {
          title: "Title is required",
          body: null,
          topic: null,
          favorites: null,
        },
      },
      { status: 400 },
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json(
      {
        errors: {
          title: null,
          body: "Body is required",
          topic: null,
          favorites: null,
        },
      },
      { status: 400 },
    );
  }

  if (typeof topic !== "string" || topic.length === 0) {
    return json(
      {
        errors: {
          title: null,
          body: null,
          topic: "Topic is required",
          favorites: null,
        },
      },
      { status: 400 },
    );
  }
  // End Validations

  const note = await createNote({ body, title, userId, topic, favorites });
  return redirect(`/notes/${note.id}`);
};

export default function NewNotePage() {
  const actionData = useActionData<typeof action>();

  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const topicRef = useRef<HTMLSelectElement>(null);
  const favoritesRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (actionData?.errors?.title) {
      titleRef.current?.focus();
    } else if (actionData?.errors?.body) {
      bodyRef.current?.focus();
    } else if (actionData?.errors?.topic) {
      topicRef.current?.focus();
    } else if (actionData?.errors?.favorites) {
      favoritesRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span className="text-sm font-medium text-yellow-700">Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 appearance-none rounded-md border border-yellow-500 bg-white px-3 py-2
            text-sm leading-tight text-yellow-700 focus:border-yellow-600 focus:outline-none focus:ring-1
            focus:ring-yellow-600"
            aria-invalid={actionData?.errors?.title ? true : undefined}
            aria-errormessage={
              actionData?.errors?.title ? "title-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.title ? (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.title}
          </div>
        ) : null}
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span className="text-sm font-medium text-yellow-700">Body: </span>
          <textarea
            ref={bodyRef}
            name="body"
            rows={8}
            className="w-full appearance-none rounded-md border border-yellow-500 bg-white px-3 py-2 text-sm
            leading-tight text-yellow-700 focus:border-yellow-600 focus:outline-none focus:ring-1 focus:ring-yellow-600"
            aria-invalid={actionData?.errors?.body ? true : undefined}
            aria-errormessage={
              actionData?.errors?.body ? "body-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.body ? (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.body}
          </div>
        ) : null}
      </div>
      <div>
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium text-yellow-700">Topic:</span>
          <select
            ref={topicRef}
            name="topic"
            defaultValue="Others"
            className="block w-40 appearance-none rounded-md border border-yellow-500 bg-white px-3
            py-2 text-sm leading-tight text-yellow-700 focus:border-yellow-600 focus:outline-none focus:ring-1
            focus:ring-yellow-600"
            aria-invalid={actionData?.errors?.topic ? true : undefined}
            aria-errormessage={
              actionData?.errors?.topic ? "topic-error" : undefined
            }
          >
            <option value="Family">Family</option>
            <option value="Work">Work</option>
            <option value="Travels">Travels</option>
            <option value="Friends">Friends</option>
            <option value="Others">Others</option>
          </select>
        </label>
        {actionData?.errors?.topic ? (
          <div className="mt-1 text-sm text-red-600" id="topic-error">
            {actionData.errors.topic}
          </div>
        ) : null}
      </div>
      <div className="mt-4">
        <label className="flex items-center gap-2">
          <span className="text-sm font-medium text-yellow-700">Favorite:</span>
          <input
            ref={favoritesRef}
            type="checkbox"
            name="favorites"
            value="true"
            className="h-4 w-4 rounded accent-yellow-500 border-yellow-500 text-yellow-600 focus:ring-yellow-500"
            aria-invalid={actionData?.errors?.favorites ? true : undefined}
            aria-errormessage={
              actionData?.errors?.favorites ? "topic-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.favorites ? (
          <div className="mt-1 text-sm text-red-600" id="topic-error">
            {actionData.errors.favorites}
          </div>
        ) : null}
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 focus:bg-yellow-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
