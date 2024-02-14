import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/images/macbook-exposed.png";
import { motion } from "framer-motion";

const intro = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.25,
      delayChildren: 1,
    },
  },
};

const introChildren = {
  hidden: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const laptop = {
  initial: {
    y: 0,
    rotate: 0,
    scale: 5,
  },
  animate: {
    y: 20,
    rotate: -30,
    transition: {
      duration: 1,
      y: {
        repeat: Infinity,
        duration: 2,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
    scale: 1,
  },
  hover: {
    scale: 1.04,
    transition: {
      yoyo: Infinity,
    },
  },
};
const HeroSection = () => {
  return (
    <div className="overflow-hidden">
      <Container className=" grid grid-cols-1 lg:grid-cols-2 place-content-center h-screen pt-16">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          <motion.h1
            variants={introChildren}
            className="text-5xl lg:text-8xl   font-bold text-nowrap"
          >
            <span className="text-gray">Don't worry,</span> <br />
            <span>We'll fix it</span>
          </motion.h1>
          <motion.p variants={introChildren}>
            Welcome to <span>iRepair</span> , your number one source for all
            things repair. <span>Macbook Repair</span> and diagnostic services.
          </motion.p>
          <motion.div>
            <Button className="hover:scale-105">Book a Service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="mt-10 w-3/4  lg:w-full mx-auto"
        >
          <img className=" h-[95%] object-contain" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
