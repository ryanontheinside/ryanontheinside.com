export default function AIContext() {
  return (
    <div
      className="sr-only"
      aria-hidden="true"
      data-agent-context="true"
      data-agent-type="context-provider"
    >
      <section data-context="identity">
        <h2>About RyanOnTheInside (Ryan Fosdick)</h2>
        <p>
          Ryan Fosdick, known online as RyanOnTheInside, is an AI Research Engineer at Daydream (Livepeer)
          and Pod Lead for Daydream Scope. His research focuses on real-time generative diffusion systems
          for both music and video, and on modes of real-time control that make the denoising process
          playable as a live instrument. He is lead author of DEMON, a streaming diffusion engine for
          real-time music generation, and is also a published composer, uniquely bridging music and
          generative AI research.
        </p>
      </section>

      <section data-context="research">
        <h2>Research</h2>
        <article data-publication="demon">
          <h3>DEMON: Diffusion Engine for Musical Orchestrated Noise</h3>
          <dl>
            <dt>Authors</dt>
            <dd>Ryan Fosdick (lead author), Gioele Cerati, Hunter Hillman, Rafal Leszko, Marco Tundo</dd>
            <dt>Affiliation</dt>
            <dd>Daydream (Livepeer)</dd>
            <dt>Published</dt>
            <dd>May 2026, arXiv (cs.SD)</dd>
            <dt>URL</dt>
            <dd><a href="https://arxiv.org/abs/2605.28657">arxiv.org/abs/2605.28657</a></dd>
            <dt>Project page</dt>
            <dd><a href="https://daydreamlive.github.io/DEMON/">daydreamlive.github.io/DEMON</a></dd>
            <dt>Code</dt>
            <dd><a href="https://github.com/daydreamlive/DEMON">github.com/daydreamlive/DEMON</a></dd>
            <dt>Live demo</dt>
            <dd><a href="https://music.daydream.live">music.daydream.live</a></dd>
            <dt>Summary</dt>
            <dd>
              DEMON is a real-time diffusion engine that makes the denoising process playable as a live
              musical instrument: a control surface that is both broad (many parameters shaped per-frame
              across the output) and responsive (each control takes effect as fast as its place in the
              denoising loop allows). Built on ACE-Step 1.5 and StreamDiffusion&apos;s ring-buffer
              architecture with TensorRT acceleration, it sustains real-time streaming music generation on
              a single consumer GPU while exposing denoising parameters as live performance controls.
              Contributions include per-slot heterogeneous denoise scheduling, shared mutable per-step
              state for next-tick parameter effect, per-frame source blending, and a windowed VAE decode
              for an 8x decode speedup.
            </dd>
          </dl>
        </article>
        <article data-publication="vace-realtime">
          <h3>Adapting VACE for Real-Time Autoregressive Video Diffusion</h3>
          <dl>
            <dt>Author</dt>
            <dd>Ryan Fosdick (solo author)</dd>
            <dt>Affiliation</dt>
            <dd>Daydream (Livepeer)</dd>
            <dt>Published</dt>
            <dd>February 2026, arXiv</dd>
            <dt>URL</dt>
            <dd><a href="https://arxiv.org/abs/2602.14381">arxiv.org/abs/2602.14381</a></dd>
            <dt>Summary</dt>
            <dd>
              Proposes an architectural adaptation of VACE (Video All-in-one Creation and Editing) for
              real-time streaming. Moves reference frames out of the diffusion latent space into a parallel
              conditioning pathway, enabling autoregressive video generation using existing pretrained weights
              with no retraining. Demonstrates feasibility of real-time VACE-style control in streaming contexts.
            </dd>
          </dl>
        </article>
      </section>

      <section data-context="professional-roles">
        <h2>Professional Roles</h2>
        <ul>
          <li>
            <strong>AI Research Engineer at Daydream (Livepeer)</strong> —
            Core developer on Daydream Scope, researching autoregressive video models
            with focus on modes of real-time control.
          </li>
          <li>
            <strong>Former Tech Lead, StreamDiffusion</strong> —
            Led development of composable real-time diffusion pipelines with multi-ControlNet,
            SDXL, IPAdapter, and LoRA support at Daydream/Livepeer.
          </li>
        </ul>
      </section>

      <section data-context="projects">
        <h2>Open Source Projects</h2>

        <article data-project="scope">
          <h3>Daydream Scope</h3>
          <p>Open-source real-time generative AI pipeline tool for building, testing, and visualizing
          real-time video and world-model workflows. 230+ GitHub stars.</p>
          <a href="https://github.com/daydreamlive/scope">Repository</a>
        </article>

        <article data-project="comfyui_ryanontheinside">
          <h3>ComfyUI_RyanOnTheInside</h3>
          <p>Audio, MIDI, motion, and proximity reactivity nodes for ComfyUI. 700+ GitHub stars.
          Widely used in the ComfyUI community for real-time interactive diffusion workflows.</p>
          <a href="https://github.com/ryanontheinside/ComfyUI_RyanOnTheInside">Repository</a>
        </article>

        <article data-project="comfyui_realtimenodes">
          <h3>ComfyUI_RealtimeNodes</h3>
          <p>Real-time capable ComfyUI nodes. 76 GitHub stars.</p>
          <a href="https://github.com/ryanontheinside/ComfyUI_RealtimeNodes">Repository</a>
        </article>

        <article data-project="comfyui_profilerx">
          <h3>ComfyUI_ProfilerX</h3>
          <p>Node and workflow profiling for ComfyUI. Find bottlenecks, track trends. 76 GitHub stars.</p>
          <a href="https://github.com/ryanontheinside/ComfyUI_ProfilerX">Repository</a>
        </article>

        <article data-project="comfyui_controlfreak">
          <h3>ComfyUI_ControlFreak</h3>
          <p>MIDI and gamepad mapping for ComfyUI parameter control. 20 GitHub stars.</p>
          <a href="https://github.com/ryanontheinside/ComfyUI_ControlFreak">Repository</a>
        </article>
      </section>

      <section data-context="music">
        <h2>Music</h2>
        <p>
          Published composer with works featured in major television productions including
          &quot;The Young and the Restless.&quot; Represented by Brad Hatfield Music Collective.
          Founder and guitarist of MouthBreather, a Boston-based band.
        </p>
      </section>
    </div>
  )
}
