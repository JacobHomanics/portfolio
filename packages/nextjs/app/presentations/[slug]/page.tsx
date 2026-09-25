import { notFound } from "next/navigation";
import { YoutubeEmbed } from "~~/components/YoutubeEmbed";
import { BackToList } from "~~/components/portfolio/BackToList";
import { getTalk, talks, youtubeEmbedUrl } from "~~/configs/talks.config";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return talks.map(talk => ({ slug: talk.slug }));
}

const PresentationPage = ({ params }: PageProps) => {
  const talk = getTalk(params.slug);
  if (!talk) notFound();

  const embedUrl = youtubeEmbedUrl(talk.youtubeUrl);

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 md:p-8 gap-6">
      <BackToList />
      <h1 className="font-bold text-2xl md:text-4xl text-center">{talk.name}</h1>
      {embedUrl && <YoutubeEmbed src={embedUrl} title={talk.name} />}
      <p className="text-lg max-w-2xl text-center">{talk.description}</p>
    </div>
  );
};

export default PresentationPage;
