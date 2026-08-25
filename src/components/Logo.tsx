export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src="/sennys-logo.jpeg"
      alt="Senny's Cakes & Pastries logo"
      className={`${className} rounded-full object-cover`}
      width={96}
      height={96}
    />
  );
}
