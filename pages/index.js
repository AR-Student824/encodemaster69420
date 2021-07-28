import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Axios from 'axios';
import JScrewIt from "jscrewit"
export default function Home() {
    useEffect(() => {
      document.getElementById('input').oninput = function () {
        document.getElementById('base64').innerHTML = btoa(document.getElementById('input').value) 
        document.getElementById('uriencoded').innerHTML = encodeURIComponent(document.getElementById('input').value)
        document.getElementById('hex').innerHTML = new Buffer(document.getElementById('input').value).toString('hex')
        function getCharCodes(s){
          let charCodeArr = [];
          for(let i = 0; i < s.length; i++){
              let code = s.charCodeAt(i);
              charCodeArr.push(code);
          }
          return charCodeArr.toString().replace(/,/g, ' ');
        }
        document.getElementById('ascii').innerHTML = getCharCodes(document.getElementById('input').value)
        document.getElementById('jsfuck').innerHTML = JScrewIt.encode(document.getElementById('input').value);
      }
    },[])  
  return (
    <div className={styles.container}>
      <Head>
        <title>encodemaster69420</title>
        <meta name="description" content="Preview your text as base64, uriencoded, and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <noscript>

          <h1>This site wont work without javascript enabled</h1>
          <p>what did you expect</p>
        </noscript>
        <h1 className={styles.title}>
          encodemaster69420
        </h1>
        <p>Yes, I actually named it that</p>

          <textarea id="input" placeholder="Hello world" width="100%"/>

          <h3>As base64</h3>
          <div id="base64">---</div>

          <h3>As URIEncoded</h3>
          <div id="uriencoded">---</div>

          <h3>As hex</h3>
          <div id="hex">---</div>

          <h3>As ASCII</h3>
          <div id="ascii">---</div>

          <h3>As JSFuck (jscrewit)</h3>
          <div id="jsfuck">---</div>
      </main>

    </div>
  )
}
