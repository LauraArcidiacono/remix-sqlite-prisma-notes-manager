import type {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import { useEffect, useRef } from "react";

import { createUser, getUserByEmail } from "~/models/user.server";
import { createUserSession, getUserId } from "~/session.server";
import { safeRedirect, validateEmail } from "~/utils";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const birthDateString = formData.get("birthDate");
  const email = formData.get("email");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  // Validations
  if (typeof firstName !== "string" || firstName.length === 0) {
    return json(
      {
        errors: {
          firstName: "First name is required",
          lastName: null,
          birthDate: null,
          email: null,
          password: null,
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  if (typeof lastName !== "string" || lastName.length === 0) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: "Last name is required",
          birthDate: null,
          email: null,
          password: null,
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  if (typeof birthDateString !== "string" || birthDateString.length === 0) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: null,
          birthDate: "Birth date is required",
          email: null,
          password: null,
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  const birthDate = new Date(birthDateString);
  if (isNaN(birthDate.getTime())) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: null,
          birthDate: "Birth date is invalid",
          email: null,
          password: null,
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  if (!validateEmail(email)) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: null,
          birthDate: null,
          email: "Email is invalid",
          password: null,
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: null,
          birthDate: null,
          email: null,
          password: "Password is required",
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  if (password.length < 8) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: null,
          birthDate: null,
          email: null,
          password: "Password must be at least 8 characters",
          generalError: null,
        },
      },
      { status: 400 },
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          firstName: null,
          lastName: null,
          birthDate: null,
          email: "Email is already in use",
          password: null,
          generalError: null,
        },
      },
      { status: 400 },
    );
  }
  // End Validations

  const user = await createUser(
    firstName,
    lastName,
    birthDate,
    email,
    password,
  );

  return createUserSession({
    redirectTo,
    remember: false,
    request,
    userId: user.id,
  });
};

export const meta: MetaFunction = () => [
  { title: "Sign Up" },
  {
    name: "author",
    content: "Laura Arcidiacono",
  },
  {
    name: "description",
    content: "Easily manage your notes with CRUD features.",
  },
  {
    name: "og:title",
    content: "Contacts Manager App",
  },
  {
    name: "og:description",
    content: "Easily manage your notes with CRUD features.",
  },
  {
    name: "og:image",
    content: "../public/assets/app-image.png",
  },
  {
    name: "og:url",
    content:
      "https://github.com/LauraArcidiacono/remix-sqlite-prisma-notes-manager",
  },
];

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData<typeof action>();
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const birthDateRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!actionData || !("errors" in actionData)) return;
    if (actionData?.errors?.firstName) {
      firstNameRef.current?.focus();
    } else if (actionData?.errors?.lastName) {
      lastNameRef.current?.focus();
    } else if (actionData?.errors?.birthDate) {
      birthDateRef.current?.focus();
    } else if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-yellow-700"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                id="firstName"
                ref={firstNameRef}
                name="firstName"
                type="text"
                aria-invalid={actionData?.errors?.firstName ? true : undefined}
                aria-describedby="firstName-error"
                className="w-full rounded border border-yellow-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.firstName ? (
                <div className="pt-1 text-red-700" id="firstName-error">
                  {actionData.errors.firstName}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-yellow-700"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                id="lastName"
                ref={lastNameRef}
                name="lastName"
                type="text"
                aria-invalid={actionData?.errors?.lastName ? true : undefined}
                aria-describedby="lastName-error"
                className="w-full rounded border border-yellow-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.lastName ? (
                <div className="pt-1 text-red-700" id="lastName-error">
                  {actionData.errors.lastName}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="birthDate"
              className="block text-sm font-medium text-yellow-700"
            >
              Birth Date
            </label>
            <div className="mt-1">
              <input
                id="birthDate"
                ref={birthDateRef}
                name="birthDate"
                type="date"
                aria-invalid={actionData?.errors?.birthDate ? true : undefined}
                aria-describedby="birthDate-error"
                className="w-full rounded border border-yellow-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.birthDate ? (
                <div className="pt-1 text-red-700" id="birthDate-error">
                  {actionData.errors.birthDate}
                </div>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-yellow-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-yellow-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.email ? (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-yellow-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-yellow-500 px-2 py-1 text-lg"
              />
              {actionData?.errors?.password ? (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              ) : null}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="w-full rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 focus:bg-yellow-400"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-yellow-500">
              Already have an account?{" "}
              <Link
                className="text-yellow-500 underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
