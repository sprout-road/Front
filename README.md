## 초기 패키지 설치
- package.json에 있는 모든 의존하는 패키지들 다운됨
```
npm install
```

## 개발 환경 실행
```
npm run dev
```

## TypeScript + Vite + Tailwindcss
```
TypeScript는 타입 안정성을 확보할 수 있고 예상치 못한 오류를 엄격한 타입 검사로 방지할 수 있음
Vite는 빌드 도구이며 특히 개발 서버 시작 속도가 빠르고, 변경 사항에 대한 즉각적인 업데이트를 제공하며, 프로덕션 빌드 시에도 빠른 성능을 보장함
Tailwindcss는 반응형 디자인 구현에 능하며 jsx / tsx 파일 내에서 별도 파일 생성 없이 스타일링 가능 (전역 스타일도 쉽게 생성 가능 - 미사용)
```

## 디렉토리 구조
```
현재는 페이지에서 홈과 지역 컬러링 라우팅만 되어 있음
(현재 app.tsx에서 라우팅 관리)
```
