export default function BorderedShadownedText(props: {
  textFill: string;
  strokeWidth: string;
  strokeColor: string;
  shadowWidth: string;
  shadowColor: string;
  shadowBlur: string;
  className: string;
  str: string;
}) {
  const shadowW =
    "-" + props.shadowWidth + " " + props.shadowWidth + " " + props.shadowBlur;

  console.log(shadowW);
  return (
    <span
      className={`${props.className} font-black`}
      style={{
        WebkitTextStrokeWidth: props.strokeWidth,
        WebkitTextFillColor: props.textFill,
        WebkitTextStrokeColor: props.strokeColor,
        textShadow: shadowW + " " + props.shadowColor,
      }}
    >
      {props.str}
    </span>
  );
}
