import logo from "@/assets/sennys-logo.jpeg.asset.json";

export function Logo({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Senny's Cakes & Pastries logo"
      className={`${className} rounded-full object-cover`}
      width={96}
      height={96}
    />
  );
}
