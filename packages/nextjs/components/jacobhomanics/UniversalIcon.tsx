"use client";

type Props = {
  icon: any;
};

export const UniversalIcon = ({ icon }: Props) => {
  let output;
  if (icon.type === "img") {
    output = (
      <div className="h-[128px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={icon.img.src} alt="Link" className={`h-full object-scale-down`} />
      </div>
    );
  } else {
    output = <icon.img className={`w-[128px] h-[128px]`} />;
  }

  return output;
};
