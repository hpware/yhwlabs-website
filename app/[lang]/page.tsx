import { getDictionary } from "@/app/[lang]/dictionaries";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return (
    <div className="font-sans">
      <div className="absolute inset-0 justify-center text-center flex flex-col">
        <h1 className="text-4xl text-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-amber-200">
          {dict.home.hi} {dict.home.work}
        </h1>
        <h3 className="text-xl text-bold text-gray-300">
          {dict.home.learnmoreaboutourwork}
        </h3>
      </div>
    </div>
  );
}
