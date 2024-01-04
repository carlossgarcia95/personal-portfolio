import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../context/theme-context";

const TimelineElement = ({ item }: any) => {
  const { theme } = useTheme();
  const { ref, inView } = useInView({});
  return (
    <div ref={ref} className="vertical-timeline-element">
      <VerticalTimelineElement
        visible={inView}
        contentStyle={{
          background: theme === "light" ? "#ffffff" : "#1e293b",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          textAlign: "left",
          padding: "1.3rem 2rem",
        }}
        contentArrowStyle={{
          borderRight:
            theme === "light"
              ? "0.4rem solid #ffffff"
              : "0.4rem solid rgba(255, 255, 255, 0.5)",
        }}
        date={item.date}
        dateClassName={
          theme === "light"
            ? "!opacity-100"
            : "#1e293b"
        }
        icon={item.icon}
        iconStyle={{
          background: "#ffffff",
          fontSize: "1.5rem",
          color: "black",
        }}
      >
        <h3 className="font-bold capitalize">{item.title}</h3>
        <p className="!mt-0">{item.company}</p>
        <p className="!mt-0">{item.location}</p>
        <p className="!mt-1 !font-normal">{item.description}</p>
      </VerticalTimelineElement>
    </div>
  );
};

export default TimelineElement;
