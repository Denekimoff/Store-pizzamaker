import React from 'react'

import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Ничего не найдено :(</h1>
      <br/>
      <h3 className={styles.description}>Нам очень жаль...
        <p>К сожалению данная страница отсутствует, в нашем интернет-магазине.</p>
      </h3>
    </div>
  )
}