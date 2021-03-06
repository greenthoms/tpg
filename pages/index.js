import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Thomas Green</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Alegreya+Sans:wght@300;400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <h1 className="sr-only">Thomas Green</h1>
    <div className="intro-content">
      <p>Hey I’m Thomas Green, a digital product designer living in Melbourne Australia.</p>
      <p>I’m interested in designing technologies and systems for human needs.</p>
      <p>I currently work at <a href="https://www.telstrahealth.com/">Telstra Health</a>.</p>
    </div>
    <style jsx>{`
      :global(html,body) {
        margin: 0;
        height: 100%;
      }

      :global(body) {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.5;
        font-family: 'Alegreya Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        background-color: #111;
        color: #fafafa;
      }
      a {
        color: pink;
        text-decoration: none;
      }
      .intro-content {
        font-size: 1rem;
        padding: 6vw 10vw;
        max-width: 17em;
      }
      @media (min-width: 1024px) {
        .intro-content {
          font-size: 26px;
          padding: 4vmax;
          max-width: 17em;
        }
       }

      .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
        -webkit-clip-path: inset(50%) !important;
          clip-path: inset(50%) !important;  /* 2 */
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;            /* 3 */
      }

    `}</style>
  </div>
)

export default Home
