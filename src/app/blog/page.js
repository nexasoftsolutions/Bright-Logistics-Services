'use client';

export default function Blog() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden -mt-20 pt-20 flex items-center justify-center">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA8_FfUDcaoA25EoxWq85kffdlkQObwTivTI9fI7HY1UdoUlXg_CT32P7J4IXIP2XG4zHdKLg1P2UPMHdOd29pUZ0ABXvOQvZmhUSwAippJz9dyh0et2vQW77dXXA5X3tYvbT11PAzR2fyr-6yJGUis_TghMoc11tRHzrF290lVSk3BfQFDI5QdmnBraCNEuS34mUnAbflhQ-zwlPBhHZ6I7JWUsOzXBOehLCu3PjJPrdH6nkXPeQ4LdA')" }} 
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-desktop text-center">
          <h1 className="font-headline-xl text-headline-xl text-on-primary mb-6">Logistics Insights &amp; News</h1>
          <p className="font-body-lg text-body-lg text-inverse-primary max-w-2xl mx-auto">
            Stay updated with the latest trends, operational strategies, and industry news from the forefront of global logistics.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-gutter">
          
          <article className="group relative flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                alt="A massive cargo ship navigating through calm, deep navy waters" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWedIWS7sYC4dAVCNBsy2N5N_kSXbirAu43RZ9cYfedTJQFbKUaIvN1RxPv4nVncnW60ft4aEIOwdbMdy5qxxNQ35zU1lF18N93YZMJbZz7c_CXxgJP1ZuUNY1ma_q97Jbg8_UhgmH2wzCdoZB8CrDMktMYwikLkxM2OLx58AhL-JgasP0rQ7_CbkdxEyy1FSyPQUl0NHawo00mdOfzLmBNHbXntIKM-FZidlhzGwjnDjby4Q9UJ0TCQ" 
              />
            </div>
            <div className="flex flex-col flex-1 p-6 space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                How to Choose the Right Container Transportation Service
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">
                Navigating the complexities of container shipping requires careful consideration. Discover the key factors to evaluate, including safety protocols, fleet reliability, and cost-effectiveness, to ensure your cargo reaches its destination securely and on time.
              </p>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Read Full Article</span>
              </div>
            </div>
            <a className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Read more about container transportation</span>
            </a>
          </article>

          <article className="group relative flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                alt="A highly detailed, aerial view of Karachi Port" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL1S7a0O7rR9TriY_Gxh-WMpFBtZHFNVqnvAHX4bNqSQZkxDg9TKVkRe-EPAJRv7xm3JwtFaRghuBR4EisnO7Ue8qI7EDTL6RjnHRkMYZOcl7c1xLVQIBihn-SK4tzft_iXafqFE8b6j3WQEpaN-ZF-Lv2PU8-v3auVwGak9zP6KyrYWWyY8vtbJwJ3jUAqQmAgHkZd-lUjWrgx5jrG2DaCeaLKmYpnl94cyuROtax0WPAFT_Lb6dslQ" 
              />
            </div>
            <div className="flex flex-col flex-1 p-6 space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                Karachi Port Logistics: A Gateway to Success
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">
                An in-depth overview of the operational dynamics at Karachi Port. Learn about our strategic role in facilitating seamless trade flow, overcoming regional bottlenecks, and maximizing throughput for domestic and international clients.
              </p>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Read Full Article</span>
              </div>
            </div>
            <a className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Read more about Karachi Port logistics</span>
            </a>
          </article>

          <article className="group relative flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                alt="A modern, streamlined semi-truck hauling a branded shipping container along a smooth highway at dawn" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpd1K21V6NZ-JiNmXzVqDzM35vVg3pXlLbfm7W8eFr8LkOHQYR8rIn2wrVJc7x8hSw3mNpNdh-KKhuHFj34tpFm31PuyjFNWZQdKrpI9wQhyWCymctVM7LvGHZmXIuW9DmECxJXJXRKQEza35AMXKfNvHIMhz8Gi_oCsXR0Yc7fcMiDY5TAyc1KvJJtx0WGaZwzvZSK_EzyIxkwg3G94c3UetbMRvJZYrW-WZck1WAniZBViJp-sxJyA" 
              />
            </div>
            <div className="flex flex-col flex-1 p-6 space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                Importance of Reliable Cargo Transportation
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">
                In modern global trade, reliability is non-negotiable. Explore how uninterrupted cargo transportation forms the backbone of supply chain efficiency, mitigating risks of downtime and ensuring consistent inventory flow across all sectors.
              </p>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Read Full Article</span>
              </div>
            </div>
            <a className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Read more about reliable cargo transportation</span>
            </a>
          </article>

          <article className="group relative flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                alt="A dramatic shot of specialized heavy lifting equipment carefully maneuvering a massive, complex piece of industrial machinery" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGCC4OwDG8QwvICvISBMpMV8xj-nBOx-tMz75DsPBFSJ0BKHJ9OhGM-FdO3q2hYFm--byx59_eE2jviGZpAfEKTZrM8Wgo5jLHS8zcHnvUBmjIHXL0rgnVykIehrptOrhClMX1WFpwSWhz6Pz1oAo37vd2ZmyShO1pjHogw-HD_lREYuSPMtDXGiYN_0cs7oJxZqnHT4Wzfk6Zvd3DSY46nr5GQF9hPg1HzWS8ox5ouUy_f_rSFb651Q" 
              />
            </div>
            <div className="flex flex-col flex-1 p-6 space-y-4">
              <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                Plant Transfer &amp; Industrial Logistics: Expert Handling
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">
                Moving heavy machinery and executing complete plant transfers demands specialized knowledge. This article details our rigorous approach to industrial logistics, highlighting the engineering, planning, and specialized fleet required for complex oversized cargo.
              </p>
              <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Read Full Article</span>
              </div>
            </div>
            <a className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Read more about plant transfer logistics</span>
            </a>
          </article>

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full bg-primary text-on-primary py-margin-desktop mt-12">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-headline-lg text-headline-lg mb-4">Never Miss an Update</h3>
            <p className="font-body-md text-body-md text-inverse-primary">
              Subscribe to our industry newsletter for exclusive insights, regulatory updates, and strategic logistical advice delivered straight to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <input 
              className="px-6 py-4 rounded-full bg-surface/10 border border-surface/20 text-on-primary font-body-md focus:outline-none focus:ring-2 focus:ring-secondary min-w-[300px]" 
              placeholder="Enter your corporate email" 
              type="email" 
            />
            <button className="px-8 py-4 rounded-full bg-secondary text-on-secondary font-label-bold text-label-bold tracking-wider uppercase hover:bg-secondary-container hover:text-on-secondary-container transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
