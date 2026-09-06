import Image from "next/image";
import { OrganizationEyebrow } from "./OrganizationHero";

export function CommunityMap() {
  return (
    <section className="about-location">
      <div className="org-section-title">
        <OrganizationEyebrow tone="neutral">Location</OrganizationEyebrow>
        <h2>
          We bridge the gap between learning and
          <br />
          real-world experience
        </h2>
        <p>
          We offer a variety of courses designed to take you from a newbie to a
          junior level in tech.
        </p>
      </div>
      <div className="community-map">
        <Image
          className="community-map__land"
          src="/assets/additional/5712-imgGroup2.svg"
          width={981}
          height={744}
          alt="Map of Africa showing our growing community"
        />
        {[5, 7, 8, 6].map((n, i) => (
          <Image
            className={`community-map__person community-map__person--${i}`}
            key={n}
            src={`/assets/additional/5712-imgEllipse${n}.png`}
            width={94}
            height={94}
            alt="PHA community member"
          />
        ))}
        {["Ghana", "Ghana", "Nigeria"].map((country, i) => (
          <div
            className={`community-map__country community-map__country--${i}`}
            key={i}
          >
            <Image
              src={`/assets/additional/5712-img${country}.png`}
              width={58}
              height={58}
              alt=""
            />
            <span>{country}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
