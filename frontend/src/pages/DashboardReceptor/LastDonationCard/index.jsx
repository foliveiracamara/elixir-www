import Link from "next/link";
import style from "./LastDonationCard.module.scss";

export default function LastDonationCard({ text, date, footer }) {
  return (
    <div className={style.card}>
      {text}:<span className={style.date}>{date}</span>
      <div className={style.divFooter}>
        <Link href={"/Dashboard"}>
          <span className={style.footer}>{footer}</span>
        </Link>
      </div>
    </div>
  );
}
