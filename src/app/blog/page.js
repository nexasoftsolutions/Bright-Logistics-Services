'use client';

import PageHero from '@/components/ui/PageHero';
import SectionContainer from '@/components/ui/SectionContainer';
import { blogPosts } from '@/data/blog';export default function Blog() {
  return (
    <div className="flex flex-col w-full bg-surface">
      {/* Hero Section */}
      <PageHero 
        backgroundImage="https://lh3.googleusercontent.com/aida-public/AB6AXuA8_FfUDcaoA25EoxWq85kffdlkQObwTivTI9fI7HY1UdoUlXg_CT32P7J4IXIP2XG4zHdKLg1P2UPMHdOd29pUZ0ABXvOQvZmhUSwAippJz9dyh0et2vQW77dXXA5X3tYvbT11PAzR2fyr-6yJGUis_TghMoc11tRHzrF290lVSk3BfQFDI5QdmnBraCNEuS34mUnAbflhQ-zwlPBhHZ6I7JWUsOzXBOehLCu3PjJPrdH6nkXPeQ4LdA"
        title="Logistics Insights & News"
        subtitle="Stay updated with the latest trends, operational strategies, and industry news from the forefront of global logistics."
        sectionClassName="h-[400px] md:h-[500px]"
        titleClassName="text-headline-xl font-headline-xl text-on-primary mb-6"
        subtitleClassName="text-body-lg font-body-lg text-inverse-primary max-w-2xl mx-auto"
        overlayClassName="bg-primary/70 backdrop-blur-[2px]"
      />

      {/* Blog Articles Grid */}
      <SectionContainer as="section" className="py-margin-desktop w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-gutter">
          {blogPosts.map(post => (
            <article key={post.id} className="group relative flex flex-col bg-surface-container rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  alt={post.imageAlt} 
                  src={post.imageUrl} 
                />
              </div>
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <h2 className="font-headline-md text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <span className="font-label-bold text-label-bold text-outline uppercase tracking-wider">Read Full Article</span>
                </div>
              </div>
              <a className="absolute inset-0 z-10" href="#">
                <span className="sr-only">Read more about {post.title.toLowerCase()}</span>
              </a>
            </article>
          ))}
        </div>
      </SectionContainer>

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
