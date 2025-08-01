import { useState, useRef } from 'react';
import type { ChangeEvent } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form'; // 폼 관리를 위해 react-hook-form 설치 필요: pnpm add react-hook-form
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';


// 폼 데이터 타입 정의 (선택 사항이지만 타입스크립트 사용 시 권장)
interface InvitationFormData {
  babyName: string;
  eventDate: Date | undefined;
  eventTime: string;
  locationName: string;
  locationAddress: string;
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;
  parkingInfo: string;
  publicTransportInfo: string;
  kakaoMapLink: string;
  naverMapLink: string;
}

function App() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [babyImage, setBabyImage] = useState<string | null>(null); // 아기 사진 미리보기 URL
  const fileInputRef = useRef<HTMLInputElement>(null);

  // react-hook-form 설정
  const form = useForm<InvitationFormData>({
    defaultValues: {
      babyName: '열무',
      eventDate: new Date(),
      eventTime: '오전 11시 00분',
      locationName: '아름다운 홀',
      locationAddress: '서울특별시 강남구 테헤란로 123',
      fatherName: '김아빠',
      fatherPhone: '010-1234-5678',
      motherName: '이엄마',
      motherPhone: '010-9876-5432',
      parkingInfo: '건물 지하 주차장 (3시간 무료)',
      publicTransportInfo: '강남역 1번 출구 도보 5분',
      kakaoMapLink: 'https://kko.to/YOUR_KAKAO_MAP_LINK', // 실제 링크로 교체
      naverMapLink: 'https://map.naver.com/v5/search/YOUR_NAVER_MAP_LINK', // 실제 링크로 교체
    },
  });

  // 파일 선택 핸들러
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setBabyImage(URL.createObjectURL(file)); // 미리보기 URL 생성
    }
  };

  // 폼 제출 핸들러 (현재는 콘솔 로그만)
  const onSubmit = (data: InvitationFormData) => {
    console.log("폼 데이터:", data);
    console.log("아기 사진:", babyImage); // 파일 자체는 여기에 포함되지 않음 (별도 서버 업로드 필요)
    alert('정보가 저장되었습니다! (실제 저장은 서버 필요)');
  };

  return (
    // 배경 애니메이션을 위한 클래스 추가: bg-animated-gradient
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-purple-100 to-pink-100 font-sans overflow-hidden bg-animated-gradient">
      {/* 불꽃놀이 같은 이펙트 (선택 사항, CSS에서 구현) */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* <div className="fireworks-effect"></div> */}
      </div>

      <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-lg rounded-xl overflow-hidden animate-fade-in-up z-10">
        <CardHeader className="bg-pink-50 text-center py-6 border-b">
          {babyImage && (
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pink-300 shadow-md">
              <img src={babyImage} alt="아기 사진" className="object-cover w-full h-full" />
            </div>
          )}
          <CardTitle className="text-2xl sm:text-3xl font-bold text-pink-600 mb-2">
            🎉 돌잔치에 초대합니다 🎉
          </CardTitle>
          <CardDescription className="text-gray-700 text-sm sm:text-base">
            저희 아기 **{form.watch("babyName")}**의 첫 생일을 축하하는 자리에 귀한 걸음 하시어 <br />
            기쁨을 나누어 주시면 감사하겠습니다.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 text-center space-y-4">
          <p className="text-md sm:text-lg text-gray-800">
            👶🏻 **{form.watch("babyName")}** 첫 생일
          </p>
          <p className="text-md sm:text-lg text-gray-800 font-semibold">
            🗓️ 일시: {selectedDate ? format(selectedDate, 'yyyy년 MM월 dd일 (EE)') : '날짜 미정'} {form.watch("eventTime")}
          </p>
          <p className="text-md sm:text-lg text-gray-800">
            📍 장소: **{form.watch("locationName")}** ({form.watch("locationAddress")})
          </p>
          <p className="text-gray-600 text-xs sm:text-sm mt-4">
            (대중교통 이용 시: {form.watch("publicTransportInfo")}, 주차 가능: {form.watch("parkingInfo")})
          </p>

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-2">🎈 부모 연락처 🎈</h3>
            <p className="text-sm sm:text-md text-gray-700">
              아빠: {form.watch("fatherName")} ({form.watch("fatherPhone")})<br />
              엄마: {form.watch("motherName")} ({form.watch("motherPhone")})
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center items-center p-4 sm:p-6 bg-pink-50 border-t space-y-2 sm:space-y-0 sm:space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                오시는 길/연락처 확인
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>오시는 길 & 연락처</DialogTitle>
                <DialogDescription>
                  자세한 정보는 아래를 참고해 주세요.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2 text-sm sm:text-base">
                  <h4 className="font-semibold">장소: {form.watch("locationName")}</h4>
                  <p>{form.watch("locationAddress")}</p>
                  <p>주차: {form.watch("parkingInfo")}</p>
                  <p>대중교통: {form.watch("publicTransportInfo")}</p>
                </div>
                <div className="space-y-2 text-sm sm:text-base">
                  <h4 className="font-semibold">연락처:</h4>
                  <p>아빠: {form.watch("fatherName")} ({form.watch("fatherPhone")})</p>
                  <p>엄마: {form.watch("motherName")} ({form.watch("motherPhone")})</p>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">날짜 확인</h4>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border mx-auto w-full"
                  />
                </div>
              </div>
              <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-2">
                {form.watch("kakaoMapLink") && (
                  <Button onClick={() => window.open(form.watch("kakaoMapLink"), '_blank')} className="bg-yellow-500 hover:bg-yellow-600 w-full sm:w-auto">
                    카카오맵으로 길찾기
                  </Button>
                )}
                {form.watch("naverMapLink") && (
                  <Button onClick={() => window.open(form.watch("naverMapLink"), '_blank')} className="bg-green-500 hover:bg-green-600 w-full sm:w-auto">
                    네이버맵으로 길찾기
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>

          {/* 정보 수정 폼을 위한 Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-pink-500 border-pink-300 hover:bg-pink-100 w-full sm:w-auto">
                초대장 정보 수정
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>초대장 정보 수정</DialogTitle>
                <DialogDescription>
                  아래 항목들을 입력하여 초대장 내용을 변경하세요.
                </DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 py-4">
                  {/* 아기 사진 업로드 */}
                  <div className="grid gap-2">
                    <Label htmlFor="babyImage">아기 사진</Label>
                    <Input id="babyImage" type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                    {babyImage && (
                      <div className="relative w-24 h-24 mt-2 rounded-full overflow-hidden border-2 border-pink-200">
                        <img src={babyImage} alt="아기 사진 미리보기" className="object-cover w-full h-full" />
                      </div>
                    )}
                    <p className="text-xs text-gray-500">
                      *사진은 브라우저에만 저장되며, 새로고침 시 사라집니다. (실제 업로드를 위해서는 서버 필요)
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="babyName"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">아기 이름</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="eventDate"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">날짜</FormLabel>
                        <FormControl>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={(date) => {
                              field.onChange(date);
                              setSelectedDate(date); // Calendar 컴포넌트에도 반영
                            }}
                            className="rounded-md border col-span-3"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="eventTime"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">시간</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" placeholder="예: 오후 3시 00분" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="locationName"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">장소 이름</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="locationAddress"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">상세 주소</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="parkingInfo"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">주차 정보</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" placeholder="예: 건물 지하 주차장 (3시간 무료)" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="publicTransportInfo"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">대중교통</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" placeholder="예: 강남역 1번 출구 도보 5분" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fatherName"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">아빠 이름</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fatherPhone"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">아빠 번호</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="motherName"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">엄마 이름</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="motherPhone"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">엄마 번호</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="kakaoMapLink"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">카카오맵 링크</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" placeholder="https://kko.to/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="naverMapLink"
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-4">
                        <FormLabel className="text-right">네이버맵 링크</FormLabel>
                        <FormControl>
                          <Input className="col-span-3" placeholder="https://map.naver.com/v5/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DialogFooter className="mt-4">
                    <Button type="submit">저장하기</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>

      <footer className="mt-8 text-gray-600 text-sm text-center z-10">
        &copy; {new Date().getFullYear()} {form.watch("babyName")}의 가족 드림.
      </footer>
    </div>
  );
}

export default App;