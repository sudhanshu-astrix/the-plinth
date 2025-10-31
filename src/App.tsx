function App() {
  return (
    <div className="min-h-screen bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />
      </div>

      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10" />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-6 md:p-12 lg:p-16">
        <div className="max-w-3xl w-full">
          <article className="space-y-12">
            <header className="space-y-6 relative">
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none uppercase relative">
                  <span className="relative inline-block">
                    The Plinth
                    <div className="absolute -bottom-2 left-0 w-full h-3 bg-white/20 -z-10 blur-sm" />
                  </span>
                </h1>
                <div className="absolute -top-4 -right-4 w-1 h-24 bg-white/60 transform rotate-12" />
                <div className="absolute -bottom-4 -left-2 w-16 h-1 bg-white/40" />
              </div>
            </header>

            <div className="space-y-8 text-neutral-300">
              <div className="relative">
                <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-white/30" />
                <p className="text-xl md:text-2xl leading-relaxed font-light text-white pl-4">
                  Culture isn't just what makes the headlines. It's not the algorithm-fueled trend that disappears in a day.
                </p>
              </div>

              <p className="text-base md:text-lg leading-loose">
                It's born in the quiet moments, in the spaces between the big events. It's the late-night soundcheck, the conversation that sparks a new collective, the unwavering belief of a curator bringing an idea to life and the wind-down during the night after. These are the stories that often go untold.
              </p>

              <div className="relative py-10 my-10">
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                <p className="text-lg md:text-xl leading-loose px-8 text-white/90 font-light italic">
                  A plinth is a base that holds something up for the world to see. It draws focus to the art it supports.
                </p>
              </div>

              <p className="text-base md:text-lg leading-loose">
                That's our mission here. The Plinth is a space dedicated to the stories that form the foundation of culture. We go behind the scenes with the visionaries who build communities from the ground up. We also go deep into the work that shapes our world, unpacking the creative process behind a new EP, or exploring the ideologies that give a groundbreaking film its power. A vision as broad as every category we explore.
              </p>

              <p className="text-base md:text-lg leading-loose">
                Powered by <span className="text-white font-semibold border-b border-white/50">Astrix</span> and our own curiosity, we believe that to truly understand culture, you have to understand the thinking that drives it: the ideologies, the processes, and the unique perspectives of the curators at its heart.
              </p>

              <div className="pt-10 space-y-4 relative">
                <div className="absolute -left-6 top-10 w-1 h-20 bg-white/20" />
                <p className="text-lg md:text-xl leading-loose text-white/90">
                  These are the stories that deserve a platform.
                </p>
                <p className="text-3xl md:text-4xl font-black text-white tracking-tight uppercase">
                  This is the foundation.
                </p>
                <div className="flex gap-2 pt-4">
                  <div className="w-12 h-px bg-white/60" />
                  <div className="w-6 h-px bg-white/40" />
                  <div className="w-3 h-px bg-white/20" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="absolute top-20 right-12 w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent transform rotate-12" />
      <div className="absolute bottom-32 left-16 w-32 h-px bg-gradient-to-r from-white/30 to-transparent" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white/60 rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/40 rounded-full" />
    </div>
  );
}

export default App;
