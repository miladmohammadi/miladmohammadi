import ReactDOM from "react-dom"
import React, { Suspense, useEffect, useRef, useMemo } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { TextureLoader, LinearFilter } from "three"
import lerp from "lerp"
import { Text, MultilineText } from "./components/Text"
import Diamonds from "./diamonds/Diamonds"
import Plane from "./components/Plane"
import { Block, useBlock } from "./blocks"
import state from "./store"
import "./styles.css"

function Startup() {
  const ref = useRef()
  useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)))
  return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
  const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock()
  const size = aspect < 1 && !mobile ? 0.65 : 0.3
  const alignRight = (canvasWidth - w * size - margin) / 2
  const pixelWidth = w * state.zoom * size
  const left = !(index % 2)
  const color = index % 2 ? "#D40749" : "#2FE8C3"
  return (
    <Block factor={factor} offset={offset}>
      <group position={[left ? -alignRight : alignRight, 0, 0]}>
        <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect}
               scale={[w * size, (w * size) / aspect, 1]} frustumCulled={true} />
        <Html
          style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
          position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
          <div tabIndex={index}>{text}</div>
        </Html>
        <Text left={left} right={!left} size={w * 0.04} color={color} top
              position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
          {header}
        </Text>
        <Block factor={0.2}>
          <Text opacity={0.5} size={w * 0.5} color="#1A1E2A"
                position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1, -10]}>
            {"0" + (index + 1)}
          </Text>
        </Block>
      </group>
    </Block>
  )
}

function Content() {
  const images = useLoader(
    TextureLoader,
    state.paragraphs.map(({ image }) => image)
  )
  useMemo(() => images.forEach((texture) => (texture.minFilter = LinearFilter)), [images])
  const { contentMaxWidth: w, sectionHeight, canvasWidth, canvasHeight, mobile } = useBlock()
  return (
    <>
      <Block factor={2} offset={0}>
        <Block factor={1.2}>
          <Text shift={10} left size={w * 0.07} position={[-w / 1.6, 0.5, -1]} color="#fff">
            MILAD MOHAMMADI
          </Text>
          <group position={[w * 0.092 * -0.62, -(w * 0.0197) + 0.48, 0]}>
            <Plane map={images[0]} args={[1, 1, 32, 32]} shift={20} size={0.01} aspect={0.01}
                   scale={[w * .07, w * 0.07, 1]} frustumCulled={false} />
          </group>
          <Block factor={3}>
            <Html className="bottom-left" style={{ color: "white", width: 1000 }}
                  position={[-w / 1.6, -(sectionHeight / 2), 0]} offset={4}>
              Front-end Developer, Sometimes Creative Developer
            </Html>
          </Block>
        </Block>
      </Block>
      <Block factor={9} offset={.12}>
        <Html onClick={() => {
          window.location.replace("https://t.me/mmmiladdm")
        }} className="bottom-left" style={{ color: "white", width: 1000 }} position={[-w / 1.6, -4, 0]} offset={10}>
          <b>Find me:</b><br />
          <a href="https://t.me/mmmiladdm" onClick={() => {
            window.location.replace("https://t.me/mmmiladdm")
          }}>Telegram</a><br />
          Skype<br />
          LinkedIn<br />
          Github<br /><br />
          <b>My Projects</b>
          <br />
          React Visual Builder<br />
          Portfolio<br />
          Robo DB<br /><br />
          Download CV<br />
        </Html>
      </Block>
    </>
  )
}

function App() {
  const scrollArea = useRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])
  return (
    <>
      <Canvas linear dpr={[1, 2]} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        <Suspense fallback={<Html center className="loading" children="Loading..." />}>
          <Content />
          <Diamonds />
          <Startup />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        {[0, 1].map((_, index) => (
          <div key={index} id={"0" + index} style={{ height: "56vh" }} />
        ))}
      </div>
    </>
  )
}

ReactDOM.render(
  <App />
  , document.getElementById("root"))
