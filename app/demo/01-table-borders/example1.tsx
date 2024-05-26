"use client";

import { users } from "./data";
import { onCaptureWithHtml2Canvas } from "./on-capture";

export const Example1 = () => {
  const columns = users[0] ? Object.keys(users[0]) : [];

  return (
    <section>
      <div className="flex items-center space-x-4 mb-2">
        <h2 className="text-xl">Example 1: Original</h2>
        <button
          className="rounded px-2 py-1 bg-fuchsia-50/50 hover:bg-fuchsia-50/60"
          onClick={() => onCaptureWithHtml2Canvas("example1")}
        >
          📸
        </button>
      </div>

      <div id="example1" className="p-2 bg-white">
        <table className="text-zinc-700 w-full">
          <thead>
            <tr className="py-1">
              {columns.map((column) => (
                <th
                  key={column}
                  className="border border-fuchsia-900 p-2 capitalize"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="py-1">
                {columns.map((column) => (
                  <td key={column} className="border border-fuchsia-900 p-2">
                    {user[column as keyof typeof user]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
