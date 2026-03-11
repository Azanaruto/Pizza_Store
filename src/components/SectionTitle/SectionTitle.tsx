import styles from  './sectionTitle.module.scss'
const SectionTitle = ({title,subtitle, desc}) => {
  return (
     <div className={styles.content}>
          <h2 className={styles.newTitle}>
            {title} <span> {subtitle}</span>
          </h2>
          <p className={styles.subtitle}>
             {desc}
          </p>
        </div>
  )
}

export default SectionTitle
