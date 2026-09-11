import { client } from '@/sanity/lib/client';
import GalleryClient from './GalleryClient';
import { Breadcrumbs, CTABanner } from '@/components/ui';

export const metadata = {
  title: "Gallery | Transportation Company Karachi",
  description: "View our gallery showcasing operations of a leading Transportation Company Karachi, highlighting Cargo Transportation Pakistan.",
};

// Disable caching for this route so gallery updates appear immediately
export const revalidate = 0; 

export default async function GalleryPage() {
  // Fetch from Sanity using the user's 'gallery' schema
  const query = `*[_type == "gallery"] | order(_createdAt desc) {
    _id,
    image_type,
    "imgUrl": gallery_image.asset->url
  }`;
  
  let sanityImages = [];
  try {
    sanityImages = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching gallery from Sanity:", error);
  }

  // Map the Sanity schema to the format expected by our UI
  const galleryData = sanityImages.map(item => {
    // Normalize image_type to use as a category filter
    const normalizedType = (item.image_type || 'all').toLowerCase().trim();
    
    // Capitalize the first letter for the display label
    const displayLabel = item.image_type 
      ? item.image_type.charAt(0).toUpperCase() + item.image_type.slice(1)
      : 'Gallery Image';

    return {
      id: item._id,
      title: displayLabel,
      categoryLabel: displayLabel,
      categories: [normalizedType, 'all'],
      img: item.imgUrl || '', // Fallback if image wasn't uploaded
      alt: displayLabel,
      spanClasses: '' // Default size
    };
  });

  // Extract unique categories for the filter tabs dynamically
  const uniqueCategories = new Set(sanityImages.map(img => (img.image_type || '').toLowerCase().trim()).filter(Boolean));
  const dynamicFilters = [
    { id: 'all', label: 'All' },
    ...Array.from(uniqueCategories).map(cat => ({
      id: cat,
      label: cat.charAt(0).toUpperCase() + cat.slice(1)
    }))
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-surface">
      <div className="pt-24 pb-8 px-margin-mobile lg:px-margin-desktop bg-primary text-on-primary">
        <h1 className="text-headline-xl text-center mb-6">Our Gallery</h1>
        <p className="text-body-lg text-center max-w-2xl mx-auto opacity-90">Explore our fleet and logistics operations in action.</p>
      </div>
      <Breadcrumbs />
      <GalleryClient galleryData={galleryData} dynamicFilters={dynamicFilters} />
      <CTABanner 
        headline="See Our Fleet in Action" 
        description="Ready to trust us with your logistics needs?" 
        buttonText="Get a Quote" 
        buttonHref="/quote" 
      />
    </div>
  );
}
