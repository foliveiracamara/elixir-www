import style from "./Button.module.scss";

export default function Button({
  label,
  icon,
  backgroundColor,
  textColor,
  width,
  height,
  fontFamily,
  fontSize,
  marginRight,
  marginLeft,
  justifyContent,
  ...rest
}) {
  return (
    <button
      {...rest}
      className={style.button}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        width: width,
        height: height,
        fontFamily: fontFamily,
        fontSize: fontSize,
        marginRight: marginRight,
        marginLeft: marginLeft,
        justifyContent: justifyContent
      }}
    >
      {label}
      {icon}
    </button>
  );
}
