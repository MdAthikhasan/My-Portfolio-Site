"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

const Profile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
        <div className="relative">
          <Image
            className="rounded-3xl w-full object-cover aspect-[4/5] group-hover:grayscale transition duration-500"
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&w=600"
            alt="Md.  Athik Hassan"
            width={600}
            height={800}
          />
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition duration-500" />
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8">
        <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-500 to-pink-400 text-transparent bg-clip-text">
          Hi, I&apos;m Md. Athik Hassan
        </h2>
        <div
          className={`${inter.className} space-y-4 text-white/70 leading-relaxed`}
        >
          <p>
            I&apos;m a Front-End Web Developer specializing in creating
            exceptional digital experiences. With a strong foundation in
            JavaScript and React and Next js, I bring designs to life with
            pixel-perfect precision and responsive functionality.
          </p>

          <p>
            I believe in continuous learning and staying ahead of technology
            trends, ensuring that I can provide cutting-edge solutions for
            modern web challenges.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
