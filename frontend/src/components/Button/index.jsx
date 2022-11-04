import style from "./Button.module.scss";

export default function Button({
  label,
  backgroundColor,
  textColor,
  width,
  fontFamily,
  fontSize,
  marginRight,
  marginLeft,
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
        fontFamily: fontFamily,
        fontSize: fontSize,
        marginRight: marginRight,
        marginLeft: marginLeft,
      }}
    >
      {label}
    </button>
  );
}
