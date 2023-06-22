import Image from "next/image";

export default function Home() {
  const simbol = ">";
  return (
    <div className="px-20 p-4">
      <div className="space-x-2 font-normal">
        <span>Home</span>
        <span className="text-sky-500">{simbol}</span>
        <span>Login</span>
      </div>
      <h1 className="mt-5 font-semibold text-2xl">Cutomer Login</h1>
    </div>
  );
}
