import { getDictionary } from "@/app/[lang]/dictionaries";
import Layout from "@/components/layout";
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as any);
  return (
    <Layout dict={dict}>
      <div className="absolute inset-0 flex flex-col justify-center text-center">
        <h1 className="text-3xl">Welcome to the ✨portal✨!</h1>
        <span className="text-white/60">You should login here :)</span>
      </div>
    </Layout>
  );
}
