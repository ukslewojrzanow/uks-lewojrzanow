import { Fade } from "react-awesome-reveal";

function FadeDelay({ children }) {
  return (
    <Fade triggerOnce delay={50} duration={1000}>
      {children}
    </Fade>
  );
}

export default FadeDelay;
