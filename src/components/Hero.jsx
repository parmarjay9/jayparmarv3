import { PLACE_PHOTOS } from "../data.js";

function PlaceBtn({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="border-b border-dashed border-terracotta/50 text-terracotta transition-colors hover:border-ink hover:text-ink"
    >
      {children}
    </button>
  );
}

function Polaroid({ children, caption, style, className = "" }) {
  return (
    <figure className={"m-0 w-[260px] bg-white p-3 pb-14 shadow-[0_18px_36px_-14px_rgba(74,59,42,0.5)] " + className} style={style}>
      {children}
      <figcaption className="absolute inset-x-0 bottom-4 text-center font-hand text-2xl text-ink/70">{caption}</figcaption>
    </figure>
  );
}

export default function Hero({ photos = [], addPhoto }) {
  return (
    <section id="about" className="border-b border-line pb-[74px] pt-16">
      <div className="mx-auto max-w-content px-7">
        <h1 className="mb-7 font-display text-[clamp(40px,8.5vw,78px)] leading-none tracking-tight">
          Hi, I'm <span className="text-terracotta">Jay Parmar</span>
          <span className="text-terracotta">.</span>
        </h1>

        <div className="grid items-start gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <div className="mb-[18px] font-mono text-[12.5px] text-terracotta">// about</div>
            <p className="mb-4 max-w-[46ch] text-[#3b342c]">
              I'm a graduate computer science student at{" "}
              <PlaceBtn onClick={() => addPhoto?.("asu")}>Arizona State University</PlaceBtn> on the AI/ML
              track, building web and iOS applications and the machine-learning systems that power them.
            </p>
            <p className="mb-4 max-w-[46ch] text-[#3b342c]">
              Originally from <PlaceBtn onClick={() => addPhoto?.("mumbai")}>Mumbai</PlaceBtn> and now based in{" "}
              <PlaceBtn onClick={() => addPhoto?.("tempe")}>Tempe, Arizona</PlaceBtn>, I care about software
              that's thoughtful and genuinely useful.
            </p>
            <div className="mt-[20px] font-serif text-xl italic text-muted">
              "Build the thing you'd actually use."
            </div>
          </div>

          <div className="reveal flex justify-center md:justify-end">
            <div className="relative inline-block">
              <Polaroid className="relative rotate-[-3deg] transition-transform duration-300 hover:rotate-0" caption="Jay">
                <img src="/me.jpg" alt="Jay" className="aspect-square w-full object-cover" />
              </Polaroid>

              {photos.map((ph, i) => {
                const d = PLACE_PHOTOS[ph.place];
                if (!d) return null;
                return (
                  <Polaroid
                    key={ph.id}
                    className="absolute left-0 top-0"
                    caption={d.label}
                    style={{ transform: `translate(${ph.dx}px,${ph.dy}px) rotate(${ph.rot}deg)`, zIndex: 10 + i }}
                  >
                    {d.image ? (
                      <img src={d.image} alt={d.label} className="aspect-square w-full object-cover" />
                    ) : (
                      <div className="aspect-square" style={{ backgroundImage: d.gradient }} />
                    )}
                  </Polaroid>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
