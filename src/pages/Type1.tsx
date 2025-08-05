import React from 'react';
// 배경 꽃 일러스트 파일을 불러옵니다
import flowerBg from '@/assets/flower-bg2.jpeg';

// Placeholder 이미지 URL (나중에 실제 아이 사진 URL로 교체)
// const babyPhotoUrl = 'https://via.placeholder.com/250/FFE4E1/F08080?text=Baby+Photo';
const babyPhotoUrl = ''; // 또는 비워두고 나중에 채워넣으세요.

function Type1() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 font-sans">
      <div 
        className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-6 relative"
        // 배경 이미지를 적용합니다. 
        // flowerBg가 없는 경우를 대비해 bg-white를 기본값으로 둡니다.
        style={{ 
          backgroundImage: flowerBg ? `url(${flowerBg})` : 'none', 
          backgroundSize: 'cover', 
          backgroundPosition: 'center' 
        }}
      >
        {/* 상단 문구 및 제목 */}
        <div className="text-center mt-4">
          <p className="text-sm md:text-base tracking-widest text-gray-500 font-medium">1ST BIRTHDAY PARTY</p>
          <h1 className="text-3xl md:text-4xl mt-2 text-gray-800 font-bold font-jamsil">
            <span className="text-pink-500">윤서</span>, 첫 생일
          </h1>
        </div>

        {/* 아이 사진 영역 - 나중에 사진을 넣을 수 있도록 레이아웃만 처리 */}
        <div className="relative my-8 flex justify-center items-center">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-md bg-pink-100 flex items-center justify-center text-gray-400">
            {babyPhotoUrl ? (
              <img 
                src={babyPhotoUrl} 
                alt="윤서의 돌 사진" 
                className="w-full h-full object-cover" 
              />
            ) : (
              <span className="text-sm">사진을 넣어주세요</span>
            )}
          </div>
        </div>
        
        {/* 초대의 글 및 정보 */}
        <div className="text-center mt-10 space-y-6">
          <p className="text-xl md:text-2xl text-pink-500 font-cursive mb-4">
            윤서의 돌잔치에 초대합니다
          </p>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            열 달의 설렘과 일 년의 행복으로 무럭무럭 자란<br/>
            윤서가 드디어 첫 번째 생일을 맞이합니다.<br/>
            <br/>
            사랑스러운 아기의 첫 생일을 축하하는 자리에<br/>
            귀한 걸음 하시어 기쁨을 나누어 주시면 감사하겠습니다.
          </p>

          <div className="flex justify-center items-center space-x-4 mt-8">
            <p className="text-sm md:text-base text-gray-700 font-medium">
              아빠 강신욱 💛 엄마 정수진
            </p>
          </div>
          
          <div className="border-t border-gray-200 mt-6 pt-6">
            <p className="text-sm md:text-base text-gray-800 font-medium">
              2025년 12월 6일 토요일 11:00
            </p>
            <p className="text-sm md:text-base text-gray-700 mt-2">
              플로렌스 위례점
            </p>
            <p className="text-sm md:text-base text-gray-700">
              경기 성남시 수정구 위례광장로 300 위례중앙타워 12층
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Type1;