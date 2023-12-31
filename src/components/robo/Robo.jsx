import "./Robo.css";

import { motion } from "framer-motion";

import { useFollowPointer } from "./use-follow-pointer";
import { useRef } from "react";

import angel from "../../img/angel.png";
import angry from "../../img/angry.png";
import dead from "../../img/dead.png";
import eyes from "../../img/eyes.png";
import eyesDown from "../../img/eyes_down.png";
import eyesLeft from "../../img/eyes_left.png";
import eyesLove from "../../img/eyes_love.png";
import eyesRight from "../../img/eyes_right.png";
import eyesUp from "../../img/eyes_up.png";
import horns from "../../img/horns.png";
import jaw from "../../img/jaw.png";
import lidsClosed from "../../img/lide_closed.png";
import lids from "../../img/lids.png";
import puke1 from "../../img/puke1.png";
import puke2 from "../../img/puke2.png";
import puke3 from "../../img/puke3.png";
import puke4 from "../../img/puke4.png";
import sad from "../../img/sad.png";
import skull from "../../img/skull.png";
import wonder from "../../img/wonder.png";

export default function Robo(params) {
  const ref = useRef(null);

  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      className="robo"
      ref={ref}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 3,
        restDelta: 0.001,
      }}
    >
      <motion.div
        className="skull"
        initial={{ rotate: "0deg" }}
        animate={{ rotate: "-10deg", transformOrigin: "left" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <img src={skull} alt="skull" />
        <motion.div className="robo-status">
          {/* <img src={angel} alt="angel" /> */}
          {/* <img src={wonder} alt="wonder" /> */}
          {/* <img src={horns} alt="horns" /> */}
        </motion.div>

        <motion.div className="lids">
          <motion.div
            className="lids-open"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
            }}
          >
            <img src={lids} alt="lids" />
          </motion.div>

          <motion.div
            className="lids-closed"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <img src={lidsClosed} alt="lidsClosed" />
          </motion.div>
        </motion.div>

        <motion.div className="eyes">
          <img src={eyes} alt="eyes" />
          <img src={eyesUp} alt="eyesUp" />
          <img src={eyesRight} alt="eyesRight" />
          <img src={eyesDown} alt="eyesDown" />
          <img src={eyesLeft} alt="eyesLeft" />
          <img src={eyesLove} alt="eyesLove" />
          <img src={angry} alt="angry" />
          <img src={sad} alt="sad" />
          <img src={dead} alt="dead" />
        </motion.div>
      </motion.div>
      <motion.div
        className="jaw"
        initial={{ rotate: "10deg" }}
        animate={{ rotate: "-10deg", transformOrigin: "left" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <img src={jaw} alt="jaw" />
        <motion.div className="puke">
          <motion.div
            className="puke1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              hidden: { opacity: 0 },
              duration: 3,
              repeat: Infinity,
            }}
          >
            <img src={puke1} alt="puke1" />
          </motion.div>
          <motion.div
            className="puke2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              hidden: { opacity: 0 },
              delay: 1,
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img src={puke2} alt="puke2" />
          </motion.div>

          {/* <motion.div className="puke3">
            <img src={puke3} alt="puke3" />
          </motion.div> */}

          {/* <motion.div className="puke4">
            <img src={puke4} alt="puke4" />
          </motion.div> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
