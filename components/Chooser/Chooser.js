import { motion, useCycle } from "framer-motion";
import Link from "next/link";

const variantsParent = {
  open: {
    transition: {
      staggerChildren: 0.08,
      staggerDirection: -1,
    },
  },
  closed: {
    transition: { staggerChildren: 0.08 },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
  closed: {
    y: 0,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Chooser = ({ slug }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav
      className="fixed bottom-5 left-2/4 -translate-x-1/2 center text-center  z-10"
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div
        className="absolute bottom-10 w-60 left-1/2 -translate-x-1/2 flex items-center flex-col"
        variants={variantsParent}
      >
        <motion.div
          initial={{ opacity: 0 }}
          className={`rounded-full w-fit mb-2 bg-white px-3 py-1 border-1  text-sm ${
            slug === `/letter` &&
            `pointer-events-none font-bold text-indigo-600 border-indigo-600`
          }`}
          variants={variants}
        >
          <Link href="/letter">Bussiness Style</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          className={`rounded-full w-fit mb-2 bg-white px-3 py-1  border-1  text-sm ${
            slug === `/letter-modern` &&
            `pointer-events-none font-bold text-red-500 border-red-500`
          }`}
          variants={variants}
        >
          <Link href="/letter-modern">Modern Style (WIP)</Link>
        </motion.div>
      </motion.div>

      <div
        className="px-3 py-1 border-1 font-bold rounded-full cursor-pointer bg-white"
        onClick={() => toggleOpen()}
      >
        Choose Style
      </div>
    </motion.nav>
  );
};

export { Chooser };
