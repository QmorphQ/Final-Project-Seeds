// import:
// Libraries:
// Styles:
import "./ScrollTopBtnIcon.css";

export default function ScrollTopBtnIcon() {
  return (
    <svg
      className="scroll-btn-svg"
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          className="scroll-btn-circle"
          stroke="rgb(7, 188, 13)"
          fillOpacity="0.2"
          fill="rgb(7, 188, 13)"
          cx="32"
          cy="32"
          r="25"
        />
        <path
          className="scroll-btn-path"
          d="M21 32 L32 18 L43 32"
          fill="none"
          stroke="rgb(7, 188, 13)"
          strokeLinecap="round"
        />
        <path
          className="scroll-btn-path"
          d="M21 48 L32 33 L43 47"
          fill="none"
          stroke="rgb(7, 188, 13)"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
