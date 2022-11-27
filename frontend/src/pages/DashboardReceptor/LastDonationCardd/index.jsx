import Link from "next/link";
import style from "./LastDonationCardd.module.scss";

export default function LastDonationCardd({ text, date, footer }) {
  return (
    <div className={style.card}>
      {text}:<span className={style.date}>{date}</span>
      <div className={style.divFooter}>
        <Link href={"/Dashboard/HelpPeople"}>
          <span className={style.footer}>{footer}</span>
        </Link>
      </div>
    </div>
  );
}
