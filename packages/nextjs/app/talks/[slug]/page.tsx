import { notFound } from "next/navigation";
import { getTalk, talks, youtubeEmbedUrl } from "~~/configs/talks.config";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return talks.map(talk => ({ slug: talk.slug }));
}

const TalkPage = ({ params }: PageProps) => {
  const talk = getTalk(params.slug);
  if (!talk) notFound();

  const embedUrl = youtubeEmbedUrl(talk.youtubeUrl);

  return (
    <div className="flex flex-col items-center bg-gradient-to-t p-4 md:p-8 gap-6">
      <h1 className="font-bold text-2xl md:text-4xl text-center">{talk.name}</h1>
      {embedUrl && (
        <div className="aspect-video w-full max-w-3xl">
          <iframe
            className="h-full w-full rounded-lg"
            src={embedUrl}
            title={talk.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}
      <p className="text-lg max-w-2xl text-center">{talk.description}</p>
      <a href={talk.youtubeUrl} target="_blank" rel="noreferrer" className="link link-primary text-lg font-bold">
        Watch on YouTube
      </a>
    </div>
  );
};

export default TalkPage;
