import { Fade } from "react-awesome-reveal";

function FadeIn({ children }) {
  return <Fade triggerOnce>{children}</Fade>;
}

export default FadeIn;
