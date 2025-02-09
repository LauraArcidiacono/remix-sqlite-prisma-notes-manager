import { Form, Link } from "@remix-run/react";

import { useUser } from "~/utils";

interface HeaderProps {
  page: string;
  title: string;
}

export default function Header({ title, page }: HeaderProps) {
  const user = useUser();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-slate-800 p-4 text-white">
      <div>
        <p className="block text-3xl font-bold">{`${user.firstName} ${user.lastName}`}</p>
        <h2 className="text-1xl block font-bold">{title}</h2>
      </div>
      <div className="flex items-center justify-between bg-slate-800 p-4 text-white">
        {page === "notes" ? (
          <Link
            to={`/mails`}
            className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 focus:bg-yellow-400"
          >
            Go to Mails
          </Link>
        ) : (
          <Link
            to={`/notes`}
            className="rounded bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600 focus:bg-yellow-400 mr-3"
          >
            Go to Notes
          </Link>
        )}
        <Form action="/logout" method="post">
          <button
            type="submit"
            className="rounded bg-slate-600 px-4 py-2 text-yellow-100 hover:bg-yellow-500 active:bg-yellow-600 ml-3"
          >
            Logout
          </button>
        </Form>
      </div>
    </header>
  );
}
