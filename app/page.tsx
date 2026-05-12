import { HeartIcon } from "@phosphor-icons/react/dist/ssr";

export default function Home() {
  return (
    <main className="p-8 flex items-center gap-2 font-sans">
      <HeartIcon size={24} weight="duotone" />
      <span>DoloresUI scaffolding works</span>
    </main>
  );
}
