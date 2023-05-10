import css from "./Statistics.module.css"

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

export const Statistics = (props) => {
    
    const listItems = props.stats.map((data) => {
       return <li style={{backgroundColor: `${getRandomHexColor()}`}} key={data.id} className={css.item}>
            <span className={css.label}>{data.label}</span>
        <span className={css.percentage}>{data.percentage}%</span>
        </li>
    }
    )

    return <section className={css.statistics}>
        <h2 className={css.title}>{props.title}</h2>
        <ul className={css.statList}>{listItems}</ul>
        </section>
}