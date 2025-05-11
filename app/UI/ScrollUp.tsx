import { Fade } from "react-awesome-reveal";

function ScrollUp({ children }) {
  return (
    <Fade direction="up" triggerOnce>
      {children}
    </Fade>
  );
}

export default ScrollUp;
