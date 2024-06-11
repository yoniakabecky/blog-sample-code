import { scores, subjects, users } from "./data";

export const ComplexTable = () => {
  return (
    <table className="text-zinc-600 p-2">
      <tbody>
        <tr>
          <th
            colSpan={2}
            className="border border-fuchsia-900 p-2 capitalize"
          />
          {users.map((user, index) => (
            <th
              scope="col"
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {user.name}
            </th>
          ))}
        </tr>
        <tr className="odd:bg-white even:bg-gray-100">
          <th
            scope="row"
            rowSpan={2}
            className="border border-fuchsia-900 p-2 capitalize"
          >
            {subjects[0]}
          </th>
          <td className="border border-fuchsia-900 p-2 capitalize">scores</td>
          {scores.map((score, index) => (
            <td
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {score.math}
            </td>
          ))}
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="border border-fuchsia-900 p-2 capitalize">grades</td>
          {scores.map((score, index) => (
            <td
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {score.math >= 80 ? "A" : score.math >= 60 ? "B" : "C"}
            </td>
          ))}
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <th
            scope="row"
            rowSpan={2}
            className="border border-fuchsia-900 p-2 capitalize"
          >
            {subjects[1]}
          </th>
          <td className="border border-fuchsia-900 p-2 capitalize">scores</td>
          {scores.map((score, index) => (
            <td
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {score.science}
            </td>
          ))}
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="border border-fuchsia-900 p-2 capitalize">grades</td>
          {scores.map((score, index) => (
            <td
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {score.science >= 80 ? "A" : score.science >= 60 ? "B" : "C"}
            </td>
          ))}
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <th
            scope="row"
            rowSpan={2}
            className="border border-fuchsia-900 p-2 capitalize"
          >
            {subjects[2]}
          </th>
          <td className="border border-fuchsia-900 p-2 capitalize">scores</td>
          {scores.map((score, index) => (
            <td
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {score.english}
            </td>
          ))}
        </tr>
        <tr className="odd:bg-white even:bg-gray-50">
          <td className="border border-fuchsia-900 p-2 capitalize">grades</td>
          {scores.map((score, index) => (
            <td
              key={index}
              className="border border-fuchsia-900 p-2 capitalize"
            >
              {score.english >= 80 ? "A" : score.english >= 60 ? "B" : "C"}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
