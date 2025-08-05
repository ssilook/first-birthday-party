import React from 'react'
import babyPolaroid from '@/assets/bg1.jpg'; // 폴라로이드 스타일의 아이 사진
import paperBg from '@/assets/bg1.jpg';         // 낡은 종이 질감의 배경 이미지
import mapImage from '@/assets/map.png';           // 지도 이미지
// const babyPolaroid = ''
// const paperBg = ''
// const mapImage = ''

function Type2() {
  return (
    <div 
      className="flex justify-center items-center min-h-screen p-4 bg-gray-100"
      // 배경 이미지를 적용합니다
      style={{ 
        backgroundImage: paperBg ? `url(${paperBg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row bg-white bg-opacity-70 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden p-8 border-2 border-dark-brown">
        
        {/* 좌측 사진 영역 */}
        <div className="w-full md:w-2/5 p-4 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-xs md:max-w-sm aspect-w-4 aspect-h-5 bg-white border-8 border-white shadow-xl rotate-[-3deg] relative">
            <img 
              src={babyPolaroid ? babyPolaroid : ''} 
              alt="윤서의 돌 사진" 
              className="w-full h-full object-cover p-2"
            />
            <div className="absolute bottom-4 left-4 font-cursive text-xl md:text-2xl text-dark-brown drop-shadow-md">
              Yoon Seo's 1st Birthday~
            </div>
          </div>
        </div>

        {/* 우측 정보 영역 */}
        <div className="w-full md:w-3/5 p-4 mt-8 md:mt-0 md:pl-8 space-y-4">
          <div className="flex items-end space-x-2">
            <h1 className="text-xl md:text-2xl text-gray-700 font-kyobo">
              윤서의 돌잔치에
            </h1>
            <h1 className="text-3xl md:text-4xl text-dark-brown font-cursive drop-shadow-sm font-kyobo">
              초대합니다
            </h1>
          </div>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
            윤서가 드디어 첫번째 생일을 맞이하게 되었습니다.
            그동안 저희 윤서를 아껴주신 많은 분들께 감사드리며
            작은 잔치를 준비하였습니다.<br/>
            꼭 오셔서 함께 기쁨해 주시면 감사하겠습니다.
          </p>

          <p className="text-sm md:text-base text-gray-800 font-medium">
            2025년 12월 06일 (토) 오전 11시 플로렌스 위례점
          </p>

          <p className="text-sm md:text-base text-gray-800 mt-2">
            <span className="text-dark-brown">윤서 아빠 강신욱</span> · <span className="text-dark-brown">엄마 정수진</span> 드림
          </p>

          {/* 지도 및 상세 정보 카드 */}
          <div className="border-2 border-dark-brown p-2 md:p-4 rounded-lg bg-white bg-opacity-75 shadow-md flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-6">
            <div className="w-full md:w-1/2">
              <img 
                src={mapImage} 
                alt="돌잔치 장소 지도" 
                className="w-full h-auto rounded-md border" 
              />
            </div>
            <div className="w-full md:w-1/2 text-xs md:text-sm text-gray-700 space-y-1">
              <p>
                <span className="font-bold">주소:</span> 서울 마포구 당인동 1213
              </p>
              <p>
                <span className="font-bold">연락처:</span> 02-000-0000 / mail@mail.com
              </p>
              <p>
                <span className="font-bold">주차:</span> 건물 뒤 주차장 이용, 하객 무료주차 가능
              </p>
              <p className="border-t border-gray-300 pt-2 mt-2">
                <span className="font-bold">대중교통:</span> 2호선 시청역 8번출구 도보 3분
              </p>
              <p>
                <span className="font-bold">셔틀버스:</span> 서울역 셔틀버스, 명동역 셔틀버스 운행
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Type2;