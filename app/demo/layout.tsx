import Link from "next/link";

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <nav className="w-full p-4 flex justify-between border-b border-zinc-700">
        <Link href="/">Home</Link>
        <Link href="/demo">Demo</Link>
      </nav>

      <main className="flex w-full grow">
        {/* TODO: create index component */}
        <aside className="w-64 p-4 pr-2 text-zinc-500">
          <Link href="/demo/01-table-borders">01. Table borders</Link>
        </aside>
        {children}
      </main>
    </div>
  );
}
