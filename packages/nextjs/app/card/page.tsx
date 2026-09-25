"use client";

import { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { QrCodeIcon } from "@phosphor-icons/react/dist/csr/QrCode";
import { ShareIcon } from "@phosphor-icons/react/dist/csr/Share";
import type { NextPage } from "next";
import { QRCodeSVG } from "qrcode.react";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { SocialLinks } from "~~/components/SocialLinks";
import { cardHighlightProjects, profile } from "~~/configs/profile.config";
import { pushProjectOrigin } from "~~/utils/projectNavStack";
import { notification } from "~~/utils/scaffold-eth";

const CARD_URL = "https://jacobhomanics.com/card";

const shareData: ShareData = {
  title: profile.name,
  text: profile.title,
  url: CARD_URL,
};

const CardPage: NextPage = () => {
  const pathname = usePathname();
  const shareDialogRef = useRef<HTMLDialogElement>(null);
  const qrDialogRef = useRef<HTMLDialogElement>(null);

  const shareCard = async () => {
    if (typeof navigator.share === "function") {
      const canSharePayload = typeof navigator.canShare !== "function" || navigator.canShare(shareData);
      const data = canSharePayload ? shareData : { url: CARD_URL };

      try {
        await navigator.share(data);
        shareDialogRef.current?.close();
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
        notification.error("Couldn't open the share menu");
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(CARD_URL);
      notification.success("Link copied");
      shareDialogRef.current?.close();
    } catch {
      notification.error("Sharing isn't available in this browser");
    }
  };

  const openQrCode = () => {
    shareDialogRef.current?.close();
    qrDialogRef.current?.showModal();
  };

  return (
    <div className="flex flex-col items-center p-4 gap-6">
      <div className="flex w-full items-center gap-3 md:w-auto md:gap-4">
        <div
          className="flex h-32 w-32 shrink-0 items-end justify-center rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${profile.photo.src})` }}
          role="img"
          aria-label={profile.name}
        >
          <button
            className="btn btn-sm btn-primary w-full"
            onClick={() => {
              window.open("/Jacob_Homanics_Resume.pdf");
            }}
          >
            Resume
            <DocumentIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="flex min-w-0 flex-1 flex-col items-start gap-4 md:max-w-2xl md:items-center">
          <div>
            <p className="text-2xl font-bold leading-tight md:text-4xl">{profile.name}</p>
            <p className="text-sm md:text-xl">{profile.title}</p>
          </div>
          <p className="w-full text-left text-xs md:text-center md:text-base">{profile.description}</p>
        </div>
      </div>

      <ul className="grid w-full max-w-5xl grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {cardHighlightProjects.map(project => {
          const src = typeof project.bannerSrc === "string" ? project.bannerSrc : project.bannerSrc?.src;
          const isInternal = project.link?.startsWith("/");
          const Tag = isInternal ? Link : "a";

          return (
            <li key={project.name} className="min-w-0">
              <Tag
                href={project.link || "#"}
                {...(isInternal ? {} : { target: "_blank", rel: "noreferrer" })}
                aria-label={project.name}
                className="flex h-full flex-col overflow-hidden rounded-xl bg-secondary bg-opacity-40 hover:bg-opacity-100"
                onClick={() => {
                  if (isInternal) pushProjectOrigin(pathname);
                }}
              >
                <div
                  className="aspect-[16/10] w-full shrink-0 bg-primary bg-cover bg-center"
                  style={src ? { backgroundImage: `url(${src})` } : undefined}
                />
                {project.shortDescription && (
                  <div className="flex flex-1 flex-col p-2.5 text-left md:p-3">
                    <p className="line-clamp-3 text-xs leading-snug md:text-sm">{project.shortDescription}</p>
                  </div>
                )}
              </Tag>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-5 md:gap-6">
        <SocialLinks showPlacementToggle={false} iconClassName="h-10 w-10 md:h-12 md:w-12" className="gap-5 md:gap-6" />
        <button
          type="button"
          aria-label="Share"
          className="cursor-pointer"
          onClick={() => shareDialogRef.current?.showModal()}
        >
          <ShareIcon className="h-10 w-10 md:h-12 md:w-12" />
        </button>
      </div>

      <dialog ref={shareDialogRef} className="modal" aria-label="Share">
        <div className="modal-box relative flex items-center justify-center gap-3 pt-14">
          <form method="dialog">
            <button className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3" aria-label="Close">
              ✕
            </button>
          </form>
          <button type="button" className="btn btn-primary" onClick={() => void shareCard()}>
            Share to...
          </button>
          <button type="button" className="btn btn-primary btn-square" aria-label="Show QR code" onClick={openQrCode}>
            <QrCodeIcon className="h-6 w-6" />
          </button>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close">close</button>
        </form>
      </dialog>

      <dialog ref={qrDialogRef} className="modal" aria-label="QR code">
        <div className="modal-box flex flex-col items-center gap-4">
          <form method="dialog">
            <button className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3" aria-label="Close">
              ✕
            </button>
          </form>
          <div
            className="h-24 w-24 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url(${profile.photo.src})` }}
            role="img"
            aria-label={profile.name}
          />
          <div className="text-center">
            <p className="text-2xl font-bold leading-tight">{profile.name}</p>
            <p>{profile.title}</p>
          </div>
          <div className="rounded-2xl bg-white p-3">
            <QRCodeSVG
              value={CARD_URL}
              size={220}
              level="M"
              bgColor="#ffffff"
              fgColor="#000000"
              aria-label="QR code that opens this card"
            />
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button aria-label="Close">close</button>
        </form>
      </dialog>
    </div>
  );
};

export default CardPage;
