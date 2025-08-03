import { getDictionary } from "@/app/[lang]/dictionaries";
import Layout from "@/components/layout";
import { WebsitesListTicker } from "./client";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  const items = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
      text: "Personal Website v5",
      url: "https://yuanhau.com/",
    },
  ];
  return (
    <Layout dict={dict}>
      <div className="font-sans">
        <div className="absolute inset-0 justify-center flex flex-col min-h-screen">
          <div className="text-center justify-center m-auto w-fit">
            <h1 className="text-5xl md:text-7xl text-bold text-left text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-amber-200 ">
              {dict.home.hi}
            </h1>
            <h1 className="text-2xl md:text-6xl text-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-amber-200">
              {dict.home.work}
            </h1>
          </div>
          <h3 className="text-xl text-bold text-gray-300 -translate-y-52 text-center md:text-right md:-translate-x-12 md:-translate-y-12">
            {dict.home.learnmoreaboutourwork}
          </h3>
        </div>
        <div className="min-h-screen"></div>
        <section id="websites" className="m-2 p-2 min-h-1/2">
          <h2 className="text-2xl text-bold text-center">
            {dict.home.websitesthatimade}
          </h2>
          <WebsitesListTicker items={items} />
        </section>
      </div>
    </Layout>
  );
}
