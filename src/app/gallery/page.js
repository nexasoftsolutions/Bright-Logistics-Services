'use client';

import { useState, useEffect } from 'react';
import { Settings, ZoomIn, ArrowDown, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryData = [
  {
    id: 1,
    title: "Karachi Port Operations",
    categoryLabel: "Containers • Ports",
    categories: ["containers", "ports"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBO5LABERbPut_psck3t-i3J2AoPJ_zGjwS1In-XrIJSjYAoPX7L8_lRGnuZwMJIh8QHBAFIqOHV6LQo8pXr6NBS_hWL7sa_TYkwnZzHxPp82IMvSAnHiUf0MS1Hf9CmwnQb1wcrf8c-rt_EI14xWY0Rszuf8y-1waYvBnkChlU7JPwkCH9dB9LCRDb6UOzeAtpanU7DmmOPkj9-UUPPpA_GusQXuhM76ffZlQsRfVswyoyoc1eEXZ6Pw",
    alt: "Massive stacks of bright orange and deep blue shipping containers at a bustling Karachi port",
    spanClasses: "md:col-span-2 md:row-span-2"
  },
  {
    id: 2,
    title: "Highway Fleet",
    categoryLabel: "Fleet & Trailers",
    categories: ["fleet"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4qfSo5Q-aJ42yeLftPq0x3TkUo4jS5CBsTmEvQpWv-S9phwOiWBlzci477TeS8WWZUyzc8zxj9_F7b3RwLAtsRFsYUJ8wSkKJI-MPOZ1rN2e4hDUo5lUC_HaoD5XjK2tIVDrVjVim1OTxNgLTVmHgSa1PIcB4QbpxOq9uw-qfJycAKzwbRQ1-8mzA1YUvmaUL9wC2UsDud_SDjowOclX4GvtCMFCjsCCjNIeEGS1jG6euAOgi_AwFhA",
    alt: "A sleek, modern heavy-duty logistics truck cab driving down a clean highway",
    spanClasses: "md:col-span-2 lg:col-span-1"
  },
  {
    id: 3,
    title: "Storage Facility",
    categoryLabel: "Warehouse",
    categories: ["warehouse"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfJmidRSo1CbYlKSdRtmH4085-hPnQuYQoNyuy6kx1vdWgV_YicXb_8xRygRIbkYgMv3zKDjRuGzgt8M7H7KUS9pmsdark-05sTNeUWgzp628ML2p5B3BQnC4CjkstT7Zf7hhJSqSA29kojapCuQQ26m0H8SRdOo1v3-UdkrobB4nG9bVsKZwb8GqLk561-4mrfsQuckF2vUDR6w_vXN1sL-gU8HwQrdtskSasNhOeA2EXWoWaBL_uBw",
    alt: "Interior of a vast, brightly lit logistics warehouse",
    spanClasses: ""
  },
  {
    id: 4,
    title: "Plant Transfer",
    categoryLabel: "Operations",
    categories: ["operations"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwSA4Dy8zfx-4hX6LVBCwTGIB8YaAcfDBHX_44pRqLcMO3b5D7YoSJA1fZAnqEAhi9YywhFYx2NkiMsNsk_rgWTu19z19VbfTbnIQKJ9BvUraOg8NUTXyyQqaMT5HZjtLzsNzkRm_2rWuPJSZ2n5qUdtdhE8C3oviBVpcRGNlG0QLfeRn0HX-VZ-tJHNPgvHbD7cAlwLXzd-qYivWhGo_Yz6-iX8QKpvV_Gt42SROdvrn2saNfsW7VDA",
    alt: "A specialized heavy-lift operation moving massive industrial plant machinery",
    spanClasses: "md:row-span-2"
  },
  {
    id: 5,
    title: "Control Tower",
    categoryLabel: "Team",
    categories: ["team"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTyLMRs-jjTj8K-1b78CKNb_nmD5sEVqDhHRRGfG8ONXuXZ01HbbSI-kufPk44Z8-89T7RsQCUCofNLqzwVmdg41ycl5SBleP9zJUUwGTEuN8NGeBzTXj3j-I0LlKNsv_OGAhpPm9mL1GJwJt4S46hJugo5Toy3tWapSvGcehqy_v-inC7iwBEJKoYbUG1zPv-Bn4oMzjGX2gJS9s7QtJAFNQ1KNi7-KOa5GnUHZf6bbCOcvI7cJRaIQ",
    alt: "A diverse team of logistics professionals in a modern glass-walled control room",
    spanClasses: ""
  },
  {
    id: 6,
    title: "Port Qasim Terminal",
    categoryLabel: "Ports • Operations",
    categories: ["ports", "operations"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0IcGuWVA08GuIGYI5Un-KMvVEmm_WwxA_Z5uw5ekHiw41ctTvnHBY2l3Z7hgMhS6I3atnjeY9gtZfv4CppwNNszlHRF0K8YDfWPl9iUm2GTzmxbETMcGHnl_3wBAs4l3wrnSIFmTT-ytlLZIK2rt3WkbtPks-iO06a1wEGf1xnl41QeoaZLZPm47SYF3Z93rmngm0p1T-uz1-Zn21xEscApq8pjrzoDETsTN7_JnczgNbkSvhqs__kA",
    alt: "Panoramic view of Port Qasim shipping terminal at dawn",
    spanClasses: "md:col-span-2"
  },
  {
    id: 7,
    title: "Secure Loading",
    categoryLabel: "Operations",
    categories: ["operations"],
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCST1eg7sp8JltBviJHqP99OKMAMG4tr6Np6dBjEOtXbQgoeGZyK1UIBIQtCMjznO7gKqHOaOjvttChWoIbI28kYURpkGW7iN6jLUJHF9smyg1TMhpyxCFs9zAZtprnWggbrxTeBXudCdd1QOXmbXZz2BE7UQPGlW0jprHFjqWo4NEYpna7w8wu62PDj3nC6cQv6KRDkX63IhM_gH_egzxMAnUUNyCRC7q0MgUYT6Ak4QIAxbT6W1A9YA",
    alt: "Close up of expert loading operations",
    spanClasses: ""
  }
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'containers', label: 'Containers' },
  { id: 'fleet', label: 'Fleet & Trailers' },
  { id: 'vehicles', label: 'Vehicles' },
  { id: 'ports', label: 'Ports (KHI/Qasim)' },
  { id: 'warehouse', label: 'Warehouse' },
  { id: 'operations', label: 'Operations' },
  { id: 'team', label: 'Team' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredData = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.categories.includes(activeFilter));

  const openLightbox = (index) => {
    // Find the actual index in the full galleryData array 
    // to maintain consistent left/right navigation through all images
    const targetItem = filteredData[index];
    const actualIndex = galleryData.findIndex(item => item.id === targetItem.id);
    
    setCurrentImageIndex(actualIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxOpen]);

  return (
    <div className="flex flex-col w-full relative group">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center -mt-20 overflow-hidden group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105" 
          style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCLzsc5NvSLOS-6aG5gFEOKXHHkEjU1lUkThXhsNQcVmEnyByJ_6ISRFaNWF1p7HJ4Y3aU0Yr8cewemuabSH9wcDw5_g8tVv0slm9v0w-xJp3Nnt6rtvoBseNFdYQxv5lv12XKtj8fQDlPR4xkA9C_RVlPRx1PMWlHNAPOofJpGbhn9eHLTHP5Lw1xJUvxbCi281st2OnIvTPEID0WVuol-lQXLgoYxSf8BdZaI5srtd2Aywt9i4Lgyaw')" }} 
        />
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]" />
        <div className="relative z-10 text-center px-margin-mobile pt-20 flex flex-col items-center">
          <h1 className="font-headline-xl text-on-primary mb-4 animate-fade-in-up text-5xl">Visualizing Excellence</h1>
          <p className="font-body-lg text-on-primary-container max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            A glimpse into our expansive operations, state-of-the-art fleet, and the dedicated professionals powering global trade.
          </p>
          <div className="mt-8 flex gap-2 items-center opacity-70">
            <div className="w-8 h-1 bg-secondary-container" />
            <div className="w-1 h-1 rounded-full bg-secondary-container" />
            <div className="w-1 h-1 rounded-full bg-secondary-container" />
          </div>
        </div>
      </section>

      {/* Main Content Wrapper */}
      <div className="max-w-[1440px] mx-auto w-full px-margin-mobile lg:px-margin-desktop py-16 lg:py-24 flex flex-col gap-12 relative z-20 -mt-16 bg-surface rounded-t-3xl shadow-xl">
        
        {/* Filter Section */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-secondary-container font-label-bold uppercase tracking-widest mb-2 block">Portfolio</span>
              <h2 className="font-headline-lg text-on-surface">Operational Gallery</h2>
            </div>
            <button className="text-body-sm text-outline hover:text-primary transition-colors flex items-center gap-2 group cursor-not-allowed" title="Future Feature">
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              <span className="hidden md:inline">Manage Gallery</span>
            </button>
          </div>

          {/* Filter Tabs */}
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-2 min-w-max">
              {filters.map(filter => (
                <button
                  key={filter.id}
                  className={`px-6 py-2 rounded-full font-label-bold transition-all ${
                    activeFilter === filter.id 
                      ? 'bg-primary text-on-primary' 
                      : 'bg-surface-container hover:bg-surface-variant text-on-surface'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[250px]">
          {filteredData.map((item, index) => (
            <div 
              key={item.id}
              className={`rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow animate-fade-in-up ${item.spanClasses}`}
              onClick={() => openLightbox(index)}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:brightness-75" 
                alt={item.alt} 
                src={item.img} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <ZoomIn className="text-on-primary w-8 h-8 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300" />
                <h3 className="font-headline-sm text-on-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.title}
                </h3>
                <span className="text-body-sm text-on-primary-container translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More (Visual only) */}
        <div className="flex justify-center mt-8">
          <button className="bg-surface border border-outline text-on-surface px-8 py-3 rounded-full font-label-bold hover:border-primary hover:text-primary transition-all flex items-center gap-2 group shadow-[0_2px_10px_rgba(0,31,63,0.04)]">
            View Complete Archive
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-primary/95 backdrop-blur-md flex flex-col transition-opacity duration-300 animate-in fade-in">
          <div className="flex justify-between items-center p-6 text-on-primary absolute top-0 w-full z-10">
            <div className="flex flex-col">
              <span className="font-headline-md">{galleryData[currentImageIndex].title}</span>
              <span className="font-body-sm text-on-primary-container">{galleryData[currentImageIndex].categoryLabel}</span>
            </div>
            <button 
              className="w-12 h-12 rounded-full bg-on-primary-fixed-variant/30 flex items-center justify-center hover:bg-secondary-container transition-colors" 
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 flex items-center justify-center relative px-12 py-24 h-full">
            <button 
              className="absolute left-6 w-12 h-12 rounded-full bg-on-primary-fixed-variant/30 flex items-center justify-center text-on-primary hover:bg-secondary-container transition-colors z-10" 
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img 
              alt={galleryData[currentImageIndex].alt} 
              className="max-h-full max-w-full object-contain drop-shadow-2xl transition-transform duration-300 scale-100" 
              src={galleryData[currentImageIndex].img} 
            />
            <button 
              className="absolute right-6 w-12 h-12 rounded-full bg-on-primary-fixed-variant/30 flex items-center justify-center text-on-primary hover:bg-secondary-container transition-colors z-10" 
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-on-primary-container font-label-bold tracking-widest bg-on-primary-fixed-variant/30 px-4 py-2 rounded-full">
            <span>{currentImageIndex + 1} / {galleryData.length}</span>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}} />
    </div>
  );
}
