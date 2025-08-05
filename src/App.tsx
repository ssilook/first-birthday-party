import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          '/' 경로에 Home 컴포넌트를 연결합니다.
          페이지가 하나이므로 기본 경로에 Home 컴포넌트만 렌더링하도록 설정합니다.
        */}
        <Route path="/first-birthday-party" element={<Home />} />
        
        {/*
          필요하다면, 아래와 같이 다른 경로를 추가하여 페이지를 확장할 수 있습니다.
          <Route path="/rsvp" element={<RSVPPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;