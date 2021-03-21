import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1 className="sr-only">Thomas Green</h1>
    <div className="intro-content">
      <p>Hello world, I’m Thomas Green a designer who creates digital products and services. I’m currently based in Melbourne Australia.</p>
      <p>I focus on aligning the power of technology and business to human needs.</p>
      <p>I currently work at <a href="https://www.telstrahealth.com/">Telstra Health</a> building tools for aged care providers.</p>
    </div>
    <style jsx>{`
      :global(html,body) {
        margin: 0;
        height: 100%;
      }

      :global(body) {
        font-size: 1.6rem;
        line-height: 1.5;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        background-color: #111;
        color: white;
      }
      a {
        color: pink;
        text-decoration: none;
      }
      .intro-content {
        padding: 4rem;
        max-width: 30rem;
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
