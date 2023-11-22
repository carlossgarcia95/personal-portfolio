import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { Card } from "./ui/card";

const Certification = ({ item }: { item: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <Card key={item.title} className="relative">
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
            className="absolute bottom-[10px] right-[10px] text-slate-500"
          />
        </Link>
      </Card>
    </motion.div>
  );
};

export default Certification;
