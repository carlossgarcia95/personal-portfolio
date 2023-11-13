import Image from "next/image";
import { Button } from "./ui/button";
import { BiLinkExternal } from "react-icons/bi";
import Link from "next/link";

const Certifications = () => {
  const certifications = [
    {
      title: "pmp",
      imageUrl: "/pmp.jpg",
      credentialLink:
        "https://www.credly.com/badges/857fd372-dbbf-414b-81a4-9135dc6cd0cc/public_url",
    },
    {
      title: "psm",
      imageUrl: "/psm.jpg",
      credentialLink: "https://www.scrum.org/certificates/469908",
    },
    {
      title: "cloud-practitioner",
      imageUrl: "/cloud-practitioner.jpg",
      credentialLink:
        "https://www.credly.com/badges/b45253cb-668e-4d50-b41a-75e397329279/linked_in_profile",
    },
  ];
  return (
    <>
      <h3 className="section-heading my-10">Certifications</h3>
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
        {certifications.map((item) => (
          <div className="relative">
            <Image
              src={item.imageUrl}
              alt={item.title}
              width={400}
              height={400}
              className="rounded-lg"
            />
            <Link href={item.credentialLink} target="_blank">
              <BiLinkExternal
                size={24}
                className="absolute top-[10px] right-[10px] text-slate-700"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Certifications;
