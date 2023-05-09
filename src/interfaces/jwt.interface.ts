interface JWTPayload {
  iss?: string;
  exp?: number;
  sub?: string;
  aud?: string;
  nbf?: number;
  iat?: number;
  jti?: string;
}

export interface JWT<T = never> {
  header: {
    alg: string;
    typ: string;
  };
  payload: T extends any ? T & JWTPayload : JWTPayload;
}
