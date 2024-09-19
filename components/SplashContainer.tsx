export default function SplashContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-[10.5rem]">
      <div className="min-h-[5.2rem] bg-horizon-grey-800" />
      <div>{children}</div>
    </div>
  );
}
