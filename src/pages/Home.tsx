import React from 'react';
import styles from './Home.module.css';
import babyPolaroid from '@/assets/bg1.jpg';
import paperBg from '@/assets/bg1.jpg';
import mapImage from '@/assets/map.png';

function Home() {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: paperBg ? `url(${paperBg})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.invitationCard}>
        <div className={styles.photoSection}>
          <div className={styles.polaroidFrame}>
            <img
              src={babyPolaroid ? babyPolaroid : ''}
              alt="윤서의 돌 사진"
              className={styles.polaroidImage}
            />
            <div className={styles.birthdayText}>
              Yoon Seo's 1st Birthday~
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <div className={styles.heading}>
            <h1 className={styles.mainTitle}>
              윤서의 돌잔치에
            </h1>
            <h1 className={`${styles.mainTitle} ${styles.inviteText}`}>
              초대합니다
            </h1>
          </div>

          <p className={styles.bodyText}>
            윤서가 드디어 첫번째 생일을 맞이하게 되었습니다.
            그동안 저희 윤서를 아껴주신 많은 분들께 감사드리며
            작은 잔치를 준비하였습니다.
            <br />
            꼭 오셔서 함께 기쁨해 주시면 감사하겠습니다.
          </p>

          <p className={styles.eventTime}>
            2025년 12월 06일 (토) 오전 11시 플로렌스 위례점
          </p>

          <p className={styles.parentsText}>
            <span className={styles.darkBrownText}>윤서 아빠 강신욱</span> ·{' '}
            <span className={styles.darkBrownText}>엄마 정수진</span> 드림
          </p>

          <div className={styles.detailCard}>
            <div className={styles.mapContainer}>
              <a href="https://naver.me/5qDjc00o" target="_blank">
                <img
                  src={mapImage}
                  alt="돌잔치 장소 지도"
                  className={styles.mapImage}
                />
              </a>
            </div>
            <div className={styles.addressContainer}>
              <p>
                <span className={styles.boldText}>주소:</span> 경기 성남시 수정구
                위례광장로 300 위례중앙타워 12층
              </p>
              <p>
                <span className={styles.boldText}>연락처:</span> 0507-1334-6114
              </p>
              <p>
                <span className={styles.boldText}>주차:</span> 건물 주차장
                이용(위례중앙타워), 하객 3시간 무료주차
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
