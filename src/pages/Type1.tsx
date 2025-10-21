import { useState } from 'react';
import flowerBg from '@/assets/flower-bg2.jpeg';
import mainPhoto from '@/assets/YoonSeo/kang_main_1_071.jpg'
import galleryPhoto1 from '@/assets/YoonSeo/kang_sub_1_083.jpg'
import galleryPhoto2 from '@/assets/YoonSeo/kang_sub_2_067.jpg'
import galleryPhoto3 from '@/assets/YoonSeo/kang_sub_4_099.jpg'
import galleryPhoto4 from '@/assets/YoonSeo/kang_sub_5_106.jpg'
import galleryPhoto5 from '@/assets/YoonSeo/kang_sub_6_122.jpg'
import galleryPhoto6 from '@/assets/YoonSeo/kang_sub_8_154.jpg'
const mainPhotoUrl = mainPhoto;

const galleryPhotos = [
  { id: 1, url: galleryPhoto1, alt: '윤서 사진 1' },
  { id: 2, url: galleryPhoto2, alt: '윤서 사진 2' },
  { id: 3, url: galleryPhoto3, alt: '윤서 사진 3' },
  { id: 4, url: galleryPhoto4, alt: '윤서 사진 4' },
  { id: 5, url: galleryPhoto5, alt: '윤서 사진 5' },
  { id: 6, url: galleryPhoto6, alt: '윤서 사진 6' },
];

function Type1() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg tracking-widest text-gray-500 font-medium mb-4">1ST BIRTHDAY PARTY</p>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              <span className="text-pink-500">윤서</span>의 첫 생일
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              열 달의 설렘과 일 년의 행복으로 무럭무럭 자란 윤서가<br/>
              드디어 첫 번째 생일을 맞이합니다.
            </p>
          </div>

          {/* Main Photo */}
          <div className="flex justify-center mb-16">
            <div className="relative group">
              <div
                className="w-96 h-96 md:w-[500px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white p-4"
                style={{
                  backgroundImage: flowerBg ? `url(${flowerBg})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden bg-pink-100 flex items-center justify-center">
                  <img
                    src={mainPhotoUrl}
                    alt="윤서의 메인 사진"
                    className="w-full h-full object-cover cursor-pointer transition-transform group-hover:scale-105"
                    onClick={() => setSelectedPhoto(mainPhotoUrl)}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Event Info */}
          <div className="text-center bg-white rounded-3xl shadow-lg p-8 mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl text-pink-500 font-bold mb-6">초대합니다</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>2025년 12월 6일 토요일 오전 11:30</strong>
              </p>
              <p className="text-md">플로렌스 위례점</p>
              <p className="text-sm text-gray-600">
                경기 성남시 수정구 위례광장로 300 위례중앙타워 12층 카네기홀
              </p>
              <div className="border-t border-gray-200 pt-4 mt-6">
                <p className="text-md">
                  아빠 <span className="text-pink-500 font-semibold">강신욱</span> 💛 엄마 <span className="text-pink-500 font-semibold">정수진</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Photo Gallery</h2>
          <p className="text-center text-gray-600 mb-12">윤서의 소중한 순간들</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {galleryPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPhoto(photo.url)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-square">
                  <img
                    src={photo.url}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
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

export default Type1;