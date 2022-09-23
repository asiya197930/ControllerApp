import React, { useState } from 'react'

import style from './faqs.module.css'
import { FAQdata } from './data' //Have to use same name because we didn't export "Default" FAQdata. So syntax -> {FAQdata}
import FAQ from './FAQ'
const FAQs = () => {
  // console.log(FAQdata)
  const [faqs, setFaqs] = useState(FAQdata)
  return (
        <main className={style.container}>
          <section className={style.faqs}>
            <h1>FAQ</h1>
            {/* No need to use "setFAQs()" here */}
            {setFaqs()}
            {/* Here in spread operator "faq", we are sending destructuring faqs(three different faq/object) */}
            {faqs.map(faq => <FAQ key={faq.id} {...faq}/>)} 
          </section>
        </main>
  )
}

export default FAQs
