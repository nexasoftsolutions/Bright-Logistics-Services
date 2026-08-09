'use client';

import { ArrowLeft, ArrowRight, Quote, Star, StarHalf } from 'lucide-react';

export default function Clients() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section 
        className="relative w-full h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-primary-container text-on-primary-fixed-variant pt-20 -mt-20" 
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5Zpark5ZMZGalL_UZvDyNwItOsNaU4mEIiX6w0H7UjktFMEiZ8KVEVYBXAdPmVbHOHdKoneLYJFlOI5O-7PjEooCfDs-bNbYcYPPYczKVnXGqCaI_4ZhkibtMZztpRrofpZ6vNJ7CtfPsJJvnlRX3USs5iAvwYuzZxzoeIM8x92s2QKHXTtF5rXHcOSlrG707G34AuZPabQqw1Vw4rF5vZoBiWdYpUpF3lUJHMbRl2ukXpYOK5mxFLw')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container/90 via-primary-container/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary-container/20 via-transparent to-transparent opacity-50" />
        <div className="relative z-10 max-w-container-max w-full mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="animate-fade-in-up text-center mx-auto max-w-full">
            <div className="flex items-center gap-4 mb-6 justify-center">
              <div className="w-12 h-1 bg-secondary-container" />
              <span className="font-label-bold text-label-bold uppercase tracking-widest text-secondary-fixed">Partnerships</span>
            </div>
            <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-surface-container-lowest mb-6 leading-tight">
              Our Valued <span className="text-secondary-container">Clients</span>
            </h1>
            <p className="font-body-lg text-body-lg text-surface-variant/90 max-w-xl mx-auto">
              Building trust through excellence in logistics. We empower global enterprises to navigate complex supply chains with precision and absolute reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-24 md:py-32 bg-surface text-on-surface relative">
        <div className="absolute top-0 left-0 w-64 h-64 bg-surface-container-high rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2 mix-blend-multiply" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary-container mb-4">Trusted by Industry Leaders</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto text-center">
              We serve a diverse portfolio of multinational corporations, providing the backbone for their global operations.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-opacity duration-500">
            <div className="group relative w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                className="max-w-full max-h-full object-contain" 
                alt="Client Logo 1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIre_512rCDDiKhUKEKqpDHoorOZhbMTgkWwbIsCAbJH48FJn0iLoRcWv_a6zoSTz4M6p6CZXzId4ydpUpBHghTgKzB_WKWN5oeWpDzKdbkxSav-px1-azvdR4C9q1CvlDIfyZ7oVgnyfZnIE92j2lB9R561Q26_sx_9G5t9EyOS7qONy1m4OA0a9pSKT1wPbuK2a24fdjF6DkjGF7XY9_4_zKM8JhehoBJIof6NflnfRd8nLBO9OBZQ" 
              />
            </div>
            <div className="group relative w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                className="max-w-full max-h-full object-contain" 
                alt="Client Logo 2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBSuIxZZywRaD2DzWQ1aLGpcjfU_J4DEDehHv3WTeg9LlObzdX33cw8-aA_c4NbJ3ovgbGjHX1YIzNCyhxcS5xSY7P3TNHWds_DVkfdbkJpIBe_i1NwklnYyYDIFeShIj_UE_W-0K96j4150GkzUuZP691DpNfh4SLX0HTVovsdrXelhwNw-9T7qgvvZFusp8t8GqDRkze9g4sbqTdIJeHzJ99pYmoSDZ7IcfQ1NeS3a1QZ07lNMMNoQ" 
              />
            </div>
            <div className="group relative w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                className="max-w-full max-h-full object-contain" 
                alt="Client Logo 3"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_u9bA532O5L1i6zIFAfxJYLVq-cjDxK8LVVbAnxfbgm82xnAB_I1JrvwNNd46aST-jxM6BfCTvRkAPDrzOYlVRLJN9a4aueXS-ksePh_j5y3h0X9lHgJEasyUAjR-NeFlr3xKnfIzzqslMpjQB3rzG_RupqR_nU0xG4FjaPESm0FLHpzloyWizNWiIrp_a5mdAGlAliqjCQNj2Be9AnnCdl9XhkvoXNlsgMx87m9_9sS1gEncj42iWg" 
              />
            </div>
            <div className="group relative w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                className="max-w-full max-h-full object-contain" 
                alt="Client Logo 4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwx85oIbQjzHyEec9jvMxFKbE_r8AVoAceI2aB0lQ5_S-2mcV_wRVjAAm8NuSnnPpIQ7Jr5Z0f_4DwZ0U8mnuewX6BLzg_qqjnLB3ZK9MkhSycLMZqZpne56n50kXjRgiD864kv56_SLnxEgvyiiRwW4EnqVe4p5UzGI9XOFJ4adD71NimjoovIPi7BIxN3ybNNG1M8HTvRIWBKXmcLfnpkdXKtggQ9w2xJ0TAI0_dm4lcSssM8i5G_A" 
              />
            </div>
            <div className="group relative w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                className="max-w-full max-h-full object-contain" 
                alt="Client Logo 5"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlylHnc2MPYv-KUDv6EnayvvNuDv0z2Mv2aateCuXjgACSmesKAWQAQTdvV2Xk_OhGWzcvVdZ8SziMA2SifpuJrb8aIde_aL2s_Z9x3Kwdh2znt3eGjRW9MoLINEX5COS6ds5ikFa281t8A-wSiGDTzJ-T_YSWv5PSfEtPhVPykmv9-rp2lj3HHMsc2SCP2jCeh8XVJcJEuKmMzuOIW9QqP7xgrMIVO8RuYVRBXqyyWHM7QcsVtob6nQ" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-surface-container text-on-surface relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px] opacity-10 translate-x-1/3 translate-y-1/3" />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary-container mb-4">Client Perspectives</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Hear from the executives who rely on our control tower approach to manage their complex supply chains.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-surface shadow-sm flex items-center justify-center text-primary-container hover:bg-secondary-container hover:text-on-secondary-container transition-colors group">
                <ArrowLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
              <button className="w-12 h-12 rounded-full bg-primary-container text-surface-container-lowest shadow-md flex items-center justify-center hover:bg-secondary-container hover:text-on-secondary-container transition-colors group">
                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface rounded-xl p-8 shadow-sm hover:shadow-md hover:shadow-primary-container/5 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <Quote className="w-10 h-10 text-secondary-container opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-1 text-secondary-container">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-8 italic">
                "Bright Logistics transformed our distribution network. Their visibility tools and proactive problem-solving have reduced our transit times by 18% across the board. They are more than a vendor; they are a strategic partner."
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                <img 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                  alt="Sarah Jenkins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxdMX2FeZxmMsEu5k9e9iVw072DtRfmXd9n7XoXERjzRHMQsT45Yby73_TmmP3Q6wesSBJCWxDfjVkVJ3VmKVSGCoyZKve3SQTRLLhr3snEyTYcheEyKHXohKPsz62551B7BjMbhKryFKe3rMYrXAas8ZH6gPqEkqZ7TSPkMF0bY7_56pQ5_mtXyxonX5A0fRcnVnmAVTSDKKbwiuWliq_5EObKoNHV7MrB3B1SR8t31TD0E0t86ojKg" 
                />
                <div>
                  <h4 className="font-headline-sm text-body-md font-bold text-primary-container">Sarah Jenkins</h4>
                  <p className="font-body-sm text-label-bold text-on-surface-variant uppercase tracking-wider text-[10px]">VP Supply Chain, Global Trade Inc.</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-surface rounded-xl p-8 shadow-sm hover:shadow-md hover:shadow-primary-container/5 transition-all duration-300 group -translate-y-4">
              <div className="flex justify-between items-start mb-8">
                <Quote className="w-10 h-10 text-secondary-container opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-1 text-secondary-container">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-8 italic">
                "In the fast-paced retail sector, reliability is everything. Bright Logistics Services consistently delivers on time, even during peak seasons. Their dedication to excellence is evident in every shipment."
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                <img 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                  alt="Michael Chang"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAJ5fO_OGuXChbzHw4ingp11J1Y-BcDp_bBuE9kBeGPyiQ4YosPC-3ASd1X6I64WcYukXVRjMGDnf4YcG5KGJCaWxbaRoD16KYfZAl7msWKXGbZGoksHsCQLIYR46JcH0wJIl8wOIxckkleTXJsJwq_k88f8NIUh7qkJL0nI7I0-ABOkLz00ytrvupkMpehG-9SWKTS0JIX-45IEgUeXmUw4OfhWIQzgu8E5ZTjJhDXIJDVMmg6cBrCw" 
                />
                <div>
                  <h4 className="font-headline-sm text-body-md font-bold text-primary-container">Michael Chang</h4>
                  <p className="font-body-sm text-label-bold text-on-surface-variant uppercase tracking-wider text-[10px]">Director of Logistics, Prime Retail</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface rounded-xl p-8 shadow-sm hover:shadow-md hover:shadow-primary-container/5 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-8">
                <Quote className="w-10 h-10 text-secondary-container opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex gap-1 text-secondary-container">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <StarHalf className="w-5 h-5 fill-current" />
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface mb-8 italic">
                "Handling oversized industrial equipment requires precision and deep expertise. The Bright Logistics team navigates these complexities flawlessly, providing peace of mind for our most critical project cargo."
              </p>
              <div className="flex items-center gap-4 border-t border-outline-variant/30 pt-6">
                <img 
                  className="w-12 h-12 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                  alt="David Reynolds"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkjtOFmdYx4QHCAUyHqBeZuoILtAGm7ybOQD75IwECZ6oqQAQ-16S_cExkNIcWlaO020lwtazQRKeTKZbUVEIuHmuvNLvpTrxabqlRgwlGGfmxLjNW6kpjV45ddAeEs9Zj20QiCWjVafgPnxgHdLGlXP19Y9MkcVTpRpaV0dNsQIq41luGGrSHvZtmVDJ88K_q5rRGaTFq_zauOTXZR-hF6fd_Ia5Q-s6HoSNa6QF3F_EJ6Bohzjh1aQ" 
                />
                <div>
                  <h4 className="font-headline-sm text-body-md font-bold text-primary-container">David Reynolds</h4>
                  <p className="font-body-sm text-label-bold text-on-surface-variant uppercase tracking-wider text-[10px]">Operations Mgr, Industrial Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-on-primary relative overflow-hidden md:py-32">
        <div 
          className="absolute inset-0 opacity-20" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} 
        />
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
            <h2 className="font-headline-xl text-headline-md md:text-headline-xl text-surface-container-lowest mb-6">Partner with Bright Logistics Today</h2>
            <p className="font-body-lg text-body-lg text-surface-variant/80">
              Ready to optimize your supply chain and join our network of satisfied industry leaders? Let's engineer a logistics solution tailored to your operational demands.
            </p>
          </div>
          <div className="flex-shrink-0 flex flex-col sm:flex-row gap-4">
            <button className="bg-secondary-container text-on-secondary-container hover:bg-secondary transition-colors px-8 py-4 rounded font-label-bold text-label-bold uppercase tracking-widest shadow-lg shadow-secondary-container/20 flex items-center gap-2 group">
              Get a Quote
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="bg-transparent border border-outline-variant text-surface-container-lowest hover:bg-surface-container-lowest/10 transition-colors px-8 py-4 rounded font-label-bold text-label-bold uppercase tracking-widest flex items-center gap-2">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
