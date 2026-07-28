export default function Layout({
  children,
  search,
  table,
}: {
  children: React.ReactNode;
  search: React.ReactNode;
  table: React.ReactNode;
}) {
    return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center">
      {children}
     
      <section className="w-full mb-8">
        {search}
      </section>

      <section className="w-full">
        {table}
      </section>
    </div>
  );
    
};
