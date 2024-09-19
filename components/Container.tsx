export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-6xl mx-auto px-6 md:px-12 xl:px-0">{children}</div>;
}
