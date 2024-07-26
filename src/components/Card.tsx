import Image from "next/image";

type CardProps = {
  imgSrc: string;
  imgDesc: string;
  description: string;
  sideInfo?: string;
};

export const Card = ({ imgSrc, imgDesc, description, sideInfo }: CardProps) => {
  return (
    <div className="card">
      <div className="card-main">
        <div className="card-img-holder">
          <Image
            src={imgSrc}
            alt={imgDesc}
            className="card-img"
            fill={true}
          ></Image>
        </div>
        <div className="card-description text-box">{description}</div>
      </div>
      {sideInfo && (
        <div className="card-description card-side-info">
          {sideInfo.replaceAll(",", "\n")}
        </div>
      )}
    </div>
  );
};
