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

  if (typeof title !== "string" || title.length === 0) {
    return json(
      { errors: {
          body: null,
          title: "Title is required",
          topic: null,
          favorites: null,
        }
      },
      { status: 400 },
    );
  }

  if (typeof body !== "string" || body.length === 0) {
    return json(
      { errors: {
          body: "Body is required",
          title: null,
          topic: null,
          favorites: null,
        }
      },
      { status: 400 },
    );
  }

  if (typeof topic !== "string") {
    return json(
      { errors: {
          body: null,
          title: null,
          topic: "Topic is required",
          favorites: null,
        }
      },
      { status: 400 },
    );
  }

  const note = await createNote({ body, title, userId, topic, favorites });

  return redirect(`/notes/${note.id}`);
};

export default function NewNotePage() {
  const actionData = useActionData<typeof action>();
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
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
          <span>Title: </span>
          <input
            ref={titleRef}
            name="title"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
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
          <span>Body: </span>
          <textarea
            ref={bodyRef}
            name="body"
            rows={8}
            className="w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6"
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
        <label className="flex w-full flex-col gap-1">
          <span>Topic: </span>
          <select
            name="select"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.topic ? true : undefined}
            aria-errormessage={ actionData?.errors?.topic ? "topic-error" : undefined }
          >
              <option value="Family">Family</option>
              <option value="Work">Work</option>
              <option value="Travels">Travels</option>
              <option value="Friends">Friends</option>
              <option value="Others" selected>Others</option>
          </select>
        </label>
        {actionData?.errors?.topic ? (
          <div className="pt-1 text-red-700" id="topic-error">
            {actionData.errors.topic}
          </div>
        ) : null}
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Favorite: </span>
          <input
            name="favorites"
            value="false"
            type="checkbox"
          />
        </label>
        {actionData?.errors?.topic ? (
          <div className="pt-1 text-red-700" id="topic-error">
            {actionData.errors.topic}
          </div>
        ) : null}
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
