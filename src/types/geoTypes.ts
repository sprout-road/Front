// GeoJSON 타입 정의

// ✅ 베이스 속성 인터페이스
export interface BaseProperties {
    [key: string]: string | number | boolean | null | undefined;
}

// ✅ extends BaseProperties 추가
export interface SidoProperties extends BaseProperties {
    sidoCode: string;
    sidoNameKo: string;
    sidoNameEn: string;
}

// ✅ extends BaseProperties 추가
export interface SigunguProperties extends BaseProperties {
    sidoCode: string;
    sigCode: string;
    sigNameKo: string;
    sigNameEn: string;
}

export interface GeoJsonFeature<T extends BaseProperties = BaseProperties> {
    type: 'Feature';
    properties: T;
    geometry: {
        type: 'MultiPolygon' | 'Polygon';
        coordinates: number[][][];
    };
}

export interface GeoJsonFeatureCollection<T extends BaseProperties = BaseProperties> {
    type: 'FeatureCollection';
    features: GeoJsonFeature<T>[];
}

// 시도 GeoJSON 타입
export type SidoGeoJson = GeoJsonFeatureCollection<SidoProperties>;

// 시군구 GeoJSON 타입
export type SigunguGeoJson = GeoJsonFeatureCollection<SigunguProperties>;

// 위치 관련 타입
export interface LocationRequest {
    lat: number;
    lng: number;
}

// 서버에서 받을 위치 하이라이트 응답 타입
export interface LocationHighlightResponse {
    highlightType: 'sido' | 'sigungu';
    targetCode: string;
    targetName: string;
    parentSidoCode?: string; // sigungu 타입일 때만 존재
    reason: string;
    centerLat: number;
    centerLng: number;
}