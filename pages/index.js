import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import Axios from 'axios';
import JScrewIt from "jscrewit"
export default function Home() {
    useEffect(() => {
      function share() {
        if (!document.getElementById('input').value) {
        document.getElementById('share').innerHTML = `---`
        } else {
          document.getElementById('share').innerHTML = `<a style="color:#ff9494" href="https://copy.ar-dev.cf/?content=${encodeURIComponent('https://encode.ar-dev.cf/?content=' + encodeURIComponent(document.getElementById('input').value))}">Copy URL</a>`
        }
      }
      share()
      function encode() {
        share()
        if (document.getElementById('input').value) {
          function getCharCodes(s){
            let charCodeArr = [];
            for(let i = 0; i < s.length; i++){
                let code = s.charCodeAt(i);
                charCodeArr.push(code);
            }
            return charCodeArr.toString().replace(/,/g, ' ');
          }
          function text2Binary(string) {
            return string.split('').map(function (char) {
                return char.charCodeAt(0).toString(2);
            }).join(' ');
        }
          document.getElementById('base64').innerHTML = btoa(document.getElementById('input').value) 
        document.getElementById('uriencoded').innerHTML = encodeURIComponent(document.getElementById('input').value)
        document.getElementById('hex').innerHTML = new Buffer(document.getElementById('input').value).toString('hex')
        document.getElementById('ascii').innerHTML = getCharCodes(document.getElementById('input').value)
        document.getElementById('binary').innerHTML = text2Binary(document.getElementById('input').value)
        document.getElementById('jsfuck').innerHTML = JScrewIt.encode(document.getElementById('input').value);
        document.getElementById('low').innerHTML = document.getElementById('input').value.toLowerCase()
        document.getElementById('up').innerHTML = document.getElementById('input').value.toUpperCase()
      } else {
        document.getElementById('base64').innerHTML = '---'
        document.getElementById('uriencoded').innerHTML = '---'
        document.getElementById('hex').innerHTML = '---'
        document.getElementById('ascii').innerHTML = '---'
        document.getElementById('jsfuck').innerHTML = '---'
        document.getElementById('low').innerHTML = '---'
        document.getElementById('up').innerHTML = '---'
        document.getElementById('base64').innerHTML = '---'
        document.getElementById('binary').innerHTML = '---'
      }
    }
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('content') && urlParams.get('content')) {
        var content = urlParams.get('content')
        document.getElementById('input').innerHTML = content
        encode()
      }
      document.getElementById('input').oninput = function () {
        encode()
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
        <p>The fastest way to encode content in multiple ways, at one time. Save yourself some searches, and use encodemaster69420. Despite the name, it&apos;s actually a pretty useful tool.</p>

          <textarea id="input" placeholder="Hello world" width="100%"/>
          <h3>Share this result</h3>
          <div id="share">---</div>

          <h3>As base64</h3>
          <div id="base64">---</div>

          <h3>As URIEncoded</h3>
          <div id="uriencoded">---</div>

          <h3>As hex</h3>
          <div id="hex">---</div>

          <h3>As ASCII</h3>
          <div id="ascii">---</div>

          <h3>As binary</h3>
          <div id="binary">---</div>

          <h3>As lowercase</h3>
          <div id="low">---</div>

          <h3>As uppercase</h3>
          <div id="up">---</div>

          <h3>As JSFuck (jscrewit)</h3>
          <div id="jsfuck">---</div>
      </main>

    </div>
  )
}
