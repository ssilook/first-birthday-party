import { useState } from 'react';
import React from 'react';
import { Grid, Repeat, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
// import babyPolaroid from '@/assets/bg1.jpg';
import paperBg from '@/assets/bg1.jpg';
import mapImage from '@/assets/mapImg.jpg';
import mainPhoto from '@/assets/YoonSeo/kang_main_1_071.jpg'
import galleryPhoto1 from '@/assets/YoonSeo/kang_sub_1_083.jpg'
import galleryPhoto2 from '@/assets/YoonSeo/kang_sub_2_067.jpg'
import galleryPhoto3 from '@/assets/YoonSeo/kang_sub_3_094.jpg'
import galleryPhoto4 from '@/assets/YoonSeo/kang_sub_4_099.jpg'
import galleryPhoto5 from '@/assets/YoonSeo/kang_sub_5_106.jpg'
import galleryPhoto6 from '@/assets/YoonSeo/kang_sub_6_122.jpg'
import galleryPhoto7 from '@/assets/YoonSeo/kang_sub_7_141.jpg'
import galleryPhoto8 from '@/assets/YoonSeo/kang_sub_8_154.jpg'

const mainPhotoUrl = mainPhoto;

const galleryPhotos = [
  { id: 1, url: galleryPhoto1, alt: '윤서 사진 1' },
  { id: 2, url: galleryPhoto2, alt: '윤서 사진 2' },
  { id: 3, url: galleryPhoto3, alt: '윤서 사진 3' },
  { id: 4, url: galleryPhoto4, alt: '윤서 사진 4' },
  { id: 5, url: galleryPhoto5, alt: '윤서 사진 5' },
  { id: 6, url: galleryPhoto6, alt: '윤서 사진 6' },
  { id: 7, url: galleryPhoto7, alt: '윤서 사진 7' },
  { id: 8, url: galleryPhoto8, alt: '윤서 사진 8' },
];

type GalleryViewType = 'grid' | 'carousel';

function Type2() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [showAccount, setShowAccount] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [galleryView, setGalleryView] = useState<GalleryViewType>(isMobile ? 'carousel' : 'grid');
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // Handle window resize
  const handleResize = () => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);
    if (mobile && galleryView === 'grid') {
      setGalleryView('carousel');
    } else if (!mobile && galleryView === 'carousel') {
      setGalleryView('grid');
    }
  };

  // Add resize listener on mount
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [galleryView]);

  return (
    <div
      className="min-h-screen bg-amber-50"
      style={{
        backgroundImage: paperBg ? `url(${paperBg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Hero Section with Vintage Style */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left - Main Photo with Polaroid Effect */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="bg-white p-6 pb-16 rounded-lg shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
                  <img
                    src={mainPhotoUrl}
                    alt="윤서의 메인 사진"
                    className="w-80 h-96 md:w-96 md:h-[480px] object-cover cursor-pointer"
                    onClick={() => setSelectedPhoto(mainPhotoUrl)}
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-center">
                    <p className="text-amber-800 text-xl font-cursive">Yoon Seo's 1st Birthday</p>
                  </div>
                </div>
                {/* Decorative vintage corner */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-600 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Right - Information */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
                  윤서의 돌잔치에<br/>
                  <span className="text-amber-700">초대합니다</span>
                </h1>
                <p className="text-lg text-amber-800 leading-relaxed">
                  윤서가 드디어 첫번째 생일을 맞이하게 되었습니다.<br/>
                  그동안 저희 윤서를 아껴주신 많은 분들께 감사드리며<br/>
                  작은 잔치를 준비하였습니다.<br/>
                  꼭 오셔서 함께 기쁨해 주시면 감사하겠습니다.
                </p>
              </div>

              {/* Event Details Card */}
              <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-2 border-amber-200">
                <div className="space-y-4">
                  <p className="text-xl font-bold text-amber-900">
                    2025년 12월 06일 (토) 오전 11시 30분
                  </p>
                  <p className="text-lg text-amber-800">플로렌스 위례점</p>
                  <p className="text-amber-700">
                    경기 성남시 수정구 위례광장로300 위례중앙타워 12F 카네기홀
                  </p>
                  <div className="border-t border-amber-200 pt-4">
                    <p className="text-amber-800">
                      아빠 <span className="font-semibold text-amber-900">강신욱</span> · 엄마 <span className="font-semibold text-amber-900">정수진</span> 드림
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 px-4 bg-white bg-opacity-80">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Memory Gallery</h2>
            <p className="text-xl text-amber-700">윤서의 소중한 순간들</p>
            <div className="w-24 h-1 bg-amber-600 mx-auto mt-6"></div>

            {/* Gallery View Toggle Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={() => setGalleryView('grid')}
                className={`p-2 rounded-lg transition-all ${
                  galleryView === 'grid'
                    ? 'bg-amber-600 shadow-lg'
                    : 'bg-white bg-opacity-80 hover:bg-opacity-100'
                }`}
                title="모아보기"
              >
                <Grid size={18} className={galleryView === 'grid' ? 'text-white' : 'text-amber-900'} />
              </button>
              <button
                onClick={() => {
                  setGalleryView('carousel');
                  setCarouselIndex(0);
                }}
                className={`p-2 rounded-lg transition-all ${
                  galleryView === 'carousel'
                    ? 'bg-amber-600 shadow-lg'
                    : 'bg-white bg-opacity-80 hover:bg-opacity-100'
                }`}
                title="슬라이드"
              >
                <Repeat size={18} className={galleryView === 'carousel' ? 'text-white' : 'text-amber-900'} />
              </button>
            </div>
          </div>

          {/* Grid View */}
          {galleryView === 'grid' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {galleryPhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedPhoto(photo.url)}
                >
                  <div
                    className={`relative bg-white p-3 pb-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 ${
                      index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? 'rotate-[-1deg]' : 'rotate-[2deg]'
                    } hover:rotate-0 hover:scale-105`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <p className="text-xs text-amber-800 font-cursive">Memory {photo.id}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Carousel View */}
          {galleryView === 'carousel' && (
            <div className="flex flex-col items-center max-w-4xl mx-auto">
              <div className="relative w-full">
                {/* Main Image Container */}
                <div className="relative bg-white p-6 rounded-2xl shadow-2xl w-full">
                  <img
                    src={galleryPhotos[carouselIndex].url}
                    alt={galleryPhotos[carouselIndex].alt}
                    className="w-full aspect-square object-cover rounded-lg"
                  />

                  {/* Left Arrow - Overlaid on image */}
                  <button
                    onClick={() =>
                      setCarouselIndex(
                        carouselIndex === 0 ? galleryPhotos.length - 1 : carouselIndex - 1
                      )
                    }
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white transition-all md:left-4"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                  >
                    <ChevronLeft size={40} />
                  </button>

                  {/* Right Arrow - Overlaid on image */}
                  <button
                    onClick={() =>
                      setCarouselIndex(
                        carouselIndex === galleryPhotos.length - 1 ? 0 : carouselIndex + 1
                      )
                    }
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white transition-all md:right-4"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
                  >
                    <ChevronRight size={40} />
                  </button>

                  {/* Expand button - Top right */}
                  <button
                    onClick={() => setSelectedPhoto(galleryPhotos[carouselIndex].url)}
                    className="absolute top-4 right-4 bg-black hover:bg-opacity-75 text-white p-3 rounded-full transition-all bg-opacity-50"
                  >
                    <Maximize2 size={24} />
                  </button>
                </div>

                {/* Image Info */}
                <div className="text-center mt-6">
                  <p className="text-2xl font-bold text-amber-900">Memory {galleryPhotos[carouselIndex].id}</p>
                  <p className="text-sm text-amber-700 mt-2">
                    {carouselIndex + 1} / {galleryPhotos.length}
                  </p>
                </div>

                {/* Dot Indicators - Hidden */}
                <div className="flex justify-center gap-3 mt-6 hidden">
                  {galleryPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCarouselIndex(index)}
                      className={`transition-all rounded-full ${
                        index === carouselIndex
                          ? 'w-8 h-3 bg-amber-600 border-2 border-amber-700 shadow-md'
                          : 'w-2 h-2 bg-amber-300 hover:bg-amber-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 bg-amber-100 bg-opacity-80">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-amber-900 mb-12">오시는 길</h3>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-1">
                <img
                  src={mapImage}
                  alt="돌잔치 장소 지도"
                  className="w-full h-64 md:h-80 object-cover"
                  onClick={() => window.open("https://naver.me/5qDjc00o", "_blank")}
                />
              </div>
              <div className="p-8 bg-amber-50">
                <div className="space-y-4 text-amber-800">
                  <p><span className="font-bold text-amber-900">주소:</span> 경기 성남시 수정구 위례광장로 300 12F</p>
                  <p><span className="font-bold text-amber-900">주차:</span> 위례중앙타워, 하객 3시간 무료주차</p>
                  <div className="border-t border-amber-200 pt-4">
                    <button
                      className="w-full bg-[#00C73C] hover:bg-[#00B030] text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                      onClick={() => window.open("https://naver.me/5qDjc00o", "_blank")}
                    >
                      네이버 지도로 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heart Message Section */}
      <section className="py-16 px-4 bg-amber-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-xl p-10 border-2 border-amber-200">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold text-amber-900 mb-4">💕 윤서에게 마음 전하기</h3>
              <div className="space-y-6">
                {!showAccount ? (
                  <button
                    onClick={() => setShowAccount(true)}
                    className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-2xl transition-colors w-full text-lg md:text-xl shadow-md hover:shadow-lg"
                  >
                    마음 보낼곳
                  </button>
                ) : (
                  <div className="bg-amber-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-amber-200">
                    <div className="text-center space-y-3">
                      <p className="text-amber-700 font-semibold text-lg">카카오뱅크</p>
                      <p className="text-lg md:text-xl font-bold text-amber-900">정수진</p>
                      <p className="text-base md:text-lg font-bold text-amber-900 bg-white bg-opacity-60 rounded-lg py-3 px-4 border border-amber-300">
                        3333-31-3663773
                      </p>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('3333-31-3663773');
                          alert('계좌번호가 복사되었습니다!');
                        }}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition-colors w-full"
                      >
                        복사
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={selectedPhoto}
              alt="확대된 사진"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70"
              onClick={() => setSelectedPhoto(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Type2;