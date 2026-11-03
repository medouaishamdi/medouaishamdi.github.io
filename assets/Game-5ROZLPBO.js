import{c as e,d as t,l as n,n as r,o as i,r as a,s as o,u as s}from"./personal-BNCZxw2U.js";import{c,i as l,l as u,r as d,s as f,u as p}from"./main-DcxYT0jI.js";import{t as m}from"./defineProperty-BbfpZ9Tg.js";import{$ as h,$n as g,$t as _,A as v,Ar as y,At as b,B as x,Bn as S,Bt as C,C as w,Cr as T,D as E,Dr as D,Dt as O,E as k,Er as ee,Et as A,F as j,Fr as te,Ft as ne,Gn as re,Gt as M,H as ie,Hn as ae,Ht as oe,I as se,Ir as ce,It as le,J as ue,Jt as de,K as fe,Kt as pe,L as me,Lr as he,Lt as ge,M as N,Mr as _e,Mt as ve,N as P,Nr as ye,Nt as be,O as xe,Or as Se,Ot as Ce,P as F,Pr as we,Pt as Te,Q as I,Qn as Ee,Qt as De,R as Oe,Rn as ke,Rr as L,Rt as R,S as Ae,Sr as z,St as je,T as B,Tr as Me,Tt as Ne,U as Pe,Un as V,Ut as Fe,V as Ie,Vn as Le,Vt as Re,W as H,Wn as ze,Wt as U,Xn as Be,Xt as Ve,Y as He,Yt as Ue,Z as We,Zn as Ge,Zt as Ke,_ as qe,_t as Je,a as Ye,ar as Xe,at as Ze,b as Qe,br as $e,bt as et,c as tt,cn as nt,cr as rt,ct as it,d as at,dr as ot,dt as st,en as W,er as ct,et as lt,f as ut,fr as dt,ft,g as pt,gr as mt,gt as ht,h as gt,ht as _t,i as vt,ir as yt,it as bt,j as xt,jr as St,jt as Ct,k as wt,kr as Tt,l as Et,lr as Dt,lt as Ot,m as kt,mr as At,mt as jt,n as Mt,nr as Nt,nt as Pt,o as Ft,or as It,ot as Lt,p as Rt,pr as zt,pt as Bt,q as G,qt as Vt,r as Ht,rn as Ut,rt as Wt,s as Gt,sn as Kt,sr as qt,st as Jt,tn as Yt,tr as Xt,tt as Zt,u as Qt,ur as $t,ut as en,v as tn,vr as nn,vt as rn,w as an,wr as on,wt as sn,x as cn,xr as ln,xt as un,y as dn,yr as fn,yt as pn,z as mn,zn as hn,zt as gn}from"./achievements-CM-7qkrD.js";function _n(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function vn(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var K={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},q={common:{diffuse:{value:new I(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new R}},envmap:{envMap:{value:null},envMapRotation:{value:new R},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new R}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new R}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new R},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new R},normalScale:{value:new z(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new R},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new R}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new R}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new R}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new I(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new T},probesMax:{value:new T},probesResolution:{value:new T}},points:{diffuse:{value:new I(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0},uvTransform:{value:new R}},sprite:{diffuse:{value:new I(16777215)},opacity:{value:1},center:{value:new z(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new R},alphaMap:{value:null},alphaMapTransform:{value:new R},alphaTest:{value:0}}},yn={basic:{uniforms:te([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.fog]),vertexShader:K.meshbasic_vert,fragmentShader:K.meshbasic_frag},lambert:{uniforms:te([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new I(0)},envMapIntensity:{value:1}}]),vertexShader:K.meshlambert_vert,fragmentShader:K.meshlambert_frag},phong:{uniforms:te([q.common,q.specularmap,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.fog,q.lights,{emissive:{value:new I(0)},specular:{value:new I(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:K.meshphong_vert,fragmentShader:K.meshphong_frag},standard:{uniforms:te([q.common,q.envmap,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.roughnessmap,q.metalnessmap,q.fog,q.lights,{emissive:{value:new I(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag},toon:{uniforms:te([q.common,q.aomap,q.lightmap,q.emissivemap,q.bumpmap,q.normalmap,q.displacementmap,q.gradientmap,q.fog,q.lights,{emissive:{value:new I(0)}}]),vertexShader:K.meshtoon_vert,fragmentShader:K.meshtoon_frag},matcap:{uniforms:te([q.common,q.bumpmap,q.normalmap,q.displacementmap,q.fog,{matcap:{value:null}}]),vertexShader:K.meshmatcap_vert,fragmentShader:K.meshmatcap_frag},points:{uniforms:te([q.points,q.fog]),vertexShader:K.points_vert,fragmentShader:K.points_frag},dashed:{uniforms:te([q.common,q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:K.linedashed_vert,fragmentShader:K.linedashed_frag},depth:{uniforms:te([q.common,q.displacementmap]),vertexShader:K.depth_vert,fragmentShader:K.depth_frag},normal:{uniforms:te([q.common,q.bumpmap,q.normalmap,q.displacementmap,{opacity:{value:1}}]),vertexShader:K.meshnormal_vert,fragmentShader:K.meshnormal_frag},sprite:{uniforms:te([q.sprite,q.fog]),vertexShader:K.sprite_vert,fragmentShader:K.sprite_frag},background:{uniforms:{uvTransform:{value:new R},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:K.background_vert,fragmentShader:K.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new R}},vertexShader:K.backgroundCube_vert,fragmentShader:K.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:K.cube_vert,fragmentShader:K.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:K.equirect_vert,fragmentShader:K.equirect_frag},distance:{uniforms:te([q.common,q.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:K.distance_vert,fragmentShader:K.distance_frag},shadow:{uniforms:te([q.lights,q.fog,{color:{value:new I(0)},opacity:{value:1}}]),vertexShader:K.shadow_vert,fragmentShader:K.shadow_frag}};yn.physical={uniforms:te([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new R},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new R},clearcoatNormalScale:{value:new z(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new R},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new R},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new R},sheen:{value:0},sheenColor:{value:new I(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new R},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new R},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new R},transmissionSamplerSize:{value:new z},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new R},attenuationDistance:{value:0},attenuationColor:{value:new I(0)},specularColor:{value:new I(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new R},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new R},anisotropyVector:{value:new z},anisotropyMap:{value:null},anisotropyMapTransform:{value:new R}}]),vertexShader:K.meshphysical_vert,fragmentShader:K.meshphysical_frag};var bn={r:0,b:0,g:0},xn=new gn,Sn=new R;Sn.set(-1,0,0,0,1,0,0,0,1);function Cn(e,t,n,r,i,a){let o=new I(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?v(o,s):i&&i.isColor&&(v(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new C(new G(1,1,1),new g({name:`BackgroundCubeMaterial`,uniforms:Se(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xn.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Sn),l.material.toneMapped=h.getTransfer(i.colorSpace)!==Ge,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new C(new W(2,2),new g({name:`BackgroundMaterial`,uniforms:Se(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=h.getTransfer(i.colorSpace)!==Ge,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function v(t,r){t.getRGB(bn,ye(e)),n.buffers.color.setClear(bn.r,bn.g,bn.b,r,a)}function y(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,v(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,v(o,s)},render:m,addToRenderList:_,dispose:y}}function wn(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Tn(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function En(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(he(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&he(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Dn(e){let t=this,n=null,r=0,i=!1,a=!1,o=new _,s=new R,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var On=4,kn=6,An=20,jn=256,Mn=new Ke,Nn=new I,Pn=null,Fn=0,In=0,Ln=!1,Rn=new T,zn=new T,Bn=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Rn}=i;Pn=this._renderer.getRenderTarget(),Fn=this._renderer.getActiveCubeFace(),In=this._renderer.getActiveMipmapLevel(),Ln=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qn(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kn(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pn,Fn,In),this._renderer.xr.enabled=Ln,e.scissorTest=!1,Un(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pn=this._renderer.getRenderTarget(),Fn=this._renderer.getActiveCubeFace(),In=this._renderer.getActiveMipmapLevel(),Ln=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Ne,format:Kt,colorSpace:Te,depthBuffer:!1},r=Hn(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hn(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vn(r)),this._blurMaterial=Gn(r,e,t),this._ggxMaterial=Wn(r,e,t)}return r}_compileMaterial(e){let t=new C(new He,e);this._renderer.compile(t,Mn)}_sceneToCubeUV(e,t,n,r,i){let a=new De(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Nn),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new C(new G,new Re({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Nn),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Un(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qn()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kn());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Un(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Mn)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-On?n-d+On:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Un(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,Mn),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Un(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,Mn)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];Un(t,3*l*(r>this._lodMax-On?r-this._lodMax+On:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,Mn)}};function Vn(e){let t=[],n=[],r=e,i=e-On+1+kn;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?zn.set(1,r,n):e===1?zn.set(-n,1,-r):e===2?zn.set(-n,r,1):e===3?zn.set(-1,r,-n):e===4?zn.set(-n,-1,r):zn.set(n,r,-1),zn.toArray(l,(e*6+t)*3)}}let u=new He;u.setAttribute(`position`,new ue(c,3)),u.setAttribute(`outputDirection`,new ue(l,3)),n.push(new C(u,null)),r>On&&r--}return{lodMeshes:n,sizeLods:t}}function Hn(e,t,n){let r=new ee(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Un(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Wn(e,t,n){return new g({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gn(e,t,n){return new g({name:`SphericalGaussianBlur`,defines:{SAMPLES:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jn(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Kn(){return new g({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qn(){return new g({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jn(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yn=class extends ee{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Wt(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new G(5,5,5),i=new g({name:`CubemapFromEquirect`,uniforms:Se(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new C(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ct),new Zt(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Xn(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Yn(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Bn(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Bn(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Zn(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&L(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Qn(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?dt:ot)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function $n(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function er(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:St(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function tr(e,t,n){let r=new WeakMap,i=new on;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Lt(h,p,m,u);g.type=et,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new z(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function nr(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var rr={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function ir(e,t,n,r,i,a){let o=new ee(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new He;l.setAttribute(`position`,new pn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new pn([0,2,0,0,2,0],2));let u=new S({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new C(l,u),f=new Ke(-1,1,1,-1,0,1),p=null,m=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new ee(t,n,{type:Ne,depthBuffer:!1,stencilBuffer:!1}),c=new ee(t,n,{type:Ne,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<y.length;e++){let r=y[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},h.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=rr[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(d,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ar=new rt,or=new st(1,1),sr=new Lt,cr=new Ze,lr=new Wt,ur=[],dr=[],fr=new Float32Array(16),pr=new Float32Array(9),mr=new Float32Array(4);function hr(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ur[i];if(a===void 0&&(a=new Float32Array(i),ur[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function gr(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function _r(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function vr(e,t){let n=dr[t];n===void 0&&(n=new Int32Array(t),dr[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function yr(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function br(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gr(n,t))return;e.uniform2fv(this.addr,t),_r(n,t)}}function xr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gr(n,t))return;e.uniform3fv(this.addr,t),_r(n,t)}}function Sr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gr(n,t))return;e.uniform4fv(this.addr,t),_r(n,t)}}function Cr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gr(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_r(n,t)}else{if(gr(n,r))return;mr.set(r),e.uniformMatrix2fv(this.addr,!1,mr),_r(n,r)}}function wr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gr(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_r(n,t)}else{if(gr(n,r))return;pr.set(r),e.uniformMatrix3fv(this.addr,!1,pr),_r(n,r)}}function Tr(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gr(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_r(n,t)}else{if(gr(n,r))return;fr.set(r),e.uniformMatrix4fv(this.addr,!1,fr),_r(n,r)}}function Er(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Dr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gr(n,t))return;e.uniform2iv(this.addr,t),_r(n,t)}}function Or(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gr(n,t))return;e.uniform3iv(this.addr,t),_r(n,t)}}function kr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gr(n,t))return;e.uniform4iv(this.addr,t),_r(n,t)}}function Ar(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function jr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gr(n,t))return;e.uniform2uiv(this.addr,t),_r(n,t)}}function Mr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gr(n,t))return;e.uniform3uiv(this.addr,t),_r(n,t)}}function Nr(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gr(n,t))return;e.uniform4uiv(this.addr,t),_r(n,t)}}function Pr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(or.compareFunction=n.isReversedDepthBuffer()?518:515,a=or):a=ar,n.setTexture2D(t||a,i)}function Fr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||cr,i)}function Ir(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||lr,i)}function Lr(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||sr,i)}function Rr(e){switch(e){case 5126:return yr;case 35664:return br;case 35665:return xr;case 35666:return Sr;case 35674:return Cr;case 35675:return wr;case 35676:return Tr;case 5124:case 35670:return Er;case 35667:case 35671:return Dr;case 35668:case 35672:return Or;case 35669:case 35673:return kr;case 5125:return Ar;case 36294:return jr;case 36295:return Mr;case 36296:return Nr;case 35678:case 36198:case 36298:case 36306:case 35682:return Pr;case 35679:case 36299:case 36307:return Fr;case 35680:case 36300:case 36308:case 36293:return Ir;case 36289:case 36303:case 36311:case 36292:return Lr}}function zr(e,t){e.uniform1fv(this.addr,t)}function Br(e,t){let n=hr(t,this.size,2);e.uniform2fv(this.addr,n)}function Vr(e,t){let n=hr(t,this.size,3);e.uniform3fv(this.addr,n)}function Hr(e,t){let n=hr(t,this.size,4);e.uniform4fv(this.addr,n)}function Ur(e,t){let n=hr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Wr(e,t){let n=hr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Gr(e,t){let n=hr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Kr(e,t){e.uniform1iv(this.addr,t)}function qr(e,t){e.uniform2iv(this.addr,t)}function Jr(e,t){e.uniform3iv(this.addr,t)}function Yr(e,t){e.uniform4iv(this.addr,t)}function Xr(e,t){e.uniform1uiv(this.addr,t)}function Zr(e,t){e.uniform2uiv(this.addr,t)}function Qr(e,t){e.uniform3uiv(this.addr,t)}function $r(e,t){e.uniform4uiv(this.addr,t)}function ei(e,t,n){let r=this.cache,i=t.length,a=vr(n,i);gr(r,a)||(e.uniform1iv(this.addr,a),_r(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?or:ar;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function ti(e,t,n){let r=this.cache,i=t.length,a=vr(n,i);gr(r,a)||(e.uniform1iv(this.addr,a),_r(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||cr,a[e])}function ni(e,t,n){let r=this.cache,i=t.length,a=vr(n,i);gr(r,a)||(e.uniform1iv(this.addr,a),_r(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||lr,a[e])}function ri(e,t,n){let r=this.cache,i=t.length,a=vr(n,i);gr(r,a)||(e.uniform1iv(this.addr,a),_r(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||sr,a[e])}function ii(e){switch(e){case 5126:return zr;case 35664:return Br;case 35665:return Vr;case 35666:return Hr;case 35674:return Ur;case 35675:return Wr;case 35676:return Gr;case 5124:case 35670:return Kr;case 35667:case 35671:return qr;case 35668:case 35672:return Jr;case 35669:case 35673:return Yr;case 5125:return Xr;case 36294:return Zr;case 36295:return Qr;case 36296:return $r;case 35678:case 36198:case 36298:case 36306:case 35682:return ei;case 35679:case 36299:case 36307:return ti;case 35680:case 36300:case 36308:case 36293:return ni;case 36289:case 36303:case 36311:case 36292:return ri}}var ai=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rr(t.type)}},oi=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ii(t.type)}},si=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ci=/(\w+)(\])?(\[|\.)?/g;function li(e,t){e.seq.push(t),e.map[t.id]=t}function ui(e,t,n){let r=e.name,i=r.length;for(ci.lastIndex=0;;){let a=ci.exec(r),o=ci.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){li(n,l===void 0?new ai(s,e,t):new oi(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new si(s),li(n,e)),n=e}}}var di=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);ui(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fi(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var pi=37297,mi=0;function hi(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var gi=new R;function _i(e){h._getMatrix(gi,h.workingColorSpace,e);let t=`mat3( ${gi.elements.map(e=>e.toFixed(4))} )`;switch(h.getTransfer(e)){case ne:return[t,`LinearTransferOETF`];case Ge:return[t,`sRGBTransferOETF`];default:return he(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function vi(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+hi(e.getShaderSource(t),r)}return i}function yi(e,t){let n=_i(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var bi={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function xi(e,t){let n=bi[t];return n===void 0?(he(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Si=new T;function Ci(){return h.getLuminanceCoefficients(Si),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Si.x.toFixed(4)}, ${Si.y.toFixed(4)}, ${Si.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function wi(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Di).join(`
`)}function Ti(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ei(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Di(e){return e!==``}function Oi(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ki(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ai=/^[ \t]*#include +<([\w\d./]+)>/gm;function ji(e){return e.replace(Ai,Ni)}var Mi=new Map;function Ni(e,t){let n=K[t];if(n===void 0){let e=Mi.get(t);if(e!==void 0)n=K[e],he(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ji(n)}var Pi=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fi(e){return e.replace(Pi,Ii)}function Ii(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Li(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Ri={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function zi(e){return Ri[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Bi={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Vi(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Bi[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Hi={302:`ENVMAP_MODE_REFRACTION`};function Ui(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Hi[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Wi={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Gi(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Wi[e.combine]||`ENVMAP_BLENDING_NONE`}function Ki(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function qi(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=zi(n),l=Vi(n),u=Ui(n),d=Gi(n),f=Ki(n),p=wi(n),m=Ti(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Di).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Di).join(`
`),_.length>0&&(_+=`
`)):(g=[Li(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Di).join(`
`),_=[Li(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:K.tonemapping_pars_fragment,n.toneMapping===0?``:xi(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,K.colorspace_pars_fragment,yi(`linearToOutputTexel`,n.outputColorSpace),Ci(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Di).join(`
`)),o=ji(o),o=Oi(o,n),o=ki(o,n),s=ji(s),s=Oi(s,n),s=ki(s,n),o=Fi(o),s=Fi(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=fi(i,i.VERTEX_SHADER,y),S=fi(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=vi(i,x,`vertex`),n=vi(i,S,`fragment`);St(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):he(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new di(i,h),T=Ei(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,pi)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mi++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ji=0,Yi=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xi(e),t.set(e,n)),n}},Xi=class{constructor(e){this.id=Ji++,this.code=e,this.usedTimes=0}};function Zi(e){return e===1030||e===37490||e===36285}function Qi(e,t,n,r,i,a){let o=new b,s=new Yi,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function g(i,o,l,u,g,_){let v=u.fog,y=g.geometry,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,x=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,S=t.get(i.envMap||b,x),C=S&&S.mapping===306?S.image.height:null,w=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&he(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let T=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,E=T===void 0?0:T.length,D=0;y.morphAttributes.position!==void 0&&(D=1),y.morphAttributes.normal!==void 0&&(D=2),y.morphAttributes.color!==void 0&&(D=3);let O,k,ee,A;if(w){let e=yn[w];O=e.vertexShader,k=e.fragmentShader}else{O=i.vertexShader,k=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,A=t.id}let j=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=g.isInstancedMesh===!0,re=g.isBatchedMesh===!0,M=!!i.map,ie=!!i.matcap,ae=!!S,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,ge=i.clearcoat>0,N=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,P=i.sheen>0,ye=i.transmission>0,be=me&&!!i.anisotropyMap,xe=ge&&!!i.clearcoatMap,Se=ge&&!!i.clearcoatNormalMap,Ce=ge&&!!i.clearcoatRoughnessMap,F=ve&&!!i.iridescenceMap,we=ve&&!!i.iridescenceThicknessMap,Te=P&&!!i.sheenColorMap,I=P&&!!i.sheenRoughnessMap,Ee=!!i.specularMap,De=!!i.specularColorMap,Oe=!!i.specularIntensityMap,ke=ye&&!!i.transmissionMap,L=ye&&!!i.thicknessMap,R=!!i.gradientMap,Ae=!!i.alphaMap,z=i.alphaTest>0,je=!!i.alphaHash,B=!!i.extensions,Me=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Me=e.toneMapping);let Ne={shaderID:w,shaderType:i.type,shaderName:i.name,vertexShader:O,fragmentShader:k,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:re,batchingColor:re&&g._colorsTexture!==null,instancing:ne,instancingColor:ne&&g.instanceColor!==null,instancingMorph:ne&&g.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:h.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ie,envMap:ae,envMapMode:ae&&S.mapping,envMapCubeUVHeight:C,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&Zi(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:be,clearcoat:ge,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:N,retroreflection:_e,iridescence:ve,iridescenceMap:F,iridescenceThicknessMap:we,sheen:P,sheenColorMap:Te,sheenRoughnessMap:I,specularMap:Ee,specularColorMap:De,specularIntensityMap:Oe,transmission:ye,transmissionMap:ke,thicknessMap:L,gradientMap:R,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:z,alphaHash:je,combine:i.combine,mapUv:M&&m(i.map.channel),aoMapUv:oe&&m(i.aoMap.channel),lightMapUv:se&&m(i.lightMap.channel),bumpMapUv:ce&&m(i.bumpMap.channel),normalMapUv:le&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:F&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:I&&m(i.sheenRoughnessMap.channel),specularMapUv:Ee&&m(i.specularMap.channel),specularColorMapUv:De&&m(i.specularColorMap.channel),specularIntensityMapUv:Oe&&m(i.specularIntensityMap.channel),transmissionMapUv:ke&&m(i.transmissionMap.channel),thicknessMapUv:L&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(le||me),vertexNormals:!!y.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:g.isPoints===!0&&!!y.attributes.uv&&(M||Ae),fog:!!v,useFog:i.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||y.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:g.isSkinnedMesh===!0,hasPositionAttribute:y.attributes.position!==void 0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:D,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:_.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Me,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&h.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&h.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:B&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(B&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function x(e){let t=p[e.type],n;if(t){let e=yn[t];n=zt.clone(e.uniforms)}else n=e.uniforms;return n}function S(t,n){let r=u.get(n);return r===void 0?(r=new qi(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function C(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function w(e){s.remove(e)}function T(){s.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:x,acquireProgram:S,releaseProgram:C,releaseShaderCache:w,programs:l,dispose:T}}function $i(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ea(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function ta(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function na(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ea),r.length>1&&r.sort(t||ta),i.length>1&&i.sort(t||ta)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ra(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new na,e.set(t,[i])):n>=r.length?(i=new na,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function ia(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new T,color:new I};break;case`SpotLight`:n={position:new T,direction:new T,color:new I,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new T,color:new I,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new T,skyColor:new I,groundColor:new I};break;case`RectAreaLight`:n={color:new I,position:new T,halfWidth:new T,halfHeight:new T}}return e[t.id]=n,n}}}function aa(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new z,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var oa=0;function sa(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function ca(e){let t=new ia,n=aa(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new T);let i=new T,a=new gn,o=new gn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(sa);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=q.LTC_FLOAT_1,r.rectAreaLTC2=q.LTC_FLOAT_2):(r.rectAreaLTC1=q.LTC_HALF_1,r.rectAreaLTC2=q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=oa++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function la(e){let t=new ca(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ua(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new la(e),t.set(n,[a])):r>=i.length?(a=new la(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var da=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fa=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pa=[new T(1,0,0),new T(-1,0,0),new T(0,1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1)],ma=[new T(0,-1,0),new T(0,-1,0),new T(0,0,1),new T(0,0,-1),new T(0,-1,0),new T(0,-1,0)],ha=new gn,ga=new T,_a=new T;function va(e,t,n){let r=new je,i=new z,a=new z,o=new on,s=new oe,c=new Fe,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new g({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new z},radius:{value:4}},vertexShader:da,fragmentShader:fa}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new He;m.setAttribute(`position`,new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new C(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,s){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;this.type===2&&(he(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=v!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){he(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){he(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ee(i.x,i.y,{format:ke,type:Ne,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new st(i.x,i.y,et),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=Ot,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=pe,d.map.depthTexture.magFilter=pe}else l.isPointLight?(d.map=new Yn(i.x),d.map.depthTexture=new Pt(i.x,nn)):(d.map=new ee(i.x,i.y),d.map.depthTexture=new st(i.x,i.y,nn)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=Ot,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ct,d.map.depthTexture.magFilter=Ct):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=pe,d.map.depthTexture.magFilter=pe);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ga.setFromMatrixPosition(l.matrixWorld),e.position.copy(ga),_a.copy(e.position),_a.add(pa[t]),e.up.copy(ma[t]),e.lookAt(_a),e.updateMatrixWorld(),n.makeTranslation(-ga.x,-ga.y,-ga.z),ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(ha,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),x(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&y(d,s),d.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(c,l,d)};function y(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new ee(i.x,i.y,{format:ke,type:Ne}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function ya(e,t){function n(){let t=!1,n=new on,r=null,i=new on(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?de(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=ze[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?de(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new I(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,ne=0,re=e.getParameter(e.VERSION);re.indexOf(`WebGL`)===-1?re.indexOf(`OpenGL ES`)!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),te=ne>=2):(ne=parseFloat(/^WebGL (\d)/.exec(re)[1]),te=ne>=1);let M=null,ie={},ae=e.getParameter(e.SCISSOR_BOX),oe=e.getParameter(e.VIEWPORT),se=new on().fromArray(ae),ce=new on().fromArray(oe);function le(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ue={};ue[e.TEXTURE_2D]=le(e.TEXTURE_2D,e.TEXTURE_2D,1),ue[e.TEXTURE_CUBE_MAP]=le(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[e.TEXTURE_2D_ARRAY]=le(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ue[e.TEXTURE_3D]=le(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),de(e.DEPTH_TEST),o.setFunc(3),P(!1),ye(1),de(e.CULL_FACE),_e(0);function de(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let N={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function _e(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(fe(e.BLEND),g=!1);return}if(g===!1&&(de(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:St(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:St(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:St(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:St(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(N[r],N[i],N[o],N[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ve(t,n){t.side===2?fe(e.CULL_FACE):de(e.CULL_FACE);let r=t.side===1;n&&(r=!r),P(r),t.blending===1&&t.transparent===!1?_e(0):_e(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?de(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function P(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?fe(e.CULL_FACE):(de(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(de(e.POLYGON_OFFSET_FILL),(ee!==n||A!==r)&&(ee=n,A=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function Se(t){t?de(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),M!==t&&(e.activeTexture(t),M=t)}function F(t,n,r){r===void 0&&(r=M===null?e.TEXTURE0+j-1:M);let i=ie[r];i===void 0&&(i={type:void 0,texture:void 0},ie[r]=i),(i.type!==t||i.texture!==n)&&(M!==r&&(e.activeTexture(r),M=r),e.bindTexture(t,n||ue[t]),i.type=t,i.texture=n)}function we(){let t=ie[M];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Te(){try{e.compressedTexImage2D(...arguments)}catch(e){St(`WebGLState:`,e)}}function Ee(){try{e.compressedTexImage3D(...arguments)}catch(e){St(`WebGLState:`,e)}}function De(){try{e.texSubImage2D(...arguments)}catch(e){St(`WebGLState:`,e)}}function Oe(){try{e.texSubImage3D(...arguments)}catch(e){St(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage2D(...arguments)}catch(e){St(`WebGLState:`,e)}}function L(){try{e.compressedTexSubImage3D(...arguments)}catch(e){St(`WebGLState:`,e)}}function R(){try{e.texStorage2D(...arguments)}catch(e){St(`WebGLState:`,e)}}function Ae(){try{e.texStorage3D(...arguments)}catch(e){St(`WebGLState:`,e)}}function z(){try{e.texImage2D(...arguments)}catch(e){St(`WebGLState:`,e)}}function je(){try{e.texImage3D(...arguments)}catch(e){St(`WebGLState:`,e)}}function B(t){return d[t]===void 0?e.getParameter(t):d[t]}function Me(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Ne(t){se.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),se.copy(t))}function Pe(t){ce.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ce.copy(t))}function V(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Fe(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ie(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},M=null,ie={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new I(0,0,0),T=0,E=!1,D=null,O=null,k=null,ee=null,A=null,se.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:de,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:_e,setMaterial:ve,setFlipSided:P,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:F,unbindTexture:we,compressedTexImage2D:Te,compressedTexImage3D:Ee,texImage2D:z,texImage3D:je,pixelStorei:Me,getParameter:B,updateUBOMapping:V,uniformBlockBinding:Fe,texStorage2D:R,texStorage3D:Ae,texSubImage2D:De,texSubImage3D:Oe,compressedTexSubImage2D:ke,compressedTexSubImage3D:L,scissor:Ne,viewport:Pe,reset:Ie}}function ba(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new z,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function g(e,t){return m?new OffscreenCanvas(e,t):y(`canvas`)}function _(e,t,n){let r=1,i=B(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=g(n,a));let o=t?g(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),he(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&he(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function v(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];he(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||he(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?ne:h.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,he(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return v(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=e.target;t.removeEventListener(`dispose`,T),D(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function E(e){let t=e.target;t.removeEventListener(`dispose`,E),k(t)}function D(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&O(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function O(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function k(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ee=0;function A(){ee=0}function j(){return ee}function te(e){ee=e}function re(){let e=ee;return e>=i.maxTextures&&he(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ee+=1,e}function ie(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ae(t,i){let a=r.get(t);if(t.isVideoTexture&&Ae(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)he(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)he(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ye(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function se(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){xe(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let le={[V]:e.REPEAT,[We]:e.CLAMP_TO_EDGE,[M]:e.MIRRORED_REPEAT},ue={[pe]:e.NEAREST,[de]:e.NEAREST_MIPMAP_NEAREST,[Vt]:e.NEAREST_MIPMAP_LINEAR,[Ct]:e.LINEAR,[be]:e.LINEAR_MIPMAP_NEAREST,[ve]:e.LINEAR_MIPMAP_LINEAR},fe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&he(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,le[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,le[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,le[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ue[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ue[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,fe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function ge(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,T));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=ie(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&O(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function N(e,t,n){return Math.floor(Math.floor(e/n)/t)}function P(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=N(n.start,r.width,4),c=N(t.start,r.width,4);n.start<=i+1&&a===c&&N(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ye(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=ge(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=h.getPrimaries(h.workingColorSpace),r=o.colorSpace===``?null:h.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=_(o.image,!1,i.maxTextureSize);t=je(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);me(c,o);let g,y=o.mipmaps,x=o.isVideoTexture!==!0,T=f.__version===void 0||l===!0,E=u.dataReady,D=w(o,t);if(o.isDepthTexture)m=C(o.format===en,o.type),T&&(x?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(y.length>0){x&&T&&n.texStorage2D(e.TEXTURE_2D,D,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)g=y[t],x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,m,g.width,g.height,0,r,p,g.data);o.generateMipmaps=!1}else x?(T&&n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height),E&&P(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){x&&T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,y[0].width,y[0].height,t.depth);for(let i=0,a=y.length;i<a;i++)if(g=y[i],o.format!==1023){if(r!==null){if(x){if(E){if(o.layerUpdates.size>0){let t=_e(g.width,g.height,o.format,o.type);for(let a of o.layerUpdates){let o=g.data.subarray(a*t/g.data.BYTES_PER_ELEMENT,(a+1)*t/g.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,g.width,g.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,g.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,g.width,g.height,t.depth,0,g.data,0,0)}else he(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else x?E&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,g.width,g.height,t.depth,r,p,g.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,g.width,g.height,t.depth,0,r,p,g.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{x&&T&&n.texStorage2D(e.TEXTURE_2D,D,m,y[0].width,y[0].height);for(let t=0,i=y.length;t<i;t++)g=y[t],o.format===1023?x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,p,g.data):n.texImage2D(e.TEXTURE_2D,t,m,g.width,g.height,0,r,p,g.data):r===null?he(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):x?E&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,g.width,g.height,r,g.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,g.width,g.height,0,g.data)}}else if(o.isDataArrayTexture){if(x){if(T&&n.texStorage3D(e.TEXTURE_2D_ARRAY,D,m,t.width,t.height,t.depth),E){if(o.layerUpdates.size>0){let i=_e(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)x?(T&&n.texStorage3D(e.TEXTURE_3D,D,m,t.width,t.height,t.depth),E&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(T){if(x)n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<D;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(y.length>0){if(x&&T){let t=B(y[0]);n.texStorage2D(e.TEXTURE_2D,D,m,t.width,t.height)}for(let t=0,i=y.length;t<i;t++)g=y[t],x?E&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,g):n.texImage2D(e.TEXTURE_2D,t,m,r,p,g);o.generateMipmaps=!1}else if(x){if(T){let r=B(t);n.texStorage2D(e.TEXTURE_2D,D,m,r.width,r.height)}E&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);v(o)&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function xe(t,o,s){if(o.image.length!==6)return;let c=ge(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=h.getPrimaries(h.workingColorSpace),r=o.colorSpace===``?null:h.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=_(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=je(o,m[e]);let g=m[0],y=a.convert(o.format,o.colorSpace),x=a.convert(o.type),C=S(o.internalFormat,y,x,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,g);me(e.TEXTURE_CUBE_MAP,o);let k;if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,g.width,g.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,y,x,i.data):y===null?he(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,y,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,C,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=B(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,C,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,y,x,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,m[t].width,m[t].height,0,y,x,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,y,x,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,i.width,i.height,0,y,x,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,y,x,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,C,y,x,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,y,x,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,C,y,x,i.image[t])}}}v(o)&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Se(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,L(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ce(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,L(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,L(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);R(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,L(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,L(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function F(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,T)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),me(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else ae(i.depthTexture,0);let u=l.__webglTexture,d=L(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)R(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function we(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)F(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?F(i.__webglFramebuffer[0],t,0):F(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ce(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ce(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Te(t,n,i){let a=r.get(t);n!==void 0&&Se(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&we(t)}function I(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,E);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&R(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=L(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ce(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),me(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Se(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);v(i)&&b(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),me(c,a),Se(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),v(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),me(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Se(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Se(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);v(i)&&b(r),n.unbindTexture()}t.depthBuffer&&we(t)}function Ee(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(v(a)){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(R(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(De.push(l),Oe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function L(e){return Math.min(i.maxSamples,e.samples)}function R(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function Ae(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function je(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(h.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&he(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):St(`WebGLTextures: Unsupported texture color space:`,n)),t}function B(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=re,this.resetTextureUnits=A,this.getTextureUnits=j,this.setTextureUnits=te,this.setTexture2D=ae,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=ce,this.rebindTextures=Te,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=R,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xa(e,t){function n(n,r=``){let i,a=h.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Sa=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ca=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wa=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ht(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new g({vertexShader:Sa,fragmentShader:Ca,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new C(new W(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ta=class extends _t{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new wa,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new z,C=null,w=null,E=new De;E.viewport=new on;let O=new De;O.viewport=new on;let k=[E,O],A=new fe,j=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new D,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new D,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new D,b[e]=t),t.getHandSpace()};function ne(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,M);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}j=null,te=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&he(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&he(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,M),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?en:Ot,a=_.stencil?mt:nn);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ee(d.textureWidth,d.textureHeight,{format:Kt,type:At,depthTexture:new st(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ee(f.framebufferWidth,f.framebufferHeight,{format:Kt,type:At,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function M(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ie=new T,ae=new T;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),A.near=O.near=E.near=t,A.far=O.far=E.far=n,(j!==A.near||te!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),j=A.near,te=A.far),A.layers.mask=e.layers.mask|6,E.layers.mask=A.layers.mask&-5,O.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;se(A,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(A,E,O):A.projectionMatrix.copy(E.projectionMatrix),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),ce(e,A,i)};function ce(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Ut*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(A)},this.getCameraTexture=function(e){return g[e]};let le=null;function ue(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new De,o.layers.enable(n),o.viewport=new on,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new ht,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}le&&le(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let de=new _n;de.setAnimationLoop(ue),this.setAnimationLoop=function(e){le=e},this.dispose=function(){}}},Ea=new gn,Da=new R;Da.set(-1,0,0,0,1,0,0,0,1);function Oa(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,ye(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Ea.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Da),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function ka(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return St(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?he(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):he(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Aa=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ja=null;function Ma(){return ja===null&&(ja=new Jt(Aa,16,16,ke,Ne),ja.name=`DFG_LUT`,ja.minFilter=Ct,ja.magFilter=Ct,ja.wrapS=We,ja.wrapT=We,ja.generateMipmaps=!1,ja.needsUpdate=!0),ja}var Na=class{constructor(e={}){let{canvas:t=Tt(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=At}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,g=new Set([nt,hn,ae]),_=new Set([At,nn,ln,mt,fn,$e]),v=new Uint32Array(4),y=new Int32Array(4),b=new T,x=null,S=null,C=[],w=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,O=!1,k=null,A=null,j=null,te=null;this._outputColorSpace=Be;let ne=0,re=0,M=null,ie=-1,oe=null,se=new on,le=new on,ue=null,de=new I(0),fe=0,pe=t.width,me=t.height,ge=1,N=null,_e=null,P=new on(0,0,pe,me),ye=new on(0,0,pe,me),be=!1,xe=new je,Se=!1,Ce=!1,F=new gn,Te=new T,Ee=new on,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Oe=!1;function ke(){return M===null?ge:1}let L=n;function R(e,n){return t.getContext(e,n)}let Ae,z,B,Pe,V,Fe,Ie,Le,Re,H,ze,U,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,tt,!1),t.addEventListener(`webglcontextrestored`,rt,!1),t.addEventListener(`webglcontextcreationerror`,it,!1),L===null){let t=`webgl2`;if(L=R(t,e),L===null)throw R(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Qe()}catch(e){throw t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),St(`WebGLRenderer: `+e.message),e}function Qe(){Ae=new Zn(L),Ae.init(),Ye=new xa(L,Ae),z=new En(L,Ae,e,Ye),B=new ya(L,Ae),z.reversedDepthBuffer&&d&&B.buffers.depth.setReversed(!0),A=L.createFramebuffer(),j=L.createFramebuffer(),te=L.createFramebuffer(),Pe=new er(L),V=new $i,Fe=new ba(L,Ae,B,V,z,Ye,Pe),Ie=new Xn(D),Le=new vn(L),Xe=new wn(L,Le),Re=new Qn(L,Le,Pe,Xe),H=new nr(L,Re,Le,Xe,Pe),Ke=new tr(L,z,Fe),Ue=new Dn(V),ze=new Qi(D,Ie,Ae,z,Xe,Ue),U=new Oa(D,V),Ve=new ra,He=new ua(Ae),Ge=new Cn(D,Ie,B,H,p,s),We=new va(D,H,z),Ze=new ka(L,Pe,z,B),qe=new Tn(L,Ae,Pe),Je=new $n(L,Ae,Pe),Pe.programs=ze.programs,D.capabilities=z,D.extensions=Ae,D.properties=V,D.renderLists=Ve,D.shadowMap=We,D.state=B,D.info=Pe}m!==1009&&(E=new ir(m,t.width,t.height,o,r,i));let et=new Ta(D,L);this.xr=et,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ae.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(e){e!==void 0&&(ge=e,this.setSize(pe,me,!1))},this.getSize=function(e){return e.set(pe,me)},this.setSize=function(e,n,r=!0){if(et.isPresenting){he(`WebGLRenderer: Can't change size while VR device is presenting.`);return}pe=e,me=n,t.width=Math.floor(e*ge),t.height=Math.floor(n*ge),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(pe*ge,me*ge).floor()},this.setDrawingBufferSize=function(e,n,r){pe=e,me=n,ge=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){St(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){he(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(se)},this.getViewport=function(e){return e.copy(P)},this.setViewport=function(e,t,n,r){e.isVector4?P.set(e.x,e.y,e.z,e.w):P.set(e,t,n,r),B.viewport(se.copy(P).multiplyScalar(ge).round())},this.getScissor=function(e){return e.copy(ye)},this.setScissor=function(e,t,n,r){e.isVector4?ye.set(e.x,e.y,e.z,e.w):ye.set(e,t,n,r),B.scissor(le.copy(ye).multiplyScalar(ge).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(e){B.setScissorTest(be=e)},this.setOpaqueSort=function(e){N=e},this.setTransparentSort=function(e){_e=e},this.getClearColor=function(e){return e.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=g.has(t)}if(e){let e=M.texture.type,t=_.has(e),n=Ge.getClearColor(),r=Ge.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferuiv(L.COLOR,0,v)):(y[0]=i,y[1]=a,y[2]=o,y[3]=r,L.clearBufferiv(L.COLOR,0,y))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),k=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,tt,!1),t.removeEventListener(`webglcontextrestored`,rt,!1),t.removeEventListener(`webglcontextcreationerror`,it,!1),Ge.dispose(),Ve.dispose(),He.dispose(),V.dispose(),Ie.dispose(),H.dispose(),Xe.dispose(),Ze.dispose(),ze.dispose(),et.dispose(),et.removeEventListener(`sessionstart`,ut),et.removeEventListener(`sessionend`,dt),ft.stop()};function tt(e){e.preventDefault(),we(`WebGLRenderer: Context Lost.`),O=!0}function rt(){we(`WebGLRenderer: Context Restored.`),O=!1;let e=Pe.autoReset,t=We.enabled,n=We.autoUpdate,r=We.needsUpdate,i=We.type;Qe(),Pe.autoReset=e,We.enabled=t,We.autoUpdate=n,We.needsUpdate=r,We.type=i}function it(e){St(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function at(e){let t=e.target;t.removeEventListener(`dispose`,at),ot(t)}function ot(e){st(e),V.remove(e)}function st(e){let t=V.get(e).programs;t!==void 0&&(t.forEach(function(e){ze.releaseProgram(e)}),e.isShaderMaterial&&ze.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=De);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=wt(e,t,n,r,i);B.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Re.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Xe.setup(i,r,s,n,c);let h,g=qe;if(c!==null&&(h=Le.get(c),g=Je,g.setIndex(h)),i.isMesh)r.wireframe===!0?(B.setLineWidth(r.wireframeLinewidth*ke()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),B.setLineWidth(e*ke()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ae.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Le.get(c).bytesPerElement:1,o=V.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function W(e,t,n,r){k!==null&&e.isNodeMaterial&&k.setObject(r,e),Se===!0&&Ue.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,yt(e,t,r),e.side=0,e.needsUpdate=!0,yt(e,t,r),e.side=2):yt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),k!==null&&k.renderStart(e,t,n),S=He.get(n),S.init(t),w.push(S),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(S.pushLight(e),e.castShadow&&S.pushShadow(e))}),S.setupLights(),k!==null&&k.updateLights(S.state.lightsArray),Ce=this.localClippingEnabled,Se=Ue.init(this.clippingPlanes,Ce),Se===!0&&Ue.setGlobalState(this.clippingPlanes,t),k!==null&&We.render(S.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];W(o,n,t,e),r.add(o)}else W(i,n,t,e),r.add(i)}}),S=w.pop(),k!==null&&k.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=V.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ae.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ct=null;function lt(e){ct&&ct(e)}function ut(){ft.stop()}function dt(){ft.start()}let ft=new _n;ft.setAnimationLoop(lt),typeof self<`u`&&ft.setContext(self),this.setAnimationLoop=function(e){ct=e,et.setAnimationLoop(e),e===null?ft.stop():ft.start()},et.addEventListener(`sessionstart`,ut),et.addEventListener(`sessionend`,dt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){St(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(O===!0)return;k!==null&&k.renderStart(e,t);let n=et.enabled===!0&&et.isPresenting===!0,r=E!==null&&(M===null||n)&&E.begin(D,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(t),t=et.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,M),S=He.get(e,w.length),S.init(t),S.state.textureUnits=Fe.getTextureUnits(),w.push(S),F.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),xe.setFromProjectionMatrix(F,Me,t.reversedDepth),Ce=this.localClippingEnabled,Se=Ue.init(this.clippingPlanes,Ce),x=Ve.get(e,C.length),x.init(),C.push(x),et.enabled===!0&&et.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&pt(e,t,-1/0,D.sortObjects)}pt(e,t,0,D.sortObjects),x.finish(),k!==null&&k.updateLights(S.state.lightsArray),D.sortObjects===!0&&x.sort(N,_e),Oe=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Oe&&Ge.addToRenderList(x,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Se===!0&&Ue.beginShadows();let i=S.state.shadowsArray;if(We.render(i,e,t),Se===!0&&Ue.endShadows(),(r&&E.hasRenderPass())===!1){let n=x.opaque,r=x.transmissive;if(S.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];gt(n,r,e,a)}Oe&&Ge.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];ht(x,e,n,n.viewport)}}else r.length>0&&gt(n,r,e,t),Oe&&Ge.render(e),ht(x,e,t)}M!==null&&re===0&&(Fe.updateMultisampleRenderTarget(M),Fe.updateRenderTargetMipmap(M)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),Xe.resetDefaultState(),ie=-1,oe=null,w.pop(),w.length>0?(S=w[w.length-1],Fe.setTextureUnits(S.state.textureUnits),Se===!0&&Ue.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,C.pop(),x=C.length>0?C[C.length-1]:null,k!==null&&k.renderEnd()};function pt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)S.pushLightProbeGrid(e);else if(e.isLight)S.pushLight(e),e.castShadow&&S.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(xe)){r&&Ee.setFromMatrixPosition(e.matrixWorld).applyMatrix4(F);let i=H.update(e),a=e.material;a.visible&&x.push(e,i,a,n,Ee.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(xe))){let i=H.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ee.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ee.copy(e.boundingSphere.center)),Ee.applyMatrix4(e.matrixWorld).applyMatrix4(F)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&x.push(e,i,c,n,Ee.z,s,t)}}else a.visible&&x.push(e,i,a,n,Ee.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)pt(i[e],t,n,r)}function ht(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;S.setupLightsView(n),Se===!0&&Ue.setGlobalState(D.clippingPlanes,n),r&&B.viewport(se.copy(r)),i.length>0&&_t(i,t,n),a.length>0&&_t(a,t,n),o.length>0&&_t(o,t,n),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function gt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[r.id]===void 0){let e=Ae.has(`EXT_color_buffer_half_float`)||Ae.has(`EXT_color_buffer_float`);S.state.transmissionRenderTarget[r.id]=new ee(1,1,{generateMipmaps:!0,type:e?Ne:At,minFilter:ve,samples:Math.max(4,z.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:h.workingColorSpace})}let a=S.state.transmissionRenderTarget[r.id],o=r.viewport||se;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(de),fe=D.getClearAlpha(),fe<1&&D.setClearColor(16777215,.5),D.clear(),Oe&&Ge.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),S.setupLightsView(r),Se===!0&&Ue.setGlobalState(D.clippingPlanes,r),_t(e,n,r),Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a),Ae.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,vt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Fe.updateMultisampleRenderTarget(a),Fe.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(de,fe),d!==void 0&&(r.viewport=d),D.toneMapping=u}function _t(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&vt(o,t,n,s,l,c)}}function vt(e,t,n,r,i,a){k!==null&&i.isNodeMaterial&&k.setObject(e,i),e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function yt(e,t,n){t.isScene!==!0&&(t=De);let r=V.get(e),i=S.state.lights,a=S.state.shadowsArray,o=i.state.version,s=ze.getParameters(e,i.state,a,t,n,S.state.lightProbeGridArray),c=ze.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ie.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,at),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return xt(e,s),d}else s.uniforms=ze.getUniforms(e),k!==null&&e.isNodeMaterial&&k.build(e,n,s),e.onBeforeCompile(s,D),d=ze.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ue.uniform),xt(e,s),r.needsLights=Dt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=S.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function bt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=di.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function xt(e,t){let n=V.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ct(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];b.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(b))return n}return null}function wt(e,t,n,r,i){t.isScene!==!0&&(t=De),Fe.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?D.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:h.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ie.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,g=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(g=D.toneMapping);let _=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,v=_===void 0?0:_.length,y=V.get(r),b=S.state.lights;if(Se===!0&&(Ce===!0||e!==oe)){let t=e===oe&&r.id===ie;Ue.setState(r,e,t)}let x=!1;r.version===y.__version?y.needsLights&&y.lightsStateVersion!==b.state.version?x=!0:y.outputColorSpace===s?i.isBatchedMesh&&y.batching===!1||!i.isBatchedMesh&&y.batching===!0||i.isBatchedMesh&&y.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&y.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&y.instancing===!1||!i.isInstancedMesh&&y.instancing===!0||i.isSkinnedMesh&&y.skinning===!1||!i.isSkinnedMesh&&y.skinning===!0||i.isInstancedMesh&&y.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&y.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&y.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&y.instancingMorph===!1&&i.morphTexture!==null?x=!0:y.envMap===l?r.fog===!0&&y.fog!==a||y.numClippingPlanes!==void 0&&(y.numClippingPlanes!==Ue.numPlanes||y.numIntersection!==Ue.numIntersection)?x=!0:y.vertexAlphas===u&&y.vertexTangents===d&&y.morphTargets===f&&y.morphNormals===p&&y.morphColors===m&&y.toneMapping===g&&y.morphTargetsCount===v?!!y.lightProbeGrid!=S.state.lightProbeGridArray.length>0&&(x=!0):x=!0:x=!0:x=!0:(x=!0,y.__version=r.version);let C=y.currentProgram;x===!0&&(C=yt(r,t,i),k&&r.isNodeMaterial&&k.onUpdateProgram(r,C,y));let w=!1,T=!1,E=!1,O=C.getUniforms(),ee=y.uniforms;if(B.useProgram(C.program)&&(w=!0,T=!0,E=!0),r.id!==ie&&(ie=r.id,T=!0),y.needsLights){let e=Ct(S.state.lightProbeGridArray,i);y.lightProbeGrid!==e&&(y.lightProbeGrid=e,T=!0)}if(w||oe!==e){B.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),O.setValue(L,`projectionMatrix`,e.projectionMatrix),O.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=O.map.cameraPosition;t!==void 0&&t.setValue(L,Te.setFromMatrixPosition(e.matrixWorld)),z.logarithmicDepthBuffer&&O.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&O.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),oe!==e&&(oe=e,T=!0,E=!0)}if(y.needsLights&&(b.state.sunShadowMap.length>0&&O.setValue(L,`sunShadowMap`,b.state.sunShadowMap,Fe),b.state.directionalShadowMap.length>0&&O.setValue(L,`directionalShadowMap`,b.state.directionalShadowMap,Fe),b.state.spotShadowMap.length>0&&O.setValue(L,`spotShadowMap`,b.state.spotShadowMap,Fe),b.state.pointShadowMap.length>0&&O.setValue(L,`pointShadowMap`,b.state.pointShadowMap,Fe)),i.isSkinnedMesh){O.setOptional(L,i,`bindMatrix`),O.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),O.setValue(L,`boneTexture`,e.boneTexture,Fe))}i.isBatchedMesh&&(O.setOptional(L,i,`batchingTexture`),O.setValue(L,`batchingTexture`,i._matricesTexture,Fe),O.setOptional(L,i,`batchingIdTexture`),O.setValue(L,`batchingIdTexture`,i._indirectTexture,Fe),O.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&O.setValue(L,`batchingColorTexture`,i._colorsTexture,Fe));let A=n.morphAttributes;if((A.position!==void 0||A.normal!==void 0||A.color!==void 0)&&Ke.update(i,n,C),(T||y.receiveShadow!==i.receiveShadow)&&(y.receiveShadow=i.receiveShadow,O.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(ee.envMapIntensity.value=t.environmentIntensity),ee.dfgLUT!==void 0&&(ee.dfgLUT.value=Ma()),T){if(O.setValue(L,`toneMappingExposure`,D.toneMappingExposure),y.needsLights&&Et(ee,E),a&&r.fog===!0&&U.refreshFogUniforms(ee,a),U.refreshMaterialUniforms(ee,r,ge,me,S.state.transmissionRenderTarget[e.id]),y.needsLights&&y.lightProbeGrid){let e=y.lightProbeGrid;ee.probesSH.value=e.texture,ee.probesMin.value.copy(e.boundingBox.min),ee.probesMax.value.copy(e.boundingBox.max),ee.probesResolution.value.copy(e.resolution)}di.upload(L,bt(y),ee,Fe)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(di.upload(L,bt(y),ee,Fe),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&O.setValue(L,`center`,i.center),O.setValue(L,`modelViewMatrix`,i.modelViewMatrix),O.setValue(L,`normalMatrix`,i.normalMatrix),O.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ze.update(n,C),Ze.bind(n,C)}}return C}function Et(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Dt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=V.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),V.get(e.texture).__webglTexture=t,V.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=V.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ne=t,re=n;let r=null,i=!1,a=!1;if(e){let o=V.get(e);if(o.__useDefaultFramebuffer!==void 0){B.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),se.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest,B.viewport(se),B.scissor(le),B.setScissorTest(ue),ie=-1;return}if(o.__webglFramebuffer===void 0)Fe.setupRenderTarget(e);else if(o.__hasExternalTextures)Fe.rebindTextures(e,V.get(e.texture).__webglTexture,V.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&V.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Fe.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=V.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Fe.useMultisampledRTT(e)===!1?V.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,se.copy(e.viewport),le.copy(e.scissor),ue=e.scissorTest}else se.copy(P).multiplyScalar(ge).floor(),le.copy(ye).multiplyScalar(ge).floor(),ue=be;if(n!==0&&(r=A),B.bindFramebuffer(L.FRAMEBUFFER,r)&&B.drawBuffers(e,r),B.viewport(se),B.scissor(le),B.setScissorTest(ue),i){let r=V.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=V.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=V.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ie=-1};function Ot(e){let t=V.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=z.textureFormatReadable(e.format),t.__typeReadable=z.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){St(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){B.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Ot(o);if(u.__formatReadable===!1){St(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){St(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,Ye.convert(c),Ye.convert(l),a)}finally{let e=M===null?null:V.get(M).__webglFramebuffer;B.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=V.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){B.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Ot(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,Ye.convert(l),Ye.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=M===null?null:V.get(M).__webglFramebuffer;B.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ce(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Fe.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),B.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=Ye.convert(t.format),_=Ye.convert(t.type),v;t.isData3DTexture?(Fe.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Fe.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Fe.setTexture2D(t,0),v=L.TEXTURE_2D),B.activeTexture(L.TEXTURE0),B.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),B.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),B.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=B.getParameter(L.UNPACK_ROW_LENGTH),b=B.getParameter(L.UNPACK_IMAGE_HEIGHT),x=B.getParameter(L.UNPACK_SKIP_PIXELS),S=B.getParameter(L.UNPACK_SKIP_ROWS),C=B.getParameter(L.UNPACK_SKIP_IMAGES);B.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),B.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),B.pixelStorei(L.UNPACK_SKIP_PIXELS,l),B.pixelStorei(L.UNPACK_SKIP_ROWS,u),B.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=V.get(e),r=V.get(t),h=V.get(n.__renderTarget),g=V.get(r.__renderTarget);B.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,V.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);B.bindFramebuffer(L.READ_FRAMEBUFFER,null),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||V.has(e)){let n=V.get(e),r=V.get(t);B.bindFramebuffer(L.READ_FRAMEBUFFER,j),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,te);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);B.bindFramebuffer(L.READ_FRAMEBUFFER,null),B.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);B.pixelStorei(L.UNPACK_ROW_LENGTH,y),B.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),B.pixelStorei(L.UNPACK_SKIP_PIXELS,x),B.pixelStorei(L.UNPACK_SKIP_ROWS,S),B.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),B.unbindTexture()},this.initRenderTarget=function(e){V.get(e).__webglFramebuffer===void 0&&Fe.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Fe.setTextureCube(e,0):e.isData3DTexture?Fe.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Fe.setTexture2DArray(e,0):Fe.setTexture2D(e,0),B.unbindTexture()},this.resetState=function(){ne=0,re=0,M=null,B.reset(),Xe.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Me}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=h._getDrawingBufferColorSpace(e),t.unpackColorSpace=h._getUnpackColorSpace()}},Pa=class e{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let t=this.elements;t[0]=e.x,t[4]=e.y,t[8]=e.z}getTrace(e){e===void 0&&(e=new J);let t=this.elements;return e.x=t[0],e.y=t[4],e.z=t[8],e}vmult(e,t){t===void 0&&(t=new J);let n=this.elements,r=e.x,i=e.y,a=e.z;return t.x=n[0]*r+n[1]*i+n[2]*a,t.y=n[3]*r+n[4]*i+n[5]*a,t.z=n[6]*r+n[7]*i+n[8]*a,t}smult(e){for(let t=0;t<this.elements.length;t++)this.elements[t]*=e}mmult(t,n){n===void 0&&(n=new e);let r=this.elements,i=t.elements,a=n.elements,o=r[0],s=r[1],c=r[2],l=r[3],u=r[4],d=r[5],f=r[6],p=r[7],m=r[8],h=i[0],g=i[1],_=i[2],v=i[3],y=i[4],b=i[5],x=i[6],S=i[7],C=i[8];return a[0]=o*h+s*v+c*x,a[1]=o*g+s*y+c*S,a[2]=o*_+s*b+c*C,a[3]=l*h+u*v+d*x,a[4]=l*g+u*y+d*S,a[5]=l*_+u*b+d*C,a[6]=f*h+p*v+m*x,a[7]=f*g+p*y+m*S,a[8]=f*_+p*b+m*C,n}scale(t,n){n===void 0&&(n=new e);let r=this.elements,i=n.elements;for(let e=0;e!==3;e++)i[3*e+0]=t.x*r[3*e+0],i[3*e+1]=t.y*r[3*e+1],i[3*e+2]=t.z*r[3*e+2];return n}solve(e,t){t===void 0&&(t=new J);let n=[],r,i;for(r=0;r<12;r++)n.push(0);for(r=0;r<3;r++)for(i=0;i<3;i++)n[r+4*i]=this.elements[r+3*i];n[3]=e.x,n[7]=e.y,n[11]=e.z;let a=3,o=a,s,c;do{if(r=o-a,n[r+4*r]===0){for(i=r+1;i<o;i++)if(n[r+4*i]!==0){s=4;do c=4-s,n[c+4*r]+=n[c+4*i];while(--s);break}}if(n[r+4*r]!==0)for(i=r+1;i<o;i++){let e=n[r+4*i]/n[r+4*r];s=4;do c=4-s,n[c+4*i]=c<=r?0:n[c+4*i]-n[c+4*r]*e;while(--s)}}while(--a);if(t.z=n[11]/n[10],t.y=(n[7]-n[6]*t.z)/n[5],t.x=(n[3]-n[2]*t.z-n[1]*t.y)/n[0],isNaN(t.x)||isNaN(t.y)||isNaN(t.z)||t.x===1/0||t.y===1/0||t.z===1/0)throw`Could not solve equation! Got x=[${t.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return t}e(e,t,n){if(n===void 0)return this.elements[t+3*e];this.elements[t+3*e]=n}copy(e){for(let t=0;t<e.elements.length;t++)this.elements[t]=e.elements[t];return this}toString(){let e=``;for(let t=0;t<9;t++)e+=this.elements[t]+`,`;return e}reverse(t){t===void 0&&(t=new e);let n=Fa,r,i;for(r=0;r<3;r++)for(i=0;i<3;i++)n[r+6*i]=this.elements[r+3*i];n[3]=1,n[9]=0,n[15]=0,n[4]=0,n[10]=1,n[16]=0,n[5]=0,n[11]=0,n[17]=1;let a=3,o=a,s,c;do{if(r=o-a,n[r+6*r]===0){for(i=r+1;i<o;i++)if(n[r+6*i]!==0){s=6;do c=6-s,n[c+6*r]+=n[c+6*i];while(--s);break}}if(n[r+6*r]!==0)for(i=r+1;i<o;i++){let e=n[r+6*i]/n[r+6*r];s=6;do c=6-s,n[c+6*i]=c<=r?0:n[c+6*i]-n[c+6*r]*e;while(--s)}}while(--a);r=2;do{i=r-1;do{let e=n[r+6*i]/n[r+6*r];s=6;do c=6-s,n[c+6*i]=n[c+6*i]-n[c+6*r]*e;while(--s)}while(i--)}while(--r);r=2;do{let e=1/n[r+6*r];s=6;do c=6-s,n[c+6*r]=n[c+6*r]*e;while(--s)}while(r--);r=2;do{i=2;do{if(c=n[3+i+6*r],isNaN(c)||c===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,i,c)}while(i--)}while(r--);return t}setRotationFromQuaternion(e){let t=e.x,n=e.y,r=e.z,i=e.w,a=t+t,o=n+n,s=r+r,c=t*a,l=t*o,u=t*s,d=n*o,f=n*s,p=r*s,m=i*a,h=i*o,g=i*s,_=this.elements;return _[0]=1-(d+p),_[1]=l-g,_[2]=u+h,_[3]=l+g,_[4]=1-(c+p),_[5]=f-m,_[6]=u-h,_[7]=f+m,_[8]=1-(c+d),this}transpose(t){t===void 0&&(t=new e);let n=this.elements,r=t.elements,i;return r[0]=n[0],r[4]=n[4],r[8]=n[8],i=n[1],r[1]=n[3],r[3]=i,i=n[2],r[2]=n[6],r[6]=i,i=n[5],r[5]=n[7],r[7]=i,t}},Fa=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],J=class e{constructor(e,t,n){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),this.x=e,this.y=t,this.z=n}cross(t,n){n===void 0&&(n=new e);let r=t.x,i=t.y,a=t.z,o=this.x,s=this.y,c=this.z;return n.x=s*a-c*i,n.y=c*r-o*a,n.z=o*i-s*r,n}set(e,t,n){return this.x=e,this.y=t,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new e(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new e(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Pa([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,t=this.y,n=this.z,r=Math.sqrt(e*e+t*t+n*n);if(r>0){let e=1/r;this.x*=e,this.y*=e,this.z*=e}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new e);let n=this.x,r=this.y,i=this.z,a=Math.sqrt(n*n+r*r+i*i);return a>0?(a=1/a,t.x=n*a,t.y=r*a,t.z=i*a):(t.x=1,t.y=0,t.z=0),t}length(){let e=this.x,t=this.y,n=this.z;return Math.sqrt(e*e+t*t+n*n)}lengthSquared(){return this.dot(this)}distanceTo(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z;return Math.sqrt((i-t)*(i-t)+(a-n)*(a-n)+(o-r)*(o-r))}distanceSquared(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z;return(i-t)*(i-t)+(a-n)*(a-n)+(o-r)*(o-r)}scale(t,n){n===void 0&&(n=new e);let r=this.x,i=this.y,a=this.z;return n.x=t*r,n.y=t*i,n.z=t*a,n}vmul(t,n){return n===void 0&&(n=new e),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,r){return r===void 0&&(r=new e),r.x=this.x+t*n.x,r.y=this.y+t*n.y,r.z=this.z+t*n.z,r}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new e),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(e,t){let n=this.length();if(n>0){let r=Ia,i=1/n;r.set(this.x*i,this.y*i,this.z*i);let a=La;Math.abs(r.x)<.9?(a.set(1,0,0),r.cross(a,e)):(a.set(0,1,0),r.cross(a,e)),r.cross(e,t)}else e.set(1,0,0),t.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,t,n){let r=this.x,i=this.y,a=this.z;n.x=r+(e.x-r)*t,n.y=i+(e.y-i)*t,n.z=a+(e.z-a)*t}almostEquals(e,t){return t===void 0&&(t=1e-6),!(Math.abs(this.x-e.x)>t||Math.abs(this.y-e.y)>t||Math.abs(this.z-e.z)>t)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,t){return this.negate(Ra),Ra.almostEquals(e,t)}clone(){return new e(this.x,this.y,this.z)}};J.ZERO=new J(0,0,0),J.UNIT_X=new J(1,0,0),J.UNIT_Y=new J(0,1,0),J.UNIT_Z=new J(0,0,1);var Ia=new J,La=new J,Ra=new J,za=class e{constructor(e){e===void 0&&(e={}),this.lowerBound=new J,this.upperBound=new J,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,t,n,r){let i=this.lowerBound,a=this.upperBound,o=n;i.copy(e[0]),o&&o.vmult(i,i),a.copy(i);for(let t=1;t<e.length;t++){let n=e[t];o&&(o.vmult(n,Ba),n=Ba),n.x>a.x&&(a.x=n.x),n.x<i.x&&(i.x=n.x),n.y>a.y&&(a.y=n.y),n.y<i.y&&(i.y=n.y),n.z>a.z&&(a.z=n.z),n.z<i.z&&(i.z=n.z)}return t&&(t.vadd(i,i),t.vadd(a,a)),r&&(i.x-=r,i.y-=r,i.z-=r,a.x+=r,a.y+=r,a.z+=r),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new e().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let t=this.lowerBound,n=this.upperBound,r=e.lowerBound,i=e.upperBound,a=r.x<=n.x&&n.x<=i.x||t.x<=i.x&&i.x<=n.x,o=r.y<=n.y&&n.y<=i.y||t.y<=i.y&&i.y<=n.y,s=r.z<=n.z&&n.z<=i.z||t.z<=i.z&&i.z<=n.z;return a&&o&&s}volume(){let e=this.lowerBound,t=this.upperBound;return(t.x-e.x)*(t.y-e.y)*(t.z-e.z)}contains(e){let t=this.lowerBound,n=this.upperBound,r=e.lowerBound,i=e.upperBound;return t.x<=r.x&&n.x>=i.x&&t.y<=r.y&&n.y>=i.y&&t.z<=r.z&&n.z>=i.z}getCorners(e,t,n,r,i,a,o,s){let c=this.lowerBound,l=this.upperBound;e.copy(c),t.set(l.x,c.y,c.z),n.set(l.x,l.y,c.z),r.set(c.x,l.y,l.z),i.set(l.x,c.y,l.z),a.set(c.x,l.y,c.z),o.set(c.x,c.y,l.z),s.copy(l)}toLocalFrame(e,t){let n=Va,r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],u=n[7];this.getCorners(r,i,a,o,s,c,l,u);for(let t=0;t!==8;t++){let r=n[t];e.pointToLocal(r,r)}return t.setFromPoints(n)}toWorldFrame(e,t){let n=Va,r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],c=n[5],l=n[6],u=n[7];this.getCorners(r,i,a,o,s,c,l,u);for(let t=0;t!==8;t++){let r=n[t];e.pointToWorld(r,r)}return t.setFromPoints(n)}overlapsRay(e){let{direction:t,from:n}=e,r=1/t.x,i=1/t.y,a=1/t.z,o=(this.lowerBound.x-n.x)*r,s=(this.upperBound.x-n.x)*r,c=(this.lowerBound.y-n.y)*i,l=(this.upperBound.y-n.y)*i,u=(this.lowerBound.z-n.z)*a,d=(this.upperBound.z-n.z)*a,f=Math.max(Math.max(Math.min(o,s),Math.min(c,l)),Math.min(u,d)),p=Math.min(Math.min(Math.max(o,s),Math.max(c,l)),Math.max(u,d));return!(p<0||f>p)}},Ba=new J,Va=[new J,new J,new J,new J,new J,new J,new J,new J],Ha=class{constructor(){this.matrix=[]}get(e,t){let{index:n}=e,{index:r}=t;if(r>n){let e=r;r=n,n=e}return this.matrix[(n*(n+1)>>1)+r-1]}set(e,t,n){let{index:r}=e,{index:i}=t;if(i>r){let e=i;i=r,r=e}this.matrix[(r*(r+1)>>1)+i-1]=+!!n}reset(){for(let e=0,t=this.matrix.length;e!==t;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},Ua=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[e]===void 0&&(n[e]=[]),n[e].includes(t)||n[e].push(t),this}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[e]!==void 0&&n[e].includes(t))}hasAnyEventListener(e){return this._listeners!==void 0&&this._listeners[e]!==void 0}removeEventListener(e,t){if(this._listeners===void 0)return this;let n=this._listeners;if(n[e]===void 0)return this;let r=n[e].indexOf(t);return r!==-1&&n[e].splice(r,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let t=this._listeners[e.type];if(t!==void 0){e.target=this;for(let n=0,r=t.length;n<r;n++)t[n].call(this,e)}return this}},Wa=class e{constructor(e,t,n,r){e===void 0&&(e=0),t===void 0&&(t=0),n===void 0&&(n=0),r===void 0&&(r=1),this.x=e,this.y=t,this.z=n,this.w=r}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,t){let n=Math.sin(t*.5);return this.x=e.x*n,this.y=e.y*n,this.z=e.z*n,this.w=Math.cos(t*.5),this}toAxisAngle(e){e===void 0&&(e=new J),this.normalize();let t=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/n,e.y=this.y/n,e.z=this.z/n),[e,t]}setFromVectors(e,t){if(e.isAntiparallelTo(t)){let t=Ga,n=Ka;e.tangents(t,n),this.setFromAxisAngle(t,Math.PI)}else{let n=e.cross(t);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(e.length()**2*t.length()**2)+e.dot(t),this.normalize()}return this}mult(t,n){n===void 0&&(n=new e);let r=this.x,i=this.y,a=this.z,o=this.w,s=t.x,c=t.y,l=t.z,u=t.w;return n.x=r*u+o*s+i*l-a*c,n.y=i*u+o*c+a*s-r*l,n.z=a*u+o*l+r*c-i*s,n.w=o*u-r*s-i*c-a*l,n}inverse(t){t===void 0&&(t=new e);let n=this.x,r=this.y,i=this.z,a=this.w;this.conjugate(t);let o=1/(n*n+r*r+i*i+a*a);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new e),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,t){t===void 0&&(t=new J);let n=e.x,r=e.y,i=e.z,a=this.x,o=this.y,s=this.z,c=this.w,l=c*n+o*i-s*r,u=c*r+s*n-a*i,d=c*i+a*r-o*n,f=-a*n-o*r-s*i;return t.x=l*c+f*-a+u*-s-d*-o,t.y=u*c+f*-o+d*-a-l*-s,t.z=d*c+f*-s+l*-o-u*-a,t}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,t){t===void 0&&(t=`YZX`);let n,r,i,a=this.x,o=this.y,s=this.z,c=this.w;switch(t){case`YZX`:let e=a*o+s*c;if(e>.499&&(n=2*Math.atan2(a,c),r=Math.PI/2,i=0),e<-.499&&(n=-2*Math.atan2(a,c),r=-Math.PI/2,i=0),n===void 0){let t=a*a,l=o*o,u=s*s;n=Math.atan2(2*o*c-2*a*s,1-2*l-2*u),r=Math.asin(2*e),i=Math.atan2(2*a*c-2*o*s,1-2*t-2*u)}break;default:throw Error(`Euler order ${t} not supported yet.`)}e.y=n,e.z=r,e.x=i}setFromEuler(e,t,n,r){r===void 0&&(r=`XYZ`);let i=Math.cos(e/2),a=Math.cos(t/2),o=Math.cos(n/2),s=Math.sin(e/2),c=Math.sin(t/2),l=Math.sin(n/2);return r===`XYZ`?(this.x=s*a*o+i*c*l,this.y=i*c*o-s*a*l,this.z=i*a*l+s*c*o,this.w=i*a*o-s*c*l):r===`YXZ`?(this.x=s*a*o+i*c*l,this.y=i*c*o-s*a*l,this.z=i*a*l-s*c*o,this.w=i*a*o+s*c*l):r===`ZXY`?(this.x=s*a*o-i*c*l,this.y=i*c*o+s*a*l,this.z=i*a*l+s*c*o,this.w=i*a*o-s*c*l):r===`ZYX`?(this.x=s*a*o-i*c*l,this.y=i*c*o+s*a*l,this.z=i*a*l-s*c*o,this.w=i*a*o+s*c*l):r===`YZX`?(this.x=s*a*o+i*c*l,this.y=i*c*o+s*a*l,this.z=i*a*l-s*c*o,this.w=i*a*o-s*c*l):r===`XZY`&&(this.x=s*a*o-i*c*l,this.y=i*c*o-s*a*l,this.z=i*a*l+s*c*o,this.w=i*a*o+s*c*l),this}clone(){return new e(this.x,this.y,this.z,this.w)}slerp(t,n,r){r===void 0&&(r=new e);let i=this.x,a=this.y,o=this.z,s=this.w,c=t.x,l=t.y,u=t.z,d=t.w,f,p,m,h,g;return p=i*c+a*l+o*u+s*d,p<0&&(p=-p,c=-c,l=-l,u=-u,d=-d),1-p>1e-6?(f=Math.acos(p),m=Math.sin(f),h=Math.sin((1-n)*f)/m,g=Math.sin(n*f)/m):(h=1-n,g=n),r.x=h*i+g*c,r.y=h*a+g*l,r.z=h*o+g*u,r.w=h*s+g*d,r}integrate(t,n,r,i){i===void 0&&(i=new e);let a=t.x*r.x,o=t.y*r.y,s=t.z*r.z,c=this.x,l=this.y,u=this.z,d=this.w,f=n*.5;return i.x+=f*(a*d+o*u-s*l),i.y+=f*(o*d+s*c-a*u),i.z+=f*(s*d+a*l-o*c),i.w+=f*(-a*c-o*l-s*u),i}},Ga=new J,Ka=new J,qa={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Y=class e{constructor(t){t===void 0&&(t={}),this.id=e.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=!t.collisionResponse||t.collisionResponse,this.collisionFilterGroup=t.collisionFilterGroup===void 0?1:t.collisionFilterGroup,this.collisionFilterMask=t.collisionFilterMask===void 0?-1:t.collisionFilterMask,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,t){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,t,n,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Y.idCounter=0,Y.types=qa;var Ja=class e{constructor(e){e===void 0&&(e={}),this.position=new J,this.quaternion=new Wa,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(t,n){return e.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return e.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(e,t){return t===void 0&&(t=new J),this.quaternion.vmult(e,t),t}static pointToLocalFrame(e,t,n,r){return r===void 0&&(r=new J),n.vsub(e,r),t.conjugate(Ya),Ya.vmult(r,r),r}static pointToWorldFrame(e,t,n,r){return r===void 0&&(r=new J),t.vmult(n,r),r.vadd(e,r),r}static vectorToWorldFrame(e,t,n){return n===void 0&&(n=new J),e.vmult(t,n),n}static vectorToLocalFrame(e,t,n,r){return r===void 0&&(r=new J),t.w*=-1,t.vmult(n,r),t.w*=-1,r}},Ya=new Wa,Xa=class e extends Y{constructor(e){e===void 0&&(e={});let{vertices:t=[],faces:n=[],normals:r=[],axes:i,boundingSphereRadius:a}=e;super({type:Y.types.CONVEXPOLYHEDRON}),this.vertices=t,this.faces=n,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=i?i.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,t=this.vertices,n=this.uniqueEdges;n.length=0;let r=new J;for(let i=0;i!==e.length;i++){let a=e[i],o=a.length;for(let e=0;e!==o;e++){let i=(e+1)%o;t[a[e]].vsub(t[a[i]],r),r.normalize();let s=!1;for(let e=0;e!==n.length;e++)if(n[e].almostEquals(r)||n[e].almostEquals(r)){s=!0;break}s||n.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let t=0;t<this.faces[e].length;t++)if(!this.vertices[this.faces[e][t]])throw Error(`Vertex ${this.faces[e][t]} not found!`);let t=this.faceNormals[e]||new J;this.getFaceNormal(e,t),t.negate(t),this.faceNormals[e]=t;let n=this.vertices[this.faces[e][0]];if(t.dot(n)<0){console.error(`.faceNormals[${e}] = Vec3(${t.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let t=0;t<this.faces[e].length;t++)console.warn(`.vertices[${this.faces[e][t]}] = Vec3(${this.vertices[this.faces[e][t]].toString()})`)}}}getFaceNormal(t,n){let r=this.faces[t],i=this.vertices[r[0]],a=this.vertices[r[1]],o=this.vertices[r[2]];e.computeNormal(i,a,o,n)}static computeNormal(e,t,n,r){let i=new J,a=new J;t.vsub(e,a),n.vsub(t,i),i.cross(a,r),r.isZero()||r.normalize()}clipAgainstHull(e,t,n,r,i,a,o,s,c){let l=new J,u=-1,d=-Number.MAX_VALUE;for(let e=0;e<n.faces.length;e++){l.copy(n.faceNormals[e]),i.vmult(l,l);let t=l.dot(a);t>d&&(d=t,u=e)}let f=[];for(let e=0;e<n.faces[u].length;e++){let t=n.vertices[n.faces[u][e]],a=new J;a.copy(t),i.vmult(a,a),r.vadd(a,a),f.push(a)}u>=0&&this.clipFaceAgainstHull(a,e,t,f,o,s,c)}findSeparatingAxis(e,t,n,r,i,a,o,s){let c=new J,l=new J,u=new J,d=new J,f=new J,p=new J,m=Number.MAX_VALUE,h=this;if(h.uniqueAxes)for(let o=0;o!==h.uniqueAxes.length;o++){n.vmult(h.uniqueAxes[o],c);let s=h.testSepAxis(c,e,t,n,r,i);if(s===!1)return!1;s<m&&(m=s,a.copy(c))}else{let s=o?o.length:h.faces.length;for(let l=0;l<s;l++){let s=o?o[l]:l;c.copy(h.faceNormals[s]),n.vmult(c,c);let u=h.testSepAxis(c,e,t,n,r,i);if(u===!1)return!1;u<m&&(m=u,a.copy(c))}}if(e.uniqueAxes)for(let o=0;o!==e.uniqueAxes.length;o++){i.vmult(e.uniqueAxes[o],l);let s=h.testSepAxis(l,e,t,n,r,i);if(s===!1)return!1;s<m&&(m=s,a.copy(l))}else{let o=s?s.length:e.faces.length;for(let c=0;c<o;c++){let o=s?s[c]:c;l.copy(e.faceNormals[o]),i.vmult(l,l);let u=h.testSepAxis(l,e,t,n,r,i);if(u===!1)return!1;u<m&&(m=u,a.copy(l))}}for(let o=0;o!==h.uniqueEdges.length;o++){n.vmult(h.uniqueEdges[o],d);for(let o=0;o!==e.uniqueEdges.length;o++)if(i.vmult(e.uniqueEdges[o],f),d.cross(f,p),!p.almostZero()){p.normalize();let o=h.testSepAxis(p,e,t,n,r,i);if(o===!1)return!1;o<m&&(m=o,a.copy(p))}}return r.vsub(t,u),u.dot(a)>0&&a.negate(a),!0}testSepAxis(t,n,r,i,a,o){let s=this;e.project(s,t,r,i,Za),e.project(n,t,a,o,Qa);let c=Za[0],l=Za[1],u=Qa[0],d=Qa[1];if(c<d||u<l)return!1;let f=c-d,p=u-l;return f<p?f:p}calculateLocalInertia(e,t){let n=new J,r=new J;this.computeLocalAABB(r,n);let i=n.x-r.x,a=n.y-r.y,o=n.z-r.z;t.x=1/12*e*(2*a*2*a+2*o*2*o),t.y=1/12*e*(2*i*2*i+2*o*2*o),t.z=1/12*e*(2*a*2*a+2*i*2*i)}getPlaneConstantOfFace(e){let t=this.faces[e],n=this.faceNormals[e],r=this.vertices[t[0]];return-n.dot(r)}clipFaceAgainstHull(e,t,n,r,i,a,o){let s=new J,c=new J,l=new J,u=new J,d=new J,f=new J,p=new J,m=new J,h=this,g=[],_=r,v=g,y=-1,b=Number.MAX_VALUE;for(let t=0;t<h.faces.length;t++){s.copy(h.faceNormals[t]),n.vmult(s,s);let r=s.dot(e);r<b&&(b=r,y=t)}if(y<0)return;let x=h.faces[y];x.connectedFaces=[];for(let e=0;e<h.faces.length;e++)for(let t=0;t<h.faces[e].length;t++)x.indexOf(h.faces[e][t])!==-1&&e!==y&&x.connectedFaces.indexOf(e)===-1&&x.connectedFaces.push(e);let S=x.length;for(let e=0;e<S;e++){let r=h.vertices[x[e]],i=h.vertices[x[(e+1)%S]];r.vsub(i,c),l.copy(c),n.vmult(l,l),t.vadd(l,l),u.copy(this.faceNormals[y]),n.vmult(u,u),t.vadd(u,u),l.cross(u,d),d.negate(d),f.copy(r),n.vmult(f,f),t.vadd(f,f);let a=x.connectedFaces[e];p.copy(this.faceNormals[a]);let o=this.getPlaneConstantOfFace(a);m.copy(p),n.vmult(m,m);let s=o-m.dot(t);for(this.clipFaceAgainstPlane(_,v,m,s);_.length;)_.shift();for(;v.length;)_.push(v.shift())}p.copy(this.faceNormals[y]);let C=this.getPlaneConstantOfFace(y);m.copy(p),n.vmult(m,m);let w=C-m.dot(t);for(let e=0;e<_.length;e++){let t=m.dot(_[e])+w;if(t<=i&&(console.log(`clamped: depth=${t} to minDist=${i}`),t=i),t<=a){let n=_[e];if(t<=1e-6){let e={point:n,normal:m,depth:t};o.push(e)}}}}clipFaceAgainstPlane(e,t,n,r){let i,a,o=e.length;if(o<2)return t;let s=e[e.length-1],c=e[0];i=n.dot(s)+r;for(let l=0;l<o;l++){if(c=e[l],a=n.dot(c)+r,i<0){if(a<0){let e=new J;e.copy(c),t.push(e)}else{let e=new J;s.lerp(c,i/(i-a),e),t.push(e)}}else if(a<0){let e=new J;s.lerp(c,i/(i-a),e),t.push(e),t.push(c)}s=c,i=a}return t}computeWorldVertices(e,t){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new J);let n=this.vertices,r=this.worldVertices;for(let i=0;i!==this.vertices.length;i++)t.vmult(n[i],r[i]),e.vadd(r[i],r[i]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,t){let n=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),t.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){let i=n[r];i.x<e.x?e.x=i.x:i.x>t.x&&(t.x=i.x),i.y<e.y?e.y=i.y:i.y>t.y&&(t.y=i.y),i.z<e.z?e.z=i.z:i.z>t.z&&(t.z=i.z)}}computeWorldFaceNormals(e){let t=this.faceNormals.length;for(;this.worldFaceNormals.length<t;)this.worldFaceNormals.push(new J);let n=this.faceNormals,r=this.worldFaceNormals;for(let i=0;i!==t;i++)e.vmult(n[i],r[i]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,t=this.vertices;for(let n=0;n!==t.length;n++){let r=t[n].lengthSquared();r>e&&(e=r)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,t,n,r){let i=this.vertices,a,o,s,c,l,u,d=new J;for(let n=0;n<i.length;n++){d.copy(i[n]),t.vmult(d,d),e.vadd(d,d);let r=d;(a===void 0||r.x<a)&&(a=r.x),(c===void 0||r.x>c)&&(c=r.x),(o===void 0||r.y<o)&&(o=r.y),(l===void 0||r.y>l)&&(l=r.y),(s===void 0||r.z<s)&&(s=r.z),(u===void 0||r.z>u)&&(u=r.z)}n.set(a,o,s),r.set(c,l,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new J);let t=this.vertices;for(let n=0;n<t.length;n++)e.vadd(t[n],e);return e.scale(1/t.length,e),e}transformAllPoints(e,t){let n=this.vertices.length,r=this.vertices;if(t){for(let e=0;e<n;e++){let n=r[e];t.vmult(n,n)}for(let e=0;e<this.faceNormals.length;e++){let n=this.faceNormals[e];t.vmult(n,n)}}if(e)for(let t=0;t<n;t++){let n=r[t];n.vadd(e,n)}}pointIsInside(e){let t=this.vertices,n=this.faces,r=this.faceNormals,i=new J;this.getAveragePointLocal(i);for(let a=0;a<this.faces.length;a++){let o=r[a],s=t[n[a][0]],c=new J;e.vsub(s,c);let l=o.dot(c),u=new J;i.vsub(s,u);let d=o.dot(u);if(l<0&&d>0||l>0&&d<0)return!1}return-1}static project(e,t,n,r,i){let a=e.vertices.length,o=$a,s=0,c=0,l=eo,u=e.vertices;l.setZero(),Ja.vectorToLocalFrame(n,r,t,o),Ja.pointToLocalFrame(n,r,l,l);let d=l.dot(o);c=s=u[0].dot(o);for(let e=1;e<a;e++){let t=u[e].dot(o);t>s&&(s=t),t<c&&(c=t)}if(c-=d,s-=d,c>s){let e=c;c=s,s=e}i[0]=s,i[1]=c}},Za=[],Qa=[];new J;var $a=new J,eo=new J,to=class e extends Y{constructor(e){super({type:Y.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,t=this.halfExtents.y,n=this.halfExtents.z,r=J,i=new Xa({vertices:[new r(-e,-t,-n),new r(e,-t,-n),new r(e,t,-n),new r(-e,t,-n),new r(-e,-t,n),new r(e,-t,n),new r(e,t,n),new r(-e,t,n)],faces:[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],axes:[new r(0,0,1),new r(0,1,0),new r(1,0,0)]});this.convexPolyhedronRepresentation=i,i.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new J),e.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(e,t,n){let r=e;n.x=1/12*t*(2*r.y*2*r.y+2*r.z*2*r.z),n.y=1/12*t*(2*r.x*2*r.x+2*r.z*2*r.z),n.z=1/12*t*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(e,t){let n=e,r=this.halfExtents;if(n[0].set(r.x,0,0),n[1].set(0,r.y,0),n[2].set(0,0,r.z),n[3].set(-r.x,0,0),n[4].set(0,-r.y,0),n[5].set(0,0,-r.z),t!==void 0)for(let e=0;e!==n.length;e++)t.vmult(n[e],n[e]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,t,n){let r=this.halfExtents,i=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let r=0;r<i.length;r++)no.set(i[r][0],i[r][1],i[r][2]),t.vmult(no,no),e.vadd(no,no),n(no.x,no.y,no.z)}calculateWorldAABB(e,t,n,r){let i=this.halfExtents;ro[0].set(i.x,i.y,i.z),ro[1].set(-i.x,i.y,i.z),ro[2].set(-i.x,-i.y,i.z),ro[3].set(-i.x,-i.y,-i.z),ro[4].set(i.x,-i.y,-i.z),ro[5].set(i.x,i.y,-i.z),ro[6].set(-i.x,i.y,-i.z),ro[7].set(i.x,-i.y,i.z);let a=ro[0];t.vmult(a,a),e.vadd(a,a),r.copy(a),n.copy(a);for(let i=1;i<8;i++){let a=ro[i];t.vmult(a,a),e.vadd(a,a);let o=a.x,s=a.y,c=a.z;o>r.x&&(r.x=o),s>r.y&&(r.y=s),c>r.z&&(r.z=c),o<n.x&&(n.x=o),s<n.y&&(n.y=s),c<n.z&&(n.z=c)}}},no=new J,ro=[new J,new J,new J,new J,new J,new J,new J,new J],io={DYNAMIC:1,STATIC:2,KINEMATIC:4},ao={AWAKE:0,SLEEPY:1,SLEEPING:2},X=class e extends Ua{constructor(t){t===void 0&&(t={}),super(),this.id=e.idCounter++,this.index=-1,this.world=null,this.vlambda=new J,this.collisionFilterGroup=typeof t.collisionFilterGroup==`number`?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask==`number`?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse!=`boolean`||t.collisionResponse,this.position=new J,this.previousPosition=new J,this.interpolatedPosition=new J,this.initPosition=new J,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new J,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new J,this.force=new J;let n=typeof t.mass==`number`?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping==`number`?t.linearDamping:.01,this.type=n<=0?e.STATIC:e.DYNAMIC,typeof t.type==typeof e.STATIC&&(this.type=t.type),this.allowSleep=t.allowSleep===void 0||t.allowSleep,this.sleepState=e.AWAKE,this.sleepSpeedLimit=t.sleepSpeedLimit===void 0?.1:t.sleepSpeedLimit,this.sleepTimeLimit=t.sleepTimeLimit===void 0?1:t.sleepTimeLimit,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new J,this.quaternion=new Wa,this.initQuaternion=new Wa,this.previousQuaternion=new Wa,this.interpolatedQuaternion=new Wa,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new J,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new J,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new J,this.invInertia=new J,this.invInertiaWorld=new Pa,this.invMassSolve=0,this.invInertiaSolve=new J,this.invInertiaWorldSolve=new Pa,this.fixedRotation=t.fixedRotation!==void 0&&t.fixedRotation,this.angularDamping=t.angularDamping===void 0?.01:t.angularDamping,this.linearFactor=new J(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new J(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new za,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new J,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=e.AWAKE,this.wakeUpAfterNarrowphase=!1,t===e.SLEEPING&&this.dispatchEvent(e.wakeupEvent)}sleep(){this.sleepState=e.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let n=this.sleepState,r=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;n===e.AWAKE&&r<i?(this.sleepState=e.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(e.sleepyEvent)):n===e.SLEEPY&&r>i?this.wakeUp():n===e.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(e.sleepEvent))}}updateSolveMassProperties(){this.sleepState===e.SLEEPING||this.type===e.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,t){return t===void 0&&(t=new J),e.vsub(this.position,t),this.quaternion.conjugate().vmult(t,t),t}vectorToLocalFrame(e,t){return t===void 0&&(t=new J),this.quaternion.conjugate().vmult(e,t),t}pointToWorldFrame(e,t){return t===void 0&&(t=new J),this.quaternion.vmult(e,t),t.vadd(this.position,t),t}vectorToWorldFrame(e,t){return t===void 0&&(t=new J),this.quaternion.vmult(e,t),t}addShape(e,t,n){let r=new J,i=new Wa;return t&&r.copy(t),n&&i.copy(n),this.shapes.push(e),this.shapeOffsets.push(r),this.shapeOrientations.push(i),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let t=this.shapes.indexOf(e);return t===-1?(console.warn(`Shape does not belong to the body`),this):(this.shapes.splice(t,1),this.shapeOffsets.splice(t,1),this.shapeOrientations.splice(t,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,t=this.shapeOffsets,n=e.length,r=0;for(let i=0;i!==n;i++){let n=e[i];n.updateBoundingSphereRadius();let a=t[i].length(),o=n.boundingSphereRadius;a+o>r&&(r=a+o)}this.boundingRadius=r}updateAABB(){let e=this.shapes,t=this.shapeOffsets,n=this.shapeOrientations,r=e.length,i=oo,a=so,o=this.quaternion,s=this.aabb,c=co;for(let l=0;l!==r;l++){let r=e[l];o.vmult(t[l],i),i.vadd(this.position,i),o.mult(n[l],a),r.calculateWorldAABB(i,a,c.lowerBound,c.upperBound),l===0?s.copy(c):s.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let t=this.invInertia;if(t.x!==t.y||t.y!==t.z||e){let e=lo,n=uo;e.setRotationFromQuaternion(this.quaternion),e.transpose(n),e.scale(t,e),e.mmult(n,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new J),this.type!==e.DYNAMIC)return;this.sleepState===e.SLEEPING&&this.wakeUp();let r=fo;n.cross(t,r),this.force.vadd(t,this.force),this.torque.vadd(r,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new J),this.type!==e.DYNAMIC)return;let r=po,i=mo;this.vectorToWorldFrame(t,r),this.vectorToWorldFrame(n,i),this.applyForce(r,i)}applyTorque(t){this.type===e.DYNAMIC&&(this.sleepState===e.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new J),this.type!==e.DYNAMIC)return;this.sleepState===e.SLEEPING&&this.wakeUp();let r=n,i=ho;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let a=go;r.cross(t,a),this.invInertiaWorld.vmult(a,a),this.angularVelocity.vadd(a,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new J),this.type!==e.DYNAMIC)return;let r=_o,i=vo;this.vectorToWorldFrame(t,r),this.vectorToWorldFrame(n,i),this.applyImpulse(r,i)}updateMassProperties(){let e=yo;this.invMass=this.mass>0?1/this.mass:0;let t=this.inertia,n=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),to.calculateInertia(e,this.mass,t),this.invInertia.set(t.x>0&&!n?1/t.x:0,t.y>0&&!n?1/t.y:0,t.z>0&&!n?1/t.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,t){let n=new J;return e.vsub(this.position,n),this.angularVelocity.cross(n,t),this.velocity.vadd(t,t),t}integrate(t,n,r){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),this.type!==e.DYNAMIC&&this.type!==e.KINEMATIC||this.sleepState===e.SLEEPING)return;let i=this.velocity,a=this.angularVelocity,o=this.position,s=this.force,c=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,f=this.linearFactor,p=u*t;i.x+=s.x*p*f.x,i.y+=s.y*p*f.y,i.z+=s.z*p*f.z;let m=d.elements,h=this.angularFactor,g=c.x*h.x,_=c.y*h.y,v=c.z*h.z;a.x+=t*(m[0]*g+m[1]*_+m[2]*v),a.y+=t*(m[3]*g+m[4]*_+m[5]*v),a.z+=t*(m[6]*g+m[7]*_+m[8]*v),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),n&&(r?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};X.idCounter=0,X.COLLIDE_EVENT_NAME=`collide`,X.DYNAMIC=io.DYNAMIC,X.STATIC=io.STATIC,X.KINEMATIC=io.KINEMATIC,X.AWAKE=ao.AWAKE,X.SLEEPY=ao.SLEEPY,X.SLEEPING=ao.SLEEPING,X.wakeupEvent={type:`wakeup`},X.sleepyEvent={type:`sleepy`},X.sleepEvent={type:`sleep`};var oo=new J,so=new Wa,co=new za,lo=new Pa,uo=new Pa;new Pa;var fo=new J,po=new J,mo=new J,ho=new J,go=new J,_o=new J,vo=new J,yo=new J,bo=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,t,n){throw Error(`collisionPairs not implemented for this BroadPhase class!`)}needBroadphaseCollision(e,t){return(e.collisionFilterGroup&t.collisionFilterMask)!==0&&(t.collisionFilterGroup&e.collisionFilterMask)!==0&&((e.type&X.STATIC)===0&&e.sleepState!==X.SLEEPING||(t.type&X.STATIC)===0&&t.sleepState!==X.SLEEPING)}intersectionTest(e,t,n,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,t,n,r):this.doBoundingSphereBroadphase(e,t,n,r)}doBoundingSphereBroadphase(e,t,n,r){let i=xo;t.position.vsub(e.position,i);let a=(e.boundingRadius+t.boundingRadius)**2;i.lengthSquared()<a&&(n.push(e),r.push(t))}doBoundingBoxBroadphase(e,t,n,r){e.aabbNeedsUpdate&&e.updateAABB(),t.aabbNeedsUpdate&&t.updateAABB(),e.aabb.overlaps(t.aabb)&&(n.push(e),r.push(t))}makePairsUnique(e,t){let n=So,r=Co,i=wo,a=e.length;for(let n=0;n!==a;n++)r[n]=e[n],i[n]=t[n];e.length=0,t.length=0;for(let e=0;e!==a;e++){let t=r[e].id,a=i[e].id,o=t<a?`${t},${a}`:`${a},${t}`;n[o]=e,n.keys.push(o)}for(let a=0;a!==n.keys.length;a++){let a=n.keys.pop(),o=n[a];e.push(r[o]),t.push(i[o]),delete n[a]}}setWorld(e){}static boundingSphereCheck(e,t){let n=new J;e.position.vsub(t.position,n);let r=e.shapes[0],i=t.shapes[0];return(r.boundingSphereRadius+i.boundingSphereRadius)**2>n.lengthSquared()}aabbQuery(e,t,n){return console.warn(`.aabbQuery is not implemented in this Broadphase subclass.`),[]}},xo=new J;new J,new Wa,new J;var So={keys:[]},Co=[],wo=[];new J,new J,new J;var To=class extends bo{constructor(){super()}collisionPairs(e,t,n){let r=e.bodies,i=r.length,a,o;for(let e=0;e!==i;e++)for(let i=0;i!==e;i++)a=r[e],o=r[i],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,t,n)}aabbQuery(e,t,n){n===void 0&&(n=[]);for(let r=0;r<e.bodies.length;r++){let i=e.bodies[r];i.aabbNeedsUpdate&&i.updateAABB(),i.aabb.overlaps(t)&&n.push(i)}return n}},Eo=class{constructor(){this.rayFromWorld=new J,this.rayToWorld=new J,this.hitNormalWorld=new J,this.hitPointWorld=new J,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,t,n,r,i,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(t),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(r),this.shape=i,this.body=a,this.distance=o}},Do,Oo,ko,Ao,jo,Mo,No,Po={CLOSEST:1,ANY:2,ALL:4};Do=Y.types.SPHERE,Oo=Y.types.PLANE,ko=Y.types.BOX,Ao=Y.types.CYLINDER,jo=Y.types.CONVEXPOLYHEDRON,Mo=Y.types.HEIGHTFIELD,No=Y.types.TRIMESH;var Fo=class e{get[Do](){return this._intersectSphere}get[Oo](){return this._intersectPlane}get[ko](){return this._intersectBox}get[Ao](){return this._intersectConvex}get[jo](){return this._intersectConvex}get[Mo](){return this._intersectHeightfield}get[No](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new J),n===void 0&&(n=new J),this.from=t.clone(),this.to=n.clone(),this.direction=new J,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=e.ANY,this.result=new Eo,this.hasHit=!1,this.callback=e=>{}}intersectWorld(t,n){return this.mode=n.mode||e.ANY,this.result=n.result||new Eo,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=n.collisionFilterMask===void 0?-1:n.collisionFilterMask,this.collisionFilterGroup=n.collisionFilterGroup===void 0?-1:n.collisionFilterGroup,this.checkCollisionResponse=n.checkCollisionResponse===void 0||n.checkCollisionResponse,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Io),Lo.length=0,t.broadphase.aabbQuery(t,Io,Lo),this.intersectBodies(Lo),this.hasHit}intersectBody(e,t){t&&(this.result=t,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let r=Bo,i=Vo;for(let t=0,a=e.shapes.length;t<a;t++){let a=e.shapes[t];if((!n||a.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[t],i),e.quaternion.vmult(e.shapeOffsets[t],r),r.vadd(e.position,r),this.intersectShape(a,i,r,e),this.result.shouldStop))break}}intersectBodies(e,t){t&&(this.result=t,this.updateDirection());for(let t=0,n=e.length;!this.result.shouldStop&&t<n;t++)this.intersectBody(e[t])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,t,n,r){let i=this.from;if(us(i,this.direction,n)>e.boundingSphereRadius)return;let a=this[e.type];a&&a.call(this,e,t,n,r,e)}_intersectBox(e,t,n,r,i){return this._intersectConvex(e.convexPolyhedronRepresentation,t,n,r,i)}_intersectPlane(e,t,n,r,i){let a=this.from,o=this.to,s=this.direction,c=new J(0,0,1);t.vmult(c,c);let l=new J;a.vsub(n,l);let u=l.dot(c);if(o.vsub(n,l),u*l.dot(c)>0||a.distanceTo(o)<u)return;let d=c.dot(s);if(Math.abs(d)<this.precision)return;let f=new J,p=new J,m=new J;a.vsub(n,f);let h=-c.dot(f)/d;s.scale(h,p),a.vadd(p,m),this.reportIntersection(c,m,i,r,-1)}getAABB(e){let{lowerBound:t,upperBound:n}=e,r=this.to,i=this.from;t.x=Math.min(r.x,i.x),t.y=Math.min(r.y,i.y),t.z=Math.min(r.z,i.z),n.x=Math.max(r.x,i.x),n.y=Math.max(r.y,i.y),n.z=Math.max(r.z,i.z)}_intersectHeightfield(e,t,n,r,i){e.data,e.elementSize;let a=Jo;a.from.copy(this.from),a.to.copy(this.to),Ja.pointToLocalFrame(n,t,a.from,a.from),Ja.pointToLocalFrame(n,t,a.to,a.to),a.updateDirection();let o=Yo,s,c,l,u;s=c=0,l=u=e.data.length-1;let d=new za;a.getAABB(d),e.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,o,!0),s=Math.max(s,o[0]),c=Math.max(c,o[1]),e.getIndexOfPosition(d.upperBound.x,d.upperBound.y,o,!0),l=Math.min(l,o[0]+1),u=Math.min(u,o[1]+1);for(let o=s;o<l;o++)for(let s=c;s<u;s++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(o,s,d),d.overlapsRay(a)){if(e.getConvexTrianglePillar(o,s,!1),Ja.pointToWorldFrame(n,t,e.pillarOffset,qo),this._intersectConvex(e.pillarConvex,t,qo,r,i,Ko),this.result.shouldStop)return;e.getConvexTrianglePillar(o,s,!0),Ja.pointToWorldFrame(n,t,e.pillarOffset,qo),this._intersectConvex(e.pillarConvex,t,qo,r,i,Ko)}}}_intersectSphere(e,t,n,r,i){let a=this.from,o=this.to,s=e.radius,c=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,l=2*((o.x-a.x)*(a.x-n.x)+(o.y-a.y)*(a.y-n.y)+(o.z-a.z)*(a.z-n.z)),u=(a.x-n.x)**2+(a.y-n.y)**2+(a.z-n.z)**2-s**2,d=l**2-4*c*u,f=Xo,p=Zo;if(!(d<0)){if(d===0)a.lerp(o,d,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,i,r,-1);else{let e=(-l-Math.sqrt(d))/(2*c),t=(-l+Math.sqrt(d))/(2*c);if(e>=0&&e<=1&&(a.lerp(o,e,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,i,r,-1)),this.result.shouldStop)return;t>=0&&t<=1&&(a.lerp(o,t,f),f.vsub(n,p),p.normalize(),this.reportIntersection(p,f,i,r,-1))}}}_intersectConvex(t,n,r,i,a,o){let s=Qo,c=$o,l=o&&o.faceList||null,u=t.faces,d=t.vertices,f=t.faceNormals,p=this.direction,m=this.from,h=this.to,g=m.distanceTo(h),_=l?l.length:u.length,v=this.result;for(let t=0;!v.shouldStop&&t<_;t++){let o=l?l[t]:t,h=u[o],_=f[o],y=n,b=r;c.copy(d[h[0]]),y.vmult(c,c),c.vadd(b,c),c.vsub(m,c),y.vmult(_,s);let x=p.dot(s);if(Math.abs(x)<this.precision)continue;let S=s.dot(c)/x;if(!(S<0)){p.scale(S,Ho),Ho.vadd(m,Ho),Uo.copy(d[h[0]]),y.vmult(Uo,Uo),b.vadd(Uo,Uo);for(let t=1;!v.shouldStop&&t<h.length-1;t++){Wo.copy(d[h[t]]),Go.copy(d[h[t+1]]),y.vmult(Wo,Wo),y.vmult(Go,Go),b.vadd(Wo,Wo),b.vadd(Go,Go);let n=Ho.distanceTo(m);!(e.pointInTriangle(Ho,Uo,Wo,Go)||e.pointInTriangle(Ho,Wo,Uo,Go))||n>g||this.reportIntersection(s,Ho,a,i,o)}}}}_intersectTrimesh(t,n,r,i,a,o){let s=es,c=os,l=ss,u=$o,d=ts,f=ns,p=rs,m=as,h=is,g=t.indices;t.vertices;let _=this.from,v=this.to,y=this.direction;l.position.copy(r),l.quaternion.copy(n),Ja.vectorToLocalFrame(r,n,y,d),Ja.pointToLocalFrame(r,n,_,f),Ja.pointToLocalFrame(r,n,v,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,p.vsub(f,d),d.normalize();let b=f.distanceSquared(p);t.tree.rayQuery(this,l,c);for(let o=0,l=c.length;!this.result.shouldStop&&o!==l;o++){let l=c[o];t.getNormal(l,s),t.getVertex(g[l*3],Uo),Uo.vsub(f,u);let p=d.dot(s),_=s.dot(u)/p;if(_<0)continue;d.scale(_,Ho),Ho.vadd(f,Ho),t.getVertex(g[l*3+1],Wo),t.getVertex(g[l*3+2],Go);let v=Ho.distanceSquared(f);!(e.pointInTriangle(Ho,Wo,Uo,Go)||e.pointInTriangle(Ho,Uo,Wo,Go))||v>b||(Ja.vectorToWorldFrame(n,s,h),Ja.pointToWorldFrame(r,n,Ho,m),this.reportIntersection(h,m,a,i,l))}c.length=0}reportIntersection(t,n,r,i,a){let o=this.from,s=this.to,c=o.distanceTo(n),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=a===void 0?-1:a,this.mode){case e.ALL:this.hasHit=!0,l.set(o,s,t,n,r,i,c),l.hasHit=!0,this.callback(l);break;case e.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,s,t,n,r,i,c));break;case e.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,s,t,n,r,i,c),l.shouldStop=!0}}static pointInTriangle(e,t,n,r){r.vsub(t,cs),n.vsub(t,Ro),e.vsub(t,zo);let i=cs.dot(cs),a=cs.dot(Ro),o=cs.dot(zo),s=Ro.dot(Ro),c=Ro.dot(zo),l,u;return(l=s*o-a*c)>=0&&(u=i*c-a*o)>=0&&l+u<i*s-a*a}};Fo.CLOSEST=Po.CLOSEST,Fo.ANY=Po.ANY,Fo.ALL=Po.ALL;var Io=new za,Lo=[],Ro=new J,zo=new J,Bo=new J,Vo=new Wa,Ho=new J,Uo=new J,Wo=new J,Go=new J;new J,new Eo;var Ko={faceList:[0]},qo=new J,Jo=new Fo,Yo=[],Xo=new J,Zo=new J,Qo=new J;new J,new J;var $o=new J,es=new J,ts=new J,ns=new J,rs=new J,is=new J,as=new J;new za;var os=[],ss=new Ja,cs=new J,ls=new J;function us(e,t,n){n.vsub(e,cs);let r=cs.dot(t);return t.scale(r,ls),ls.vadd(e,ls),n.distanceTo(ls)}var ds=class e extends bo{static checkBounds(e,t,n){let r,i;n===0?(r=e.position.x,i=t.position.x):n===1?(r=e.position.y,i=t.position.y):n===2&&(r=e.position.z,i=t.position.z);let a=e.boundingRadius,o=t.boundingRadius,s=r+a;return i-o<s}static insertionSortX(e){for(let t=1,n=e.length;t<n;t++){let n=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.x<=n.aabb.lowerBound.x);r--)e[r+1]=e[r];e[r+1]=n}return e}static insertionSortY(e){for(let t=1,n=e.length;t<n;t++){let n=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.y<=n.aabb.lowerBound.y);r--)e[r+1]=e[r];e[r+1]=n}return e}static insertionSortZ(e){for(let t=1,n=e.length;t<n;t++){let n=e[t],r;for(r=t-1;r>=0&&!(e[r].aabb.lowerBound.z<=n.aabb.lowerBound.z);r--)e[r+1]=e[r];e[r+1]=n}return e}constructor(e){super(),this.axisList=[],this.world=null,this.axisIndex=0;let t=this.axisList;this._addBodyHandler=e=>{t.push(e.body)},this._removeBodyHandler=e=>{let n=t.indexOf(e.body);n!==-1&&t.splice(n,1)},e&&this.setWorld(e)}setWorld(e){this.axisList.length=0;for(let t=0;t<e.bodies.length;t++)this.axisList.push(e.bodies[t]);e.removeEventListener(`addBody`,this._addBodyHandler),e.removeEventListener(`removeBody`,this._removeBodyHandler),e.addEventListener(`addBody`,this._addBodyHandler),e.addEventListener(`removeBody`,this._removeBodyHandler),this.world=e,this.dirty=!0}collisionPairs(t,n,r){let i=this.axisList,a=i.length,o=this.axisIndex,s,c;for(this.dirty&&(this.sortList(),this.dirty=!1),s=0;s!==a;s++){let t=i[s];for(c=s+1;c<a;c++){let a=i[c];if(this.needBroadphaseCollision(t,a)){if(!e.checkBounds(t,a,o))break;this.intersectionTest(t,a,n,r)}}}}sortList(){let t=this.axisList,n=this.axisIndex,r=t.length;for(let e=0;e!==r;e++){let n=t[e];n.aabbNeedsUpdate&&n.updateAABB()}n===0?e.insertionSortX(t):n===1?e.insertionSortY(t):n===2&&e.insertionSortZ(t)}autoDetectAxis(){let e=0,t=0,n=0,r=0,i=0,a=0,o=this.axisList,s=o.length,c=1/s;for(let c=0;c!==s;c++){let s=o[c],l=s.position.x;e+=l,t+=l*l;let u=s.position.y;n+=u,r+=u*u;let d=s.position.z;i+=d,a+=d*d}let l=t-e*e*c,u=r-n*n*c,d=a-i*i*c;this.axisIndex=l>u?l>d?0:2:u>d?1:2}aabbQuery(e,t,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);let r=this.axisIndex,i=`x`;r===1&&(i=`y`),r===2&&(i=`z`);let a=this.axisList;t.lowerBound[i],t.upperBound[i];for(let e=0;e<a.length;e++){let r=a[e];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(t)&&n.push(r)}return n}},fs=class{static defaults(e,t){e===void 0&&(e={});for(let n in t)n in e||(e[n]=t[n]);return e}},ps=class{constructor(){this.spatial=new J,this.rotational=new J}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,t){return e.dot(this.spatial)+t.dot(this.rotational)}},ms=class e{constructor(t,n,r,i){r===void 0&&(r=-1e6),i===void 0&&(i=1e6),this.id=e.idCounter++,this.minForce=r,this.maxForce=i,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new ps,this.jacobianElementB=new ps,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,t,n){let r=t,i=e,a=n;this.a=4/(a*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(a*a*i*(1+4*r))}computeB(e,t,n){let r=this.computeGW(),i=this.computeGq(),a=this.computeGiMf();return-i*e-r*t-a*n}computeGq(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,r=this.bj,i=n.position,a=r.position;return e.spatial.dot(i)+t.spatial.dot(a)}computeGW(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,r=this.bj,i=n.velocity,a=r.velocity,o=n.angularVelocity,s=r.angularVelocity;return e.multiplyVectors(i,o)+t.multiplyVectors(a,s)}computeGWlambda(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,r=this.bj,i=n.vlambda,a=r.vlambda,o=n.wlambda,s=r.wlambda;return e.multiplyVectors(i,o)+t.multiplyVectors(a,s)}computeGiMf(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,r=this.bj,i=n.force,a=n.torque,o=r.force,s=r.torque,c=n.invMassSolve,l=r.invMassSolve;return i.scale(c,hs),o.scale(l,gs),n.invInertiaWorldSolve.vmult(a,_s),r.invInertiaWorldSolve.vmult(s,vs),e.multiplyVectors(hs,_s)+t.multiplyVectors(gs,vs)}computeGiMGt(){let e=this.jacobianElementA,t=this.jacobianElementB,n=this.bi,r=this.bj,i=n.invMassSolve,a=r.invMassSolve,o=n.invInertiaWorldSolve,s=r.invInertiaWorldSolve,c=i+a;return o.vmult(e.rotational,ys),c+=ys.dot(e.rotational),s.vmult(t.rotational,ys),c+=ys.dot(t.rotational),c}addToWlambda(e){let t=this.jacobianElementA,n=this.jacobianElementB,r=this.bi,i=this.bj,a=bs;r.vlambda.addScaledVector(r.invMassSolve*e,t.spatial,r.vlambda),i.vlambda.addScaledVector(i.invMassSolve*e,n.spatial,i.vlambda),r.invInertiaWorldSolve.vmult(t.rotational,a),r.wlambda.addScaledVector(e,a,r.wlambda),i.invInertiaWorldSolve.vmult(n.rotational,a),i.wlambda.addScaledVector(e,a,i.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ms.idCounter=0;var hs=new J,gs=new J,_s=new J,vs=new J,ys=new J,bs=new J,xs=class extends ms{constructor(e,t,n){n===void 0&&(n=1e6),super(e,t,0,n),this.restitution=0,this.ri=new J,this.rj=new J,this.ni=new J}computeB(e){let t=this.a,n=this.b,r=this.bi,i=this.bj,a=this.ri,o=this.rj,s=Ss,c=Cs,l=r.velocity,u=r.angularVelocity;r.force,r.torque;let d=i.velocity,f=i.angularVelocity;i.force,i.torque;let p=ws,m=this.jacobianElementA,h=this.jacobianElementB,g=this.ni;a.cross(g,s),o.cross(g,c),g.negate(m.spatial),s.negate(m.rotational),h.spatial.copy(g),h.rotational.copy(c),p.copy(i.position),p.vadd(o,p),p.vsub(r.position,p),p.vsub(a,p);let _=g.dot(p),v=this.restitution+1,y=v*d.dot(g)-v*l.dot(g)+f.dot(c)-u.dot(s),b=this.computeGiMf();return-_*t-y*n-e*b}getImpactVelocityAlongNormal(){let e=Ts,t=Es,n=Ds,r=Os,i=ks;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(n,e),this.bj.getVelocityAtWorldPoint(r,t),e.vsub(t,i),this.ni.dot(i)}},Ss=new J,Cs=new J,ws=new J,Ts=new J,Es=new J,Ds=new J,Os=new J,ks=new J;new J,new J,new J,new J,new J,new J,new J,new J,new J,new J;var As=class extends ms{constructor(e,t,n){super(e,t,-n,n),this.ri=new J,this.rj=new J,this.t=new J}computeB(e){this.a;let t=this.b;this.bi,this.bj;let n=this.ri,r=this.rj,i=js,a=Ms,o=this.t;n.cross(o,i),r.cross(o,a);let s=this.jacobianElementA,c=this.jacobianElementB;o.negate(s.spatial),i.negate(s.rotational),c.spatial.copy(o),c.rotational.copy(a);let l=this.computeGW(),u=this.computeGiMf();return-l*t-e*u}},js=new J,Ms=new J,Ns=class e{constructor(t,n,r){r=fs.defaults(r,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=e.idCounter++,this.materials=[t,n],this.friction=r.friction,this.restitution=r.restitution,this.contactEquationStiffness=r.contactEquationStiffness,this.contactEquationRelaxation=r.contactEquationRelaxation,this.frictionEquationStiffness=r.frictionEquationStiffness,this.frictionEquationRelaxation=r.frictionEquationRelaxation}};Ns.idCounter=0;var Ps=class e{constructor(t){t===void 0&&(t={});let n=``;typeof t==`string`&&(n=t,t={}),this.name=n,this.id=e.idCounter++,this.friction=t.friction===void 0?-1:t.friction,this.restitution=t.restitution===void 0?-1:t.restitution}};Ps.idCounter=0,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new Fo,new J,new J,new J,new J(1,0,0),new J(0,1,0),new J(0,0,1),new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new J;var Fs=class extends Y{constructor(e){if(super({type:Y.types.SPHERE}),this.radius=e===void 0?1:e,this.radius<0)throw Error(`The sphere radius cannot be negative.`);this.updateBoundingSphereRadius()}calculateLocalInertia(e,t){t===void 0&&(t=new J);let n=2*e*this.radius*this.radius/5;return t.x=n,t.y=n,t.z=n,t}volume(){return 4*Math.PI*this.radius**3/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(e,t,n,r){let i=this.radius,a=[`x`,`y`,`z`];for(let t=0;t<a.length;t++){let o=a[t];n[o]=e[o]-i,r[o]=e[o]+i}}};new J,new J,new J,new J,new J,new J,new J,new J,new J;var Is=class extends Xa{constructor(e,t,n,r){if(e===void 0&&(e=1),t===void 0&&(t=1),n===void 0&&(n=1),r===void 0&&(r=8),e<0)throw Error(`The cylinder radiusTop cannot be negative.`);if(t<0)throw Error(`The cylinder radiusBottom cannot be negative.`);let i=r,a=[],o=[],s=[],c=[],l=[],u=Math.cos,d=Math.sin;a.push(new J(-t*d(0),-n*.5,t*u(0))),c.push(0),a.push(new J(-e*d(0),n*.5,e*u(0))),l.push(1);for(let r=0;r<i;r++){let f=2*Math.PI/i*(r+1),p=2*Math.PI/i*(r+.5);r<i-1?(a.push(new J(-t*d(f),-n*.5,t*u(f))),c.push(2*r+2),a.push(new J(-e*d(f),n*.5,e*u(f))),l.push(2*r+3),s.push([2*r,2*r+1,2*r+3,2*r+2])):s.push([2*r,2*r+1,1,0]),(i%2==1||r<i/2)&&o.push(new J(-d(p),0,u(p)))}s.push(c),o.push(new J(0,1,0));let f=[];for(let e=0;e<l.length;e++)f.push(l[l.length-e-1]);s.push(f),super({vertices:a,faces:s,axes:o}),this.type=Y.types.CYLINDER,this.radiusTop=e,this.radiusBottom=t,this.height=n,this.numSegments=r}},Ls=class extends Y{constructor(){super({type:Y.types.PLANE}),this.worldNormal=new J,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(e){let t=this.worldNormal;t.set(0,0,1),e.vmult(t,t),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(e,t){return t===void 0&&(t=new J),t}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,t,n,r){Rs.set(0,0,1),t.vmult(Rs,Rs);let i=Number.MAX_VALUE;n.set(-i,-i,-i),r.set(i,i,i),Rs.x===1?r.x=e.x:Rs.x===-1&&(n.x=e.x),Rs.y===1?r.y=e.y:Rs.y===-1&&(n.y=e.y),Rs.z===1?r.z=e.z:Rs.z===-1&&(n.z=e.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}},Rs=new J;new J,new J,new J,new J,new J,new J,new J,new J,new J,new J,new za,new J,new za,new J,new J,new J,new J,new J,new J,new J,new za,new J,new Ja,new za;var zs=class{constructor(){this.equations=[]}solve(e,t){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let t=this.equations,n=t.indexOf(e);n!==-1&&t.splice(n,1)}removeAllEquations(){this.equations.length=0}},Bs=class extends zs{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,t){let n=0,r=this.iterations,i=this.tolerance*this.tolerance,a=this.equations,o=a.length,s=t.bodies,c=s.length,l=e,u,d,f,p,m,h;if(o!==0)for(let e=0;e!==c;e++)s[e].updateSolveMassProperties();let g=Hs,_=Us,v=Vs;g.length=o,_.length=o,v.length=o;for(let e=0;e!==o;e++){let t=a[e];v[e]=0,_[e]=t.computeB(l),g[e]=1/t.computeC()}if(o!==0){for(let e=0;e!==c;e++){let t=s[e],n=t.vlambda,r=t.wlambda;n.set(0,0,0),r.set(0,0,0)}for(n=0;n!==r;n++){p=0;for(let e=0;e!==o;e++){let t=a[e];u=_[e],d=g[e],h=v[e],m=t.computeGWlambda(),f=d*(u-m-t.eps*h),h+f<t.minForce?f=t.minForce-h:h+f>t.maxForce&&(f=t.maxForce-h),v[e]+=f,p+=f>0?f:-f,t.addToWlambda(f)}if(p*p<i)break}for(let e=0;e!==c;e++){let t=s[e],n=t.velocity,r=t.angularVelocity;t.vlambda.vmul(t.linearFactor,t.vlambda),n.vadd(t.vlambda,n),t.wlambda.vmul(t.angularFactor,t.wlambda),r.vadd(t.wlambda,r)}let e=a.length,t=1/l;for(;e--;)a[e].multiplier=v[e]*t}return n}},Vs=[],Hs=[],Us=[];X.STATIC;var Ws=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let t=0;t!==e;t++)this.objects.push(t<0||arguments.length<=t?void 0:arguments[t]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw Error(`constructObject() not implemented in this Pool subclass yet!`)}resize(e){let t=this.objects;for(;t.length>e;)t.pop();for(;t.length<e;)t.push(this.constructObject());return this}},Gs=class extends Ws{constructor(){super(...arguments),this.type=J}constructObject(){return new J}},Ks={sphereSphere:Y.types.SPHERE,spherePlane:Y.types.SPHERE|Y.types.PLANE,boxBox:Y.types.BOX|Y.types.BOX,sphereBox:Y.types.SPHERE|Y.types.BOX,planeBox:Y.types.PLANE|Y.types.BOX,convexConvex:Y.types.CONVEXPOLYHEDRON,sphereConvex:Y.types.SPHERE|Y.types.CONVEXPOLYHEDRON,planeConvex:Y.types.PLANE|Y.types.CONVEXPOLYHEDRON,boxConvex:Y.types.BOX|Y.types.CONVEXPOLYHEDRON,sphereHeightfield:Y.types.SPHERE|Y.types.HEIGHTFIELD,boxHeightfield:Y.types.BOX|Y.types.HEIGHTFIELD,convexHeightfield:Y.types.CONVEXPOLYHEDRON|Y.types.HEIGHTFIELD,sphereParticle:Y.types.PARTICLE|Y.types.SPHERE,planeParticle:Y.types.PLANE|Y.types.PARTICLE,boxParticle:Y.types.BOX|Y.types.PARTICLE,convexParticle:Y.types.PARTICLE|Y.types.CONVEXPOLYHEDRON,cylinderCylinder:Y.types.CYLINDER,sphereCylinder:Y.types.SPHERE|Y.types.CYLINDER,planeCylinder:Y.types.PLANE|Y.types.CYLINDER,boxCylinder:Y.types.BOX|Y.types.CYLINDER,convexCylinder:Y.types.CONVEXPOLYHEDRON|Y.types.CYLINDER,heightfieldCylinder:Y.types.HEIGHTFIELD|Y.types.CYLINDER,particleCylinder:Y.types.PARTICLE|Y.types.CYLINDER,sphereTrimesh:Y.types.SPHERE|Y.types.TRIMESH,planeTrimesh:Y.types.PLANE|Y.types.TRIMESH},qs=class{get[Ks.sphereSphere](){return this.sphereSphere}get[Ks.spherePlane](){return this.spherePlane}get[Ks.boxBox](){return this.boxBox}get[Ks.sphereBox](){return this.sphereBox}get[Ks.planeBox](){return this.planeBox}get[Ks.convexConvex](){return this.convexConvex}get[Ks.sphereConvex](){return this.sphereConvex}get[Ks.planeConvex](){return this.planeConvex}get[Ks.boxConvex](){return this.boxConvex}get[Ks.sphereHeightfield](){return this.sphereHeightfield}get[Ks.boxHeightfield](){return this.boxHeightfield}get[Ks.convexHeightfield](){return this.convexHeightfield}get[Ks.sphereParticle](){return this.sphereParticle}get[Ks.planeParticle](){return this.planeParticle}get[Ks.boxParticle](){return this.boxParticle}get[Ks.convexParticle](){return this.convexParticle}get[Ks.cylinderCylinder](){return this.convexConvex}get[Ks.sphereCylinder](){return this.sphereConvex}get[Ks.planeCylinder](){return this.planeConvex}get[Ks.boxCylinder](){return this.boxConvex}get[Ks.convexCylinder](){return this.convexConvex}get[Ks.heightfieldCylinder](){return this.heightfieldCylinder}get[Ks.particleCylinder](){return this.particleCylinder}get[Ks.sphereTrimesh](){return this.sphereTrimesh}get[Ks.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Gs,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,t,n,r,i,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=t):o=new xs(e,t),o.enabled=e.collisionResponse&&t.collisionResponse&&n.collisionResponse&&r.collisionResponse;let s=this.currentContactMaterial;o.restitution=s.restitution,o.setSpookParams(s.contactEquationStiffness,s.contactEquationRelaxation,this.world.dt);let c=n.material||e.material,l=r.material||t.material;return c&&l&&c.restitution>=0&&l.restitution>=0&&(o.restitution=c.restitution*l.restitution),o.si=i||n,o.sj=a||r,o}createFrictionEquationsFromContact(e,t){let n=e.bi,r=e.bj,i=e.si,a=e.sj,o=this.world,s=this.currentContactMaterial,c=s.friction,l=i.material||n.material,u=a.material||r.material;if(l&&u&&l.friction>=0&&u.friction>=0&&(c=l.friction*u.friction),c>0){let i=c*(o.frictionGravity||o.gravity).length(),a=n.invMass+r.invMass;a>0&&(a=1/a);let l=this.frictionEquationPool,u=l.length?l.pop():new As(n,r,i*a),d=l.length?l.pop():new As(n,r,i*a);return u.bi=d.bi=n,u.bj=d.bj=r,u.minForce=d.minForce=-i*a,u.maxForce=d.maxForce=i*a,u.ri.copy(e.ri),u.rj.copy(e.rj),d.ri.copy(e.ri),d.rj.copy(e.rj),e.ni.tangents(u.t,d.t),u.setSpookParams(s.frictionEquationStiffness,s.frictionEquationRelaxation,o.dt),d.setSpookParams(s.frictionEquationStiffness,s.frictionEquationRelaxation,o.dt),u.enabled=d.enabled=e.enabled,t.push(u,d),!0}return!1}createFrictionFromAverage(e){let t=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(t,this.frictionResult)||e===1)return;let n=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Js.setZero(),Ys.setZero(),Xs.setZero();let i=t.bi;t.bj;for(let n=0;n!==e;n++)t=this.result[this.result.length-1-n],t.bi===i?(Js.vsub(t.ni,Js),Ys.vadd(t.rj,Ys),Xs.vadd(t.ri,Xs)):(Js.vadd(t.ni,Js),Ys.vadd(t.ri,Ys),Xs.vadd(t.rj,Xs));let a=1/e;Ys.scale(a,n.ri),Xs.scale(a,n.rj),r.ri.copy(n.ri),r.rj.copy(n.rj),Js.normalize(),Js.tangents(n.t,r.t)}getContacts(e,t,n,r,i,a,o){this.contactPointPool=i,this.frictionEquationPool=o,this.result=r,this.frictionResult=a;let s=$s,c=ec,l=Zs,u=Qs;for(let r=0,i=e.length;r!==i;r++){let i=e[r],a=t[r],o=null;i.material&&a.material&&(o=n.getContactMaterial(i.material,a.material)||null);let d=i.type&X.KINEMATIC&&a.type&X.STATIC||i.type&X.STATIC&&a.type&X.KINEMATIC||i.type&X.KINEMATIC&&a.type&X.KINEMATIC;for(let e=0;e<i.shapes.length;e++){i.quaternion.mult(i.shapeOrientations[e],s),i.quaternion.vmult(i.shapeOffsets[e],l),l.vadd(i.position,l);let t=i.shapes[e];for(let e=0;e<a.shapes.length;e++){a.quaternion.mult(a.shapeOrientations[e],c),a.quaternion.vmult(a.shapeOffsets[e],u),u.vadd(a.position,u);let r=a.shapes[e];if(!(t.collisionFilterMask&r.collisionFilterGroup&&r.collisionFilterMask&t.collisionFilterGroup)||l.distanceTo(u)>t.boundingSphereRadius+r.boundingSphereRadius)continue;let f=null;t.material&&r.material&&(f=n.getContactMaterial(t.material,r.material)||null),this.currentContactMaterial=f||o||n.defaultContactMaterial;let p=t.type|r.type,m=this[p];if(m){let e=!1;e=t.type<r.type?m.call(this,t,r,l,u,s,c,i,a,t,r,d):m.call(this,r,t,u,l,c,s,a,i,t,r,d),e&&d&&(n.shapeOverlapKeeper.set(t.id,r.id),n.bodyOverlapKeeper.set(i.id,a.id))}}}}}sphereSphere(e,t,n,r,i,a,o,s,c,l,u){if(u)return n.distanceSquared(r)<(e.radius+t.radius)**2;let d=this.createContactEquation(o,s,e,t,c,l);r.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(e.radius,d.ri),d.rj.scale(-t.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(o.position,d.ri),d.rj.vadd(r,d.rj),d.rj.vsub(s.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(e,t,n,r,i,a,o,s,c,l,u){let d=this.createContactEquation(o,s,e,t,c,l);if(d.ni.set(0,0,1),a.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(e.radius,d.ri),n.vsub(r,yc),d.ni.scale(d.ni.dot(yc),bc),yc.vsub(bc,d.rj),-yc.dot(d.ni)<=e.radius){if(u)return!0;let e=d.ri,t=d.rj;e.vadd(n,e),e.vsub(o.position,e),t.vadd(r,t),t.vsub(s.position,t),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(e,t,n,r,i,a,o,s,c,l,u){return e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t.convexPolyhedronRepresentation,n,r,i,a,o,s,e,t,u)}sphereBox(e,t,n,r,i,a,o,s,c,l,u){let d=this.v3pool,f=kc;n.vsub(r,Tc),t.getSideNormals(f,a);let p=e.radius,m=!1,h=jc,g=Mc,_=Nc,v=null,y=0,b=0,x=0,S=null;for(let e=0,t=f.length;e!==t&&m===!1;e++){let t=Ec;t.copy(f[e]);let n=t.length();t.normalize();let r=Tc.dot(t);if(r<n+p&&r>0){let i=Dc,a=Oc;i.copy(f[(e+1)%3]),a.copy(f[(e+2)%3]);let o=i.length(),s=a.length();i.normalize(),a.normalize();let c=Tc.dot(i),l=Tc.dot(a);if(c<o&&c>-o&&l<s&&l>-s){let e=Math.abs(r-n-p);if((S===null||e<S)&&(S=e,b=c,x=l,v=n,h.copy(t),g.copy(i),_.copy(a),y++,u))return!0}}}if(y){m=!0;let i=this.createContactEquation(o,s,e,t,c,l);h.scale(-p,i.ri),i.ni.copy(h),i.ni.negate(i.ni),h.scale(v,h),g.scale(b,g),h.vadd(g,h),_.scale(x,_),h.vadd(_,i.rj),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),i.rj.vadd(r,i.rj),i.rj.vsub(s.position,i.rj),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}let C=d.get(),w=Ac;for(let i=0;i!==2&&!m;i++)for(let a=0;a!==2&&!m;a++)for(let d=0;d!==2&&!m;d++)if(C.set(0,0,0),i?C.vadd(f[0],C):C.vsub(f[0],C),a?C.vadd(f[1],C):C.vsub(f[1],C),d?C.vadd(f[2],C):C.vsub(f[2],C),r.vadd(C,w),w.vsub(n,w),w.lengthSquared()<p*p){if(u)return!0;m=!0;let i=this.createContactEquation(o,s,e,t,c,l);i.ri.copy(w),i.ri.normalize(),i.ni.copy(i.ri),i.ri.scale(p,i.ri),i.rj.copy(C),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),i.rj.vadd(r,i.rj),i.rj.vsub(s.position,i.rj),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}d.release(C),C=null;let T=d.get(),E=d.get(),D=d.get(),O=d.get(),k=d.get(),ee=f.length;for(let i=0;i!==ee&&!m;i++)for(let a=0;a!==ee&&!m;a++)if(i%3!=a%3){f[a].cross(f[i],T),T.normalize(),f[i].vadd(f[a],E),D.copy(n),D.vsub(E,D),D.vsub(r,D);let d=D.dot(T);T.scale(d,O);let h=0;for(;h===i%3||h===a%3;)h++;k.copy(n),k.vsub(O,k),k.vsub(E,k),k.vsub(r,k);let g=Math.abs(d),_=k.length();if(g<f[h].length()&&_<p){if(u)return!0;m=!0;let i=this.createContactEquation(o,s,e,t,c,l);E.vadd(O,i.rj),i.rj.copy(i.rj),k.negate(i.ni),i.ni.normalize(),i.ri.copy(i.rj),i.ri.vadd(r,i.ri),i.ri.vsub(n,i.ri),i.ri.normalize(),i.ri.scale(p,i.ri),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),i.rj.vadd(r,i.rj),i.rj.vsub(s.position,i.rj),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}}d.release(T,E,D,O,k)}planeBox(e,t,n,r,i,a,o,s,c,l,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,t.convexPolyhedronRepresentation.id=t.id,this.planeConvex(e,t.convexPolyhedronRepresentation,n,r,i,a,o,s,e,t,u)}convexConvex(e,t,n,r,i,a,o,s,c,l,u,d,f){let p=Jc;if(!(n.distanceTo(r)>e.boundingSphereRadius+t.boundingSphereRadius)&&e.findSeparatingAxis(t,n,i,r,a,p,d,f)){let d=[],f=Yc;e.clipAgainstHull(n,i,t,r,a,p,-100,100,d);let m=0;for(let i=0;i!==d.length;i++){if(u)return!0;let a=this.createContactEquation(o,s,e,t,c,l),h=a.ri,g=a.rj;p.negate(a.ni),d[i].normal.negate(f),f.scale(d[i].depth,f),d[i].point.vadd(f,h),g.copy(d[i].point),h.vsub(n,h),g.vsub(r,g),h.vadd(n,h),h.vsub(o.position,h),g.vadd(r,g),g.vsub(s.position,g),this.result.push(a),m++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(a,this.frictionResult)}this.enableFrictionReduction&&m&&this.createFrictionFromAverage(m)}}sphereConvex(e,t,n,r,i,a,o,s,c,l,u){let d=this.v3pool;n.vsub(r,Pc);let f=t.faceNormals,p=t.faces,m=t.vertices,h=e.radius,g=!1;for(let i=0;i!==m.length;i++){let d=m[i],f=Rc;a.vmult(d,f),r.vadd(f,f);let p=Lc;if(f.vsub(n,p),p.lengthSquared()<h*h){if(u)return!0;g=!0;let i=this.createContactEquation(o,s,e,t,c,l);i.ri.copy(p),i.ri.normalize(),i.ni.copy(i.ri),i.ri.scale(h,i.ri),f.vsub(r,i.rj),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),i.rj.vadd(r,i.rj),i.rj.vsub(s.position,i.rj),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult);return}}for(let i=0,_=p.length;i!==_&&g===!1;i++){let _=f[i],v=p[i],y=zc;a.vmult(_,y);let b=Bc;a.vmult(m[v[0]],b),b.vadd(r,b);let x=Vc;y.scale(-h,x),n.vadd(x,x);let S=Hc;x.vsub(b,S);let C=S.dot(y),w=Uc;if(n.vsub(b,w),C<0&&w.dot(y)>0){let i=[];for(let e=0,t=v.length;e!==t;e++){let t=d.get();a.vmult(m[v[e]],t),r.vadd(t,t),i.push(t)}if(wc(i,y,n)){if(u)return!0;g=!0;let a=this.createContactEquation(o,s,e,t,c,l);y.scale(-h,a.ri),y.negate(a.ni);let f=d.get();y.scale(-C,f);let p=d.get();y.scale(-h,p),n.vsub(r,a.rj),a.rj.vadd(p,a.rj),a.rj.vadd(f,a.rj),a.rj.vadd(r,a.rj),a.rj.vsub(s.position,a.rj),a.ri.vadd(n,a.ri),a.ri.vsub(o.position,a.ri),d.release(f),d.release(p),this.result.push(a),this.createFrictionEquationsFromContact(a,this.frictionResult);for(let e=0,t=i.length;e!==t;e++)d.release(i[e]);return}for(let f=0;f!==v.length;f++){let p=d.get(),g=d.get();a.vmult(m[v[(f+1)%v.length]],p),a.vmult(m[v[(f+2)%v.length]],g),r.vadd(p,p),r.vadd(g,g);let _=Fc;g.vsub(p,_);let y=Ic;_.unit(y);let b=d.get(),x=d.get();n.vsub(p,x);let S=x.dot(y);y.scale(S,b),b.vadd(p,b);let C=d.get();if(b.vsub(n,C),S>0&&S*S<_.lengthSquared()&&C.lengthSquared()<h*h){if(u)return!0;let a=this.createContactEquation(o,s,e,t,c,l);b.vsub(r,a.rj),b.vsub(n,a.ni),a.ni.normalize(),a.ni.scale(h,a.ri),a.rj.vadd(r,a.rj),a.rj.vsub(s.position,a.rj),a.ri.vadd(n,a.ri),a.ri.vsub(o.position,a.ri),this.result.push(a),this.createFrictionEquationsFromContact(a,this.frictionResult);for(let e=0,t=i.length;e!==t;e++)d.release(i[e]);d.release(p),d.release(g),d.release(b),d.release(C),d.release(x);return}d.release(p),d.release(g),d.release(b),d.release(C),d.release(x)}for(let e=0,t=i.length;e!==t;e++)d.release(i[e])}}}planeConvex(e,t,n,r,i,a,o,s,c,l,u){let d=Wc,f=Gc;f.set(0,0,1),i.vmult(f,f);let p=0,m=Kc;for(let i=0;i!==t.vertices.length;i++)if(d.copy(t.vertices[i]),a.vmult(d,d),r.vadd(d,d),d.vsub(n,m),f.dot(m)<=0){if(u)return!0;let i=this.createContactEquation(o,s,e,t,c,l),a=qc;f.scale(f.dot(m),a),d.vsub(a,a),a.vsub(n,i.ri),i.ni.copy(f),d.vsub(r,i.rj),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),i.rj.vadd(r,i.rj),i.rj.vsub(s.position,i.rj),this.result.push(i),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(i,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}boxConvex(e,t,n,r,i,a,o,s,c,l,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,t,n,r,i,a,o,s,e,t,u)}sphereHeightfield(e,t,n,r,i,a,o,s,c,l,u){let d=t.data,f=e.radius,p=t.elementSize,m=ll,h=cl;Ja.pointToLocalFrame(r,a,n,h);let g=Math.floor((h.x-f)/p)-1,_=Math.ceil((h.x+f)/p)+1,v=Math.floor((h.y-f)/p)-1,y=Math.ceil((h.y+f)/p)+1;if(_<0||y<0||g>d.length||v>d[0].length)return;g<0&&(g=0),_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),g>=d.length&&(g=d.length-1),_>=d.length&&(_=d.length-1),y>=d[0].length&&(y=d[0].length-1),v>=d[0].length&&(v=d[0].length-1);let b=[];t.getRectMinMax(g,v,_,y,b);let x=b[0],S=b[1];if(h.z-f>S||h.z+f<x)return;let C=this.result;for(let c=g;c<_;c++)for(let l=v;l<y;l++){let d=C.length,f=!1;if(t.getConvexTrianglePillar(c,l,!1),Ja.pointToWorldFrame(r,a,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(f=this.sphereConvex(e,t.pillarConvex,n,m,i,a,o,s,e,t,u)),u&&f||(t.getConvexTrianglePillar(c,l,!0),Ja.pointToWorldFrame(r,a,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(f=this.sphereConvex(e,t.pillarConvex,n,m,i,a,o,s,e,t,u)),u&&f))return!0;if(C.length-d>2)return}}boxHeightfield(e,t,n,r,i,a,o,s,c,l,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,t,n,r,i,a,o,s,e,t,u)}convexHeightfield(e,t,n,r,i,a,o,s,c,l,u){let d=t.data,f=t.elementSize,p=e.boundingSphereRadius,m=ol,h=sl,g=al;Ja.pointToLocalFrame(r,a,n,g);let _=Math.floor((g.x-p)/f)-1,v=Math.ceil((g.x+p)/f)+1,y=Math.floor((g.y-p)/f)-1,b=Math.ceil((g.y+p)/f)+1;if(v<0||b<0||_>d.length||y>d[0].length)return;_<0&&(_=0),v<0&&(v=0),y<0&&(y=0),b<0&&(b=0),_>=d.length&&(_=d.length-1),v>=d.length&&(v=d.length-1),b>=d[0].length&&(b=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);let x=[];t.getRectMinMax(_,y,v,b,x);let S=x[0],C=x[1];if(!(g.z-p>C||g.z+p<S))for(let c=_;c<v;c++)for(let l=y;l<b;l++){let d=!1;if(t.getConvexTrianglePillar(c,l,!1),Ja.pointToWorldFrame(r,a,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(d=this.convexConvex(e,t.pillarConvex,n,m,i,a,o,s,null,null,u,h,null)),u&&d||(t.getConvexTrianglePillar(c,l,!0),Ja.pointToWorldFrame(r,a,t.pillarOffset,m),n.distanceTo(m)<t.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(d=this.convexConvex(e,t.pillarConvex,n,m,i,a,o,s,null,null,u,h,null)),u&&d))return!0}}sphereParticle(e,t,n,r,i,a,o,s,c,l,u){let d=$c;if(d.set(0,0,1),r.vsub(n,d),d.lengthSquared()<=e.radius*e.radius){if(u)return!0;let n=this.createContactEquation(s,o,t,e,c,l);d.normalize(),n.rj.copy(d),n.rj.scale(e.radius,n.rj),n.ni.copy(d),n.ni.negate(n.ni),n.ri.set(0,0,0),this.result.push(n),this.createFrictionEquationsFromContact(n,this.frictionResult)}}planeParticle(e,t,n,r,i,a,o,s,c,l,u){let d=Xc;d.set(0,0,1),o.quaternion.vmult(d,d);let f=Zc;if(r.vsub(o.position,f),d.dot(f)<=0){if(u)return!0;let n=this.createContactEquation(s,o,t,e,c,l);n.ni.copy(d),n.ni.negate(n.ni),n.ri.set(0,0,0);let i=Qc;d.scale(d.dot(r),i),r.vsub(i,i),n.rj.copy(i),this.result.push(n),this.createFrictionEquationsFromContact(n,this.frictionResult)}}boxParticle(e,t,n,r,i,a,o,s,c,l,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,t,n,r,i,a,o,s,e,t,u)}convexParticle(e,t,n,r,i,a,o,s,c,l,u){let d=-1,f=nl,p=il,m=null,h=tl;if(h.copy(r),h.vsub(n,h),i.conjugate(el),el.vmult(h,h),e.pointIsInside(h)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(n,i),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(i);for(let t=0,n=e.faces.length;t!==n;t++){let n=[e.worldVertices[e.faces[t][0]]],i=e.worldFaceNormals[t];r.vsub(n[0],rl);let a=-i.dot(rl);if(m===null||Math.abs(a)<Math.abs(m)){if(u)return!0;m=a,d=t,f.copy(i)}}if(d!==-1){let i=this.createContactEquation(s,o,t,e,c,l);f.scale(m,p),p.vadd(r,p),p.vsub(n,p),i.rj.copy(p),f.negate(i.ni),i.ri.set(0,0,0);let a=i.ri,u=i.rj;a.vadd(r,a),a.vsub(s.position,a),u.vadd(n,u),u.vsub(o.position,u),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}else console.warn(`Point found inside convex, but did not find penetrating face!`)}}heightfieldCylinder(e,t,n,r,i,a,o,s,c,l,u){return this.convexHeightfield(t,e,r,n,a,i,s,o,c,l,u)}particleCylinder(e,t,n,r,i,a,o,s,c,l,u){return this.convexParticle(t,e,r,n,a,i,s,o,c,l,u)}sphereTrimesh(e,t,n,r,i,a,o,s,c,l,u){let d=cc,f=lc,p=uc,m=dc,h=fc,g=pc,_=_c,v=sc,y=ac,b=vc;Ja.pointToLocalFrame(r,a,n,h);let x=e.radius;_.lowerBound.set(h.x-x,h.y-x,h.z-x),_.upperBound.set(h.x+x,h.y+x,h.z+x),t.getTrianglesInAABB(_,b);let S=oc,C=e.radius*e.radius;for(let i=0;i<b.length;i++)for(let d=0;d<3;d++)if(t.getVertex(t.indices[b[i]*3+d],S),S.vsub(h,y),y.lengthSquared()<=C){if(v.copy(S),Ja.pointToWorldFrame(r,a,v,S),S.vsub(n,y),u)return!0;let i=this.createContactEquation(o,s,e,t,c,l);i.ni.copy(y),i.ni.normalize(),i.ri.copy(i.ni),i.ri.scale(e.radius,i.ri),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),i.rj.copy(S),i.rj.vsub(s.position,i.rj),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}for(let i=0;i<b.length;i++)for(let _=0;_<3;_++){t.getVertex(t.indices[b[i]*3+_],d),t.getVertex(t.indices[b[i]*3+(_+1)%3],f),f.vsub(d,p),h.vsub(f,g);let v=g.dot(p);h.vsub(d,g);let y=g.dot(p);if(y>0&&v<0&&(h.vsub(d,g),m.copy(p),m.normalize(),y=g.dot(m),m.scale(y,g),g.vadd(d,g),g.distanceTo(h)<e.radius)){if(u)return!0;let i=this.createContactEquation(o,s,e,t,c,l);g.vsub(h,i.ni),i.ni.normalize(),i.ni.scale(e.radius,i.ri),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),Ja.pointToWorldFrame(r,a,g,g),g.vsub(s.position,i.rj),Ja.vectorToWorldFrame(a,i.ni,i.ni),Ja.vectorToWorldFrame(a,i.ri,i.ri),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}}let w=mc,T=hc,E=gc,D=ic;for(let i=0,d=b.length;i!==d;i++){t.getTriangleVertices(b[i],w,T,E),t.getNormal(b[i],D),h.vsub(w,g);let d=g.dot(D);if(D.scale(d,g),h.vsub(g,g),d=g.distanceTo(h),Fo.pointInTriangle(g,w,T,E)&&d<e.radius){if(u)return!0;let i=this.createContactEquation(o,s,e,t,c,l);g.vsub(h,i.ni),i.ni.normalize(),i.ni.scale(e.radius,i.ri),i.ri.vadd(n,i.ri),i.ri.vsub(o.position,i.ri),Ja.pointToWorldFrame(r,a,g,g),g.vsub(s.position,i.rj),Ja.vectorToWorldFrame(a,i.ni,i.ni),Ja.vectorToWorldFrame(a,i.ri,i.ri),this.result.push(i),this.createFrictionEquationsFromContact(i,this.frictionResult)}}b.length=0}planeTrimesh(e,t,n,r,i,a,o,s,c,l,u){let d=new J,f=tc;f.set(0,0,1),i.vmult(f,f);for(let i=0;i<t.vertices.length/3;i++){t.getVertex(i,d);let p=new J;p.copy(d),Ja.pointToWorldFrame(r,a,p,d);let m=nc;if(d.vsub(n,m),f.dot(m)<=0){if(u)return!0;let n=this.createContactEquation(o,s,e,t,c,l);n.ni.copy(f);let r=rc;f.scale(m.dot(f),r),d.vsub(r,r),n.ri.copy(r),n.ri.vsub(o.position,n.ri),n.rj.copy(d),n.rj.vsub(s.position,n.rj),this.result.push(n),this.createFrictionEquationsFromContact(n,this.frictionResult)}}}},Js=new J,Ys=new J,Xs=new J,Zs=new J,Qs=new J,$s=new Wa,ec=new Wa,tc=new J,nc=new J,rc=new J,ic=new J,ac=new J;new J;var oc=new J,sc=new J,cc=new J,lc=new J,uc=new J,dc=new J,fc=new J,pc=new J,mc=new J,hc=new J,gc=new J,_c=new za,vc=[],yc=new J,bc=new J,xc=new J,Sc=new J,Cc=new J;function wc(e,t,n){let r=null,i=e.length;for(let a=0;a!==i;a++){let o=e[a],s=xc;e[(a+1)%i].vsub(o,s);let c=Sc;s.cross(t,c);let l=Cc;n.vsub(o,l);let u=c.dot(l);if(r===null||u>0&&r===!0||u<=0&&r===!1){r===null&&(r=u>0);continue}return!1}return!0}var Tc=new J,Ec=new J,Dc=new J,Oc=new J,kc=[new J,new J,new J,new J,new J,new J],Ac=new J,jc=new J,Mc=new J,Nc=new J,Pc=new J,Fc=new J,Ic=new J,Lc=new J,Rc=new J,zc=new J,Bc=new J,Vc=new J,Hc=new J,Uc=new J;new J,new J;var Wc=new J,Gc=new J,Kc=new J,qc=new J,Jc=new J,Yc=new J,Xc=new J,Zc=new J,Qc=new J,$c=new J,el=new Wa,tl=new J;new J;var nl=new J,rl=new J,il=new J,al=new J,ol=new J,sl=[0],cl=new J,ll=new J,ul=class{constructor(){this.current=[],this.previous=[]}getKey(e,t){if(t<e){let n=t;t=e,e=n}return e<<16|t}set(e,t){let n=this.getKey(e,t),r=this.current,i=0;for(;n>r[i];)i++;if(n!==r[i]){for(let e=r.length-1;e>=i;e--)r[e+1]=r[e];r[i]=n}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,t){let n=this.current,r=this.previous,i=n.length,a=r.length,o=0;for(let t=0;t<i;t++){let i=!1,a=n[t];for(;a>r[o];)o++;i=a===r[o],i||dl(e,a)}o=0;for(let e=0;e<a;e++){let i=!1,a=r[e];for(;a>n[o];)o++;i=n[o]===a,i||dl(t,a)}}};function dl(e,t){e.push((t&4294901760)>>16,t&65535)}var fl=(e,t)=>e<t?`${e}-${t}`:`${t}-${e}`,pl=class{constructor(){this.data={keys:[]}}get(e,t){let n=fl(e,t);return this.data[n]}set(e,t,n){let r=fl(e,t);this.get(e,t)||this.data.keys.push(r),this.data[r]=n}delete(e,t){let n=fl(e,t),r=this.data.keys.indexOf(n);r!==-1&&this.data.keys.splice(r,1),delete this.data[n]}reset(){let e=this.data,t=e.keys;for(;t.length>0;){let n=t.pop();delete e[n]}}},ml=class extends Ua{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip===void 0?0:e.quatNormalizeSkip,this.quatNormalizeFast=e.quatNormalizeFast!==void 0&&e.quatNormalizeFast,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new J,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new J,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase===void 0?new To:e.broadphase,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver===void 0?new Bs:e.solver,this.constraints=[],this.narrowphase=new qs(this),this.collisionMatrix=new Ha,this.collisionMatrixPrevious=new Ha,this.bodyOverlapKeeper=new ul,this.shapeOverlapKeeper=new ul,this.contactmaterials=[],this.contactMaterialTable=new pl,this.defaultMaterial=new Ps(`default`),this.defaultContactMaterial=new Ns(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:`addBody`,body:null},this.removeBodyEvent={type:`removeBody`,body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,t){return this.contactMaterialTable.get(e.id,t.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let t=this.constraints.indexOf(e);t!==-1&&this.constraints.splice(t,1)}rayTest(e,t,n){n instanceof Eo?this.raycastClosest(e,t,{skipBackfaces:!0},n):this.raycastAll(e,t,{skipBackfaces:!0},n)}raycastAll(e,t,n,r){return n===void 0&&(n={}),n.mode=Fo.ALL,n.from=e,n.to=t,n.callback=r,hl.intersectWorld(this,n)}raycastAny(e,t,n,r){return n===void 0&&(n={}),n.mode=Fo.ANY,n.from=e,n.to=t,n.result=r,hl.intersectWorld(this,n)}raycastClosest(e,t,n,r){return n===void 0&&(n={}),n.mode=Fo.CLOSEST,n.from=e,n.to=t,n.result=r,hl.intersectWorld(this,n)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof X&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let t=this.bodies.length-1,n=this.bodies,r=n.indexOf(e);if(r!==-1){n.splice(r,1);for(let e=0;e!==n.length;e++)n[e].index=e;this.collisionMatrix.setNumObjects(t),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let t=this.bodies;for(let n=0;n<t.length;n++){let r=t[n].shapes;for(let t=0;t<r.length;t++){let n=r[t];if(n.id===e)return n}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let t=this.contactmaterials.indexOf(e);t!==-1&&(this.contactmaterials.splice(t,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,t){e===void 0&&(e=1/60),t===void 0&&(t=10);let n=gl.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,t);else{let r=n-this.lastCallTime;this.step(e,r,t)}this.lastCallTime=n}step(e,t,n){if(n===void 0&&(n=10),t===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=t;let r=gl.now(),i=0;for(;this.accumulator>=e&&i<n&&(this.internalStep(e),this.accumulator-=e,i++,!(gl.now()-r>e*1e3)););this.accumulator%=e;let a=this.accumulator/e;for(let e=0;e!==this.bodies.length;e++){let t=this.bodies[e];t.previousPosition.lerp(t.position,a,t.interpolatedPosition),t.previousQuaternion.slerp(t.quaternion,a,t.interpolatedQuaternion),t.previousQuaternion.normalize()}this.time+=t}}internalStep(e){this.dt=e;let t=this.contacts,n=Sl,r=Cl,i=this.bodies.length,a=this.bodies,o=this.solver,s=this.gravity,c=this.doProfiling,l=this.profile,u=X.DYNAMIC,d=-1/0,f=this.constraints,p=xl;s.length();let m=s.x,h=s.y,g=s.z,_=0;for(c&&(d=gl.now()),_=0;_!==i;_++){let e=a[_];if(e.type===u){let t=e.force,n=e.mass;t.x+=n*m,t.y+=n*h,t.z+=n*g}}for(let e=0,t=this.subsystems.length;e!==t;e++)this.subsystems[e].update();c&&(d=gl.now()),n.length=0,r.length=0,this.broadphase.collisionPairs(this,n,r),c&&(l.broadphase=gl.now()-d);let v=f.length;for(_=0;_!==v;_++){let e=f[_];if(!e.collideConnected)for(let t=n.length-1;t>=0;--t)(e.bodyA===n[t]&&e.bodyB===r[t]||e.bodyB===n[t]&&e.bodyA===r[t])&&(n.splice(t,1),r.splice(t,1))}this.collisionMatrixTick(),c&&(d=gl.now());let y=bl,b=t.length;for(_=0;_!==b;_++)y.push(t[_]);t.length=0;let x=this.frictionEquations.length;for(_=0;_!==x;_++)p.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,r,this,t,y,this.frictionEquations,p),c&&(l.narrowphase=gl.now()-d),c&&(d=gl.now()),_=0;_<this.frictionEquations.length;_++)o.addEquation(this.frictionEquations[_]);let S=t.length;for(let e=0;e!==S;e++){let n=t[e],r=n.bi,i=n.bj,a=n.si,s=n.sj,c;c=r.material&&i.material&&this.getContactMaterial(r.material,i.material)||this.defaultContactMaterial,c.friction,r.material&&i.material&&(r.material.friction>=0&&i.material.friction>=0&&r.material.friction*i.material.friction,r.material.restitution>=0&&i.material.restitution>=0&&(n.restitution=r.material.restitution*i.material.restitution)),o.addEquation(n),r.allowSleep&&r.type===X.DYNAMIC&&r.sleepState===X.SLEEPING&&i.sleepState===X.AWAKE&&i.type!==X.STATIC&&i.velocity.lengthSquared()+i.angularVelocity.lengthSquared()>=i.sleepSpeedLimit**2*2&&(r.wakeUpAfterNarrowphase=!0),i.allowSleep&&i.type===X.DYNAMIC&&i.sleepState===X.SLEEPING&&r.sleepState===X.AWAKE&&r.type!==X.STATIC&&r.velocity.lengthSquared()+r.angularVelocity.lengthSquared()>=r.sleepSpeedLimit**2*2&&(i.wakeUpAfterNarrowphase=!0),this.collisionMatrix.set(r,i,!0),this.collisionMatrixPrevious.get(r,i)||(yl.body=i,yl.contact=n,r.dispatchEvent(yl),yl.body=r,i.dispatchEvent(yl)),this.bodyOverlapKeeper.set(r.id,i.id),this.shapeOverlapKeeper.set(a.id,s.id)}for(this.emitContactEvents(),c&&(l.makeContactConstraints=gl.now()-d,d=gl.now()),_=0;_!==i;_++){let e=a[_];e.wakeUpAfterNarrowphase&&(e.wakeUp(),e.wakeUpAfterNarrowphase=!1)}for(v=f.length,_=0;_!==v;_++){let e=f[_];e.update();for(let t=0,n=e.equations.length;t!==n;t++){let n=e.equations[t];o.addEquation(n)}}o.solve(e,this),c&&(l.solve=gl.now()-d),o.removeAllEquations();let C=Math.pow;for(_=0;_!==i;_++){let t=a[_];if(t.type&u){let n=C(1-t.linearDamping,e),r=t.velocity;r.scale(n,r);let i=t.angularVelocity;if(i){let n=C(1-t.angularDamping,e);i.scale(n,i)}}}this.dispatchEvent(vl),c&&(d=gl.now());let w=this.stepnumber%(this.quatNormalizeSkip+1)===0,T=this.quatNormalizeFast;for(_=0;_!==i;_++)a[_].integrate(e,w,T);this.clearForces(),this.broadphase.dirty=!0,c&&(l.integrate=gl.now()-d),this.stepnumber+=1,this.dispatchEvent(_l);let E=!0;if(this.allowSleep)for(E=!1,_=0;_!==i;_++){let e=a[_];e.sleepTick(this.time),e.sleepState!==X.SLEEPING&&(E=!0)}this.hasActiveBodies=E}emitContactEvents(){let e=this.hasAnyEventListener(`beginContact`),t=this.hasAnyEventListener(`endContact`);if((e||t)&&this.bodyOverlapKeeper.getDiff(wl,Tl),e){for(let e=0,t=wl.length;e<t;e+=2)El.bodyA=this.getBodyById(wl[e]),El.bodyB=this.getBodyById(wl[e+1]),this.dispatchEvent(El);El.bodyA=El.bodyB=null}if(t){for(let e=0,t=Tl.length;e<t;e+=2)Dl.bodyA=this.getBodyById(Tl[e]),Dl.bodyB=this.getBodyById(Tl[e+1]),this.dispatchEvent(Dl);Dl.bodyA=Dl.bodyB=null}wl.length=Tl.length=0;let n=this.hasAnyEventListener(`beginShapeContact`),r=this.hasAnyEventListener(`endShapeContact`);if((n||r)&&this.shapeOverlapKeeper.getDiff(wl,Tl),n){for(let e=0,t=wl.length;e<t;e+=2){let t=this.getShapeById(wl[e]),n=this.getShapeById(wl[e+1]);Ol.shapeA=t,Ol.shapeB=n,t&&(Ol.bodyA=t.body),n&&(Ol.bodyB=n.body),this.dispatchEvent(Ol)}Ol.bodyA=Ol.bodyB=Ol.shapeA=Ol.shapeB=null}if(r){for(let e=0,t=Tl.length;e<t;e+=2){let t=this.getShapeById(Tl[e]),n=this.getShapeById(Tl[e+1]);kl.shapeA=t,kl.shapeB=n,t&&(kl.bodyA=t.body),n&&(kl.bodyB=n.body),this.dispatchEvent(kl)}kl.bodyA=kl.bodyB=kl.shapeA=kl.shapeB=null}}clearForces(){let e=this.bodies,t=e.length;for(let n=0;n!==t;n++){let t=e[n];t.force,t.torque,t.force.set(0,0,0),t.torque.set(0,0,0)}}};new za;var hl=new Fo,gl=globalThis.performance||{};if(!gl.now){let e=Date.now();gl.timing&&gl.timing.navigationStart&&(e=gl.timing.navigationStart),gl.now=()=>Date.now()-e}new J;var _l={type:`postStep`},vl={type:`preStep`},yl={type:X.COLLIDE_EVENT_NAME,body:null,contact:null},bl=[],xl=[],Sl=[],Cl=[],wl=[],Tl=[],El={type:`beginContact`,bodyA:null,bodyB:null},Dl={type:`endContact`,bodyA:null,bodyB:null},Ol={type:`beginShapeContact`,bodyA:null,bodyB:null,shapeA:null,shapeB:null},kl={type:`endShapeContact`,bodyA:null,bodyB:null,shapeA:null,shapeB:null},Al={skyTop:new I(`#3f97e0`),skyHorizon:new I(`#ffe2b8`),sun:new I(`#fff0d4`),sunI:2.6,hemiSky:new I(`#cbe6ff`),hemiGround:new I(`#6d8a3f`),hemiI:1.25,fog:new I(`#d9ecf2`)},jl={skyTop:new I(`#030818`),skyHorizon:new I(`#1b2c5c`),sun:new I(`#9db4ff`),sunI:.7,hemiSky:new I(`#3d5191`),hemiGround:new I(`#141a2a`),hemiI:.95,fog:new I(`#0c1630`)},Ml=class{constructor(e){m(this,`renderer`,void 0),m(this,`scene`,new Ee),m(this,`camera`,void 0),m(this,`sun`,void 0),m(this,`hemi`,void 0),m(this,`sky`,void 0),m(this,`skyUniforms`,void 0),m(this,`quality`,void 0),m(this,`isTouch`,void 0),m(this,`night`,0),m(this,`nightTarget`,0),m(this,`target`,new T(0,0,0)),m(this,`yaw`,0),m(this,`yawTarget`,0),m(this,`pitch`,.64),m(this,`dist`,31),m(this,`distTarget`,31),m(this,`shake`,0),m(this,`reducedMotion`,matchMedia(`(prefers-reduced-motion: reduce)`).matches),m(this,`sunOffset`,new T(-26,44,20)),m(this,`tmp`,new T),m(this,`fpsAcc`,0),m(this,`fpsFrames`,0),m(this,`lowFpsStreak`,0),m(this,`dprCap`,2),m(this,`onResize`,[]),this.isTouch=matchMedia(`(pointer: coarse)`).matches||`ontouchstart`in window,this.quality=u(`quality`,this.isTouch?`low`:`high`);let t=new Na({antialias:this.quality===`high`,powerPreference:`high-performance`});t.outputColorSpace=Be,t.toneMapping=4,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=1,this.renderer=t,e.appendChild(t.domElement),t.domElement.setAttribute(`aria-label`,`Ouais FC, a 3D football world`),this.camera=new De(38,1,.5,400),this.hemi=new A(Al.hemiSky,Al.hemiGround,Al.hemiI),this.scene.add(this.hemi);let n=new ft(Al.sun,Al.sunI);n.castShadow=!0;let r=n.shadow;r.camera.left=-36,r.camera.right=36,r.camera.top=36,r.camera.bottom=-36,r.camera.near=1,r.camera.far=140,r.bias=-4e-4,r.normalBias=.03,this.sun=n,this.scene.add(n,n.target),this.applyShadowSize(),this.skyUniforms={top:{value:Al.skyTop.clone()},horizon:{value:Al.skyHorizon.clone()},night:{value:0},time:{value:0}},this.sky=new C(new yt(300,32,16),new g({uniforms:this.skyUniforms,side:1,depthWrite:!1,fog:!1,vertexShader:`
          varying vec3 vDir;
          void main() {
            vDir = normalize(position);
            vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            gl_Position = p.xyww;
          }`,fragmentShader:`
          uniform vec3 top; uniform vec3 horizon; uniform float night; uniform float time;
          varying vec3 vDir;
          float h21(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
          void main() {
            float h = clamp(vDir.y, -0.2, 1.0);
            vec3 col = mix(horizon, top, pow(smoothstep(-0.05, 0.75, h), 0.8));
            // stars at night
            if (night > 0.01) {
              vec2 g = floor(vDir.xz / (vDir.y + 0.6) * 140.0);
              float s = step(0.9965, h21(g)) * smoothstep(0.05, 0.4, h);
              float tw = 0.6 + 0.4 * sin(time * 2.0 + h21(g + 3.1) * 40.0);
              col += vec3(s * tw * night);
            }
            gl_FragColor = vec4(col, 1.0);
            #include <tonemapping_fragment>
            #include <colorspace_fragment>
          }`})),this.sky.frustumCulled=!1,this.sky.renderOrder=-10,this.scene.add(this.sky),this.scene.fog=new un(Al.fog.clone(),70,190),t.domElement.addEventListener(`webglcontextlost`,e=>e.preventDefault()),t.domElement.addEventListener(`webglcontextrestored`,()=>location.reload()),addEventListener(`resize`,()=>this.resize()),this.resize()}applyShadowSize(){let e=this.quality===`high`?2048:1024;this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null)}setQuality(e){this.quality=e,p(`quality`,e),this.dprCap=e===`high`?2:1.25,this.sun.castShadow=!0,this.lowFpsStreak=0,this.applyShadowSize(),this.resize()}resize(){let e=innerWidth,t=innerHeight;this.dprCap=Math.min(this.dprCap,this.quality===`high`?2:1.25),this.renderer.setPixelRatio(Math.min(Math.max(devicePixelRatio||1,this.dprCap<1?0:1),this.dprCap)),this.renderer.setSize(e,t),this.camera.aspect=e/t,this.camera.fov=e/t<.8?52:e/t<1.2?44:38,this.camera.updateProjectionMatrix(),this.onResize.forEach(e=>e())}setNight(e){this.nightTarget=+!!e}update(e,t){if(this.night!==this.nightTarget){let t=this.nightTarget-this.night;this.night+=Math.sign(t)*Math.min(Math.abs(t),e/1.6);let n=this.night;this.skyUniforms.top.value.copy(Al.skyTop).lerp(jl.skyTop,n),this.skyUniforms.horizon.value.copy(Al.skyHorizon).lerp(jl.skyHorizon,n),this.sun.color.copy(Al.sun).lerp(jl.sun,n),this.sun.intensity=ge.lerp(Al.sunI,jl.sunI,n),this.hemi.color.copy(Al.hemiSky).lerp(jl.hemiSky,n),this.hemi.groundColor.copy(Al.hemiGround).lerp(jl.hemiGround,n),this.hemi.intensity=ge.lerp(Al.hemiI,jl.hemiI,n),this.scene.fog.color.copy(Al.fog).lerp(jl.fog,n),this.skyUniforms.night.value=n}this.skyUniforms.time.value=t,this.yaw+=(this.yawTarget-this.yaw)*Math.min(1,e*6),this.dist+=(this.distTarget-this.dist)*Math.min(1,e*5);let n=Math.cos(this.pitch),r=Math.sin(this.pitch),i=this.camera;if(i.position.set(this.target.x+Math.sin(this.yaw)*n*this.dist,this.target.y+r*this.dist,this.target.z+Math.cos(this.yaw)*n*this.dist),this.tmp.copy(this.target),this.tmp.y+=.8,this.reducedMotion&&(this.shake=0),this.shake>0){this.shake=Math.max(0,this.shake-e*2.5);let t=this.shake*this.shake*.35;i.position.x+=(Math.random()-.5)*t,i.position.y+=(Math.random()-.5)*t}i.lookAt(this.tmp),this.sky.position.copy(i.position);let a=72/this.sun.shadow.mapSize.x,o=Math.round(this.target.x/a)*a,s=Math.round(this.target.z/a)*a;if(this.sun.position.set(o+this.sunOffset.x,this.sunOffset.y,s+this.sunOffset.z),this.sun.target.position.set(o,0,s),this.fpsAcc+=e,this.fpsFrames++,this.fpsAcc>1){let e=this.fpsFrames/this.fpsAcc;this.fpsAcc=0,this.fpsFrames=0,e<42&&!document.hidden?this.lowFpsStreak++:this.lowFpsStreak=0,this.lowFpsStreak>=3&&this.renderer.getPixelRatio()>1?(this.dprCap=Math.max(1,this.renderer.getPixelRatio()-.5),this.lowFpsStreak=0,this.resize()):this.lowFpsStreak>=5&&this.sun.castShadow?(this.sun.castShadow=!1,this.lowFpsStreak=0):this.lowFpsStreak>=5&&this.renderer.getPixelRatio()>.75&&(this.dprCap=.75,this.lowFpsStreak=0,this.resize())}}render(){this.renderer.render(this.scene,this.camera)}},Z={GROUND:1,PLAYER:2,BALL:4,PROP:8,STATIC:16},Nl=class{constructor(){m(this,`world`,void 0),m(this,`mat`,{ground:new Ps(`ground`),ball:new Ps(`ball`),player:new Ps(`player`),prop:new Ps(`prop`),hard:new Ps(`hard`),net:new Ps(`net`)}),m(this,`ground`,void 0),m(this,`dt`,1/60);let e=new ml({gravity:new J(0,-16,0)});e.broadphase=new ds(e),e.allowSleep=!0,e.solver.iterations=8,this.world=e;let t=this.mat,n=(t,n,r,i)=>e.addContactMaterial(new Ns(t,n,{friction:r,restitution:i}));n(t.ball,t.ground,.4,.62),n(t.ball,t.player,.05,.05),n(t.ball,t.prop,.2,.55),n(t.ball,t.hard,.15,.7),n(t.ball,t.net,.9,.02),n(t.ball,t.ball,.1,.8),n(t.player,t.ground,0,0),n(t.player,t.prop,0,0),n(t.player,t.hard,0,0),n(t.player,t.net,0,0),n(t.prop,t.ground,.9,.1),n(t.prop,t.prop,.5,.2),n(t.prop,t.hard,.4,.2),this.ground=new X({mass:0,material:t.ground,collisionFilterGroup:Z.GROUND}),this.ground.addShape(new Ls),this.ground.quaternion.setFromEuler(-Math.PI/2,0,0),e.addBody(this.ground)}step(e){this.world.step(this.dt,Math.min(e,.1),6)}staticBox(e,t,n,r,i,a,o=0,s=this.mat.hard){let c=new X({mass:0,material:s,collisionFilterGroup:Z.STATIC});return c.addShape(new to(new J(r,i,a))),c.position.set(e,t,n),o&&c.quaternion.setFromEuler(0,o,0),this.world.addBody(c),c}staticCylinder(e,t,n,r,i,a=this.mat.hard){let o=new X({mass:0,material:a,collisionFilterGroup:Z.STATIC});return o.addShape(new Is(r,r,i,10)),o.position.set(e,t,n),this.world.addBody(o),o}},Pl=class{constructor(e){m(this,`keys`,new Set),m(this,`move`,new z),m(this,`sprint`,!1),m(this,`kickHeld`,!1),m(this,`kickPressed`,!1),m(this,`kickReleased`,!1),m(this,`lobPressed`,!1),m(this,`interactPressed`,!1),m(this,`enabled`,!0),m(this,`yawDelta`,0),m(this,`zoomDelta`,0),m(this,`joy`,{active:!1,id:-1,ox:0,oy:0,x:0,y:0}),m(this,`onKey`,null),m(this,`drag`,{active:!1,x:0,id:-1}),m(this,`pinch`,{d:0,x:0}),m(this,`touches`,new Map),addEventListener(`keydown`,e=>{if(Fl(e)||(!this.enabled&&this.onKey&&this.onKey(e.code,e),!this.enabled))return;let t=e.target;(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`Space`)&&t&&t!==document.body&&t.tagName!==`CANVAS`&&(e.preventDefault(),t.blur()),this.onKey&&this.onKey(e.code,e),[`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`Space`].includes(e.code)&&e.preventDefault(),!e.repeat&&(this.keys.add(e.code),e.code===`Space`&&(this.kickHeld=!0,this.kickPressed=!0),e.code===`KeyE`&&(this.lobPressed=!0),(e.code===`Enter`||e.code===`NumpadEnter`||e.code===`KeyF`)&&(this.interactPressed=!0))}),addEventListener(`keyup`,e=>{this.keys.delete(e.code),e.code===`Space`&&this.kickHeld&&(this.kickHeld=!1,this.kickReleased=!0)}),addEventListener(`blur`,()=>this.clear()),e.addEventListener(`pointerdown`,t=>{t.pointerType===`mouse`&&(this.drag={active:!0,x:t.clientX,id:t.pointerId},e.setPointerCapture(t.pointerId))}),e.addEventListener(`pointermove`,e=>{this.drag.active&&e.pointerId===this.drag.id&&(this.yawDelta-=(e.clientX-this.drag.x)*.006,this.drag.x=e.clientX)});let t=e=>{e.pointerId===this.drag.id&&(this.drag.active=!1)};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`wheel`,e=>{e.preventDefault(),this.zoomDelta+=Math.sign(e.deltaY)*Math.min(4,Math.abs(e.deltaY)*.02)},{passive:!1}),e.addEventListener(`touchstart`,e=>this.onTouch(e),{passive:!1}),e.addEventListener(`touchmove`,e=>this.onTouch(e),{passive:!1}),e.addEventListener(`touchend`,e=>this.onTouch(e),{passive:!1}),e.addEventListener(`touchcancel`,e=>this.onTouch(e),{passive:!1})}onTouch(e){e.preventDefault(),this.touches.clear();for(let t of Array.from(e.touches))this.touches.set(t.identifier,{x:t.clientX,y:t.clientY});let t=Array.from(e.touches).filter(e=>e.identifier!==this.joy.id);if(t.length>=2){let[n,r]=t,i=Math.hypot(n.clientX-r.clientX,n.clientY-r.clientY),a=(n.clientX+r.clientX)/2;e.type===`touchmove`&&this.pinch.d>0&&(this.zoomDelta+=(this.pinch.d-i)*.05,this.yawDelta-=(a-this.pinch.x)*.008),this.pinch={d:i,x:a}}else this.pinch={d:0,x:0}}setJoystick(e,t){this.joy.x=e,this.joy.y=t}touchKick(e){e?(this.kickHeld=!0,this.kickPressed=!0):this.kickHeld&&(this.kickHeld=!1,this.kickReleased=!0)}update(){let e=this.keys,t=0,n=0;this.enabled&&((e.has(`KeyW`)||e.has(`ArrowUp`))&&(n+=1),(e.has(`KeyS`)||e.has(`ArrowDown`))&&--n,(e.has(`KeyA`)||e.has(`ArrowLeft`))&&--t,(e.has(`KeyD`)||e.has(`ArrowRight`))&&(t+=1)),this.move.set(t,n),this.move.lengthSq()>1&&this.move.normalize();let r=!1;if(this.enabled&&(this.joy.x||this.joy.y)){this.move.set(this.joy.x,this.joy.y);let e=this.move.length();e>1&&this.move.divideScalar(e),r=e>.92}this.sprint=this.enabled&&(e.has(`ShiftLeft`)||e.has(`ShiftRight`)||r)}endFrame(){this.kickPressed=!1,this.kickReleased=!1,this.lobPressed=!1,this.interactPressed=!1,this.yawDelta=0,this.zoomDelta=0}clear(){this.keys.clear(),this.kickHeld&&(this.kickHeld=!1,this.kickReleased=!0),this.joy.x=0,this.joy.y=0}};function Fl(e){let t=e.target;return!!t&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`||t.isContentEditable)}var Il=60/98,Ll=Il/4,Rl=e=>440*2**((e-69)/12),zl=[{bass:38,notes:[61,64,66,69]},{bass:35,notes:[62,66,69,73]},{bass:43,notes:[59,62,66,69]},{bass:45,notes:[61,64,66,71]}],Bl=[{bass:40,notes:[55,59,62,66]},{bass:42,notes:[57,61,64,69]},{bass:43,notes:[59,62,66,69]},{bass:45,notes:[57,62,64,67]}],Vl=[62,64,66,69,71,74,76,78,81],Hl=class{constructor(e){m(this,`a`,void 0),m(this,`timer`,0),m(this,`nextTime`,0),m(this,`step`,0),m(this,`bar`,0),m(this,`out`,void 0),m(this,`duck`,void 0),m(this,`verb`,void 0),m(this,`verbIn`,void 0),m(this,`melodyNote`,4),m(this,`phrase`,[]),m(this,`calm`,!1),this.a=e}start(){let e=this.a.ctx;e&&!this.timer&&(this.duck=e.createGain(),this.duck.gain.value=1,this.out=e.createGain(),this.out.gain.value=1e-4,this.out.gain.exponentialRampToValueAtTime(.34,e.currentTime+4),this.out.connect(this.duck).connect(this.a.musicBus),this.verb=e.createConvolver(),this.verb.buffer=this.impulse(2.2),this.verbIn=e.createGain(),this.verbIn.gain.value=.35,this.verbIn.connect(this.verb).connect(this.out),this.nextTime=e.currentTime+.2,this.timer=window.setInterval(()=>this.schedule(),25))}duckFor(e){let t=this.a.ctx;if(!t||!this.duck)return;let n=t.currentTime;this.duck.gain.cancelScheduledValues(n),this.duck.gain.setTargetAtTime(.35,n,.1),this.duck.gain.setTargetAtTime(1,n+e,.8)}impulse(e){let t=this.a.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e);for(let e=0;e<n;e++)t[e]=(Math.random()*2-1)*(1-e/n)**3}return r}schedule(){let e=this.a.ctx;if(e){if(e.state!==`running`){this.nextTime=e.currentTime+.1;return}for(this.nextTime<e.currentTime-.2&&(this.nextTime=e.currentTime+.05);this.nextTime<e.currentTime+.15;){this.playStep(this.step,this.nextTime);let e=this.step%2==0?Ll*1.12:Ll*.88;this.nextTime+=e,this.step++,this.step===16&&(this.step=0,this.bar++)}}}playStep(e,t){let n=Math.floor(this.bar/8)%4,r=(n===2?Bl:zl)[this.bar%4],i=this.bar<4,a=this.calm;if(e===0&&(this.chord(r.notes,t,Il*3.6),this.bar%2==0&&this.makePhrase()),e===10&&!i&&Math.random()<.5&&this.chord(r.notes.slice(1),t,Il*.9,.5),i||[0,6,10].includes(e)&&this.bass(r.bass+(e===10&&this.bar%2?7:0),t,e===0?Il*1.3:Il*.7),!i&&!a?((e===0||e===8)&&this.kick(t),(e===4||e===12)&&this.clap(t),e%2==0&&this.hat(t,e%4==2?.55:.28),e===14&&this.bar%4==3&&this.hat(t,.4,!0)):!i&&a&&(e===0&&this.kick(t,.5),e%4==2&&this.hat(t,.18)),!i&&n!==3&&this.bar%4>=1&&this.bar%4<=2){let n=this.bar%2*16+e,r=this.phrase[n];r!=null&&this.marimba(r,t)}}makePhrase(){this.phrase=Array(32).fill(null);for(let e of[0,3,6,8,10,14,16,19,22,24,28])Math.random()<.62&&(this.melodyNote=Math.max(0,Math.min(Vl.length-1,this.melodyNote+Math.floor(Math.random()*5)-2)),this.phrase[e]=Vl[this.melodyNote])}chord(e,t,n,r=1){let i=this.a.ctx;for(let a of e){let e=i.createOscillator();e.frequency.value=Rl(a);let o=i.createOscillator();o.frequency.value=Rl(a)*1;let s=i.createGain();s.gain.setValueAtTime(Rl(a)*1.4,t),s.gain.exponentialRampToValueAtTime(Rl(a)*.08,t+.6),o.connect(s).connect(e.frequency);let c=i.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.exponentialRampToValueAtTime(.045*r,t+.012),c.gain.exponentialRampToValueAtTime(.018*r,t+.4),c.gain.exponentialRampToValueAtTime(1e-4,t+n);let l=i.createBiquadFilter();l.type=`lowpass`,l.frequency.value=2600,e.connect(l).connect(c),c.connect(this.out),c.connect(this.verbIn),e.start(t),o.start(t),e.stop(t+n+.05),o.stop(t+n+.05)}}bass(e,t,n){let r=this.a.ctx,i=r.createOscillator();i.type=`triangle`,i.frequency.value=Rl(e);let a=r.createOscillator();a.frequency.value=Rl(e);let o=r.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.16,t+.01),o.gain.exponentialRampToValueAtTime(.08,t+.15),o.gain.exponentialRampToValueAtTime(1e-4,t+n);let s=r.createBiquadFilter();s.type=`lowpass`,s.frequency.value=600,i.connect(s),a.connect(s),s.connect(o).connect(this.out),i.start(t),a.start(t),i.stop(t+n+.05),a.stop(t+n+.05)}kick(e,t=1){let n=this.a.ctx,r=n.createOscillator();r.frequency.setValueAtTime(130,e),r.frequency.exponentialRampToValueAtTime(42,e+.12);let i=n.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.32*t,e+.004),i.gain.exponentialRampToValueAtTime(1e-4,e+.3),r.connect(i).connect(this.out),r.start(e),r.stop(e+.32)}clap(e){let t=this.a.ctx,n=t.createBufferSource();n.buffer=this.a.white;let r=t.createBiquadFilter();r.type=`bandpass`,r.frequency.value=1500,r.Q.value=.9;let i=t.createGain();i.gain.setValueAtTime(1e-4,e),i.gain.exponentialRampToValueAtTime(.1,e+.003),i.gain.exponentialRampToValueAtTime(.03,e+.02),i.gain.exponentialRampToValueAtTime(1e-4,e+.18),n.connect(r).connect(i),i.connect(this.out),i.connect(this.verbIn),n.start(e,Math.random()),n.stop(e+.2)}hat(e,t,n=!1){let r=this.a.ctx,i=r.createBufferSource();i.buffer=this.a.white;let a=r.createBiquadFilter();a.type=`highpass`,a.frequency.value=7e3;let o=r.createGain(),s=n?.25:.04;o.gain.setValueAtTime(1e-4,e),o.gain.exponentialRampToValueAtTime(.05*t,e+.002),o.gain.exponentialRampToValueAtTime(1e-4,e+s),i.connect(a).connect(o).connect(this.out),i.start(e,Math.random()),i.stop(e+s+.02)}marimba(e,t){let n=this.a.ctx,r=Rl(e+12),i=n.createOscillator();i.frequency.value=r;let a=n.createOscillator();a.frequency.value=r*3.99;let o=n.createGain();o.gain.setValueAtTime(1e-4,t),o.gain.exponentialRampToValueAtTime(.06,t+.004),o.gain.exponentialRampToValueAtTime(1e-4,t+.5);let s=n.createGain();s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.02,t+.002),s.gain.exponentialRampToValueAtTime(1e-4,t+.08),i.connect(o),a.connect(s),o.connect(this.out),s.connect(this.out),o.connect(this.verbIn),i.start(t),a.start(t),i.stop(t+.55),a.stop(t+.1)}};function Ul(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new He,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Wl(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Wl(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Wl(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new ue(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Gl=new Map;function Q(e,t={}){let n=`${e}|${t.emissive??``}|${t.emissiveIntensity??``}|${t.flat??!0}|${t.side??0}`,r=Gl.get(n);return r||(r=new U({color:e,flatShading:t.flat??!0,side:t.side??0}),t.emissive&&(r.emissive.set(t.emissive),r.emissiveIntensity=t.emissiveIntensity??1),Gl.set(n,r)),r}var Kl=class{constructor(){m(this,`groups`,new Map),m(this,`shadowless`,new Map),m(this,`m4`,new gn),m(this,`q`,new Yt),m(this,`e`,new jt),m(this,`s`,new T),m(this,`p`,new T)}add(e,t,n=0,r=0,i=0,a=0,o=0,s=0,c=1,l=c,u=c,d=!0){this.p.set(n,r,i),this.q.setFromEuler(this.e.set(a,o,s)),this.s.set(c,l,u),this.m4.compose(this.p,this.q,this.s),this.addMatrix(e,t,this.m4,d)}addMatrix(e,t,n,r=!0){let i=e.index?e.toNonIndexed():e.clone();i.applyMatrix4(n);for(let e of Object.keys(i.attributes))e!==`position`&&e!==`normal`&&i.deleteAttribute(e);i.attributes.normal||i.computeVertexNormals();let a=r?this.groups:this.shadowless,o=a.get(t)??[];o.push(i),a.set(t,o),i=null}addObject(e,t=!0){e.updateMatrixWorld(!0),e.traverse(e=>{let n=e;n.isMesh&&this.addMatrix(n.geometry,n.material,n.matrixWorld,t)})}build(e){let t=(t,n)=>{for(let[r,i]of t){let t=Ul(i,!1);if(!t)continue;t.computeBoundingSphere();let a=new C(t,r);a.castShadow=n,a.receiveShadow=!0,a.matrixAutoUpdate=!1,e.add(a),i.forEach(e=>e.dispose())}};t(this.groups,!0),t(this.shadowless,!1),this.groups.clear(),this.shadowless.clear()}},$={box:(e,t,n)=>new G(e,t,n),cyl:(e,t,n,r=8)=>new bt(e,t,n,r),ico:(e,t=0)=>new O(e,t),cone:(e,t,n=7)=>new lt(e,t,n),sphere:(e,t=10,n=8)=>new yt(e,t,n)};function ql(e,t,n){let r=e.index?e.toNonIndexed():e,i=r.attributes.position,a=new Map;for(let e=0;e<i.count;e++){let r=`${i.getX(e).toFixed(3)},${i.getY(e).toFixed(3)},${i.getZ(e).toFixed(3)}`,o=a.get(r);o||(o=[(n()-.5)*t,(n()-.5)*t,(n()-.5)*t],a.set(r,o)),i.setXYZ(e,i.getX(e)+o[0],i.getY(e)+o[1],i.getZ(e)+o[2])}return r.computeVertexNormals(),r}var Jl={jersey:N.brand,shorts:N.navy,sock:`#ffffff`,skin:`#9a6a4a`,hair:`#1d1612`,name:`HAMDI`,number:`10`},Yl=`#1b1b22`,Xl=.42,Zl=new U({vertexColors:!0,flatShading:!0});function Ql(e){let t=[],n=[];for(let r of e.children){let e=r;if(!e.isMesh)continue;let i=e.material;if(Array.isArray(i)||i.map||i.transparent)continue;e.updateMatrix();let a=(e.geometry.index?e.geometry.toNonIndexed():e.geometry.clone()).applyMatrix4(e.matrix);for(let e of Object.keys(a.attributes))e!==`position`&&e!==`normal`&&a.deleteAttribute(e);let o=new Float32Array(a.attributes.position.count*3);for(let e=0;e<o.length;e+=3)o[e]=i.color.r,o[e+1]=i.color.g,o[e+2]=i.color.b;a.setAttribute(`color`,new ue(o,3)),t.push(a),n.push(e)}if(t.length<2)return;for(let t of n)e.remove(t);let r=new C(Ul(t),Zl);r.castShadow=!0,e.add(r)}function $l(e,t,n){let r=new G(t,e,t);r.translate(0,-e/2,0);let i=new C(r,Q(n));return i.castShadow=!0,i}var eu=class{constructor(e,t,n=Jl){m(this,`root`,new sn),m(this,`body`,void 0),m(this,`heading`,0),m(this,`vel`,new T),m(this,`speed`,0),m(this,`sprinting`,!1),m(this,`phase`,0),m(this,`hips`,new sn),m(this,`torso`,new sn),m(this,`head`,new sn),m(this,`legL`,new sn),m(this,`legR`,new sn),m(this,`kneeL`,new sn),m(this,`kneeR`,new sn),m(this,`armL`,new sn),m(this,`armR`,new sn),m(this,`kickT`,-1),m(this,`celebrateT`,-1),m(this,`charge`,0),m(this,`onStep`,null),m(this,`lastStepSign`,1),m(this,`shadowBlob`,void 0),m(this,`kit`,void 0),m(this,`pushing`,!1),this.kit=n,this.build(),this.optimise(),this.root.scale.setScalar(1.25),t.add(this.root);let r=new X({mass:70,material:e.mat.player,fixedRotation:!0,linearDamping:0,collisionFilterGroup:Z.PLAYER,collisionFilterMask:Z.GROUND|Z.BALL|Z.PROP|Z.STATIC|Z.PLAYER});r.addShape(new Fs(Xl),new J(0,0,0)),r.addShape(new Fs(.32),new J(0,.9,0)),r.position.set(0,Xl,0),r.allowSleep=!1,this.body=r,e.world.addBody(r);let i=j(64,64,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,0,t/2,n/2,t/2);r.addColorStop(0,`rgba(0,0,0,0.35)`),r.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)},{liveLang:!1});this.shadowBlob=new C(new W(1.4,1.4).rotateX(-Math.PI/2),new Re({map:i,transparent:!0,depthWrite:!1})),this.shadowBlob.position.y=.02,t.add(this.shadowBlob)}build(){let{jersey:e,shorts:t,sock:n,skin:r,hair:i}=this.kit,a=this.kit,o=this.root;this.hips.position.y=.92,o.add(this.hips);let s=new C(new G(.5,.26,.3),Q(t));s.position.y=-.02,s.castShadow=!0,this.hips.add(s),this.torso.position.y=.1,this.hips.add(this.torso);let c=new C(new G(.56,.6,.32),Q(e));c.position.y=.3,c.castShadow=!0,this.torso.add(c);let l=new C(new G(.3,.05,.3),Q(`#ffffff`));l.position.y=.61,this.torso.add(l);let u=j(256,256,(e,t,n)=>{e.clearRect(0,0,t,n),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.font=`46px ${F}`,e.fillText(a.name,t/2,62),e.font=`150px ${F}`,e.fillText(a.number,t/2,210)},{liveLang:!1}),d=new C(new W(.46,.46),new U({map:u,transparent:!0}));d.position.set(0,.3,-.165),d.rotation.y=Math.PI,this.torso.add(d);let f=j(128,128,(e,t,n)=>{e.clearRect(0,0,t,n),e.fillStyle=`#ffffff`,e.beginPath(),e.arc(t/2,n/2,t*.42,0,Math.PI*2),e.fill(),e.fillStyle=N.navy,e.font=`46px ${F}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`O`,t/2,n/2+3)},{liveLang:!1}),p=new C(new W(.11,.11),new U({map:f,transparent:!0}));p.position.set(.13,.44,.165),this.torso.add(p),this.head.position.y=.66,this.torso.add(this.head);let m=new C(new G(.14,.12,.14),Q(r));m.position.y=.04,this.head.add(m);let h=new C(new G(.32,.36,.32),Q(r));h.position.y=.26,h.castShadow=!0,this.head.add(h);let g=new C(new G(.34,.13,.34),Q(i));g.position.set(0,.42,-.01),this.head.add(g);let _=new C(new G(.34,.2,.08),Q(i));_.position.set(0,.3,-.14),this.head.add(_);for(let e of[-.075,.075]){let t=new C(new G(.05,.06,.02),Q(`#15151a`));t.position.set(e,.28,.165),this.head.add(t)}let v=new C(new G(.3,.08,.04),Q(i));v.position.set(0,.11,.155),this.head.add(v);for(let[t,n]of[[this.armL,1],[this.armR,-1]]){t.position.set(.34*n,.56,0),this.torso.add(t);let i=$l(.22,.17,e);t.add(i);let o=$l(.36,.12,r);if(o.position.y=-.2,t.add(o),a.gloves){let e=new C(new G(.17,.17,.17),Q(a.gloves));e.position.y=-.58,t.add(e)}}for(let[i,a,o]of[[this.legL,this.kneeL,1],[this.legR,this.kneeR,-1]]){i.position.set(.13*o,0,0),this.hips.add(i);let s=$l(.2,.18,t);i.add(s);let c=$l(.22,.15,r);c.position.y=-.18,i.add(c),a.position.y=-.42,i.add(a);let l=$l(.38,.15,n);a.add(l);let u=new C(new G(.16,.05,.16),Q(e));u.position.y=-.03,a.add(u);let d=new C(new G(.16,.12,.3),Q(Yl));d.position.set(0,-.42,.06),d.castShadow=!0,a.add(d)}}setKit(e){for(let e of[this.hips,this.torso,this.head,this.armL,this.armR,this.legL,this.legR,this.kneeL,this.kneeR])for(let t of[...e.children]){let n=t;n.isMesh&&(e.remove(n),n.geometry.dispose())}this.kit=e,this.build(),this.optimise(),this.root.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}optimise(){for(let e of[this.hips,this.torso,this.head,this.armL,this.armR,this.legL,this.legR,this.kneeL,this.kneeR])Ql(e)}get position(){return this.body.position}teleport(e,t,n=Math.PI){this.body.position.set(e,Xl,t),this.body.velocity.setZero(),this.vel.set(0,0,0),this.heading=n,this.body.interpolatedPosition.copy(this.body.position),this.body.previousPosition.copy(this.body.position),this.sync()}move(e,t,n,r,i){let a=r?0:i??(this.pushing?1.6:t?9.2:5.8);this.sprinting=t&&e.lengthSq()>.1;let o=e.x*a,s=e.y*a,c=e.lengthSq()>.01?14:18,l=1-Math.exp(-c*n);this.vel.x+=(o-this.vel.x)*l,this.vel.z+=(s-this.vel.z)*l;let u=this.body.velocity;if(u.x=this.vel.x,u.z=this.vel.z,this.body.position.y>.44&&(u.y=Math.min(u.y,0)),this.speed=Math.hypot(this.vel.x,this.vel.z),this.speed>.4&&this.kickT<0){let e=Math.atan2(this.vel.x,this.vel.z)-this.heading;e=Math.atan2(Math.sin(e),Math.cos(e)),this.heading+=e*Math.min(1,n*12)}}faceTowards(e,t){this.heading=Math.atan2(e-this.body.position.x,t-this.body.position.z)}forward(e=new T){return e.set(Math.sin(this.heading),0,Math.cos(this.heading))}startKick(){this.kickT=0}celebrate(){this.celebrateT=0}sync(){let e=this.body.interpolatedPosition;this.root.position.set(e.x,e.y-Xl,e.z),this.root.rotation.y=this.heading,this.shadowBlob.position.set(e.x,.02,e.z)}animate(e){this.sync();let t=this.speed,n=Math.min(1,t/5.8);this.phase+=e*(4+t*1.55);let r=Math.sin(this.phase),i=.95*n,a=r*i,o=-r*i,s=Math.max(0,-Math.cos(this.phase))*1.1*n,c=Math.max(0,Math.cos(this.phase))*1.1*n,l=-r*.8*n,u=r*.8*n,d=.08,f=-.08,p=n*(this.sprinting?.32:.16),m=Math.abs(Math.cos(this.phase))*.07*n,h=1-n;m+=Math.sin(performance.now()*.002)*.012*h;let g=Math.sign(Math.cos(this.phase));if(n>.3&&g!==this.lastStepSign&&(this.lastStepSign=g,this.onStep?.(this.sprinting)),this.charge>0&&this.kickT<0&&(o=ge.lerp(o,.9*this.charge+.2,.8),c=.9*this.charge+.3,l=-.6*this.charge,d=.5*this.charge),this.kickT>=0){this.kickT+=e;let t=this.kickT/.38;t>=1?this.kickT=-1:(o=t<.3?ge.lerp(.5,1.1,t/.3):t<.55?ge.lerp(1.1,-1.5,(t-.3)/.25):ge.lerp(-1.5,0,(t-.55)/.45),c=t<.3?1.2:t<.55?ge.lerp(1.2,0,(t-.3)/.25):.1,a=-.15,s=.2,l=-.9,d=.6,u=.6,f=-.5,p=t<.55?-.12:.1)}let _=0;if(this.celebrateT>=0){this.celebrateT+=e;let t=this.celebrateT/1.5;if(t>=1)this.celebrateT=-1;else{let e=Math.abs(Math.sin(t*Math.PI*3));_=e*.45*(1-t*.5),l=-3,u=-3,d=.35+e*.2,f=-.35-e*.2,a=-e*.3,o=e*.2,s=e*.8,c=e*.6,p=-.1}}this.hips.position.y=.92+m+_,this.torso.rotation.x=p,this.head.rotation.x=-p*.6,this.legL.rotation.x=a,this.legR.rotation.x=o,this.kneeL.rotation.x=s,this.kneeR.rotation.x=c,this.armL.rotation.x=l,this.armR.rotation.x=u,this.armL.rotation.z=d,this.armR.rotation.z=f}footPosition(e=new T){let t=this.forward();return e.set(this.body.position.x+t.x*.6,.3,this.body.position.z+t.z*.6)}},tu=e=>e[d];function nu(){return(a?.order.length?[...a.order,...s.map((e,t)=>t).filter(e=>!a.order.includes(e))]:s.map((e,t)=>t)).filter(e=>s[e]).map(e=>s[e]).map(e=>{if(e.measure&&(e.measure.test>=50||!e.measure.higherIsBetter)){let t=e.measure,n=tu(t.label);return`${e.name}: ${t.test}% ${n.charAt(0).toLowerCase()}${n.slice(1)} · ${tu(t.testNote)}`}return e.headline?`${e.name}: ${e.headline.value} ${tu(e.headline.label)}`:`${e.name}: ${tu(e.oneLiner)}`})}var ru=[{x:0,z:-6,dist:96,pitch:1.12,yaw:.35,title:{en:`Mohamed Ouais Hamdi`,fr:`Mohamed Ouais Hamdi`},text:{en:`Engineering student at ESIEE-IT, Paris, passionate about AI and machine learning. This island is my portfolio: here is the 60-second version.`,fr:`Étudiant ingénieur à ESIEE-IT, Paris, passionné d’IA et de machine learning. Cette île est mon portfolio : voici la version en 60 secondes.`},chips:()=>[...a?.score?[d===`fr`?`${a.score} % de correspondance avec l’offre de ${a.company}`:`${a.score}% match with ${a.company}'s offer`]:[],...d===`fr`?[`Cherche un stage en IA / ML`,`Basé à Paris`,`Arabe · anglais C1 · français B2`]:[`Looking for an AI / ML internship`,`Based in Paris`,`Arabic · English C1 · French B2`]]},{x:0,z:-40,dist:46,pitch:.62,yaw:0,title:{en:`5 ML projects, tested the hard way`,fr:`5 projets de ML, testés pour de vrai`},text:{en:`Each goal is a project. Its scoreboard shows two scores: in training conditions, and on match day, on data the model never saw.`,fr:`Chaque but est un projet. Son tableau affiche deux scores : en conditions d'entraînement, et le jour du match, sur des données jamais vues.`},chips:nu},{x:54.5,z:-29,dist:28,pitch:.7,yaw:0,title:{en:`Try the models yourself`,fr:`Testez les modèles vous-même`},text:{en:`The Match Analysis room runs the real models: HistoLens classifies tissue in your browser, WattCast replays any day since 2019, ThreatScope streams its attack feed. Plus the lessons I learned the hard way.`,fr:`La salle d'analyse fait tourner les vrais modèles : HistoLens classe des tissus dans votre navigateur, WattCast rejoue n'importe quel jour depuis 2019, ThreatScope diffuse son flux d'attaques. Et les leçons apprises à la dure.`}},{x:37,z:3,dist:36,pitch:.6,yaw:0,title:{en:`The road so far`,fr:`Le parcours`},text:{en:`From Sfax to Paris, with a full-stack internship on the way.`,fr:`De Sfax à Paris, avec un stage full-stack en chemin.`},chips:()=>d===`fr`?[`2024 – 2027 · Licence en informatique, IIT Sfax`,`Été 2026 · Stage full-stack, DualCom Consulting (à distance)`,`2026 – 2027 · Cycle ingénieur, ESIEE-IT Paris`,`La suite · un stage en IA / ML`]:[`2024 – 2027 · B.Sc. Computer Science, IIT Sfax`,`Summer 2026 · Full-stack intern, DualCom Consulting (remote)`,`2026 – 2027 · Engineering cycle, ESIEE-IT Paris`,`Next · an AI / ML internship`]},{x:Ae[0]+4,z:Ae[1]+4,dist:30,pitch:.58,yaw:.25,title:{en:`Skills`,fr:`Compétences`},text:{en:`The tools I use to build, test and ship models.`,fr:`Les outils que j'utilise pour construire, tester et déployer des modèles.`},chips:()=>t.flatMap(e=>e.items.slice(0,5))},{x:Ft[0],z:Ft[1],dist:36,pitch:.78,yaw:-.3,title:{en:`Byte, the in-game AI`,fr:`Byte, l'IA du jeu`},text:{en:`The keepers learn your shooting habits live in the browser and dive where your next shot is most likely to go. Challenge Byte to a match or a penalty shootout here.`,fr:`Les gardiens apprennent vos habitudes de tir en direct dans le navigateur et plongent là où votre prochain tir a le plus de chances d’aller. Défiez Byte en match ou aux tirs au but ici.`}},{x:cn[0]+1,z:cn[1]-1,dist:28,pitch:.62,yaw:.5,title:{en:`Where it started`,fr:`Là où tout a commencé`},text:{en:`Sfax, Tunisia: where I studied before moving to Paris for the engineering cycle.`,fr:`Sfax, en Tunisie : là où j'ai étudié avant de rejoindre Paris pour le cycle ingénieur.`}},{x:-2,z:40,dist:30,pitch:.6,yaw:0,title:{en:`Let's talk`,fr:`Parlons-en`},text:{en:`Download my CV, paste your job offer at the scout desk to see how I match, or ask me anything at the microphone. Or grab the ball and explore.`,fr:`Téléchargez mon CV, collez votre offre au bureau du recruteur pour voir si je corresponds, ou posez vos questions au micro. Ou prenez le ballon et explorez.`},end:!0}],iu=7.5;function au(){if(!a)return;let e=a.company;ru[1].title={en:`My projects, most relevant to ${e} first`,fr:`Mes projets, les plus utiles pour ${e} d’abord`}}au();var ou=.34,su=null;function cu(){if(su)return su;let e=new O(1,0),t=[],n=e.attributes.position;for(let e=0;e<n.count;e++){let r=new T().fromBufferAttribute(n,e).normalize();t.some(e=>e.distanceTo(r)<.001)||t.push(r)}let r=new O(ou,1),i=r.attributes.position,a=new Float32Array(i.count*3),o=new T;for(let e=0;e<i.count;e+=3){let n=!1;for(let r=0;r<3;r++)o.fromBufferAttribute(i,e+r).normalize(),t.some(e=>e.dot(o)>.999)&&(n=!0);let r=n?[.08,.1,.16]:[.98,.98,.96];for(let t=0;t<3;t++)a.set(r,(e+t)*3)}return r.setAttribute(`color`,new ue(a,3)),su=r,r}var lu=class{constructor(e,t,n){m(this,`mesh`,void 0),m(this,`body`,void 0),m(this,`home`,void 0),m(this,`id`,void 0),m(this,`inWater`,0),m(this,`lastTouch`,0),m(this,`kickFrom`,new T),m(this,`prevPos`,new T),m(this,`physics`,void 0),m(this,`hitPost`,0),m(this,`idleTime`,0),this.physics=e,this.home=n.home.clone(),this.id=n.id,this.mesh=new C(cu(),new U({vertexColors:!0,flatShading:!0,emissive:n.golden?`#3a2600`:`#000000`})),this.mesh.castShadow=!0,t.add(this.mesh);let r=new X({mass:.45,material:e.mat.ball,linearDamping:.04,angularDamping:.35,collisionFilterGroup:Z.BALL,collisionFilterMask:Z.GROUND|Z.PLAYER|Z.BALL|Z.PROP|Z.STATIC});r.addShape(new Fs(ou)),r.allowSleep=!0,r.sleepSpeedLimit=.08,r.sleepTimeLimit=1,this.body=r,e.world.addBody(r),this.reset()}reset(e){let t=e??this.home,n=this.body;n.position.set(t.x,Math.max(t.y,.36000000000000004),t.z),n.velocity.setZero(),n.angularVelocity.setZero(),n.quaternion.set(0,0,0,1),n.collisionFilterMask=Z.GROUND|Z.PLAYER|Z.BALL|Z.PROP|Z.STATIC,n.linearDamping=.04,n.wakeUp(),this.inWater=0,this.idleTime=0,n.interpolatedPosition.copy(n.position),n.interpolatedQuaternion.copy(n.quaternion),n.previousPosition.copy(n.position),this.sync(!1),this.prevPos.copy(this.mesh.position)}get pos(){return this.body.position}speed(){return this.body.velocity.length()}preStep(e){let t=this.body;if(t.position.y<.39&&this.inWater===0){let n=t.velocity,r=Math.hypot(n.x,n.z);if(r>0){let t=Math.min(r,(1.7+r*.16)*e);n.x-=n.x/r*t,n.z-=n.z/r*t}t.angularVelocity.x=n.z/ou,t.angularVelocity.z=-n.x/ou}}enterWater(){this.inWater||(this.inWater=1e-4,this.body.collisionFilterMask=0,this.body.linearDamping=.9)}sync(e=!0){let t=e?this.body.interpolatedPosition:this.body.position,n=e?this.body.interpolatedQuaternion:this.body.quaternion;this.mesh.position.set(t.x,t.y,t.z),this.mesh.quaternion.set(n.x,n.y,n.z,n.w)}dispose(){this.physics.world.removeBody(this.body),this.mesh.removeFromParent()}},uu=class{constructor(e,t=600){m(this,`mesh`,void 0),m(this,`ps`,[]),m(this,`d`,new Ue),m(this,`c`,new I),m(this,`next`,0);let n=new W(1,1),r=new Re({side:2,toneMapped:!1});this.mesh=new Ce(n,r,t),this.mesh.frustumCulled=!1;for(let e=0;e<t;e++)this.ps.push({alive:!1,pos:new T,vel:new T,rot:new jt,spin:new T,life:0,max:1,size:.1,drag:0,gravity:0,shrink:!0}),this.d.scale.setScalar(0),this.d.updateMatrix(),this.mesh.setMatrixAt(e,this.d.matrix),this.mesh.setColorAt(e,this.c.set(`#ffffff`));e.add(this.mesh)}spawn(e){let t=this.next;this.next=(this.next+1)%this.ps.length;let n=this.ps[t];n.alive=!0,n.pos.copy(e.pos),n.vel.copy(e.vel),n.rot.set(Math.random()*6,Math.random()*6,Math.random()*6),n.spin.set((Math.random()-.5)*12,(Math.random()-.5)*12,(Math.random()-.5)*12),n.life=0,n.max=e.life,n.size=e.size,n.drag=e.drag??0,n.gravity=e.gravity??0,n.shrink=e.shrink??!0,this.mesh.setColorAt(t,typeof e.color==`string`?this.c.set(e.color):e.color),this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0)}confetti(e,t,n,r=140,i=[`#ff5a3c`,`#ffffff`,`#f2b544`,`#5aa9ff`,`#4fd18b`]){for(let a=0;a<r;a++){let r=Math.random()*Math.PI*2,o=3+Math.random()*7;this.spawn({pos:new T(e+(Math.random()-.5),t,n+(Math.random()-.5)),vel:new T(Math.cos(r)*o*.6,6+Math.random()*8,Math.sin(r)*o*.6),color:i[a%i.length],size:.14+Math.random()*.1,life:2.6+Math.random()*1.5,drag:1.6,gravity:6,shrink:!1})}}dust(e,t,n=4,r=`#d8cfb5`,i=1){for(let a=0;a<n;a++)this.spawn({pos:new T(e+(Math.random()-.5)*.4,.08,t+(Math.random()-.5)*.4),vel:new T((Math.random()-.5)*1.5*i,(.8+Math.random()*1.2)*i,(Math.random()-.5)*1.5*i),color:r,size:.1+Math.random()*.12,life:.45+Math.random()*.3,drag:3,gravity:2})}grass(e,t,n=10){for(let r=0;r<n;r++)this.spawn({pos:new T(e,.1,t),vel:new T((Math.random()-.5)*4,2+Math.random()*3,(Math.random()-.5)*4),color:Math.random()>.5?`#5aa847`:`#3f8f3a`,size:.07+Math.random()*.06,life:.8+Math.random()*.4,drag:1,gravity:12})}splash(e,t,n,r=40){for(let i=0;i<r;i++){let r=Math.random()*Math.PI*2,i=1+Math.random()*3;this.spawn({pos:new T(e,t,n),vel:new T(Math.cos(r)*i,3+Math.random()*5,Math.sin(r)*i),color:Math.random()>.3?`#ffffff`:`#bdeff2`,size:.1+Math.random()*.12,life:.8+Math.random()*.5,gravity:14})}}sparkle(e,t,n,r=24,i=`#ffd34d`){for(let a=0;a<r;a++){let r=new T(Math.random()-.5,Math.random()*.8,Math.random()-.5).normalize().multiplyScalar(2+Math.random()*3);this.spawn({pos:new T(e,t,n),vel:r,color:i,size:.12,life:.7+Math.random()*.4,drag:2,gravity:1})}}trail(e,t,n,r=`#ffffff`){this.spawn({pos:new T(e,t,n),vel:new T(0,.2,0),color:r,size:.22,life:.35,drag:0,gravity:0})}hearts(e,t,n){for(let r=0;r<10;r++)this.spawn({pos:new T(e+(Math.random()-.5)*.6,t,n+(Math.random()-.5)*.6),vel:new T((Math.random()-.5)*.8,1.5+Math.random(),(Math.random()-.5)*.8),color:Math.random()>.3?`#ff4d6d`:`#ff8fb1`,size:.22,life:1.2,drag:.5,gravity:-.5})}firework(e,t,n,r,i=70){for(let a=0;a<i;a++){let i=new T(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(6+Math.random()*3);this.spawn({pos:new T(e,t,n),vel:i,color:r,size:.35,life:1.4+Math.random()*.6,drag:1.4,gravity:2.5})}}update(e,t){let n=!1;for(let r=0;r<this.ps.length;r++){let i=this.ps[r];if(!i.alive)continue;if(n=!0,i.life+=e,i.life>=i.max){i.alive=!1,this.d.scale.setScalar(0),this.d.updateMatrix(),this.mesh.setMatrixAt(r,this.d.matrix);continue}i.vel.multiplyScalar(Math.exp(-i.drag*e)),i.vel.y-=i.gravity*e,i.pos.addScaledVector(i.vel,e),i.pos.y<.02&&(i.pos.y=.02,i.vel.set(0,0,0)),i.rot.x+=i.spin.x*e,i.rot.y+=i.spin.y*e,i.rot.z+=i.spin.z*e;let a=i.life/i.max,o=i.shrink?i.size*(1-a):i.size*(a>.85?(1-a)/.15:1);this.d.position.copy(i.pos),i.shrink?this.d.quaternion.copy(t.quaternion):this.d.rotation.copy(i.rot),this.d.scale.setScalar(Math.max(1e-4,o)),this.d.updateMatrix(),this.mesh.setMatrixAt(r,this.d.matrix)}n&&(this.mesh.instanceMatrix.needsUpdate=!0)}},du=class{constructor(e,t,n,r){m(this,`root`,new sn),m(this,`body`,void 0),m(this,`heading`,0),m(this,`legs`,[]),m(this,`tail`,new sn),m(this,`head`,new sn),m(this,`torso`,new sn),m(this,`phase`,0),m(this,`speed`,0),m(this,`idleT`,0),m(this,`jumpT`,-1),m(this,`wag`,0),m(this,`goal`,new z),m(this,`wanderT`,0),m(this,`happy`,0),m(this,`onBark`,null);let i=Q(`#c98a4b`),a=Q(`#f4efe6`),o=Q(`#2b2420`);this.torso.position.y=.48,this.root.add(this.torso);let s=new C(new G(.42,.36,.78),i);this.torso.add(s);let c=new C(new G(.36,.08,.6),a);c.position.y=-.17,this.torso.add(c);let l=new C(new G(.34,.08,.1),Q(`#ff5a3c`));l.position.set(0,.16,.38),this.torso.add(l),this.head.position.set(0,.26,.42),this.torso.add(this.head);let u=new C(new G(.34,.3,.32),i);u.position.set(0,.06,.08),this.head.add(u);let d=new C(new G(.2,.16,.2),a);d.position.set(0,-.02,.3),this.head.add(d);let f=new C(new G(.08,.06,.04),o);f.position.set(0,.04,.41),this.head.add(f);for(let e of[-1,1]){let t=new C(new G(.08,.16,.12),o);t.position.set(e*.15,.24,.02),t.rotation.z=e*.35,this.head.add(t);let n=new C(new G(.04,.05,.02),o);n.position.set(e*.09,.1,.245),this.head.add(n)}this.tail.position.set(0,.12,-.38),this.torso.add(this.tail);let p=new C(new G(.07,.07,.3),a);p.position.z=-.14,p.rotation.x=-.6,this.tail.add(p);for(let[e,t]of[[-1,1],[1,1],[-1,-1],[1,-1]]){let n=new sn;n.position.set(e*.14,.32,t*.27);let r=new C(new G(.1,.32,.1),t>0?a:i);r.position.y=-.16,n.add(r),this.root.add(n),this.legs.push(n)}for(let e of[this.torso,this.head,this.tail,...this.legs])Ql(e);this.root.traverse(e=>{e.castShadow=!0}),t.add(this.root);let h=new X({mass:12,fixedRotation:!0,material:e.mat.player,collisionFilterGroup:Z.PROP,collisionFilterMask:Z.GROUND|Z.STATIC});h.addShape(new Fs(.3),new J(0,0,0)),h.position.set(n,.3,r),h.allowSleep=!1,e.world.addBody(h),this.body=h,this.goal.set(n,r)}celebrate(){this.jumpT=0,this.happy=3,this.onBark?.()}pet(){this.happy=4,this.jumpT=0,this.onBark?.()}teleportNear(e,t){this.body.position.set(e+1.5,.3,t+1.5),this.body.velocity.setZero(),this.body.interpolatedPosition.copy(this.body.position),this.body.previousPosition.copy(this.body.position)}update(e,t,n,r,i){let a=this.body.position,o=t-a.x,s=n-a.z,c=Math.hypot(o,s),l=0,u=0,d=0;if(c>3.2)d=Math.min(10.5,3+c*1.2),l=o/c,u=s/c,this.idleT=0,this.wanderT=0;else if(r<.5){if(this.idleT+=e,this.wanderT-=e,this.wanderT<=0){let e=Math.random()*Math.PI*2;this.goal.set(t+Math.cos(e)*2.4,n+Math.sin(e)*2.4),this.wanderT=2+Math.random()*3}let r=this.goal.x-a.x,i=this.goal.y-a.z,o=Math.hypot(r,i);o>.4&&this.idleT<6&&(d=1.6,l=r/o,u=i/o)}if(c<1.3&&c>.01&&(l=-o/c,u=-s/c,d=Math.max(d,2.5)),wt(a.x+l,a.z+u)>-2.5){l=-a.x,u=-a.z;let e=Math.hypot(l,u)||1;l/=e,u/=e}let f=this.body.velocity,p=1-Math.exp(-8*e);if(f.x+=(l*d-f.x)*p,f.z+=(u*d-f.z)*p,a.y>.32&&(f.y=Math.min(f.y,0)),this.speed=Math.hypot(f.x,f.z),this.speed>.3){let t=Math.atan2(f.x,f.z)-this.heading;t=Math.atan2(Math.sin(t),Math.cos(t)),this.heading+=t*Math.min(1,e*10)}else if(c<6){let t=Math.atan2(o,s)-this.heading;t=Math.atan2(Math.sin(t),Math.cos(t)),this.heading+=t*Math.min(1,e*3)}let m=this.body.interpolatedPosition;this.root.position.set(m.x,m.y-.3,m.z),this.root.rotation.y=this.heading;let h=Math.min(1,this.speed/6);this.phase+=e*(6+this.speed*2.6),this.legs.forEach((e,t)=>{let n=t===0||t===3?0:Math.PI;e.rotation.x=Math.sin(this.phase+n)*.9*h}),this.happy=Math.max(0,this.happy-e),this.wag+=e*(this.happy>0?28:10+h*6),this.tail.rotation.y=Math.sin(this.wag)*(this.happy>0?.9:.4);let g=0;if(this.jumpT>=0){this.jumpT+=e;let t=this.jumpT/1.4;t>=1?this.jumpT=-1:g=Math.abs(Math.sin(t*Math.PI*4))*.45*(1-t)}let _=this.idleT>6&&h<.1?Math.min(1,(this.idleT-6)*2):0;this.torso.position.y=.48+g+Math.abs(Math.sin(this.phase))*.05*h-_*.12,this.torso.rotation.x=-_*.45,this.legs[2].rotation.x+=_*1.1,this.legs[3].rotation.x+=_*1.1,this.head.rotation.x=_*.4+Math.sin(i*2)*.05,this.head.rotation.z=this.speed<.3?Math.sin(i*.8)*.15:0}},fu={jersey:`#f5d000`,shorts:`#1b1b22`,sock:`#f5d000`,skin:`#e0b088`,hair:`#5a3a22`,name:`BYTE`,number:`1`,gloves:`#ffffff`},pu=class{constructor(){m(this,`s`,u(`brain`,{counts:[1,1,1],trans:[[1,1,1],[1,1,1],[1,1,1]],last:-1,shots:0,correct:0})),m(this,`onChange`,null)}probs(){let{counts:e,trans:t,last:n}=this.s,r=e=>e.reduce((e,t)=>e+t,0),i=e.map(t=>t/r(e));if(n<0)return i;let a=t[n],o=a.map(e=>e/r(a)),s=Math.min(.7,(r(a)-3)/6);return i.map((e,t)=>e*(1-s)+o[t]*s)}predict(){if(this.s.shots<2)return Math.floor(Math.random()*3);let e=this.probs(),t=0;for(let n=1;n<3;n++)e[n]>e[t]&&(t=n);return t}learn(e,t){let n=this.s;n.counts[e]++,n.last>=0&&n.trans[n.last][e]++,n.last=e,n.shots++,e===t&&n.correct++,p(`brain`,n),this.onChange?.()}reset(){this.s={counts:[1,1,1],trans:[[1,1,1],[1,1,1],[1,1,1]],last:-1,shots:0,correct:0},p(`brain`,this.s),this.onChange?.()}},mu=class{constructor(e,t,n,r,i,a={}){m(this,`p`,void 0),m(this,`gx`,void 0),m(this,`gz`,void 0),m(this,`x`,0),m(this,`phase`,Math.random()*10),m(this,`state`,`idle`),m(this,`t`,0),m(this,`side`,1),m(this,`diveFrom`,0),m(this,`cooldown`,0),m(this,`armed`,!1),m(this,`brain`,void 0),m(this,`onSave`,null),m(this,`onRead`,null),this.p=new eu(e,t,{...fu,...a}),e.world.removeBody(this.p.body),this.gx=n,this.gz=r,this.brain=i,this.p.heading=0,this.x=n,this.place(n,0)}place(e,t){this.p.body.interpolatedPosition.set(e,.42+t,this.gz+.6)}zoneOf(e){let t=e-this.gx;return t<-.9?0:t>.9?2:1}update(e,t){this.cooldown=Math.max(0,this.cooldown-e);let n=this.p,r=0;if(this.state===`idle`){this.phase+=e;let r=this.gx+Math.sin(this.phase*.9)*.6,i=(r-this.x)/Math.max(e,.001);if(this.x+=(r-this.x)*Math.min(1,e*6),n.speed=Math.min(3,Math.abs(i)*.5),n.heading=0,this.cooldown<=0)for(let e of t){let t=e.body.velocity,n=e.pos.z-this.gz;if(t.z<-6&&n>.5&&n<16&&Math.abs(e.pos.x-this.gx)<7){let r=n/-t.z,i=e.pos.x+t.x*r;if(Math.abs(i-this.gx)>3.4)break;let a=this.zoneOf(i),o=this.brain.predict();this.brain.learn(a,o),this.onRead?.(o,a),this.side=o===0?-1:+(o===2),this.armed=Math.random()<.8,this.state=`dive`,this.t=0,this.diveFrom=this.x;break}}}else if(this.t+=e,n.speed=0,this.state===`dive`){let e=Math.min(1,this.t/.4),t=this.side===0?this.gx:this.gx+this.side*1.75;this.x=this.diveFrom+(t-this.diveFrom)*e,r=Math.sin(e*Math.PI)*(this.side===0?.9:.7),e>=1&&(this.state=`down`,this.t=0)}else if(this.state===`down`)this.t>(this.side===0?.6:1.3)&&(this.state=`up`,this.t=0);else if(this.state===`up`){let e=Math.min(1,this.t/.9),t=this.side===0?this.gx:this.gx+this.side*1.75;this.x=t+(this.gx-t)*e,e>=1&&(this.state=`idle`,this.cooldown=1,this.armed=!1,this.phase=0)}this.place(this.x,r),n.animate(e);let i=this.state===`dive`?Math.min(1,this.t/.3):this.state===`down`?1:this.state===`up`?Math.max(0,1-this.t/.5):0,a=this.side===0?0:i;n.root.rotation.z=-this.side*a*1.35,n.root.position.y+=a*.25,i>0?(n.armL.rotation.x=-3*i,n.armR.rotation.x=-3*i,n.armL.rotation.z=.2,n.armR.rotation.z=-.2):(n.armL.rotation.z=.5,n.armR.rotation.z=-.5,n.armL.rotation.x=-.4,n.armR.rotation.x=-.4),this.armed&&this.state!==`idle`&&this.tryBlock(t)}tryBlock(e){let t=this.gz+.6;for(let n of e){let e=n.body.velocity;if(e.z>-2)continue;let r=n.pos;if(r.z>t+1||r.z<this.gz-.3)continue;let i=this.side===0?.75:1.15,a=this.side===0?this.x:this.x+this.side*.45,o=this.side===0?2.6:1.7;if(Math.abs(r.x-a)<i&&r.y<o){e.z=Math.abs(e.z)*.35+2,e.x=e.x*.3+(this.side===0?(Math.random()-.5)*4:this.side*3),e.y=2.5+Math.random()*1.5,n.body.position.z=Math.max(r.z,t+.2),this.armed=!1,this.onSave?.(n);return}}}},hu={jersey:`#2f6fd6`,shorts:`#0f1b2d`,sock:`#2f6fd6`,skin:`#c99a72`,hair:`#141414`,name:`BYTE`,number:`01`},gu=120,_u=3,vu=class{constructor(e,t,n,r,i){m(this,`ai`,void 0),m(this,`state`,`idle`),m(this,`you`,0),m(this,`them`,0),m(this,`t`,0),m(this,`left`,gu),m(this,`think`,0),m(this,`goalTo`,new z),m(this,`aiMax`,0),m(this,`shootCd`,0),m(this,`pending`,null),m(this,`defendT`,0),m(this,`lastClock`,``),m(this,`countSaid`,-1),m(this,`home`,new z(Ft[0]+2,Ye.z0+3)),m(this,`cage`,void 0),m(this,`ball`,void 0),m(this,`host`,void 0),m(this,`tmp`,new z),this.cage=n,this.ball=r,this.host=i,this.ai=new eu(e,t,hu),this.ai.teleport(this.home.x,this.home.y,0);let a=new T;e.world.addEventListener(`postStep`,()=>{let e=r.body.position;this.state===`play`&&!this.pending&&(n.east.lineCross(a,e)||n.east.crossed(e)?this.pending=`you`:(n.west.lineCross(a,e)||n.west.crossed(e))&&(this.pending=`byte`)),a.set(e.x,e.y,e.z)})}get running(){return this.state!==`idle`&&this.state!==`over`}start(){this.you=0,this.them=0,this.left=gu,this.kickoff(),H.whistle(),this.host.say(`matchStart`)}kickoff(){let[e,t]=Ft;this.host.player.teleport(e-3,t,Math.PI/2),this.ai.teleport(e+3,t,-Math.PI/2),this.ball.reset(new T(e,.34,t)),this.state=`countdown`,this.t=0,this.pending=null,this.countSaid=-1,this.updateBoard()}stop(e){this.state=`idle`,this.host.hud(null),this.cage.board.label=e,this.updateBoard(),this.ai.teleport(this.home.x,this.home.y,0),this.ball.reset()}updateBoard(){let e=Math.floor(this.left/60),t=Math.floor(this.left%60),n=`${e}:${String(t).padStart(2,`0`)}`,r=this.cage.board;if((r.you!==this.you||r.ai!==this.them||r.clock!==n||this.lastClock===``)&&(r.you=this.you,r.ai=this.them,r.clock=n,mn(this.cage.boardTex)),this.lastClock=n,this.running){let e=this.host.lang()===`fr`;this.host.hud(`${e?`VOUS`:`YOU`} ${this.you} – ${this.them} BYTE · ${n}`)}}inside(e,t){return e>Ye.x0-.5&&e<Ye.x1+.5&&t>Ye.z0-.5&&t<Ye.z1+.5}update(e){let t=this.ai,n=this.ball;if(this.state===`idle`||this.state===`over`){let n=this.home.x-t.position.x,r=this.home.y-t.position.z,i=Math.hypot(n,r);this.tmp.set(i>.3?n/i:0,i>.3?r/i:0),t.move(this.tmp,!1,e,!1,3),i<.3&&t.faceTowards(this.host.player.position.x,this.host.player.position.z),t.animate(e);return}this.t+=e;let r=this.host.player.position;if(!this.inside(r.x,r.z)){this.host.toast(this.host.lang()===`fr`?`Match abandonné`:`Match abandoned`,this.host.lang()===`fr`?`Vous êtes sorti de la cage`:`You left the cage`,`info`),this.stop(``);return}if(this.state===`countdown`){let n=3-Math.floor(this.t);n!==this.countSaid&&n>0&&(this.countSaid=n,this.host.toast(String(n),``,`goal`),H.tick(!1)),t.move(this.tmp.set(0,0),!1,e,!1),t.animate(e),this.t>=3&&(this.state=`play`,this.t=0,H.whistle());return}if(this.state===`goal`){t.move(this.tmp.set(0,0),!1,e,!1),t.animate(e),this.t>2.6&&(this.you>=_u||this.them>=_u||this.left<=0?this.finish():this.kickoff());return}if(this.left=Math.max(0,this.left-e),this.updateBoard(),this.left<=0){this.finish();return}if(this.pending===`you`||this.cage.east.contains(n.pos))return this.scored(!0);if(this.pending===`byte`||this.cage.west.contains(n.pos))return this.scored(!1);this.shootCd=Math.max(0,this.shootCd-e),this.think-=e;let i=n.pos.x,a=n.pos.z,o=t.position.x,s=t.position.z,c=this.cage.west.o.x,l=this.cage.west.o.z,u=this.cage.east.o.x,d=this.cage.east.o.z,f=Math.hypot(i-o,a-s),p=Math.hypot(i-r.x,a-r.z);if(this.think<=0){this.think=.15;let e=c-i,t=l-a,n=Math.hypot(e,t)||1,r=p<1.4&&f>1.2;if(this.defendT=r?this.defendT+.15:0,this.defendT>3.2&&(this.defendT=0),r&&this.defendT<1.1){let e=u-i,t=d-a,n=Math.hypot(e,t)||1;this.goalTo.set(i+e/n*1.6,a+t/n*1.6),this.aiMax=5.6}else this.goalTo.set(i-e/n*.55,a-t/n*.55),this.aiMax=r?6.4:f>4?7.2:5.4;this.goalTo.x=Math.max(Ye.x0+.8,Math.min(Ye.x1-.8,this.goalTo.x)),this.goalTo.y=Math.max(Ye.z0+.8,Math.min(Ye.z1-.8,this.goalTo.y))}let m=this.goalTo.x-o,h=this.goalTo.y-s,g=Math.hypot(m,h);if(this.tmp.set(g>.15?m/g:0,g>.15?h/g:0),t.move(this.tmp,!1,e,!1,this.aiMax),f<1.25&&n.pos.y<.8&&p>f-.4){let e=c-i,r=l-a,o=Math.hypot(e,r)||1,s=n.body.velocity;if(o<9.5&&Math.abs(r)<6&&this.shootCd<=0){let e=l+(Math.random()-.5)*3.2,r=c-.6-i,o=e-a,u=Math.hypot(r,o)||1,d=13+Math.random()*5;s.x=r/u*d,s.z=o/u*d,s.y=1.5+Math.random()*2,n.body.wakeUp(),t.faceTowards(c,e),t.startKick(),H.kick(.7,{x:i,z:a}),this.shootCd=1.2}else if(i<Ye.x0+1.3||i>Ye.x1-1.3||a<Ye.z0+1.3||a>Ye.z1-1.3){let e=(Ft[0]+c)/2-i,r=Ft[1]-a,o=Math.hypot(e,r)||1;s.x=e/o*6,s.z=r/o*6,s.y=2.2,n.body.wakeUp(),t.startKick(),H.kick(.35,{x:i,z:a}),this.shootCd=Math.max(this.shootCd,.5)}else{let t=5.2,i=(s.x*e+s.z*r)/o;i<t&&(s.x+=e/o*(t-i)*.5,s.z+=r/o*(t-i)*.5,n.body.wakeUp())}}t.animate(e)}scored(e){e?this.you++:this.them++,this.state=`goal`,this.t=0;let t=e?this.cage.east:this.cage.west;t.shake(this.ball.pos.x,this.ball.pos.y,this.ball.pos.z),H.net({x:this.ball.pos.x,z:this.ball.pos.z}),e?(H.cheer(.7),this.host.player.celebrate(),this.host.celebrate(!0,t.o.x,t.o.z),this.host.say(`matchGoalYou`)):(H.groan(),this.ai.celebrate(),this.host.celebrate(!1,t.o.x,t.o.z),this.host.say(`matchGoalAi`));let n=this.host.lang()===`fr`;this.host.toast(e?n?`BUT !`:`GOAL!`:n?`BUT DE BYTE`:`BYTE SCORES`,`${n?`VOUS`:`YOU`} ${this.you} – ${this.them} BYTE`,`goal`),this.updateBoard()}finish(){this.state=`over`,H.whistle(!0);let e=this.host.lang()===`fr`,t=this.you>this.them,n=this.you===this.them,r=t?e?`VICTOIRE !`:`YOU WIN!`:n?e?`MATCH NUL`:`DRAW`:e?`BYTE GAGNE`:`BYTE WINS`;this.host.toast(r,`${e?`VOUS`:`YOU`} ${this.you} – ${this.them} BYTE`,`goal`),this.host.say(t?`matchWin`:n?`matchDraw`:`matchLose`),t&&(H.cheer(1),this.host.onWin(this.them===0)),this.host.hud(null),this.cage.board.label=e?`Dernier match : ${this.you} – ${this.them} · Entrée pour rejouer`:`Last match: ${this.you} – ${this.them} · Enter to play again`,this.updateBoard(),mn(this.cage.boardTex),window.setTimeout(()=>{this.state===`over`&&(this.state=`idle`,this.ball.reset())},3e3)}},yu=null;function bu(){return yu||(yu=j(128,128,(e,t,n)=>{e.clearRect(0,0,t,n),e.strokeStyle=`rgba(255,255,255,0.95)`,e.lineWidth=5,e.beginPath(),e.moveTo(0,n/2),e.lineTo(t/2,0),e.lineTo(t,n/2),e.lineTo(t/2,n),e.closePath(),e.stroke()},{liveLang:!1}),yu.wrapS=yu.wrapT=V,yu)}var xu=class{constructor(e,t){m(this,`o`,void 0),m(this,`crossbar`,void 0),m(this,`posts`,[]),m(this,`back`,void 0),m(this,`backBase`,void 0),m(this,`bulge`,0),m(this,`bulgeX`,0),m(this,`bulgeY`,0),m(this,`group`,new sn),m(this,`cooldown`,0),this.o=t;let{x:n,z:r,width:i,height:a,depth:o}=t,s=Q(t.color??`#ffffff`),c=this.group;c.position.set(n,0,r);let l=t.rot??0;c.rotation.y=l,e.scene.add(c);let u=Math.cos(l),d=Math.sin(l),f=(e,t)=>[n+e*u+t*d,r-e*d+t*u],p=(e=0)=>{let t=new Wa().setFromEuler(0,l,0),n=new Wa().setFromEuler(e,0,0);return t.mult(n)},h=.09;for(let e of[-1,1]){let t=new C(new bt(h,h,a+h,10),s);t.position.set(e*i/2,(a+h)/2,0),t.castShadow=!0,c.add(t);let n=new C(new bt(.04,.04,Math.hypot(o,a),6),Q(`#d8dde3`));n.position.set(e*i/2,a/2,-o/2),n.rotation.x=Math.atan2(o,a),c.add(n);let r=new C(new bt(.04,.04,o,6),Q(`#d8dde3`));r.rotation.x=Math.PI/2,r.position.set(e*i/2,.04,-o/2),c.add(r)}let g=new C(new bt(h,h,i+h*2,10),s);g.rotation.z=Math.PI/2,g.position.set(0,a,0),g.castShadow=!0,c.add(g);let _=bu(),v=(e,t)=>{let n=_.clone();return n.repeat.set(e,t),n.needsUpdate=!0,new U({map:n,transparent:!0,alphaTest:.35,side:2,depthWrite:!0})},y=new W(i,Math.hypot(o,a),12,8);this.back=new C(y,v(i*2.4,a*2.4)),this.back.position.set(0,a/2,-o/2),this.back.rotation.x=Math.atan2(o,a),c.add(this.back),this.backBase=y.attributes.position.array.slice();for(let e of[-1,1]){let t=new ct;t.moveTo(0,0),t.lineTo(-o,0),t.lineTo(0,a),t.closePath();let n=new C(new Xt(t),v(1,1));n.material.map.repeat.set(2.4,2.4),n.rotation.y=-Math.PI/2,n.position.set(e*i/2,0,0),c.add(n)}let b=e.physics;for(let e of[-1,1]){let t=new X({mass:0,material:b.mat.hard,collisionFilterGroup:Z.STATIC});t.addShape(new Is(.11,.11,a,8));let[n,r]=f(e*i/2,0);t.position.set(n,a/2,r),b.world.addBody(t),this.posts.push(t)}let x=new X({mass:0,material:b.mat.hard,collisionFilterGroup:Z.STATIC});x.addShape(new to(new J(i/2,h,h))),x.position.set(n,a,r),x.quaternion.copy(p()),b.world.addBody(x),this.crossbar=x;let S=Math.atan2(o,a),w=new X({mass:0,material:b.mat.net,collisionFilterGroup:Z.STATIC});w.addShape(new to(new J(i/2,Math.hypot(o,a)/2,.06)));let[T,E]=f(0,-o/2-.08);w.position.set(T,a/2,E),w.quaternion.copy(p(S)),b.world.addBody(w);for(let e of[-1,1]){let t=new X({mass:0,material:b.mat.net,collisionFilterGroup:Z.STATIC});t.addShape(new to(new J(.05,a/2,o/2)));let[n,r]=f(e*(i/2+.06),-o/2);t.position.set(n,a/2,r),t.quaternion.copy(p()),b.world.addBody(t)}}contains(e){let{x:t,z:n,width:r,height:i,depth:a}=this.o,o=this.o.rot??0,s=e.x-t,c=e.z-n,l=Math.cos(o),u=Math.sin(o),d=s*l-c*u,f=s*u+c*l;if(Math.abs(d)>r/2-.05||f>-.39||f<-a)return!1;let p=f>-1.04?i:i*(1+f/a)+.3;return e.y<Math.min(i,p)}local(e){let t=this.o.rot??0,n=e.x-this.o.x,r=e.z-this.o.z,i=Math.cos(t),a=Math.sin(t);return[n*i-r*a,n*a+r*i]}lineCross(e,t){let[n,r]=this.local(e),[i,a]=this.local(t);if(!(r>0&&a<=0))return!1;let o=r/(r-a),s=n+(i-n)*o,c=e.y+(t.y-e.y)*o;return Math.abs(s)<this.o.width/2-.05&&c<this.o.height}crossed(e){let{x:t,z:n,width:r,height:i,depth:a}=this.o,o=this.o.rot??0,s=e.x-t,c=e.z-n,l=Math.cos(o),u=Math.sin(o),d=s*l-c*u,f=s*u+c*l;return f<-.34&&f>-a-.3&&Math.abs(d)<r/2&&e.y<i+.05}shake(e,t,n=this.o.z){let r=this.o.rot??0;this.bulge=1,this.bulgeX=(e-this.o.x)*Math.cos(r)-(n-this.o.z)*Math.sin(r),this.bulgeY=t}update(e){if(this.cooldown=Math.max(0,this.cooldown-e),this.bulge<=.001)return;this.bulge*=Math.exp(-e*2.2);let t=performance.now()*.02,n=this.back.geometry.attributes.position,r=n.array,i=Math.hypot(this.o.depth,this.o.height);for(let e=0;e<n.count;e++){let n=this.backBase[e*3],a=this.backBase[e*3+1],o=(this.bulgeY/this.o.height-.5)*i,s=(n-this.bulgeX)**2+(a-o)**2,c=Math.exp(-s/1.6)*this.bulge;r[e*3+2]=this.backBase[e*3+2]-c*(.55+Math.sin(t)*.08)}n.needsUpdate=!0,this.bulge<=.001&&(r.set(this.backBase),n.needsUpdate=!0)}};function Su(e){let t=e.batch,{x0:n,z0:r,x1:i,z1:a}=Ye,o=i-n,s=a-r,[c,l]=Ft,u=j(1024,768,(e,t,n)=>{for(let r=0;r<12;r++)e.fillStyle=r%2?`#2f7d3a`:`#348742`,e.fillRect(r*t/12,0,t/12+1,n);e.strokeStyle=`rgba(255,255,255,0.9)`,e.lineWidth=6,e.strokeRect(18,18,t-36,n-36),e.beginPath(),e.moveTo(t/2,18),e.lineTo(t/2,n-18),e.stroke(),e.beginPath(),e.arc(t/2,n/2,90,0,Math.PI*2),e.stroke(),e.fillStyle=`#ffffff`,e.beginPath(),e.arc(t/2,n/2,8,0,Math.PI*2),e.fill();for(let r of[0,1]){let i=r?t-18-130:18;e.strokeRect(i,n/2-170,130,340)}},{liveLang:!1}),f=new C(new W(o,s),new U({map:u}));f.rotation.x=-Math.PI/2,f.position.set(c,.025,l),f.receiveShadow=!0,e.scene.add(f);let p=3.2,m=3.2,h=j(64,64,(e,t,n)=>{e.clearRect(0,0,t,n),e.strokeStyle=`rgba(200,210,220,0.85)`,e.lineWidth=3,e.beginPath(),e.moveTo(0,n/2),e.lineTo(t/2,0),e.lineTo(t,n/2),e.lineTo(t/2,n),e.closePath(),e.stroke()},{liveLang:!1});h.wrapS=h.wrapT=V;let g=e=>{let t=h.clone();return t.repeat.set(e/.6,p/.6),t.needsUpdate=!0,new U({map:t,transparent:!0,alphaTest:.3,side:2})},_=(n,r,i,a)=>{let o=Math.hypot(i-n,a-r),s=(n+i)/2,c=(r+a)/2,l=Math.atan2(i-n,a-r)-Math.PI/2,u=new C(new W(o,p),g(o));u.position.set(s,p/2,c),u.rotation.y=l,e.scene.add(u),t.add($.box(o,.08,.08),Q(`#59636e`),s,p,c,0,l),e.physics.staticBox(s,p/2,c,o/2,p/2,.12,l,e.physics.mat.net);let d=Math.max(1,Math.round(o/3));for(let e=0;e<=d;e++){let o=e/d;t.add($.cyl(.06,.06,3.3000000000000003,6),Q(`#59636e`),n+(i-n)*o,3.3000000000000003/2,r+(a-r)*o)}};_(n,r,c-m/2,r),_(c+m/2,r,i,r),_(i,r,i,a),_(i,a,n,a),_(n,a,n,r);let v=new xu(e,{x:n+1.6,z:l,width:3.8,height:2,depth:1.2,rot:Math.PI/2,color:`#ffffff`}),y=new xu(e,{x:i-1.6,z:l,width:3.8,height:2,depth:1.2,rot:-Math.PI/2,color:N.brand}),b={you:0,ai:0,clock:`2:00`,label:``},x=j(768,192,(e,t,n)=>{e.fillStyle=`#0b1424`,e.fillRect(0,0,t,n),e.fillStyle=`rgba(255,255,255,0.05)`;for(let r=4;r<n;r+=8)for(let n=4;n<t;n+=8)e.fillRect(n,r,2,2);e.textBaseline=`middle`,e.textAlign=`center`;let r=d===`fr`;e.fillStyle=N.brand,e.font=`34px ${F}`,e.fillText(r?`VOUS`:`YOU`,120,64),e.fillStyle=`#5aa9ff`,e.fillText(`BYTE`,t-120,64),e.fillStyle=`#ffffff`,e.font=`92px ${F}`,e.fillText(`${b.you}  –  ${b.ai}`,t/2,78),e.font=`34px ${F}`,e.fillStyle=N.test,e.fillText(b.clock,120,132),e.fillStyle=`rgba(255,255,255,0.75)`,e.font=`600 26px ${P}`,e.fillText(b.label||(r?`Match à l’entrée · Tirs au but sur le point orange`:`Match at the entrance · Penalties on the orange spot`),t/2,162)});for(let e of[-1,1])t.add($.box(.18,5.2,.18),Q(`#2b3442`),c+e*3.1,2.6,r-.3);t.add($.box(6.4,1.75,.2),Q(`#1a2230`),c,4.5,r-.32);let S=new C(new W(6,1.5),new Re({map:x,toneMapped:!1}));S.position.set(c,4.5,r-.2);let w=S.clone();w.rotation.y=Math.PI,w.position.z=r-.44,e.scene.add(S,w);let T=new U({color:`#c9d2dc`,emissive:`#fff6d8`,emissiveIntensity:0});for(let[r,o]of[[n-.6,a+.6],[i+.6,a+.6]]){t.add($.box(.3,8,.3),Q(`#6f7a86`),r,4,o);let n=new C($.box(1.6,.9,.3),T);n.position.set(r,8.2,o),n.lookAt(c,0,l),e.scene.add(n)}let E=new Xe(`#fff1d0`,0,45,.9,.6,1.2);return E.position.set(c,12,a+2),E.target.position.set(c,0,l),e.scene.add(E,E.target),e.nightAware.push(e=>{T.emissiveIntensity=e*2,E.intensity=e*120,E.visible=e>.01}),{west:v,east:y,board:b,boardTex:x,entrance:[c,r-1.6]}}function Cu(e,t){let n=e.batch,[r,i]=cn,a=Q(`#f4f1ea`),o=Q(`#1f6fb5`),s=Q(`#8a5a35`),c=r+3.5,l=i-6.4;n.add($.box(6.4,3.4,.5),a,c,1.7,l),n.add($.box(6.6,.22,.7),a,c,3.5,l),n.add($.box(1.2,2.1,.1),o,c-1.4,1.05,l+.27),n.add($.cyl(.6,.6,.1,12),o,c-1.4,2.1,l+.27,Math.PI/2),n.add($.sphere(.06,6,4),Q(`#d8b24a`),c-1,1.05,l+.34);for(let e of[.6,2.1]){n.add($.box(.9,.9,.08),Q(`#2b3a4a`),c+e,2,l+.27);for(let t=0;t<4;t++)n.add($.box(.05,.9,.08),o,c+e-.34+t*.23,2,l+.33);for(let t of[-1,1])n.add($.box(.45,.95,.06),o,c+e+t*.7,2,l+.3)}for(let e=0;e<9;e++)n.add($.ico(.32+e%3*.08),Q(e%2?`#c23b8a`:`#2f6e3a`),c+2.6+Math.sin(e)*.4,2.5+Math.cos(e*1.7)*.6,l+.45);e.physics.staticBox(c,1.7,l,3.2,1.7,.25);let u=j(768,256,(e,t,n)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,n),e.fillStyle=`#1f6fb5`,e.fillRect(0,0,t,18),e.fillRect(0,n-18,t,18),me(e,`tn`,34,58,180,120),e.fillStyle=`#0f1b2d`,e.textAlign=`left`,e.textBaseline=`middle`,Oe(e,`SFAX`,e=>`${e}px ${F}`,92,t-280),e.fillText(`SFAX`,248,106),e.fillStyle=`#1f6fb5`,e.font=`700 46px ${P}`,e.fillText(d===`fr`?`TUNISIE · صفاقس`:`TUNISIA · صفاقس`,252,182)}),f=r-4,p=i-4.6;for(let e of[-1,1])n.add($.box(.12,2.6,.12),s,f+e*1.7,1.3,p);let m=new C(new W(3.6,1.2),new Re({map:u,toneMapped:!1}));m.position.set(f,2.1,p+.08),e.scene.add(m),n.add($.box(3.7,1.3,.08),s,f,2.1,p);let h=[[r-1.5,i+.5],[r+2.6,i+2.2]];for(let[t,r]of h){n.add($.cyl(.55,.55,.06,14),a,t,.75,r),n.add($.cyl(.05,.05,.75,6),Q(`#59636e`),t,.375,r),n.add($.cyl(.3,.3,.04,10),Q(`#59636e`),t,.02,r),n.add($.cyl(.04,.04,2.5,6),s,t,1.25,r),n.add($.cone(1.25,.5,8),a,t,2.55,r),n.add($.cyl(1.26,1.26,.14,8),o,t,2.27,r),n.add($.sphere(.07,6,4),o,t,2.82,r);for(let e of[.4,2.3,4.2]){let i=t+Math.cos(e)*.95,a=r+Math.sin(e)*.95;n.add($.box(.42,.05,.42),o,i,.45,a,0,-e),n.add($.box(.42,.5,.05),o,i+Math.cos(e)*.2,.7,a+Math.sin(e)*.2,0,-e+Math.PI/2);for(let[e,t]of[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]])n.add($.box(.04,.45,.04),o,i+e,.225,a+t)}n.add($.sphere(.13,8,6),Q(`#c9ccd2`),t-.15,.88,r),n.add($.cone(.08,.12,6),Q(`#c9ccd2`),t-.15,1.04,r),n.add($.cyl(.015,.025,.2,4),Q(`#c9ccd2`),t-.02,.92,r,0,0,-.9);for(let e=0;e<3;e++)n.add($.cyl(.045,.035,.12,6),Q(`#3e9a4a`,{emissive:`#163d1b`,emissiveIntensity:.4}),t+.18+e%2*.1,.84,r-.15+e*.14,0,0,0,1,1,1,!1);e.physics.staticCylinder(t,.4,r,.55,.8)}e.interactives.push({id:`tea`,x:h[0][0],z:h[0][1]+1.6,r:2.4,label:()=>d===`fr`?`Prendre un thé à la menthe`:`Have a mint tea`,action:t});let g=[[r-6.5,i+5],[r-7.5,i-1],[r+.5,i+7],[r+6,i+6.5],[r-3,i-7.5]];for(let[t,r,i]of g.map(([e,t],n)=>[e,t,.85+n%3*.15])){n.add($.cyl(.18*i,.3*i,1.6*i,6),Q(`#6e6458`),t,.8*i,r,.12,0,-.1),n.add($.cyl(.12*i,.18*i,1*i,5),Q(`#6e6458`),t+.35*i,1.75*i,r,0,0,-.5);for(let e=0;e<5;e++){let a=e*1.3;n.add($.ico(.85*i,0),Q(e%2?`#8a9a6b`:`#7a8b5c`),t+Math.cos(a)*.8*i,(2.3+e%2*.35)*i,r+Math.sin(a)*.7*i)}e.physics.staticCylinder(t,.8,r,.3*i,1.6)}let _=r+7.8,v=i+.5,y=.35,b=new sn,x=new C($.box(1.7,.7,4.6),a);x.position.y=.45,b.add(x);for(let e of[-1,1]){let t=new C($.box(1.2,.68,1.2),a);t.position.set(0,.47,e*2.6),t.rotation.y=Math.PI/4,t.scale.set(1,1,1),b.add(t)}let S=new C($.box(1.74,.16,4.62),o);S.position.y=.66,b.add(S);let w=new C($.box(1.74,.08,4.62),Q(`#d23b2f`));w.position.y=.5,b.add(w);let T=new C($.box(1.4,.1,4.2),s);T.position.y=.76,b.add(T);for(let e of[-1,.6]){let t=new C($.box(1.45,.08,.35),s);t.position.set(0,.85,e),b.add(t)}let E=new C($.cyl(.05,.06,3,6),s);E.position.set(0,2.2,.9),b.add(E);let D=new C($.box(.08,.05,2.6),s);D.position.set(.7,.95,-.3),D.rotation.y=.2,b.add(D);let O=new C($.ico(.55,1),Q(`#5b7f8c`));O.position.set(-1.6,.18,-.8),O.scale.set(1.2,.35,1),b.add(O);for(let[e,t]of[[-1.4,1.2],[-1.9,.6]]){let n=new C($.sphere(.2,8,6),Q(`#f07d2a`));n.position.set(e,.2,t),b.add(n)}b.position.set(_,0,v),b.rotation.set(0,y,.06),n.addObject(b),e.physics.staticBox(_,.5,v,.85,.5,2.9,y);for(let[e,t]of[[r-3.6,i-2.2],[r-3.1,i-2.9]])n.add($.sphere(.32,8,6),Q(`#b8643a`),e,.38,t,0,0,0,1,1.3,1),n.add($.cyl(.1,.16,.3,6),Q(`#b8643a`),e,.88,t)}function wu(e,t){let n=e.batch,{cx:r,cz:i,r:a}=pt,o=()=>d===`fr`,s=new C(new bt(a+1.2,a+1.3,.16,48),Q(`#cfd3d8`));s.position.set(r,.04,i),s.receiveShadow=!0,e.scene.add(s);let c=new C(new re(a-3.2,a-2.9,48),Q(`#bcc1c8`,{side:2}));c.rotation.x=-Math.PI/2,c.position.set(r,.13,i),e.scene.add(c);let l=[{id:`histolens`,a:-1},{id:`wattcast`,a:-.5},{id:`threatscope`,a:0},{id:`lessons`,a:.5},{id:`log`,a:1}],u={histolens:()=>o()?[`HISTOLENS`,`Le vrai modèle, dans votre navigateur`]:[`HISTOLENS`,`The real model, in your browser`],wattcast:()=>o()?[`WATTCAST`,`Rejouez n’importe quel jour depuis 2019`]:[`WATTCAST`,`Replay any day since 2019`],threatscope:()=>o()?[`THREATSCOPE`,`Le flux d’attaques, en direct`]:[`THREATSCOPE`,`Watch the attack feed live`],lessons:()=>o()?[`LEÇONS APPRISES`,`Ce qui n’a pas marché, et pourquoi`]:[`LESSONS LEARNED`,`What broke, and why`],log:()=>o()?[`JOURNAL D’ENTRAÎNEMENT`,`Mon activité GitHub récente`]:[`TRAINING LOG`,`My latest GitHub activity`]},f={histolens:`#e0559b`,wattcast:`#f2b544`,threatscope:`#ff5a3c`,lessons:`#8ad17a`,log:`#5aa9ff`},p=3.6;for(let s of l){let c=r+Math.sin(s.a)*a,l=i-Math.cos(s.a)*a,d=-s.a,m=j(768,512,(e,t,n)=>{e.fillStyle=`#0b1424`,e.fillRect(0,0,t,n),Tu(e,s.id,t,n,f[s.id]);let[r,i]=u[s.id]();e.fillStyle=`rgba(11,20,36,0.88)`,e.fillRect(0,n-128,t,128),e.fillStyle=f[s.id],e.fillRect(0,n-128,t,6),e.fillStyle=`#ffffff`,e.textBaseline=`alphabetic`,Oe(e,r,e=>`${e}px ${F}`,46,t-60),e.fillText(r,30,n-66),e.fillStyle=`rgba(255,255,255,0.78)`,e.font=`600 28px ${P}`,e.fillText(i,30,n-26)});n.add($.box(3.7,p,.3),Q(`#14213a`),c,p/2,l,0,d),e.physics.staticBox(c,p/2,l,1.85,p/2,.15,d);let h=-Math.sin(s.a),g=Math.cos(s.a),_=new C(new W(3.4,2.27),new Re({map:m,toneMapped:!1}));_.position.set(c+h*.17,2,l+g*.17),_.rotation.y=d,e.scene.add(_),n.add($.box(3.7,.16,.34),Q(f[s.id],{emissive:f[s.id],emissiveIntensity:.3}),c,3.68,l,0,d);let v=r+Math.sin(s.a)*(a-2.3),y=i-Math.cos(s.a)*(a-2.3);n.add($.cyl(.32,.4,.9,10),Q(`#e9e6df`),v,.45,y),n.add($.cyl(.34,.34,.06,16),Q(f[s.id],{emissive:f[s.id],emissiveIntensity:.6}),v,.93,y,0,0,0,1,1,1,!1),e.physics.staticCylinder(v,.45,y,.4,.9);let b=r+Math.sin(s.a)*(a-3.5),x=i-Math.cos(s.a)*(a-3.5);e.interactives.push({id:`lab-${s.id}`,x:b,z:x,r:1.9,label:()=>({histolens:[`Try HistoLens in your browser`,`Essayer HistoLens dans le navigateur`],wattcast:[`Replay a day with WattCast`,`Rejouer un jour avec WattCast`],threatscope:[`Watch ThreatScope live`,`Voir ThreatScope en direct`],lessons:[`Read the lessons learned`,`Lire les leçons apprises`],log:[`Open the training log`,`Ouvrir le journal d’entraînement`]})[s.id][+!!o()],action:()=>t(s.id)})}let m=j(1024,160,(e,t,n)=>{e.fillStyle=N.brand,e.fillRect(0,0,t,n),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`;let r=o()?`SALLE D’ANALYSE`:`MATCH ANALYSIS`;Oe(e,r,e=>`${e}px ${F}`,92,t-60),e.fillText(r,t/2,n/2-12),e.font=`700 32px ${P}`,e.fillText(o()?`Démos de modèles en direct`:`Live model demos`,t/2,n-26)}),h=r,g=i-a-.2;for(let e of[-1,1])n.add($.box(.2,6.2,.2),Q(`#14213a`),h+e*3.2,3.1,g);n.add($.box(6.8,1.15,.12),Q(`#14213a`),h,5.6,g-.05);let _=new C(new W(6.6,1.03),new Re({map:m,toneMapped:!1}));_.position.set(h,5.6,g+.02),e.scene.add(_)}function Tu(e,t,n,r,i){let a=r-128;if(t===`histolens`){let t=n/8;for(let n=0;n<8;n++)for(let r=0;r<Math.ceil(a/t);r++){let i=Math.sin(n*12.9+r*78.2)*43758.5%1;e.fillStyle=`rgb(${150+Math.abs(i)*90}, ${90+Math.abs(i)*60}, ${170+Math.abs(i)*50})`,e.fillRect(n*t,r*t,t-3,t-3),e.fillStyle=`rgba(80,30,110,0.45)`;for(let i=0;i<6;i++)e.beginPath(),e.arc(n*t+(i*37+n*11)%t,r*t+(i*53+r*7)%t,4+i%3*2,0,Math.PI*2),e.fill()}e.strokeStyle=i,e.lineWidth=6,e.strokeRect(3*t,t,t*2-3,t*2-3)}else if(t===`wattcast`){e.strokeStyle=`rgba(255,255,255,0.08)`,e.lineWidth=2;for(let t=40;t<a;t+=50)e.beginPath(),e.moveTo(30,t),e.lineTo(n-30,t),e.stroke();let t=(e,t)=>r=>a*.62-Math.sin(r/n*Math.PI*2-1.2)*t-Math.sin(r/n*Math.PI*6)*18+e,r=t(0,90),o=t(10,86);e.fillStyle=`rgba(242,181,68,0.18)`,e.beginPath();for(let t=30;t<=n-30;t+=8)e.lineTo(t,o(t)-26);for(let t=n-30;t>=30;t-=8)e.lineTo(t,o(t)+26);e.fill(),e.lineWidth=6,e.strokeStyle=`#ffffff`,e.beginPath();for(let t=30;t<=n-30;t+=8)e.lineTo(t,r(t));e.stroke(),e.strokeStyle=i,e.beginPath();for(let t=30;t<=n-30;t+=8)e.lineTo(t,o(t));e.stroke()}else if(t===`threatscope`)e.font=`600 22px ${P}`,[`tcp · http · normal`,`tcp · private · neptune`,`udp · domain_u · normal`,`tcp · http · apache2 ⚠ new`,`icmp · ecr_i · smurf`,`tcp · smtp · normal`].forEach((t,r)=>{let a=/neptune|apache2|smurf/.test(t);e.fillStyle=a?`rgba(255,90,60,0.22)`:`rgba(255,255,255,0.05)`,e.fillRect(30,26+r*54,n-60,44),e.fillStyle=a?i:`rgba(255,255,255,0.7)`,e.fillText((a?`● ALERT  `:`○ ok     `)+t,46,56+r*54)});else if(t===`lessons`){e.fillStyle=`#b08a5a`,e.fillRect(0,0,n,a);let t=[`#ffe680`,`#ffb3c7`,`#b8e6ff`,`#c9f2b6`,`#ffd29e`,`#e3ccff`];for(let n=0;n<8;n++){let r=40+n%4*176,i=30+Math.floor(n/4)*170;e.save(),e.translate(r+70,i+70),e.rotate((n*37%9-4)*.02),e.fillStyle=t[n%t.length],e.fillRect(-70,-70,140,140),e.fillStyle=`rgba(0,0,0,0.25)`;for(let t=0;t<4;t++)e.fillRect(-52,-40+t*24,104-t%2*30,6);e.fillStyle=`#d23b2f`,e.beginPath(),e.arc(0,-60,7,0,Math.PI*2),e.fill(),e.restore()}}else{for(let t=0;t<30;t++)for(let n=0;n<7;n++){let r=Math.abs(Math.sin(t*3.1+n*1.7));e.fillStyle=r>.8?i:r>.55?`rgba(90,169,255,0.6)`:r>.3?`rgba(90,169,255,0.3)`:`rgba(255,255,255,0.07)`,e.fillRect(40+t*22,40+n*22,18,18)}e.fillStyle=`rgba(255,255,255,0.8)`,e.font=`600 24px ${P}`,Pe(e,`git log --oneline`,40,236,n-80,30,1)}}var Eu=5,Du=7.2,Ou=16,ku=[-1.35,0,1.35],Au=class{constructor(e,t,n){m(this,`p`,void 0),m(this,`x`,void 0),m(this,`cz`,void 0),m(this,`z`,void 0),m(this,`side`,0),m(this,`state`,`ready`),m(this,`t`,0),m(this,`armed`,!1),m(this,`from`,0),this.p=e,this.x=t,this.cz=n,this.z=n}reset(){this.state=`ready`,this.side=0,this.z=this.cz,this.t=0,this.armed=!1}dive(e,t){this.state===`ready`&&(this.side=e,this.armed=t,this.state=`dive`,this.t=0,this.from=this.z)}update(e,t){let n=this.p,r=0;if(this.t+=e,this.state===`ready`)this.z=this.cz+Math.sin(t*2.2)*.25;else{let e=Math.min(1,this.t/.38);this.z=this.from+(this.cz+this.side*1.75-this.from)*e,r=Math.sin(e*Math.PI)*(this.side===0?.85:.6),e>=1&&(this.state=`down`)}let i=n.body;i.position.set(this.x,Xl+r,this.z),i.previousPosition.copy(i.position),i.interpolatedPosition.copy(i.position),i.velocity.setZero(),n.vel.set(0,0,0),n.speed=0,n.heading=-Math.PI/2,n.animate(e);let a=this.state===`ready`?0:Math.min(1,this.t/.28),o=this.side===0?0:a;n.root.rotation.z=-this.side*o*1.35,n.root.position.y+=o*.25,a>0?(n.armL.rotation.x=-3*a,n.armR.rotation.x=-3*a,n.armL.rotation.z=.2,n.armR.rotation.z=-.2):(n.armL.rotation.z=.5,n.armR.rotation.z=-.5,n.armL.rotation.x=-.4,n.armR.rotation.x=-.4)}tryBlock(e){if(!this.armed)return!1;let t=e.body.velocity;if(t.x<2)return!1;let n=e.pos;if(n.x<this.x-1||n.x>this.x+.35)return!1;let r=this.side===0?.8:1.2,i=this.side===0?this.z:this.z+this.side*.45,a=this.side===0?2.5:1.8;return Math.abs(n.z-i)<r&&n.y<a&&(t.x=-Math.abs(t.x)*.35-2,t.z=t.z*.3+(this.side===0?(Math.random()-.5)*4:this.side*3),t.y=2.5+Math.random()*1.5,e.body.position.x=Math.min(n.x,this.x-.2),this.armed=!1,!0)}clearPose(){this.p.root.rotation.z=0}},ju=class{constructor(e,t,n,r,i){m(this,`phase`,`idle`),m(this,`youKeep`,!1),m(this,`you`,[]),m(this,`byte`,[]),m(this,`host`,void 0),m(this,`cage`,void 0),m(this,`ball`,void 0),m(this,`t`,0),m(this,`lineX`,void 0),m(this,`gz`,void 0),m(this,`spot`,void 0),m(this,`byteDiver`,void 0),m(this,`youDiver`,void 0),m(this,`yourDives`,[1,1,1]),m(this,`chosen`,null),m(this,`shotZone`,1),m(this,`saved`,!1),m(this,`savesThisGame`,0),m(this,`marker`,void 0),m(this,`readyT`,0),m(this,`goalHit`,!1);let a=new T;e.world.addEventListener(`postStep`,()=>{let e=r.body.position;this.phase===`flight`&&!this.goalHit&&(n.east.lineCross(a,e)||n.east.crossed(e))&&(this.goalHit=!0),a.set(e.x,e.y,e.z)}),this.host=i,this.cage=n,this.ball=r;let o=n.east.o;this.lineX=o.x,this.gz=o.z,this.spot=new z(o.x-Du,o.z),this.byteDiver=new Au(i.byte,o.x-.5,o.z),this.youDiver=new Au(i.player,o.x-.5,o.z);let s=new re(.22,.32,24);this.marker=new C(s,new Re({color:`#ff5a3c`,transparent:!0,opacity:.9,depthWrite:!1,side:2})),this.marker.rotation.y=Math.PI/2,this.marker.visible=!1,t.add(this.marker)}get running(){return this.phase!==`idle`}get playerLocked(){return this.running&&this.phase!==`over`}start(){this.you=[],this.byte=[],this.savesThisGame=0,this.host.say(`penStart`),H.whistle(),this.setup(!1)}stop(){if(this.phase===`idle`)return;this.phase=`idle`,this.ghost(!1),this.marker.visible=!1,this.byteDiver.clearPose(),this.youDiver.clearPose(),this.host.hud(null),this.host.prompt(null);let e=this.cage.board;e.label=``,e.you=0,e.ai=0,e.clock=`2:00`,mn(this.cage.boardTex),this.ball.reset(),this.host.byte.teleport(Ft[0]+2,this.cage.entrance[1]+4.6,0);let[t,n]=Ft;this.host.player.teleport(t,n,Math.PI/2)}ghost(e){this.host.player.body.collisionResponse=!e,this.host.byte.body.collisionResponse=!e}setup(e){this.ghost(!0),this.youKeep=e,this.phase=`setup`,this.t=0,this.saved=!1,this.goalHit=!1,this.chosen=null,this.byteDiver.reset(),this.youDiver.reset(),this.byteDiver.clearPose(),this.youDiver.clearPose();let{x:t,y:n}=this.spot;this.ball.reset(new T(t,.34,n)),e?(this.host.byte.teleport(t-2.2,n-.4,Math.PI/2),this.host.player.teleport(this.youDiver.x,this.gz,-Math.PI/2)):(this.host.player.teleport(t-1.05,n,Math.PI/2),this.host.byte.teleport(this.byteDiver.x,this.gz,-Math.PI/2)),this.updateHud();let r=this.host.lang()===`fr`,i=this.host.touch;this.host.prompt(e?r?i?`Joystick à gauche / droite pour plonger · KICK pour rester au centre`:`← / → pour plonger · Espace pour rester au centre`:i?`Joystick left / right to dive · KICK to stay in the middle`:`← / → to dive · Space to stay in the middle`:r?i?`Joystick pour viser · maintenez KICK pour tirer`:`← / → pour viser · maintenez Espace pour tirer`:i?`Joystick to aim · hold KICK to shoot`:`← / → to aim · hold Space to shoot`)}aimZ(){let e=this.host.player.forward(new T),t=this.lineX-this.ball.pos.x;return this.ball.pos.z+e.z/Math.max(.05,e.x)*t}zoneOf(e){let t=e-this.gz;return t<-.9?0:t>.9?2:1}keeperInput(e,t){this.youKeep&&this.chosen===null&&(this.phase===`setup`||this.phase===`aim`||this.phase===`flight`)&&(Math.abs(e)>.5?this.chosen=e>0?-1:1:t&&(this.chosen=0))}clampAim(){let e=this.host.player,t=Math.PI/2,n=e.heading-t;n=Math.atan2(Math.sin(n),Math.cos(n)),e.heading=t+Math.max(-.42,Math.min(.42,n))}update(e){if(this.phase===`idle`)return;this.t+=e,this.readyT+=e;let t=this.ball,n=this.host.byte;if(this.youKeep?this.youDiver.update(e,this.readyT):this.byteDiver.update(e,this.readyT),this.phase===`over`){this.t>3.2&&this.stop();return}if(!this.youKeep){let e=this.host.player,n=t.body.velocity.x>6&&t.pos.x>this.spot.x-.5;if(this.phase===`setup`||this.phase===`aim`){this.phase=`aim`;let r=this.aimZ();if(this.marker.visible=Math.abs(r-this.gz)<3.4,this.marker.position.set(this.lineX+.06,1,r),this.marker.material.color.set(Math.abs(r-this.gz)<1.75?`#ff5a3c`:`#9aa4b2`),Math.hypot(e.position.x-(this.spot.x-1.05),e.position.z-this.spot.y)>1.2&&e.teleport(this.spot.x-1.05,this.spot.y,e.heading),n){this.phase=`flight`,this.t=0,this.marker.visible=!1,this.host.prompt(null);let e=t.body.velocity,n=(this.lineX-t.pos.x)/e.x,r=t.pos.z+e.z*n,i=this.zoneOf(r),a=this.host.brain.predict();this.host.brain.learn(i,a);let o=a===0?-1:+(a===2),s=Math.min(1,Math.max(0,(Math.abs(r-this.gz)-.9)/.8)),c=Math.min(1,Math.max(0,(Math.hypot(e.x,e.z)-15)/10)),l=.78-.3*s-.2*c;this.byteDiver.dive(o,a===i&&Math.random()<l)}return}if(this.phase===`flight`&&(this.byteDiver.tryBlock(t)&&(this.saved=!0,H.thud(.8,{x:t.pos.x,z:t.pos.z},.8,`glove`)),this.flightOver()))return;this.phase===`result`&&this.t>2.4&&this.next();return}if(this.phase===`setup`&&(this.phase=`aim`,this.t=0),this.phase===`aim`){if(this.t<1)n.faceTowards(this.lineX,this.gz),n.move(new z(0,0),!1,e,!1);else{let r=t.pos.x-.75-n.position.x,i=t.pos.z-n.position.z,a=Math.hypot(r,i);n.move(new z(r/(a||1),i/(a||1)),!1,e,!1,4.2),a<.35&&this.byteShoots()}n.animate(e);return}if(n.move(new z(0,0),!1,e,!1),n.animate(e),this.phase===`flight`){let e=this.t;if(this.youDiver.state===`ready`&&this.chosen!==null&&e>.05){let e=this.shotZone===this.chosen+1&&Math.random()<.9;this.yourDives[this.chosen+1]++,this.youDiver.dive(this.chosen,e)}if(this.youDiver.tryBlock(t)&&(this.saved=!0,H.thud(.8,{x:t.pos.x,z:t.pos.z},.8,`glove`)),this.flightOver())return}this.phase===`result`&&this.t>2.4&&this.next()}flightOver(){if(this.goalHit||this.cage.east.contains(this.ball.pos))return this.result(!0),!0;let e=this.ball.body.velocity,t=Math.hypot(e.x,e.y,e.z),n=this.saved;return this.t>4||this.t>.7&&t<.6||n&&this.t>1.4||this.t>1&&e.x<-.5&&this.ball.pos.x<this.lineX-2.5?(this.result(!1),!0):!1}byteShoots(){let e=this.ball,t=this.host.byte,n=this.yourDives,r;r=Math.random()<.45?n.indexOf(Math.min(...n)):Math.floor(Math.random()*3),this.shotZone=r;let i=this.gz+ku[r]+(Math.random()-.5)*.5,a=.35+Math.random()*1.25;Math.random()<.12&&(Math.random()<.5?i=this.gz+(r===0?-1:1)*(2.4+Math.random()):a=2.4+Math.random()*.8);let o=16+Math.random()*3,s=(this.lineX+.4-e.pos.x)/o,c=e.body.velocity;c.x=o,c.z=(i-e.pos.z)/s,c.y=(a-e.pos.y+.5*Ou*s*s)/s,e.body.wakeUp(),t.faceTowards(this.lineX,i),t.startKick(),H.kick(.8,{x:e.pos.x,z:e.pos.z}),this.phase=`flight`,this.t=0,this.host.prompt(null)}result(e){this.phase=`result`,this.t=0;let t=this.ball,n=this.host.lang()===`fr`;e&&(this.cage.east.shake(t.pos.x,t.pos.y,t.pos.z),H.net({x:t.pos.x,z:t.pos.z})),this.youKeep?(this.byte.push(e?`goal`:`miss`),e?(H.groan(),this.host.byte.celebrate(),this.host.say(`penByteScore`),this.host.toast(n?`BYTE MARQUE`:`BYTE SCORES`,this.score(),`goal`)):(H.cheer(.7),this.saved&&(this.savesThisGame++,this.host.onSave(),this.host.celebrate(this.lineX,this.gz)),this.host.say(this.saved?`penYouSave`:`penByteMiss`),this.host.toast(this.saved?n?`ARRÊT !`:`SAVED!`:n?`BYTE RATE`:`BYTE MISSES`,this.score(),`goal`))):(this.you.push(e?`goal`:`miss`),e?(H.cheer(.6),this.host.player.celebrate(),this.host.celebrate(this.lineX,this.gz),this.host.say(`penYouScore`),this.host.toast(n?`BUT !`:`GOAL!`,this.score(),`goal`)):(H.groan(),this.host.say(this.saved?`penByteSave`:`penYouMiss`),this.host.toast(this.saved?n?`ARRÊT DE BYTE`:`SAVED BY BYTE`:n?`RATÉ`:`MISSED`,this.score(),`goal`))),this.updateHud()}goals(e){return e.filter(e=>e===`goal`).length}score(){return`${this.host.lang()===`fr`?`VOUS`:`YOU`} ${this.goals(this.you)} – ${this.goals(this.byte)} BYTE`}decided(){let e=this.you.length,t=this.byte.length,n=this.goals(this.you),r=this.goals(this.byte);if(e<=Eu&&t<=Eu){let i=Eu-e;if(n>r+(Eu-t))return`you`;if(r>n+i)return`byte`;if(e<Eu||t<Eu)return null}return e===t&&n!==r?n>r?`you`:`byte`:null}next(){let e=this.decided();if(e)return this.finish(e);this.setup(this.you.length>this.byte.length)}finish(e){this.phase=`over`,this.t=0,this.host.prompt(null),H.whistle(!0);let t=this.host.lang()===`fr`,n=e===`you`;this.host.toast(n?t?`VICTOIRE AUX TIRS AU BUT !`:`YOU WIN THE SHOOTOUT!`:t?`BYTE GAGNE LA SÉANCE`:`BYTE WINS THE SHOOTOUT`,this.score(),`goal`),this.host.say(n?`penWin`:`penLose`),n&&(H.cheer(1),this.host.onWin(),this.host.player.celebrate(),this.host.celebrate(this.lineX,this.gz)),this.host.hud(null),this.cage.board.you=this.goals(this.you),this.cage.board.ai=this.goals(this.byte),this.cage.board.label=t?`Tirs au but : ${this.goals(this.you)} – ${this.goals(this.byte)}`:`Penalties: ${this.goals(this.you)} – ${this.goals(this.byte)}`,mn(this.cage.boardTex)}dots(e){let t=Math.max(Eu,this.you.length,this.byte.length),n=``;for(let r=0;r<t;r++)n+=e[r]===`goal`?`●`:e[r]===`miss`?`✕`:`○`;return n}updateHud(){let e=this.host.lang()===`fr`,t=this.you.length>=Eu&&this.byte.length>=Eu;this.host.hud(`${e?`VOUS`:`YOU`} ${this.dots(this.you)}  ${this.goals(this.you)} – ${this.goals(this.byte)}  ${this.dots(this.byte)} BYTE${t?e?` · MORT SUBITE`:` · SUDDEN DEATH`:``}`);let n=this.cage.board;n.you=this.goals(this.you),n.ai=this.goals(this.byte),n.clock=e?`TAB`:`PENS`,n.label=e?`Séance de tirs au but`:`Penalty shootout`,mn(this.cage.boardTex)}get spotXZ(){return[this.spot.x,this.spot.y]}get focus(){return[this.spot.x+Du*(this.youKeep?.62:.5),this.gz]}get cameraYaw(){return this.youKeep?Math.PI/2:-Math.PI/2}},Mu=30,Nu=7,Pu=2.8,Fu=.8,Iu=.5,Lu=class{constructor(e){m(this,`actors`,[]),m(this,`size`,0),m(this,`frames`,[]),m(this,`last`,-1),m(this,`host`,void 0),m(this,`active`,!1),m(this,`recording`,!1),m(this,`t`,0),m(this,`t0`,0),m(this,`t1`,0),m(this,`focus`,-1),m(this,`dir`,new z(0,-1)),m(this,`saved`,{yaw:0,yawTarget:0,dist:0,distTarget:0,pitch:0,target:new T}),m(this,`live`,null),m(this,`label`,``),m(this,`moment`,-1),m(this,`compose`,null),m(this,`rec`,null),m(this,`chunks`,[]),m(this,`q1`,new Yt),m(this,`q2`,new Yt),this.host=e}track(e,t=!1){let n=[];return t&&e.traverse(t=>{t!==e&&n.push(t)}),this.actors.push({root:e,parts:n}),this.size+=7+n.length*3,this.actors.length-1}snapshot(e){let t=e??new Float32Array(this.size),n=0;for(let e of this.actors){let r=e.root.position,i=e.root.quaternion;t[n++]=r.x,t[n++]=r.y,t[n++]=r.z,t[n++]=i.x,t[n++]=i.y,t[n++]=i.z,t[n++]=i.w;for(let r of e.parts)t[n++]=r.rotation.x,t[n++]=r.rotation.y,t[n++]=r.rotation.z}return t}apply(e,t,n){let r=0;for(let i of this.actors){i.root.position.set(e[r]+(t[r]-e[r])*n,e[r+1]+(t[r+1]-e[r+1])*n,e[r+2]+(t[r+2]-e[r+2])*n),this.q1.set(e[r+3],e[r+4],e[r+5],e[r+6]),this.q2.set(t[r+3],t[r+4],t[r+5],t[r+6]),i.root.quaternion.slerpQuaternions(this.q1,this.q2,n),r+=7;for(let a of i.parts)a.rotation.set(e[r]+(t[r]-e[r])*n,e[r+1]+(t[r+1]-e[r+1])*n,e[r+2]+(t[r+2]-e[r+2])*n),r+=3}}capture(e){if(this.active||e-this.last<1/Mu)return;this.last=e;let t=this.frames.length&&e-this.frames[0].t>Nu?this.frames.shift():null;this.frames.push({t:e,d:this.snapshot(t&&t.d.length===this.size?t.d:void 0)})}canPlay(e){return this.frames.length>Mu&&this.frames[0].t<e-1&&this.frames[this.frames.length-1].t>=e-.1}play(e,t,n,r=!1){if(!this.canPlay(e)||this.active)return!1;let i=this.host.engine;this.saved={yaw:i.yaw,yawTarget:i.yawTarget,dist:i.dist,distTarget:i.distTarget,pitch:i.pitch,target:i.target.clone()},this.live=this.snapshot(),this.moment=e,this.t0=Math.max(this.frames[0].t,e-Pu),this.t1=Math.min(this.frames[this.frames.length-1].t,e+Fu),this.t=this.t0,this.focus=t,this.label=n;let a=this.posAt(this.t0,t),o=this.posAt(e,t);return this.dir.set(o.x-a.x,o.z-a.z),this.dir.lengthSq()<.5&&this.dir.set(0,-1),this.dir.normalize(),i.yaw=i.yawTarget=Math.atan2(-this.dir.x,-this.dir.y)+.5,i.dist=i.distTarget=12,i.pitch=.42,i.target.set(a.x,0,a.z),this.active=!0,this.recording=r&&this.startRecording(),this.host.hud({on:!0,recording:this.recording,label:n}),!0}posAt(e,t){let n=this.frameAt(e).a.d,r=0;for(let e=0;e<t;e++)r+=7+this.actors[e].parts.length*3;return{x:n[r],y:n[r+1],z:n[r+2]}}frameAt(e){let t=this.frames,n=0;for(;n<t.length-2&&t[n+1].t<e;)n++;let r=t[n],i=t[Math.min(n+1,t.length-1)];return{a:r,b:i,f:i.t>r.t?Math.max(0,Math.min(1,(e-r.t)/(i.t-r.t))):0}}step(e){if(!this.active)return!1;if(this.t+=e*Iu,this.t>=this.t1)return this.stop(),!1;let{a:t,b:n,f:r}=this.frameAt(this.t);this.apply(t.d,n.d,r);let i=this.host.engine,a=this.actors[this.focus].root.position,o=Math.min(1,e*3);return i.target.x+=(a.x-i.target.x)*o,i.target.z+=(a.z-i.target.z)*o,i.yawTarget+=e*.12,i.distTarget=12-Math.max(0,1-Math.abs(this.t-this.moment)/1.2)*3,!0}stop(){if(!this.active)return;this.active=!1,this.live&&(this.apply(this.live,this.live,0),this.live=null);let e=this.host.engine,t=this.saved;e.yaw=t.yaw,e.yawTarget=t.yawTarget,e.dist=t.dist,e.distTarget=t.distTarget,e.pitch=t.pitch,e.target.copy(t.target),this.rec&&this.rec.state!==`inactive`&&this.rec.stop(),this.recording=!1,this.host.hud(null),this.host.done()}startRecording(){let e=this.host.engine.renderer.domElement;if(typeof MediaRecorder>`u`||!(`captureStream`in HTMLCanvasElement.prototype))return!1;let t=Math.min(1,1280/e.width),n=this.compose??document.createElement(`canvas`);n.width=Math.round(e.width*t/2)*2,n.height=Math.round(e.height*t/2)*2,this.compose=n;let r=[`video/mp4;codecs=avc1.42E01E`,`video/mp4;codecs=avc1`,`video/webm;codecs=vp9`,`video/webm;codecs=vp8`,`video/webm`,`video/mp4`].find(e=>MediaRecorder.isTypeSupported(e));if(!r)return!1;try{let e=n.captureStream(30);this.rec=new MediaRecorder(e,{mimeType:r,videoBitsPerSecond:6e6})}catch{return!1}return this.chunks=[],this.rec.ondataavailable=e=>{e.data.size&&this.chunks.push(e.data)},this.rec.onstop=()=>{let e=new Blob(this.chunks,{type:r.split(`;`)[0]}),t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`ouais-fc-${this.label.toLowerCase().replace(/[^a-z0-9]+/g,`-`)}.${r.includes(`mp4`)?`mp4`:`webm`}`,document.body.append(n),n.click(),n.remove(),setTimeout(()=>URL.revokeObjectURL(t),1e4)},this.rec.start(250),!0}composeFrame(){if(!this.recording||!this.compose)return;let e=this.host.engine.renderer.domElement,t=this.compose,n=t.getContext(`2d`);n.drawImage(e,0,0,t.width,t.height);let r=t.height/720;n.fillStyle=`#000`,n.fillRect(0,0,t.width,46*r),n.fillRect(0,t.height-46*r,t.width,46*r),n.textBaseline=`middle`,n.fillStyle=`#ff5a3c`,n.beginPath(),n.arc(28*r,23*r,7*r,0,Math.PI*2),n.fill(),n.fillStyle=`#ffffff`,n.font=`${20*r}px "Archivo Black", "Arial Black", sans-serif`,n.fillText(`REPLAY · ${this.label.toUpperCase()}`,44*r,24*r),n.textAlign=`right`,n.fillText(`OUAIS FC`,t.width-24*r,t.height-22*r),n.font=`700 ${15*r}px system-ui, sans-serif`,n.fillStyle=`rgba(255,255,255,0.85)`,n.fillText(`medouaishamdi.github.io`,t.width-24*r,24*r),n.textAlign=`left`}},Ru={jersey:`#f4f6f8`,shorts:`#c9d1db`,sock:`#f4f6f8`,skin:`#b98a66`,hair:`#2b2622`,name:`GUEST`,number:``},zu=12,Bu=()=>{try{for(let e of navigator.languages??[navigator.language]){let t=/^[a-z]{2,3}-([A-Z]{2})\b/i.exec(e);if(t)return t[1].toUpperCase()}}catch{}return``},Vu=class{constructor(e,t,n,r){m(this,`physics`,void 0),m(this,`scene`,void 0),m(this,`host`,void 0),m(this,`self`,void 0),m(this,`ws`,null),m(this,`ghosts`,[]),m(this,`byId`,new Map),m(this,`sendT`,0),m(this,`last`,``),m(this,`retries`,0),m(this,`timer`,0),m(this,`stopped`,!1),m(this,`count`,0),this.physics=e,this.scene=t,this.host=n,this.self=r}connect(){if(this.stopped||this.ws)return;let e;try{e=`${location.protocol===`https:`?`wss`:`ws`}://${location.host}/live`}catch{return}let t;try{t=new WebSocket(e)}catch{return this.retry()}this.ws=t,t.onopen=()=>{this.retries=0,t.send(JSON.stringify({t:`hi`,c:Bu()}))},t.onmessage=e=>{let t;try{t=JSON.parse(String(e.data))}catch{return}t.t===`s`&&t.ps?this.onState(t.n??0,t.ps):t.t===`e`&&t.k&&this.host.event(t.k,t.c??``,t.p??-1)},t.onclose=()=>{this.ws=null,this.onState(0,[]),this.retry()},t.onerror=()=>{try{t.close()}catch{}}}retry(){if(this.stopped)return;let e=[3,10,30,60][Math.min(this.retries++,3)]*1e3;clearTimeout(this.timer),this.timer=window.setTimeout(()=>this.connect(),e)}send(e){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}ghost(){let e=this.ghosts.find(e=>e.id===0);if(e)return e;if(this.ghosts.length>=zu)return null;let t=new eu(this.physics,this.scene,Ru);this.physics.world.removeBody(t.body);let n=[];t.root.traverse(e=>{let t=e;if(!t.isMesh)return;let r=t.material.clone();r.transparent=!0,r.opacity=0,r.depthWrite=!1,t.material=r,t.castShadow=!1,n.push(r)}),t.root.visible=!1;let r=t.shadowBlob??null;r&&(r.visible=!1,r.material.opacity=.5);let i=new qt({transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}),a=new It(i);return a.scale.set(.9,.45,1),a.visible=!1,this.scene.add(a),e={blob:r,p:t,tag:a,tagMat:i,code:``,id:0,x:0,z:0,h:0,s:0,tx:0,tz:0,th:0,alpha:0,mats:n},this.ghosts.push(e),e}setTag(e,t){e.code===t&&e.tagMat.map||(e.code=t,e.tagMat.map?.dispose(),e.tagMat.map=j(128,64,(e,n,r)=>{e.clearRect(0,0,n,r),e.fillStyle=`rgba(15,27,45,0.82)`,e.beginPath(),e.roundRect?.(4,8,n-8,r-16,22),e.fill(),e.fillStyle=`#ffffff`,e.font=`800 30px system-ui, sans-serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(t||`•`,n/2,r/2+1)},{liveLang:!1}),e.tagMat.needsUpdate=!0)}onState(e,t){this.count=e,this.host.count(e);let n=new Set;for(let[e,r,i,a,o,s]of t){n.add(e);let t=this.byId.get(e);if(!t){let n=this.ghost();if(!n)continue;t=n,t.id=e,t.x=t.tx=r,t.z=t.tz=i,t.h=t.th=a,t.alpha=0,this.byId.set(e,t),this.setTag(t,s)}t.tx=r,t.tz=i,t.th=a,t.s=o}for(let[e,t]of this.byId)n.has(e)||(this.byId.delete(e),t.id=-1)}update(e,t){if(this.sendT-=e,this.sendT<=0&&this.ws?.readyState===WebSocket.OPEN){this.sendT=.2;let e=this.self(),t=JSON.stringify({t:`p`,x:+e.x.toFixed(2),z:+e.z.toFixed(2),h:+e.h.toFixed(2),s:+e.s.toFixed(1)});t!==this.last&&(this.ws.send(t),this.last=t)}let n=1-Math.exp(-e*8);for(let r of this.ghosts){if(r.id===0)continue;let i=r.id>0&&t?.5:0;if(r.alpha+=(i-r.alpha)*Math.min(1,e*3),r.id<0&&r.alpha<.02){r.id=0,r.p.root.visible=!1,r.tag.visible=!1,r.blob&&(r.blob.visible=!1);continue}r.x+=(r.tx-r.x)*n,r.z+=(r.tz-r.z)*n;let a=r.th-r.h;a=Math.atan2(Math.sin(a),Math.cos(a)),r.h+=a*n;let o=r.p;o.body.interpolatedPosition.set(r.x,.42,r.z),o.heading=r.h,o.speed=r.s,o.root.visible=r.alpha>.02;for(let e of r.mats)e.opacity=r.alpha;o.animate(e),r.blob&&(r.blob.visible=o.root.visible),r.tag.visible=o.root.visible&&!!r.code,r.tagMat.opacity=Math.min(1,r.alpha*1.8),r.tag.position.set(r.x,2.75,r.z)}}stop(){this.stopped=!0,clearTimeout(this.timer),this.ws?.close()}};function Hu(e){let t=xt(11),n=new He;n.setAttribute(`position`,new pn([0,0,-.25,0,0,.25,1,0,.05],3)),n.computeVertexNormals();let r=[],i=new U({color:`#ffffff`,side:2}),a=new U({color:`#3a3a44`,side:2}),o=[i];for(let o=0;o<11;o++){let s=o<6,c=new sn,l=s?i:a,u=s?1.1:.45,d=new C(new G(.18*u,.14*u,.7*u),l),f=new C(n,l),p=new C(n,l);f.scale.setScalar(u),p.scale.set(-u,u,u),c.add(d,f,p),e.scene.add(c);let m=t()*Math.PI*2;r.push({g:c,l:f,r:p,cx:s?Math.cos(m)*80:(t()-.5)*60,cz:s?Math.sin(m)*75:(t()-.5)*60,rad:s?10+t()*14:6+t()*10,y:s?10+t()*8:7+t()*6,sp:(s?.18:.35)*(t()>.5?1:-1),ph:t()*10})}let s=[],c=new W(.18,.14);c.translate(.09,0,0);let l=[`#ffd34d`,`#ffffff`,`#ff8fb1`,`#7ec8ff`];for(let[n,r]of[[-30,30],[-40,28],[20,20],[-12,26],[50,-10],[-50,-18],[12,50],[-36,44],[46,20],[-20,-12]]){let i=new Re({color:l[s.length%l.length],side:2}),a=new sn,o=new C(c,i),u=new C(c,i);u.scale.x=-1,a.add(o,u),e.scene.add(a),s.push({g:a,l:o,r:u,x:n,z:r,ph:t()*20})}e.updaters.push((e,t)=>{for(let e of r){let n=t*e.sp+e.ph;e.g.position.set(e.cx+Math.cos(n)*e.rad,e.y+Math.sin(t*.7+e.ph)*.6,e.cz+Math.sin(n)*e.rad),e.g.rotation.y=-n+(e.sp>0?0:Math.PI),e.g.rotation.z=e.sp>0?-.25:.25;let r=Math.sin(t*(e.rad>9?5:11)+e.ph)*.6;e.l.rotation.z=r,e.r.rotation.z=-r}for(let e of s){let n=t*.6+e.ph;e.g.position.set(e.x+Math.sin(n)*2.2+Math.sin(n*2.3)*.6,.6+Math.abs(Math.sin(n*3.1))*.5,e.z+Math.cos(n*.8)*2.2),e.g.rotation.y=n;let r=Math.sin(t*22+e.ph)*1.1;e.l.rotation.y=r,e.r.rotation.y=-r}}),e.nightAware.push(e=>{for(let t of o)t.color.setScalar(1-e*.7);for(let t of s)t.g.visible=e<.5})}var Uu=-.15,Wu=256,Gu=200;function Ku(){let e=new Uint16Array(Wu*Wu);for(let t=0;t<Wu;t++)for(let n=0;n<Wu;n++){let r=(n/255-.5)*Gu,i=(t/255-.5)*Gu;e[t*Wu+n]=it.toHalfFloat(Math.max(-60,Math.min(60,wt(r,i))))}let t=new Jt(e,Wu,Wu,Le,Ne);return t.magFilter=Ct,t.minFilter=Ct,t.needsUpdate=!0,t}function qu(){let e=[],t=[],n=(t,n,r,i,a=`none`)=>{a!==`top`&&e.push([t,n,r,n]),e.push([r,n,r,i],[r,i,t,i],[t,i,t,n])};n(Ht.x0+1,-47,Ht.x1-1,Ht.z1+.5);for(let e of Rt){let r=ut.width/2+2.6;n(e-r,-47,e+r,-42.8,`top`),t.push([e,-36,.28,1])}let r=E[0].center;return t.push([r[0],r[1]+3.5,5.5,0],[r[0],r[1]+3.5,.25,1]),n(-58,-12,-16,21),e.push([an[0],an[1]-2,an[0],an[1]+2]),{segs:e,circles:t}}function Ju(e){let t=new W(150,150,150,150);t.rotateX(-Math.PI/2);let n=t.attributes.position,r=new Float32Array(n.count*3),i=new I(`#4f9a34`),a=new I(`#78b84a`),o=new I;for(let e=0;e<n.count;e++){let t=n.getX(e),s=n.getZ(e),c=wt(t,s),l=0;c>-3.2&&(l=-.16*ge.smoothstep(c,-3.2,0)),c>0&&(l=-.16-Math.min(3,c*.35)),n.setY(e,l);let u=v(t*.08,s*.08)*.65+v(t*.3,s*.3)*.35;o.copy(i).lerp(a,u),r[e*3]=o.r,r[e*3+1]=o.g,r[e*3+2]=o.b}t.setAttribute(`color`,new ue(r,3)),t.computeVertexNormals();let{segs:s,circles:c}=qu(),l=Array.from({length:48},(e,t)=>new on(...s[t]??[9999,9999,9999,9999])),u=Array.from({length:12},(e,t)=>new on(...c[t]??[9999,9999,0,0])),d=new U({vertexColors:!0}),f={uSegs:{value:l},uSegCount:{value:s.length},uCircles:{value:u},uCircleCount:{value:c.length},uArena:{value:new on(Ht.x0,Ht.z0,Ht.x1,Ht.z1)},uTrain:{value:new on(-58,-12,-16,21)},uKick:{value:new T(E[0].center[0],E[0].center[1]+3.5,11)},uPaths:{value:qe.map(e=>new on(e.a[0],e.a[1],e.b[0],e.b[1]))},uPathW:{value:qe.map(e=>e.w*.5)},uSdf:{value:e}};d.onBeforeCompile=e=>{Object.assign(e.uniforms,f),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
varying vec3 vW;`).replace(`#include <worldpos_vertex>`,`#include <worldpos_vertex>
vW = (modelMatrix * vec4(transformed, 1.0)).xyz;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
        varying vec3 vW;
        uniform vec4 uSegs[48]; uniform int uSegCount;
        uniform vec4 uCircles[12]; uniform int uCircleCount;
        uniform vec4 uArena; uniform vec4 uTrain; uniform vec3 uKick;
        uniform vec4 uPaths[${qe.length}]; uniform float uPathW[${qe.length}];
        uniform sampler2D uSdf;
        float th21(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
        float tnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
          return mix(mix(th21(i),th21(i+vec2(1,0)),u.x), mix(th21(i+vec2(0,1)),th21(i+vec2(1,1)),u.x), u.y); }
        float sdSeg(vec2 p, vec2 a, vec2 b){ vec2 pa=p-a, ba=b-a; float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.); return length(pa-ba*h); }
        float inRect(vec2 p, vec4 r){ return step(r.x,p.x)*step(p.x,r.z)*step(r.y,p.y)*step(p.y,r.w); }
        `).replace(`#include <color_fragment>`,`#include <color_fragment>
        vec2 p = vW.xz;
        float nn = tnoise(p * 0.9) * 0.6 + tnoise(p * 3.1) * 0.4;
        // gravel paths with a slightly irregular edge
        float path = 0.0;
        for (int i = 0; i < ${qe.length}; i++) {
          float d = sdSeg(p, uPaths[i].xy, uPaths[i].zw) - uPathW[i] + (nn - 0.5) * 0.5;
          path = max(path, 1.0 - smoothstep(-0.05, 0.12, d));
        }
        vec3 gravel = mix(vec3(0.86, 0.78, 0.62), vec3(0.74, 0.66, 0.5), tnoise(p * 2.3));
        diffuseColor.rgb = mix(diffuseColor.rgb, gravel, path);
        // beach from the coast distance field
        float sd = texture2D(uSdf, p / ${Gu.toFixed(1)} + 0.5).r + (nn - 0.5) * 0.8;
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.85, 0.64), smoothstep(-4.6, -3.6, sd));
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.8, 0.69, 0.48), smoothstep(-1.0, 0.2, sd));
        float notGrass = max(path, smoothstep(-4.6, -3.6, sd));
        // mowing stripes
        float stripe = 0.0;
        float ia = inRect(p, uArena);
        stripe += ia * (mod(floor((p.y - uArena.y) / 3.6), 2.0) * 2.0 - 1.0);
        float it = inRect(p, uTrain) * (1.0 - ia);
        stripe += it * (mod(floor((p.x) / 3.0), 2.0) * 2.0 - 1.0);
        float kd = length(p - uKick.xy);
        float ik = (1.0 - smoothstep(uKick.z - 1.0, uKick.z, kd)) * (1.0 - ia) * (1.0 - it);
        stripe += ik * (mod(floor((p.x + 100.0) / 2.6), 2.0) * 2.0 - 1.0);
        diffuseColor.rgb *= 1.0 + stripe * 0.055 * (1.0 - notGrass);
        // chalk (only evaluated where lines can exist)
        float w = 0.0;
        // pixel footprint in metres, computed outside any branch or loop (safe on every GPU driver)
        float aaw = length(fwidth(p)) * 0.75 + 0.01;
        vec4 ab = uArena + vec4(-1.0, -1.0, 1.0, 1.0);
        vec4 tb = uTrain + vec4(-1.0, -1.0, 1.0, 1.0);
        bool nearLines = inRect(p, ab) > 0.5 || inRect(p, tb) > 0.5 || length(p - uKick.xy) < 7.0;
        if (nearLines) {
          for (int i = 0; i < 48; i++) {
            if (i >= uSegCount) break;
            float d = sdSeg(p, uSegs[i].xy, uSegs[i].zw);
            w = max(w, 1.0 - smoothstep(0.07, 0.07 + aaw, d));
          }
          for (int i = 0; i < 12; i++) {
            if (i >= uCircleCount) break;
            float d = length(p - uCircles[i].xy) - uCircles[i].z;
            d = uCircles[i].w > 0.5 ? d : abs(d);
            w = max(w, 1.0 - smoothstep(0.07, 0.07 + aaw, d));
          }
        }
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.97, 0.98, 0.95), w * 0.92);
        `)},d.customProgramCacheKey=()=>`terrain-v4`;let p=new C(t,d);return p.receiveShadow=!0,p}function Yu(e){let t={uSdf:{value:e},uTime:{value:0},uNight:{value:0},fogColor:{value:new I},fogNear:{value:1},fogFar:{value:1}},n=new g({uniforms:t,fog:!0,vertexShader:`
      varying vec2 vP;
      #include <fog_pars_vertex>
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vP = wp.xz;
        vec4 mvPosition = viewMatrix * wp;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`
      uniform sampler2D uSdf; uniform float uTime; uniform float uNight;
      varying vec2 vP;
      #include <fog_pars_fragment>
      float h21(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); }
      float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.-2.*f);
        return mix(mix(h21(i),h21(i+vec2(1,0)),u.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),u.x), u.y); }
      void main() {
        vec2 uv = vP / ${Gu.toFixed(1)} + 0.5;
        float d = texture2D(uSdf, clamp(uv, 0.0, 1.0)).r;
        if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) d = 80.0;
        vec3 shallow = mix(vec3(0.33, 0.85, 0.85), vec3(0.08, 0.2, 0.32), uNight);
        vec3 deep = mix(vec3(0.07, 0.42, 0.68), vec3(0.02, 0.05, 0.14), uNight);
        vec3 col = mix(shallow, deep, smoothstep(0.0, 22.0, d));
        // ripples
        float n = vnoise(vP * 0.35 + vec2(uTime * 0.12, uTime * 0.07)) * 0.6 + vnoise(vP * 0.9 - uTime * 0.2) * 0.4;
        col += (n - 0.5) * 0.06;
        // sparkles
        float sp = step(0.93, vnoise(vP * 2.6 + vec2(uTime * 0.5, -uTime * 0.3)));
        col += sp * mix(0.35, 0.12, uNight) * smoothstep(40.0, 4.0, d);
        // shoreline foam: waves rolling in
        float wave = sin(d * 2.4 + uTime * 1.6 + n * 3.0);
        float foam = smoothstep(0.55, 0.9, wave) * smoothstep(4.5, 0.4, d);
        foam = max(foam, smoothstep(0.9, 0.0, d) * 0.9);
        col = mix(col, mix(vec3(1.0), vec3(0.6, 0.7, 0.85), uNight), foam * 0.85);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        #include <fog_fragment>
      }`}),r=new C(new W(700,700,1,1).rotateX(-Math.PI/2),n);return r.position.y=Uu,{mesh:r,uniforms:t}}var Xu=[`#3f8f3a`,`#4f9f3f`,`#5aa847`,`#2f7a36`,`#6bb04a`],Zu=[`#8aa35d`,`#97ad6a`,`#7d9654`];function Qu(e,t,n,r,i){let a=new X({mass:0,material:e.physics.mat.hard,collisionFilterGroup:Z.STATIC});a.addShape(new Is(r,r,i,8)),a.position.set(t,i/2,n),e.physics.world.addBody(a)}function $u(e,t,n,r,i){let a=1.8*r;e.batch.add($.cyl(.14*r,.24*r,a,6),Q(`#7a5232`),t,a/2,n,0,i()*6);let o=2+Math.floor(i()*2);for(let s=0;s<o;s++){let o=(1.2+i()*.6)*r,c=ql($.ico(o,1),o*.22,i),l=(i()-.5)*1.2*r,u=(i()-.5)*1.2*r;e.batch.add(c,Q(Xu[Math.floor(i()*Xu.length)]),t+l,a+o*.6+s*.7*r,n+u,i(),i(),i(),1,.9,1)}Qu(e,t,n,.3*r,3)}function ed(e,t,n,r,i){e.batch.add($.cyl(.15*r,.22*r,1.4*r,6),Q(`#6b4528`),t,.7*r,n);let a=i()>.5?`#2c6e3a`:`#357a3f`;for(let o=0;o<3;o++){let s=(1.6-o*.4)*r,c=(1.9-o*.25)*r;e.batch.add(ql($.cone(s,c,7),.12*r,i),Q(a),t,(1.4+o*1)*r+c/2,n,0,i()*6,0)}Qu(e,t,n,.3*r,3)}function td(e,t,n,r,i){let a=Q(`#7d6a55`);e.batch.add($.cyl(.16*r,.32*r,1.1*r,6),a,t,.55*r,n,.1,0,.15),e.batch.add($.cyl(.1*r,.16*r,1*r,5),a,t+.35*r,1.35*r,n,0,0,-.55),e.batch.add($.cyl(.1*r,.16*r,.9*r,5),a,t-.3*r,1.3*r,n+.1*r,.2,0,.6);for(let a=0;a<4;a++){let o=(.9+i()*.4)*r,s=(i()-.5)*2.2*r,c=(i()-.5)*1.6*r;e.batch.add(ql($.ico(o,1),o*.25,i),Q(Zu[a%Zu.length]),t+s,(2+i()*.5)*r,n+c,i(),i(),0,1.3,.62,1.1)}Qu(e,t,n,.32*r,2.5)}function nd(e,t,n,r,i){e.batch.add($.cyl(.18*r,.3*r,3.4*r,6),Q(`#6a4a30`),t,1.7*r,n);for(let a of[{y:1.6,r:2.3},{y:2.4,r:1.9},{y:3.1,r:1.5},{y:3.7,r:.9}]){let o=ql($.cyl(a.r*r*.55,a.r*r,.42*r,8),.12*r,i);e.batch.add(o,Q(i()>.5?`#2f6b3c`:`#2a5f36`),t+(i()-.5)*.3,a.y*r,n+(i()-.5)*.3,0,i()*6,0)}Qu(e,t,n,.32*r,3)}function rd(e,t,n,r,i){let a=(i()-.5)*.5,o=i()*Math.PI*2,s=t,c=0,l=n;for(let t=0;t<6;t++){let n=.75*r,i=t/6*a,u=s+Math.cos(o)*Math.sin(i)*n*.5,d=l+Math.sin(o)*Math.sin(i)*n*.5;e.batch.add($.cyl(.15*r,.19*r,n,6),Q(t%2?`#9c7a4d`:`#8a6a41`),u,c+n/2,d,Math.sin(o)*i,0,-Math.cos(o)*i),s=u+Math.cos(o)*Math.sin(i)*n*.5,l=d+Math.sin(o)*Math.sin(i)*n*.5,c+=n*Math.cos(i)}for(let t=0;t<7;t++){let n=t/7*Math.PI*2+i()*.3,a=new G(.5*r,.06,2.4*r);a.translate(0,0,1.2*r),e.batch.add(a,Q(t%2?`#3f8f3a`:`#4fa043`),s,c,l,.45+i()*.25,n,0)}Qu(e,t,n,.25*r,3)}function id(e,t,n,r,i){for(let a=0;a<3;a++){let a=(.55+i()*.3)*r;e.batch.add(ql($.ico(a,0),a*.2,i),Q(Xu[Math.floor(i()*Xu.length)]),t+(i()-.5)*r,a*.55,n+(i()-.5)*r,i(),i(),0,1,.8,1)}}function ad(e,t,n,r,i){let a=ql(new Bt(r,0),r*.3,i);e.batch.add(a,Q(i()>.5?`#9aa0a6`:`#b3b0a6`),t,r*.25,n,i(),i(),i(),1,.6,1)}function od(e){let t=xt(7),n=[],r=(e,t,r)=>n.every(([n,i,a])=>Math.hypot(n-e,i-t)>a+r),i=(e,i,a,o,s,c=2)=>{let l=0,u=0;for(;u<e&&l<e*60;){l++;let e=(t()-.5)*130,d=(t()-.5)*122,f=wt(e,d);f<a||f>o||xe(e,d,c)&&r(e,d,i)&&(n.push([e,d,i]),s(e,d),u++)}};i(26,3.2,-40,-7,(n,r)=>{let i=t(),a=.85+t()*.45;n<-20&&r>22?td(e,n,r,a,t):i<.55?$u(e,n,r,a,t):ed(e,n,r,a,t)}),i(30,3,-14,-6,(n,r)=>{let i=.85+t()*.4;n<-20&&r>20?td(e,n,r,i,t):t()<.6?$u(e,n,r,i,t):ed(e,n,r,i,t)}),i(10,2.5,-5.5,-3,(n,r)=>rd(e,n,r,.9+t()*.3,t),1),i(40,1.2,-50,-4,(n,r)=>id(e,n,r,.8+t()*.5,t)),i(26,1,-3.5,1.5,(n,r)=>ad(e,n,r,.4+t()*.8,t),0),sd(e),cd(e,t),ld(e)}function sd(e){let t=e.quality===`high`?5200:1800,n=new He,r=[];for(let e=0;e<3;e++){let t=e/3*Math.PI+.3,n=Math.cos(t)*.09,i=Math.sin(t)*.09,a=.08*(e-1);r.push(-n,0,-i,n,0,i,a,.42+e*.05,a*.5)}n.setAttribute(`position`,new pn(r,3)),n.computeVertexNormals();let i=new U({color:`#ffffff`,side:2}),a={uTime:{value:0}};i.onBeforeCompile=e=>{e.uniforms.uTime=a.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
        vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float w = sin(uTime * 1.7 + ip.x * 0.35 + ip.z * 0.2) * 0.5 + sin(uTime * 3.1 + ip.x * 1.3) * 0.2;
        transformed.x += w * position.y * 0.35;
        transformed.z += w * position.y * 0.15;`),e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_begin>`,`#include <normal_fragment_begin>
  normal = normalize(vNormal);`),e.vertexShader=e.vertexShader.replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(0.0, 1.0, 0.0);
#ifdef USE_TANGENT
vec3 objectTangent = vec3(1.0,0.0,0.0);
#endif`)},i.customProgramCacheKey=()=>`grass-v2`;let o=new Ce(n,i,t),s=xt(21),c=new Ue,l=new I,u=0,d=0;for(;u<t&&d<t*20;){d++;let e=(s()-.5)*130,t=(s()-.5)*122;if(wt(e,t)>-4.5||!xe(e,t,-1.5)||v(e*.15,t*.15)<.35)continue;c.position.set(e,0,t),c.rotation.y=s()*Math.PI;let n=.55+s()*.6;c.scale.set(n,n*(.8+s()*.6),n),c.updateMatrix(),o.setMatrixAt(u,c.matrix),l.setHSL(.26+s()*.04,.5,.36+s()*.1),o.setColorAt(u,l),u++}o.count=u,o.receiveShadow=!0,e.scene.add(o),e.updaters.push((e,t)=>{a.uTime.value=t})}function cd(e,t){let n=e.quality===`high`?600:250,r=new O(.09,0);r.translate(0,.22,0);let i=new bt(.012,.012,.22,3);i.translate(0,.11,0);let a=[`#ffffff`,`#ffd84d`,`#ff8fb1`,`#b58cff`,`#ffffff`],o=new Ce(r,new U({color:`#ffffff`,flatShading:!0}),n),s=new Ce(i,Q(`#3f7f2a`),n),c=new Ue,l=new I,u=0,d=0;for(;u<n&&d<n*40;){d++;let e=(t()-.5)*130,n=(t()-.5)*122;wt(e,n)>-5||!xe(e,n,0)||v(e*.1+5,n*.1)<.55||(c.position.set(e,0,n),c.rotation.set(0,t()*6,0),c.scale.setScalar(.8+t()*.6),c.updateMatrix(),o.setMatrixAt(u,c.matrix),s.setMatrixAt(u,c.matrix),o.setColorAt(u,l.set(a[Math.floor(t()*a.length)])),u++)}o.count=s.count=u,e.scene.add(o,s)}function ld(e){let t=xt(99),n=new sn,r=new U({color:`#ffffff`,flatShading:!0,emissive:`#ffffff`,emissiveIntensity:.25,fog:!1}),i=[];for(let e=0;e<12;e++){let e=new sn,a=3+Math.floor(t()*4);for(let n=0;n<a;n++){let i=2+t()*3,o=new C(ql($.ico(i,1),i*.15,t),r);o.position.set(n*2.6-a*1.3,(t()-.5)*1.2,(t()-.5)*2.5),o.scale.y=.65,e.add(o)}e.position.set((t()-.5)*260,34+t()*18,(t()-.5)*220-30),e.userData.speed=.6+t()*.8,n.add(e),i.push(e)}e.scene.add(n),e.updaters.push(e=>{for(let t of i)t.position.x+=t.userData.speed*e,t.position.x>150&&(t.position.x=-150)}),e.nightAware.push(e=>{r.color.setRGB(1-e*.75,1-e*.7,1-e*.55),r.emissiveIntensity=.25*(1-e)})}var ud=class extends le{constructor(e){super(e)}load(e,t,n,r){let i=this,a=new rn(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(e){let n=i.parse(JSON.parse(e));t&&t(n)},n,r)}parse(e){return new dd(e)}},dd=class{constructor(e){this.isFont=!0,this.type=`Font`,this.data=e}generateShapes(e,t=100,n=`ltr`){let r=[],i=fd(e,t,this.data,n);for(let e=0,t=i.length;e<t;e++)r.push(...i[e].toShapes());return r}};function fd(e,t,n,r){let i=Array.from(e),a=t/n.resolution,o=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*a,s=[],c=0,l=0;(r==`rtl`||r==`tb`)&&i.reverse();for(let e=0;e<i.length;e++){let t=i[e];if(t===`
`)c=0,l-=o;else{let e=pd(t,a,c,l,n);r==`tb`?(c=0,l+=n.ascender*a):c+=e.offsetX,s.push(e.path)}}return s}function pd(e,t,n,r,i){let a=i.glyphs[e]||i.glyphs[`?`];if(!a){console.error(`THREE.Font: character "`+e+`" does not exists in font family `+i.familyName+`.`);return}let o=new Nt,s,c,l,u,d,f,p,m;if(a.o){let e=a._cachedOutline||(a._cachedOutline=a.o.split(` `));for(let i=0,a=e.length;i<a;)switch(e[i++]){case`m`:s=e[i++]*t+n,c=e[i++]*t+r,o.moveTo(s,c);break;case`l`:s=e[i++]*t+n,c=e[i++]*t+r,o.lineTo(s,c);break;case`q`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,o.quadraticCurveTo(d,f,l,u);break;case`b`:l=e[i++]*t+n,u=e[i++]*t+r,d=e[i++]*t+n,f=e[i++]*t+r,p=e[i++]*t+n,m=e[i++]*t+r,o.bezierCurveTo(d,f,p,m,l,u)}}return{offsetX:a.ha*t,path:o}}var md=class e extends Je{constructor(e,t={}){let n=t.font;if(n===void 0)super();else{let r=n.generateShapes(e,t.size,t.direction);t.depth===void 0&&(t.depth=50),t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type=`TextGeometry`}toJSON(){return super.toJSON()}static fromJSON(t){let n=t.options;return n.font=new dd(n.font.data),new e(n.text,n)}},hd={glyphs:JSON.parse(`{"0":{"ha":667,"x_min":41,"x_max":626,"o":"m 334 700 q 560.5 608.5 495 700 q 626 344 626 517 l 626 344 q 560.5 79.5 626 171 q 334 -12 495 -12 l 334 -12 q 106.5 79.5 172 -12 q 41 344 41 171 l 41 344 q 106.5 608.5 41 517 q 334 700 172 700 l 334 700 m 334 565 q 260 525 282 565 q 238 394 238 485 l 238 394 l 238 295 q 260 163 238 203 q 334 123 282 123 l 334 123 q 407 163 386 123 q 428 295 428 203 l 428 295 l 428 394 q 407 525.5 428 486 q 334 565 386 565 l 334 565"},"1":{"ha":667,"x_min":105,"x_max":624,"o":"m 467 154 l 624 154 l 624 0 l 105 0 l 105 154 l 268 154 l 268 465 l 105 465 l 105 581 q 255 616.5 172 585 q 400 689 338 648 l 400 689 l 467 689 l 467 154"},"2":{"ha":667,"x_min":49,"x_max":619,"o":"m 346 700 q 486.5 674.5 427 700 q 578.5 602 546 649 q 611 493 611 555 l 611 493 q 582 388 611 435 q 509 305 553 341 q 388 217 465 269 l 388 217 q 318 169 345 189 l 318 169 l 619 169 l 619 0 l 49 0 l 49 48 q 73.5 142.5 49 101 q 145 226 98 184 l 145 226 q 283 340 193 268 l 283 340 q 384 427 355 397 q 413 486 413 457 l 413 486 q 391.5 538 413 517 q 327 559 370 559 l 327 559 q 256 533 282 559 q 230 465 230 507 l 230 465 l 230 445 l 52 445 q 51 467 51 453 l 51 467 q 126.5 637.5 51 575 q 346 700 202 700 l 346 700"},"3":{"ha":667,"x_min":42,"x_max":625,"o":"m 339 700 q 481.5 675 421 700 q 573.5 607.5 542 650 q 605 513 605 565 l 605 513 q 577 419.5 605 461 q 505 361 549 378 l 505 361 l 505 357 q 593.5 294.5 562 339 q 625 187 625 250 l 625 187 q 548.5 43.5 621 99 q 335 -12 476 -12 l 335 -12 q 172 14 238 -12 q 74 85 106 40 q 42 186 42 130 l 42 186 l 42 207 l 218 207 q 322 125 218 125 l 322 125 q 426 217 426 125 l 426 217 q 406.5 270.5 426 252 q 356 289 387 289 l 356 289 l 283 289 l 283 412 l 340 412 q 390.5 430.5 371 412 q 410 484 410 449 l 410 484 q 386.5 540 410 517 q 322 563 363 563 l 322 563 q 255 541 279 563 q 231 487 231 519 l 231 487 l 64 487 l 64 512 q 96.5 607 64 564 q 191.5 675 129 650 q 339 700 254 700 l 339 700"},"4":{"ha":667,"x_min":23,"x_max":644,"o":"m 411 700 q 363 570.5 404 648 q 265.5 415.5 322 493 q 160 288 209 338 l 160 288 l 358 288 l 358 431 q 421 535 389 475 q 463 634 453 595 l 463 634 l 548 634 l 548 288 l 644 288 l 644 141 l 548 141 l 548 0 l 358 0 l 358 141 l 23 141 l 23 290 q 130 479 77 368 q 215 700 183 590 l 215 700 l 411 700"},"5":{"ha":667,"x_min":39,"x_max":625,"o":"m 574 518 l 247 518 l 239 414 q 259 427.5 239 416 q 312 449 279 439 q 386 459 345 459 l 386 459 q 560.5 396.5 496 459 q 625 225 625 334 l 625 225 q 590 105 625 159 q 491 19.5 555 51 q 343 -12 427 -12 l 343 -12 q 117.5 51 196 -12 q 39 222 39 114 l 39 222 l 215 222 q 243 153.5 215 181 q 322 126 271 126 l 322 126 q 400.5 154.5 373 126 q 428 228 428 183 l 428 228 q 400.5 302.5 428 274 q 323 331 373 331 l 323 331 q 265.5 318.5 285 331 q 237.5 295 246 306 q 227 281 229 284 l 227 281 l 69 303 l 98 688 l 574 688 l 574 518"},"6":{"ha":667,"x_min":41,"x_max":631,"o":"m 339 700 q 539 639.5 464 700 q 614 468 614 579 l 614 468 l 436 468 l 436 475 q 412 539.5 436 514 q 342 565 388 565 l 342 565 q 268.5 532.5 295 565 q 242 445 242 500 l 242 445 l 242 387 q 311 426 271 413 q 387 439 351 439 l 387 439 q 511.5 414.5 456 439 q 599 342.5 567 390 q 631 228 631 295 l 631 228 q 552.5 51 631 114 q 339 -12 474 -12 l 339 -12 q 114.5 70.5 188 -12 q 41 327 41 153 l 41 327 q 113.5 612 41 524 q 339 700 186 700 l 339 700 m 340 319 q 267.5 293.5 293 319 q 242 221 242 268 l 242 221 q 267 148.5 242 174 q 339 123 292 123 l 339 123 q 412.5 147.5 387 123 q 438 219 438 172 l 438 219 q 412.5 292.5 438 266 q 340 319 387 319 l 340 319"},"7":{"ha":667,"x_min":45,"x_max":625,"o":"m 625 597 q 445.5 327 511 456 q 380 59 380 198 l 380 59 l 380 0 l 158 0 q 216.5 267.5 158 136 q 375 516 275 399 l 375 516 l 45 516 l 45 688 l 625 688 l 625 597"},"8":{"ha":667,"x_min":41,"x_max":626,"o":"m 332 700 q 468 676 407 700 q 564.5 606.5 529 652 q 600 497 600 561 l 600 497 q 579 413 600 444 q 516 352 558 382 l 516 352 l 516 348 q 598.5 281.5 571 317 q 626 189 626 246 l 626 189 q 547 40 626 92 q 332 -12 468 -12 l 332 -12 q 118.5 40 196 -12 q 41 189 41 92 l 41 189 q 68 281.5 41 246 q 150 348 95 317 l 150 348 l 150 352 q 87 413 108 382 q 66 497 66 444 l 66 497 q 101 606.5 66 561 q 196.5 676 136 652 q 332 700 257 700 l 332 700 m 332 565 q 264.5 546.5 289 565 q 240 489 240 528 l 240 489 q 265.5 432.5 240 451 q 332 414 291 414 l 332 414 q 400 432.5 373 414 q 427 489 427 451 l 427 489 q 401 546.5 427 528 q 332 565 375 565 l 332 565 m 332 287 q 266.5 265.5 293 287 q 240 205 240 244 l 240 205 q 265 144.5 240 166 q 332 123 290 123 l 332 123 q 400.5 144.5 374 123 q 427 205 427 166 l 427 205 q 399.5 265.5 427 244 q 332 287 372 287 l 332 287"},"9":{"ha":667,"x_min":36,"x_max":626,"o":"m 328 700 q 552.5 617.5 479 700 q 626 361 626 535 l 626 361 q 553.5 76 626 164 q 328 -12 481 -12 l 328 -12 q 128 48.5 203 -12 q 53 220 53 109 l 53 220 l 231 220 l 231 213 q 255 148.5 231 174 q 325 123 279 123 l 325 123 q 398.5 155.5 372 123 q 425 243 425 188 l 425 243 l 425 301 q 356 262 396 275 q 280 249 316 249 l 280 249 q 155.5 273.5 211 249 q 68 345.5 100 298 q 36 460 36 393 l 36 460 q 114.5 637 36 574 q 328 700 193 700 l 328 700 m 327 565 q 254.5 539.5 280 565 q 229 467 229 514 l 229 467 q 254 394.5 229 420 q 326 369 279 369 l 326 369 q 399.5 393.5 374 369 q 425 465 425 418 l 425 465 q 399.5 538.5 425 512 q 327 565 374 565 l 327 565"},"A":{"ha":778,"x_min":10,"x_max":769,"o":"m 769 0 l 535 0 l 506 97 l 265 97 l 236 0 l 10 0 l 261 688 l 518 688 l 769 0 m 384 496 l 311 251 l 460 251 l 388 496 l 384 496"},"B":{"ha":778,"x_min":74,"x_max":738,"o":"m 532 688 q 627.5 666.5 584 688 q 696.5 606 671 645 q 722 519 722 567 l 722 519 q 607 359 722 392 l 607 359 l 607 355 q 738 183 738 325 l 738 183 q 711.5 87.5 738 129 q 639 23 685 46 q 538 0 593 0 l 538 0 l 74 0 l 74 688 l 532 688 m 295 537 l 295 420 l 447 420 q 483.5 435.5 469 420 q 498 474 498 451 l 498 474 l 498 484 q 483 521.5 498 506 q 447 537 468 537 l 447 537 l 295 537 m 295 278 l 295 160 l 463 160 q 499.5 175.5 485 160 q 514 214 514 191 l 514 214 l 514 224 q 499.5 262.5 514 247 q 463 278 485 278 l 463 278 l 295 278"},"C":{"ha":778,"x_min":45,"x_max":733,"o":"m 402 700 q 644 623.5 555 700 q 733 405 733 547 l 733 405 l 522 405 q 490.5 500 522 465 q 401 535 459 535 l 401 535 q 302.5 493 334 535 q 271 376 271 451 l 271 376 l 271 312 q 302.5 195.5 271 238 q 399 153 334 153 l 399 153 q 496 186 463 153 q 529 279 529 219 l 529 279 l 733 279 q 646.5 63 733 138 q 402 -12 560 -12 l 402 -12 q 135.5 78 226 -12 q 45 344 45 168 l 45 344 q 135.5 610 45 520 q 402 700 226 700 l 402 700"},"D":{"ha":778,"x_min":74,"x_max":733,"o":"m 372 688 q 733 344 733 688 l 733 344 q 372 0 733 0 l 372 0 l 74 0 l 74 688 l 372 688 m 295 523 l 295 165 l 368 165 q 507 314 507 165 l 507 314 l 507 374 q 368 523 507 523 l 368 523 l 295 523"},"E":{"ha":722,"x_min":74,"x_max":676,"o":"m 74 0 l 74 688 l 669 688 l 669 523 l 295 523 l 295 428 l 615 428 l 615 270 l 295 270 l 295 165 l 676 165 l 676 0 l 74 0"},"F":{"ha":667,"x_min":74,"x_max":630,"o":"m 74 0 l 74 688 l 630 688 l 630 523 l 295 523 l 295 405 l 583 405 l 583 247 l 295 247 l 295 0 l 74 0"},"G":{"ha":833,"x_min":45,"x_max":770,"o":"m 420 700 q 598 670 519 700 q 723.5 581.5 677 640 q 770 439 770 523 l 770 439 l 559 439 q 521 508.5 559 482 q 429 535 483 535 l 429 535 q 311 493.5 351 535 q 271 376 271 452 l 271 376 l 271 312 q 311 194.5 271 236 q 429 153 351 153 l 429 153 q 521 178.5 483 153 q 559 244 559 204 l 559 244 l 403 244 l 403 384 l 770 384 l 770 0 l 656 0 l 634 68 q 388 -12 540 -12 l 388 -12 q 131 77.5 217 -12 q 45 344 45 167 l 45 344 q 142.5 609.5 45 519 q 420 700 240 700 l 420 700"},"H":{"ha":833,"x_min":74,"x_max":759,"o":"m 759 0 l 538 0 l 538 261 l 295 261 l 295 0 l 74 0 l 74 688 l 295 688 l 295 437 l 538 437 l 538 688 l 759 688 l 759 0"},"I":{"ha":389,"x_min":84,"x_max":305,"o":"m 305 0 l 84 0 l 84 688 l 305 688 l 305 0"},"J":{"ha":667,"x_min":23,"x_max":593,"o":"m 593 239 q 519.5 49 593 110 q 308 -12 446 -12 l 308 -12 q 96.5 49 170 -12 q 23 239 23 110 l 23 239 l 23 248 l 230 248 l 230 240 q 247.5 173 230 193 q 301 153 265 153 l 301 153 q 354.5 173 337 153 q 372 240 372 193 l 372 240 l 372 688 l 593 688 l 593 239"},"K":{"ha":833,"x_min":74,"x_max":819,"o":"m 295 394 l 540 688 l 814 688 l 567 405 l 819 0 l 558 0 l 415 252 l 295 154 l 295 0 l 74 0 l 74 688 l 295 688 l 295 394"},"L":{"ha":667,"x_min":74,"x_max":648,"o":"m 74 0 l 74 688 l 295 688 l 295 176 l 648 176 l 648 0 l 74 0"},"M":{"ha":944,"x_min":60,"x_max":884,"o":"m 884 0 l 665 0 l 665 248 q 668.5 342.5 665 294 q 676 424 672 391 q 681 466 680 457 l 681 466 l 677 466 l 550 0 l 377 0 l 249 465 l 245 465 q 250.5 423.5 246 456 q 259 342.5 255 391 q 263 248 263 294 l 263 248 l 263 0 l 60 0 l 60 688 l 372 688 l 476 291 l 480 291 l 583 688 l 884 688 l 884 0"},"N":{"ha":833,"x_min":74,"x_max":759,"o":"m 759 0 l 566 0 l 277 334 l 277 0 l 74 0 l 74 688 l 267 688 l 556 349 l 556 688 l 759 688 l 759 0"},"O":{"ha":833,"x_min":45,"x_max":788,"o":"m 416 700 q 691 609 594 700 q 788 344 788 518 l 788 344 q 691 79 788 170 q 416 -12 594 -12 l 416 -12 q 141.5 78.5 238 -12 q 45 344 45 169 l 45 344 q 141.5 609.5 45 519 q 416 700 238 700 l 416 700 m 416 535 q 308 492 345 535 q 271 376 271 449 l 271 376 l 271 312 q 308 196 271 239 q 416 153 345 153 l 416 153 q 524.5 196 487 153 q 562 312 562 239 l 562 312 l 562 376 q 524.5 492 562 449 q 416 535 487 535 l 416 535"},"P":{"ha":722,"x_min":74,"x_max":680,"o":"m 460 688 q 574 658.5 524 688 q 652 577.5 624 629 q 680 462 680 526 l 680 462 l 680 449 q 652 333 680 385 q 574 251.5 624 281 q 460 222 524 222 l 460 222 l 295 222 l 295 0 l 74 0 l 74 688 l 460 688 m 295 525 l 295 383 l 386 383 q 438.5 401 421 383 q 456 450 456 419 l 456 450 l 456 458 q 438.5 507.5 456 490 q 386 525 421 525 l 386 525 l 295 525"},"Q":{"ha":833,"x_min":45,"x_max":788,"o":"m 45 344 q 141.5 609.5 45 519 q 416 700 238 700 l 416 700 q 691 609 594 700 q 788 344 788 518 l 788 344 q 744.5 148.5 788 228 q 618 28 701 69 l 618 28 l 775 -131 l 512 -131 l 406 -12 q 138.5 81.5 232 -9 q 45 344 45 172 l 45 344 m 562 376 q 524.5 492 562 449 q 416 535 487 535 l 416 535 q 308 492 345 535 q 271 376 271 449 l 271 376 l 271 312 q 308 196 271 239 q 416 153 345 153 l 416 153 q 524.5 196 487 153 q 562 312 562 239 l 562 312 l 562 376"},"R":{"ha":778,"x_min":74,"x_max":747,"o":"m 727 477 q 693 363 727 414 q 594 288 659 312 l 594 288 l 747 0 l 499 0 l 377 251 l 295 251 l 295 0 l 74 0 l 74 688 l 495 688 q 621.5 659.5 569 688 q 700.5 582.5 674 631 q 727 477 727 534 l 727 477 m 502 468 q 484 513 502 495 q 440 531 466 531 l 440 531 l 295 531 l 295 404 l 440 404 q 484 422.5 466 404 q 502 468 502 441 l 502 468"},"S":{"ha":722,"x_min":43,"x_max":686,"o":"m 363 700 q 580 646.5 495 700 q 667 488 665 593 l 667 488 l 667 476 l 460 476 l 460 480 q 438 530 460 510 q 371 550 416 550 l 371 550 q 303.5 537 327 550 q 280 505 280 524 l 280 505 q 312 465 280 478 q 415 438 344 452 l 415 438 q 551.5 402.5 498 421 q 645 342 605 384 q 686 228 685 300 l 686 228 q 603.5 47 686 106 q 383 -12 521 -12 l 383 -12 q 132.5 42 222 -12 q 43 233 43 96 l 43 233 l 252 233 q 279 163.5 252 181 q 363 146 306 146 l 363 146 q 432.5 155 405 146 q 460 192 460 164 l 460 192 q 429.5 229.5 460 217 q 330 256 399 242 l 330 256 q 191 293.5 246 274 q 95 358 136 313 q 54 480 54 403 l 54 480 q 141.5 646.5 54 593 q 363 700 229 700 l 363 700"},"T":{"ha":722,"x_min":23,"x_max":695,"o":"m 695 512 l 470 512 l 470 0 l 249 0 l 249 512 l 23 512 l 23 688 l 695 688 l 695 512"},"U":{"ha":833,"x_min":74,"x_max":759,"o":"m 759 277 q 670 62 759 136 q 417 -12 581 -12 l 417 -12 q 163.5 62 253 -12 q 74 277 74 136 l 74 277 l 74 688 l 295 688 l 295 280 q 326 187.5 295 222 q 416 153 357 153 l 416 153 q 506.5 188 475 153 q 538 280 538 223 l 538 280 l 538 688 l 759 688 l 759 277"},"V":{"ha":778,"x_min":17,"x_max":760,"o":"m 517 0 l 261 0 l 17 688 l 253 688 l 391 228 l 395 228 l 534 688 l 760 688 l 517 0"},"W":{"ha":1000,"x_min":5,"x_max":995,"o":"m 834 0 l 591 0 l 502 419 l 498 419 l 409 0 l 166 0 l 5 688 l 235 688 l 314 298 l 318 298 l 396 688 l 614 688 l 697 298 l 701 298 l 775 688 l 995 688 l 834 0"},"X":{"ha":778,"x_min":4,"x_max":778,"o":"m 532 363 l 778 0 l 510 0 l 383 214 l 379 214 l 252 0 l 4 0 l 250 364 l 28 688 l 295 688 l 399 512 l 403 512 l 508 688 l 755 688 l 532 363"},"Y":{"ha":778,"x_min":7,"x_max":770,"o":"m 501 267 l 501 0 l 280 0 l 280 267 l 7 688 l 261 688 l 393 459 l 397 459 l 529 688 l 770 688 l 501 267"},"Z":{"ha":722,"x_min":24,"x_max":691,"o":"m 683 617 l 364 165 l 691 165 l 691 0 l 24 0 l 24 71 l 343 523 l 48 523 l 48 688 l 683 688 l 683 617"},"a":{"ha":667,"x_min":30,"x_max":662,"o":"m 321 540 q 518 499.5 442 540 q 594 368 594 459 l 594 368 l 594 162 q 602 134 594 145 q 626 123 610 123 l 626 123 l 662 123 l 662 8 q 646.5 1.5 659 6 q 611 -7.5 634 -3 q 558 -12 588 -12 l 558 -12 q 462.5 5.5 500 -12 q 411 54 425 23 l 411 54 q 326 6 373 24 q 216 -12 279 -12 l 216 -12 q 30 136 30 -12 l 30 136 q 71.5 253.5 30 213 q 191 309 113 294 q 395 324 269 324 l 395 324 l 395 350 q 373.5 397 395 381 q 318 413 352 413 l 318 413 q 264.5 402 287 413 q 242 367 242 391 l 242 367 l 242 363 l 46 363 q 45 377 45 368 l 45 377 q 116.5 496 45 452 q 321 540 188 540 l 321 540 m 395 230 q 269.5 211.5 310 230 q 229 162 229 193 l 229 162 q 297 112 229 112 l 297 112 q 365.5 133 336 112 q 395 185 395 154 l 395 185 l 395 230"},"b":{"ha":667,"x_min":61,"x_max":631,"o":"m 260 479 q 408 540 317 540 l 408 540 q 573 470.5 515 540 q 631 265 631 401 l 631 265 q 573 58 631 128 q 408 -12 515 -12 l 408 -12 q 240 75 298 -12 l 240 75 l 223 0 l 61 0 l 61 725 l 260 725 l 260 479 m 346 393 q 280 361.5 302 393 q 258 280 258 330 l 258 280 l 258 247 q 280 166 258 197 q 346 135 302 135 l 346 135 q 432 237 432 135 l 432 237 l 432 290 q 346 393 432 393 l 346 393"},"c":{"ha":667,"x_min":36,"x_max":624,"o":"m 333 540 q 543.5 484.5 463 540 q 624 315 624 429 l 624 315 l 431 315 q 333 405 431 405 l 333 405 q 235 292 235 405 l 235 292 l 235 235 q 337 123 235 123 l 337 123 q 439 215 439 123 l 439 215 l 624 215 q 543.5 44 624 100 q 333 -12 463 -12 l 333 -12 q 115 58 194 -12 q 36 264 36 128 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540"},"d":{"ha":667,"x_min":36,"x_max":606,"o":"m 606 0 l 444 0 l 427 75 q 259 -12 369 -12 l 259 -12 q 94 58 152 -12 q 36 265 36 128 l 36 265 q 94 470.5 36 401 q 259 540 152 540 l 259 540 q 407 479 350 540 l 407 479 l 407 725 l 606 725 l 606 0 m 321 393 q 235 290 235 393 l 235 290 l 235 237 q 321 135 235 135 l 321 135 q 387 166 365 135 q 409 247 409 197 l 409 247 l 409 280 q 387 361.5 409 330 q 321 393 365 393 l 321 393"},"e":{"ha":667,"x_min":36,"x_max":631,"o":"m 333 540 q 554.5 472 478 540 q 631 264 631 404 l 631 264 l 631 230 l 235 230 q 260.5 144 235 173 q 341 115 286 115 l 341 115 q 414.5 136 391 115 q 438 192 438 157 l 438 192 l 631 192 q 558 42 631 96 q 345 -12 485 -12 l 345 -12 q 117 56.5 198 -12 q 36 264 36 125 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540 m 341 413 q 236 324 247 413 l 236 324 l 430 324 q 406.5 389 430 365 q 341 413 383 413 l 341 413"},"f":{"ha":389,"x_min":8,"x_max":383,"o":"m 275 737 q 330 731.5 297 737 q 383 719 363 726 l 383 719 l 383 602 l 337 602 q 293 590 305 602 q 281 549 281 578 l 281 549 l 281 528 l 383 528 l 383 393 l 281 393 l 281 0 l 82 0 l 82 393 l 8 393 l 8 528 l 82 528 l 82 550 q 132 694.5 82 652 q 275 737 182 737 l 275 737"},"g":{"ha":667,"x_min":5,"x_max":654,"o":"m 654 627 q 623.5 533 654 566 q 532 484 593 500 l 532 484 q 577.5 432.5 561 462 q 594 370 594 403 l 594 370 q 530.5 243 594 286 q 372 200 467 200 l 372 200 l 296 200 q 233 171 233 200 l 233 171 q 247 148.5 233 157 q 296 140 261 140 l 296 140 l 476 140 q 609 94 564 140 q 654 -29 654 48 l 654 -29 q 624 -127 654 -86 q 543 -189 594 -168 q 432 -210 492 -210 l 432 -210 l 138 -210 q 71.5 -193 102 -210 q 23 -146.5 41 -176 q 5 -81 5 -117 l 5 -81 q 29 -10.5 5 -42 q 89 37 53 21 l 89 37 q 51 78 65 54 q 37 130 37 102 l 37 130 q 66 200.5 37 169 q 138 243 95 232 l 138 243 q 76 300.5 99 268 q 53 369 53 333 l 53 369 q 127.5 500.5 53 461 q 325 540 202 540 l 325 540 q 412 534 379 540 l 412 534 q 475.5 590.5 461 565 q 490 627 490 616 l 490 627 l 654 627 m 323 436 q 269 419 290 436 q 248 370 248 402 l 248 370 q 267.5 320.5 248 337 q 323 304 287 304 l 323 304 q 379.5 320.5 359 304 q 400 370 400 337 l 400 370 q 379.5 419.5 400 403 q 323 436 359 436 l 323 436 m 246 0 q 208.5 -12.5 223 0 q 194 -48 194 -25 l 194 -48 q 209 -85 194 -71 q 246 -99 224 -99 l 246 -99 l 402 -99 q 439.5 -85.5 424 -99 q 455 -49 455 -72 l 455 -49 q 440 -13 455 -26 q 402 0 425 0 l 402 0 l 246 0"},"h":{"ha":667,"x_min":60,"x_max":608,"o":"m 259 473 q 334 522.5 291 505 q 424 540 377 540 l 424 540 q 562 489 516 540 q 608 342 608 438 l 608 342 l 608 0 l 409 0 l 409 318 q 391.5 372.5 409 352 q 342 393 374 393 l 342 393 q 282 369 305 393 q 259 310 259 345 l 259 310 l 259 0 l 60 0 l 60 725 l 259 725 l 259 473"},"i":{"ha":333,"x_min":67,"x_max":266,"o":"m 266 590 l 67 590 l 67 725 l 266 725 l 266 590 m 266 0 l 67 0 l 67 528 l 266 528 l 266 0"},"j":{"ha":333,"x_min":-41,"x_max":266,"o":"m 266 590 l 67 590 l 67 725 l 266 725 l 266 590 m 266 -29 q 222.5 -167.5 266 -125 q 83 -210 179 -210 l 83 -210 q 19 -205 57 -210 q -41 -192 -19 -200 l -41 -192 l -41 -73 l 11 -73 q 67 -9 67 -73 l 67 -9 l 67 528 l 266 528 l 266 -29"},"k":{"ha":667,"x_min":60,"x_max":665,"o":"m 259 326 l 428 528 l 660 528 l 465 315 l 665 0 l 439 0 l 328 181 l 259 114 l 259 0 l 60 0 l 60 726 l 259 726 l 259 326"},"l":{"ha":333,"x_min":67,"x_max":266,"o":"m 266 0 l 67 0 l 67 725 l 266 725 l 266 0"},"m":{"ha":1000,"x_min":60,"x_max":941,"o":"m 761 540 q 896 488.5 851 540 q 941 342 941 437 l 941 342 l 941 0 l 742 0 l 742 318 q 725.5 372.5 742 352 q 679 393 709 393 l 679 393 q 622 369 644 393 q 600 310 600 345 l 600 310 l 600 0 l 401 0 l 401 318 q 384.5 372.5 401 352 q 338 393 368 393 l 338 393 q 281 369 303 393 q 259 310 259 345 l 259 310 l 259 0 l 60 0 l 60 528 l 223 528 l 236 449 q 315.5 515.5 266 491 q 420 540 365 540 l 420 540 q 580 449 539 540 l 580 449 q 659.5 515.5 611 491 q 761 540 708 540 l 761 540"},"n":{"ha":667,"x_min":60,"x_max":608,"o":"m 424 540 q 562 489 516 540 q 608 342 608 438 l 608 342 l 608 0 l 409 0 l 409 318 q 391.5 372.5 409 352 q 342 393 374 393 l 342 393 q 282 369 305 393 q 259 310 259 345 l 259 310 l 259 0 l 60 0 l 60 528 l 223 528 l 236 448 q 317.5 515 267 490 q 424 540 368 540 l 424 540"},"o":{"ha":667,"x_min":36,"x_max":631,"o":"m 333 540 q 551.5 469.5 472 540 q 631 264 631 399 l 631 264 q 551.5 58.5 631 129 q 333 -12 472 -12 l 333 -12 q 115 58 194 -12 q 36 264 36 128 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540 m 333 405 q 235 292 235 405 l 235 292 l 235 235 q 333 123 235 123 l 333 123 q 432 235 432 123 l 432 235 l 432 292 q 333 405 432 405 l 333 405"},"p":{"ha":667,"x_min":61,"x_max":631,"o":"m 408 540 q 573 470 515 540 q 631 263 631 400 l 631 263 q 573 57.5 631 127 q 408 -12 515 -12 l 408 -12 q 260 48 316 -12 l 260 48 l 260 -197 l 61 -197 l 61 528 l 223 528 l 240 453 q 408 540 298 540 l 408 540 m 346 393 q 280 362 302 393 q 258 281 258 331 l 258 281 l 258 248 q 280 166.5 258 198 q 346 135 302 135 l 346 135 q 432 238 432 135 l 432 238 l 432 291 q 346 393 432 393 l 346 393"},"q":{"ha":667,"x_min":36,"x_max":606,"o":"m 259 540 q 427 453 369 540 l 427 453 l 444 528 l 606 528 l 606 -197 l 407 -197 l 407 48 q 259 -12 351 -12 l 259 -12 q 94 57.5 152 -12 q 36 263 36 127 l 36 263 q 94 470 36 400 q 259 540 152 540 l 259 540 m 321 393 q 235 291 235 393 l 235 291 l 235 238 q 321 135 235 135 l 321 135 q 387 166.5 365 135 q 409 248 409 198 l 409 248 l 409 281 q 387 362 409 331 q 321 393 365 393 l 321 393"},"r":{"ha":444,"x_min":60,"x_max":440,"o":"m 381 541 q 422 535.5 404 541 q 440 529 440 530 l 440 529 l 440 362 l 376 362 q 286.5 330 314 362 q 259 235 259 298 l 259 235 l 259 0 l 60 0 l 60 528 l 223 528 l 236 448 q 293 517.5 254 494 q 381 541 332 541 l 381 541"},"s":{"ha":611,"x_min":32,"x_max":577,"o":"m 311 540 q 490.5 498.5 417 540 q 564 370 564 457 l 564 370 l 379 370 q 353 411 379 399 l 353 411 q 308 421 335 421 l 308 421 q 236 387 236 421 l 236 387 q 261 360 236 368 q 343 343 286 352 l 343 343 q 460 319.5 413 333 q 542 271.5 507 306 q 577 175 577 237 l 577 175 q 501.5 31 577 74 q 304 -12 426 -12 l 304 -12 q 172 7.5 234 -12 q 71 68 110 27 q 32 172 32 109 l 32 172 l 217 172 l 217 168 q 245.5 120.5 218 134 q 304 107 273 107 l 304 107 q 387 146 387 107 l 387 146 q 361 175 387 166 q 276 194 335 184 l 276 194 q 159.5 220 205 206 q 80 267.5 114 234 q 46 361 46 301 l 46 361 q 119.5 499 46 458 q 311 540 193 540 l 311 540"},"t":{"ha":444,"x_min":27,"x_max":412,"o":"m 300 528 l 412 528 l 412 393 l 300 393 l 300 192 q 312 139.5 300 156 q 356 123 324 123 l 356 123 l 412 123 l 412 6 q 350 -7 388 -2 q 284 -12 312 -12 l 284 -12 q 148.5 20 196 -12 q 101 129 101 52 l 101 129 l 101 393 l 27 393 l 27 528 l 109 528 l 152 688 l 300 688 l 300 528"},"u":{"ha":667,"x_min":58,"x_max":606,"o":"m 606 0 l 443 0 l 430 80 q 348.5 12.5 399 37 q 242 -12 298 -12 l 242 -12 q 104 39 150 -12 q 58 186 58 90 l 58 186 l 58 528 l 257 528 l 257 210 q 274.5 155.5 257 176 q 324 135 292 135 l 324 135 q 384 159 361 135 q 407 218 407 183 l 407 218 l 407 528 l 606 528 l 606 0"},"v":{"ha":611,"x_min":0,"x_max":611,"o":"m 409 0 l 200 0 l 0 528 l 214 528 l 311 199 l 318 199 l 415 528 l 611 528 l 409 0"},"w":{"ha":944,"x_min":0,"x_max":944,"o":"m 750 0 l 556 0 l 474 294 l 470 294 l 387 0 l 193 0 l 0 528 l 214 528 l 294 216 l 301 216 l 384 528 l 582 528 l 662 216 l 669 216 l 750 528 l 944 528 l 750 0"},"x":{"ha":667,"x_min":4,"x_max":662,"o":"m 464 275 l 662 0 l 430 0 l 330 166 l 326 166 l 225 0 l 4 0 l 207 280 l 24 528 l 258 528 l 342 388 l 346 388 l 430 528 l 650 528 l 464 275"},"y":{"ha":611,"x_min":0,"x_max":611,"o":"m 423 16 q 322.5 -152.5 382 -95 q 156 -210 263 -210 l 156 -210 q 41 -192 91 -210 l 41 -192 l 41 -73 l 121 -73 q 210 0 196 -73 l 210 0 l 0 528 l 214 528 l 315 177 l 322 177 l 415 528 l 611 528 l 423 16"},"z":{"ha":556,"x_min":20,"x_max":535,"o":"m 526 466 l 302 135 l 535 135 l 535 0 l 20 0 l 20 65 l 242 393 l 32 393 l 32 528 l 526 528 l 526 466"}," ":{"ha":333,"x_min":0,"x_max":0,"o":""},".":{"ha":333,"x_min":61,"x_max":273,"o":"m 273 0 l 61 0 l 61 199 l 273 199 l 273 0"},",":{"ha":333,"x_min":60,"x_max":273,"o":"m 273 11 l 168 -183 l 60 -183 l 142 0 l 61 0 l 61 199 l 273 199 l 273 11"},":":{"ha":333,"x_min":61,"x_max":273,"o":"m 273 328 l 61 328 l 61 528 l 273 528 l 273 328 m 273 0 l 61 0 l 61 199 l 273 199 l 273 0"},";":{"ha":333,"x_min":60,"x_max":273,"o":"m 273 328 l 61 328 l 61 528 l 273 528 l 273 328 m 273 11 l 168 -183 l 60 -183 l 142 0 l 61 0 l 61 199 l 273 199 l 273 11"},"!":{"ha":333,"x_min":47,"x_max":286,"o":"m 229 246 l 102 246 l 47 688 l 286 688 l 229 246 m 265 0 l 67 0 l 67 185 l 265 185 l 265 0"},"?":{"ha":611,"x_min":37,"x_max":566,"o":"m 310 700 q 444 675 386 700 q 534 603.5 502 650 q 566 496 566 557 l 566 496 q 549 426.5 566 457 q 509 375 532 396 q 451 329 486 354 l 451 329 q 408.5 294 422 307 q 395 267 395 281 l 395 267 l 395 246 l 224 246 l 224 296 q 239 339.5 224 320 q 286 389 254 359 l 286 389 q 336.5 441 319 418 q 354 492 354 464 l 354 492 q 336 541.5 354 521 q 288 562 318 562 l 288 562 q 223 478 223 562 l 223 478 q 224 451 223 460 l 224 451 l 40 451 q 38 467 39 458 q 37 489 37 476 l 37 489 q 72 600.5 37 553 q 169.5 674 107 648 q 310 700 232 700 l 310 700 m 410 0 l 212 0 l 212 185 l 410 185 l 410 0"},"'":{"ha":278,"x_min":57,"x_max":220,"o":"m 220 541 l 172 398 l 104 398 l 57 541 l 57 688 l 220 688 l 220 541"},"\\"":{"ha":500,"x_min":59,"x_max":441,"o":"m 222 541 l 175 398 l 106 398 l 59 541 l 59 688 l 222 688 l 222 541 m 441 541 l 393 398 l 325 398 l 278 541 l 278 688 l 441 688 l 441 541"},"-":{"ha":333,"x_min":39,"x_max":294,"o":"m 294 196 l 39 196 l 39 354 l 294 354 l 294 196"},"–":{"ha":500,"x_min":0,"x_max":500,"o":"m 500 196 l 0 196 l 0 334 l 500 334 l 500 196"},"&":{"ha":889,"x_min":75,"x_max":888,"o":"m 417 700 q 594 675 519 700 q 709 607 669 650 q 749 512 749 564 l 749 512 l 749 487 l 572 487 q 535.5 538.5 572 518 q 430 559 499 559 l 430 559 q 332.5 534.5 366 559 q 299 475 299 510 l 299 475 q 319.5 428 299 444 q 370 412 340 412 l 370 412 l 474 412 l 474 289 l 348 289 q 297.5 270.5 317 289 q 278 217 278 252 l 278 217 q 312.5 152.5 278 176 q 422 129 347 129 l 422 129 q 572 218 572 129 l 572 218 l 572 412 l 888 412 l 888 289 l 751 289 l 751 222 q 671.5 49 751 110 q 423 -12 592 -12 l 423 -12 q 162 44 249 -12 q 75 192 75 100 l 75 192 q 106.5 295.5 75 252 q 195 357 138 339 l 195 357 l 195 361 q 123.5 416 152 377 q 95 503 95 455 l 95 503 q 131.5 602 95 557 q 241 673.5 168 647 q 417 700 314 700 l 417 700"},"@":{"ha":740,"x_min":20,"x_max":720,"o":"m 381 700 q 628 607.5 536 700 q 720 323 720 515 l 720 323 q 694.5 164 720 225 q 629.5 77 669 103 q 546 51 590 51 l 546 51 q 437 104 469 51 l 437 104 q 379 65.5 411 80 q 303 51 347 51 l 303 51 q 161 165 161 51 l 161 165 q 190 255 161 224 q 274.5 297.5 219 286 q 420 309 330 309 l 420 309 l 420 329 q 406.5 365 420 352 q 372 378 393 378 l 372 378 q 336.5 369 351 378 q 322 339 322 360 l 322 339 l 173 339 q 172 349 172 343 l 172 349 q 224.5 440 172 406 q 374 474 277 474 l 374 474 q 517.5 443 462 474 q 573 343 573 412 l 573 343 l 573 184 q 602 154 573 154 l 602 154 q 635.5 189.5 619 154 q 652 324 652 225 l 652 324 q 579 562 652 485 q 380 639 506 639 l 380 639 q 162 545.5 236 639 q 88 265 88 452 l 88 265 q 152.5 0 88 88 q 350 -88 217 -88 l 350 -88 q 427 -78.5 382 -88 q 495 -56 472 -69 l 495 -56 l 495 -122 q 424.5 -141 469 -133 q 350 -149 380 -149 l 350 -149 q 106 -47 192 -149 q 20 266 20 55 l 20 266 q 118 595.5 20 491 q 381 700 216 700 l 381 700 m 420 236 q 338.5 222 365 236 q 312 184 312 208 l 312 184 q 354 145 312 145 l 354 145 q 400.5 161.5 381 145 q 420 202 420 178 l 420 202 l 420 236"},"/":{"ha":278,"x_min":-2,"x_max":279,"o":"m 120 -48 l -2 -48 l 158 736 l 279 736 l 120 -48"},"(":{"ha":389,"x_min":55,"x_max":355,"o":"m 355 737 q 259 519.5 296 645 q 222 288 222 394 l 222 288 q 259 56.5 222 181 q 355 -160 296 -68 l 355 -160 l 235 -160 q 102 49 149 -68 q 55 288 55 166 l 55 288 q 102 528 55 411 q 235 737 149 645 l 235 737 l 355 737"},")":{"ha":389,"x_min":34,"x_max":334,"o":"m 154 737 q 287 528 240 645 q 334 288 334 411 l 334 288 q 287 49 334 166 q 154 -160 240 -68 l 154 -160 l 34 -160 q 130 56.5 93 -68 q 167 288 167 181 l 167 288 q 130 519.5 167 394 q 34 737 93 645 l 34 737 l 154 737"},"+":{"ha":660,"x_min":66,"x_max":594,"o":"m 396 330 l 594 330 l 594 198 l 396 198 l 396 0 l 264 0 l 264 198 l 66 198 l 66 330 l 264 330 l 264 528 l 396 528 l 396 330"},"%":{"ha":1000,"x_min":46,"x_max":945,"o":"m 230 700 q 368.5 652.5 324 700 q 413 520 413 605 l 413 520 q 368.5 389.5 413 437 q 230 342 324 342 l 230 342 q 91 389.5 136 342 q 46 520 46 437 l 46 520 q 91 652.5 46 605 q 230 700 136 700 l 230 700 m 342 0 l 231 0 l 650 687 l 759 687 l 342 0 m 230 624 q 184.5 600.5 199 624 q 170 537 170 577 l 170 537 l 170 505 q 184.5 441.5 170 465 q 230 418 199 418 l 230 418 q 289 505 289 418 l 289 505 l 289 537 q 230 624 289 624 l 230 624 m 762 346 q 900.5 298.5 856 346 q 945 166 945 251 l 945 166 q 900.5 35.5 945 83 q 762 -12 856 -12 l 762 -12 q 623 35.5 668 -12 q 578 166 578 83 l 578 166 q 623 298.5 578 251 q 762 346 668 346 l 762 346 m 762 270 q 716.5 246.5 731 270 q 702 183 702 223 l 702 183 l 702 151 q 716.5 87.5 702 111 q 762 64 731 64 l 762 64 q 821 151 821 64 l 821 151 l 821 183 q 762 270 821 270 l 762 270"},"#":{"ha":660,"x_min":20,"x_max":639,"o":"m 546 502 l 639 502 l 639 391 l 526 391 l 500 268 l 606 268 l 606 159 l 472 159 l 435 -11 l 318 -11 l 355 159 l 240 159 l 204 -11 l 84 -11 l 120 159 l 20 159 l 20 268 l 146 268 l 174 391 l 66 391 l 66 502 l 196 502 l 240 700 l 362 700 l 317 502 l 428 502 l 472 700 l 592 700 l 546 502 m 292 390 l 265 267 l 379 267 l 408 390 l 292 390"},"·":{"ha":333,"x_min":71,"x_max":262,"o":"m 262 235 l 71 235 l 71 418 l 262 418 l 262 235"},"×":{"ha":660,"x_min":68,"x_max":592,"o":"m 592 432 l 423 264 l 592 96 l 498 2 l 330 171 l 162 2 l 68 96 l 237 264 l 68 432 l 162 526 l 330 357 l 498 526 l 592 432"},"é":{"ha":667,"x_min":36,"x_max":631,"o":"m 365 592 l 237 592 l 330 725 l 522 725 l 524 721 l 365 592 m 333 540 q 554.5 472 478 540 q 631 264 631 404 l 631 264 l 631 230 l 235 230 q 260.5 144 235 173 q 341 115 286 115 l 341 115 q 414.5 136 391 115 q 438 192 438 157 l 438 192 l 631 192 q 558 42 631 96 q 345 -12 485 -12 l 345 -12 q 117 56.5 198 -12 q 36 264 36 125 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540 m 341 413 q 236 324 247 413 l 236 324 l 430 324 q 406.5 389 430 365 q 341 413 383 413 l 341 413"},"è":{"ha":667,"x_min":36,"x_max":631,"o":"m 303 592 l 143 721 l 145 725 l 337 725 l 430 592 l 303 592 m 333 540 q 554.5 472 478 540 q 631 264 631 404 l 631 264 l 631 230 l 235 230 q 260.5 144 235 173 q 341 115 286 115 l 341 115 q 414.5 136 391 115 q 438 192 438 157 l 438 192 l 631 192 q 558 42 631 96 q 345 -12 485 -12 l 345 -12 q 117 56.5 198 -12 q 36 264 36 125 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540 m 341 413 q 236 324 247 413 l 236 324 l 430 324 q 406.5 389 430 365 q 341 413 383 413 l 341 413"},"ê":{"ha":667,"x_min":36,"x_max":631,"o":"m 537 580 l 407 580 l 333 657 l 258 580 l 130 580 l 270 725 l 397 725 l 537 580 m 333 540 q 554.5 472 478 540 q 631 264 631 404 l 631 264 l 631 230 l 235 230 q 260.5 144 235 173 q 341 115 286 115 l 341 115 q 414.5 136 391 115 q 438 192 438 157 l 438 192 l 631 192 q 558 42 631 96 q 345 -12 485 -12 l 345 -12 q 117 56.5 198 -12 q 36 264 36 125 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540 m 341 413 q 236 324 247 413 l 236 324 l 430 324 q 406.5 389 430 365 q 341 413 383 413 l 341 413"},"à":{"ha":667,"x_min":30,"x_max":662,"o":"m 291 592 l 130 721 l 132 725 l 325 725 l 417 592 l 291 592 m 321 540 q 518 499.5 442 540 q 594 368 594 459 l 594 368 l 594 162 q 602 134 594 145 q 626 123 610 123 l 626 123 l 662 123 l 662 8 q 646.5 1.5 659 6 q 611 -7.5 634 -3 q 558 -12 588 -12 l 558 -12 q 462.5 5.5 500 -12 q 411 54 425 23 l 411 54 q 326 6 373 24 q 216 -12 279 -12 l 216 -12 q 30 136 30 -12 l 30 136 q 71.5 253.5 30 213 q 191 309 113 294 q 395 324 269 324 l 395 324 l 395 350 q 373.5 397 395 381 q 318 413 352 413 l 318 413 q 264.5 402 287 413 q 242 367 242 391 l 242 367 l 242 363 l 46 363 q 45 377 45 368 l 45 377 q 116.5 496 45 452 q 321 540 188 540 l 321 540 m 395 230 q 269.5 211.5 310 230 q 229 162 229 193 l 229 162 q 297 112 229 112 l 297 112 q 365.5 133 336 112 q 395 185 395 154 l 395 185 l 395 230"},"â":{"ha":667,"x_min":30,"x_max":662,"o":"m 537 580 l 407 580 l 333 657 l 258 580 l 130 580 l 270 725 l 397 725 l 537 580 m 321 540 q 518 499.5 442 540 q 594 368 594 459 l 594 368 l 594 162 q 602 134 594 145 q 626 123 610 123 l 626 123 l 662 123 l 662 8 q 646.5 1.5 659 6 q 611 -7.5 634 -3 q 558 -12 588 -12 l 558 -12 q 462.5 5.5 500 -12 q 411 54 425 23 l 411 54 q 326 6 373 24 q 216 -12 279 -12 l 216 -12 q 30 136 30 -12 l 30 136 q 71.5 253.5 30 213 q 191 309 113 294 q 395 324 269 324 l 395 324 l 395 350 q 373.5 397 395 381 q 318 413 352 413 l 318 413 q 264.5 402 287 413 q 242 367 242 391 l 242 367 l 242 363 l 46 363 q 45 377 45 368 l 45 377 q 116.5 496 45 452 q 321 540 188 540 l 321 540 m 395 230 q 269.5 211.5 310 230 q 229 162 229 193 l 229 162 q 297 112 229 112 l 297 112 q 365.5 133 336 112 q 395 185 395 154 l 395 185 l 395 230"},"ç":{"ha":667,"x_min":36,"x_max":624,"o":"m 333 540 q 543.5 484.5 463 540 q 624 315 624 429 l 624 315 l 431 315 q 333 405 431 405 l 333 405 q 235 292 235 405 l 235 292 l 235 235 q 337 123 235 123 l 337 123 q 439 215 439 123 l 439 215 l 624 215 q 553 52 624 108 q 365 -11 482 -4 l 365 -11 l 363 -29 q 456 -118 456 -38 l 456 -118 q 419.5 -190 456 -169 q 337 -211 383 -211 l 337 -211 q 268 -206.5 303 -211 q 211 -195 233 -202 l 211 -195 l 211 -141 q 259 -145.5 222 -142 q 329 -149 296 -149 l 329 -149 q 369 -118 369 -149 l 369 -118 q 331 -86 369 -86 l 331 -86 l 292 -86 l 304 -11 q 107 66.5 178 -3 q 36 264 36 136 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540"},"ô":{"ha":667,"x_min":36,"x_max":631,"o":"m 537 580 l 407 580 l 333 657 l 258 580 l 130 580 l 270 725 l 397 725 l 537 580 m 333 540 q 551.5 469.5 472 540 q 631 264 631 399 l 631 264 q 551.5 58.5 631 129 q 333 -12 472 -12 l 333 -12 q 115 58 194 -12 q 36 264 36 128 l 36 264 q 115 470 36 400 q 333 540 194 540 l 333 540 m 333 405 q 235 292 235 405 l 235 292 l 235 235 q 333 123 235 123 l 333 123 q 432 235 432 123 l 432 235 l 432 292 q 333 405 432 405 l 333 405"},"ù":{"ha":667,"x_min":58,"x_max":606,"o":"m 303 592 l 143 721 l 145 725 l 337 725 l 430 592 l 303 592 m 443 0 l 430 80 q 348.5 12.5 399 37 q 242 -12 298 -12 l 242 -12 q 104 39 150 -12 q 58 186 58 90 l 58 186 l 58 528 l 257 528 l 257 210 q 274.5 155.5 257 176 q 324 135 292 135 l 324 135 q 384 159 361 135 q 407 218 407 183 l 407 218 l 407 528 l 606 528 l 606 0 l 443 0"},"û":{"ha":667,"x_min":58,"x_max":606,"o":"m 537 580 l 407 580 l 333 657 l 258 580 l 130 580 l 270 725 l 397 725 l 537 580 m 606 0 l 443 0 l 430 80 q 348.5 12.5 399 37 q 242 -12 298 -12 l 242 -12 q 104 39 150 -12 q 58 186 58 90 l 58 186 l 58 528 l 257 528 l 257 210 q 274.5 155.5 257 176 q 324 135 292 135 l 324 135 q 384 159 361 135 q 407 218 407 183 l 407 218 l 407 528 l 606 528 l 606 0"},"î":{"ha":333,"x_min":-37,"x_max":370,"o":"m 370 580 l 240 580 l 166 657 l 91 580 l -37 580 l 103 725 l 230 725 l 370 580 m 266 0 l 67 0 l 67 528 l 266 528 l 266 0"},"ï":{"ha":333,"x_min":-20,"x_max":353,"o":"m 132 586 l -20 586 l -20 725 l 132 725 l 132 586 m 353 586 l 201 586 l 201 725 l 353 725 l 353 586 m 266 0 l 67 0 l 67 528 l 266 528 l 266 0"},"É":{"ha":722,"x_min":74,"x_max":676,"o":"m 417 752 l 290 752 l 382 885 l 575 885 l 577 881 l 417 752 m 74 0 l 74 688 l 669 688 l 669 523 l 295 523 l 295 428 l 615 428 l 615 270 l 295 270 l 295 165 l 676 165 l 676 0 l 74 0"},"È":{"ha":722,"x_min":74,"x_max":676,"o":"m 355 752 l 195 881 l 197 885 l 390 885 l 482 752 l 355 752 m 74 0 l 74 688 l 669 688 l 669 523 l 295 523 l 295 428 l 615 428 l 615 270 l 295 270 l 295 165 l 676 165 l 676 0 l 74 0"},"À":{"ha":778,"x_min":10,"x_max":769,"o":"m 358 752 l 198 881 l 200 885 l 393 885 l 485 752 l 358 752 m 535 0 l 506 97 l 265 97 l 236 0 l 10 0 l 261 688 l 518 688 l 769 0 l 535 0 m 311 251 l 460 251 l 388 496 l 384 496 l 311 251"},"Ç":{"ha":778,"x_min":45,"x_max":733,"o":"m 402 700 q 644 623.5 555 700 q 733 405 733 547 l 733 405 l 522 405 q 490.5 500 522 465 q 401 535 459 535 l 401 535 q 302.5 493 334 535 q 271 376 271 451 l 271 376 l 271 312 q 302.5 195.5 271 238 q 399 153 334 153 l 399 153 q 496 186 463 153 q 529 279 529 219 l 529 279 l 733 279 q 651.5 68 733 143 q 421 -12 570 -7 l 421 -12 l 418 -29 q 511 -118 511 -38 l 511 -118 q 474.5 -190 511 -169 q 393 -211 438 -211 l 393 -211 q 323 -206.5 358 -211 q 267 -195 288 -202 l 267 -195 l 267 -141 q 315 -145.5 278 -142 q 384 -149 352 -149 l 384 -149 q 424 -118 424 -149 l 424 -118 q 415.5 -94 424 -102 q 386 -86 407 -86 l 386 -86 l 348 -86 l 359 -11 q 124.5 89 204 -1 q 45 344 45 179 l 45 344 q 135.5 610 45 520 q 402 700 226 700 l 402 700"}}`),familyName:`Archivo Black`,ascender:878,descender:-210,underlinePosition:-100,underlineThickness:50,boundingBox:{yMin:-267,xMin:-232,yMax:957,xMax:1704},resolution:1e3,original_font_information:{license:`SIL Open Font License 1.1`,copyright:`Archivo Black, Omnibus-Type`}},gd=new ud().parse(hd);function _d(e){let t=[],r=[{text:`OUAIS`,color:`#f7f8f2`},{text:`HAMDI`,color:N.brand}],i=r.map(e=>e.text.split(``).map(e=>{let t=new md(e,{font:gd,size:2.3,depth:.7,curveSegments:4,bevelEnabled:!0,bevelThickness:.05,bevelSize:.04,bevelSegments:1});return t.computeBoundingBox(),t})),a=.22,o=i.map(e=>e.reduce((e,t)=>e+(t.boundingBox.max.x-t.boundingBox.min.x)+a,-.22)),s=-(o[0]+3.4+o[1])/2;r.forEach((n,r)=>{i[r].forEach(r=>{let i=r.boundingBox,o=i.max.x-i.min.x,c=i.max.y-i.min.y,l=i.max.z-i.min.z;r.translate(-(i.min.x+o/2),-(i.min.y+c/2),-(i.min.z+l/2));let u=new C(r,Q(n.color));u.castShadow=!0,u.receiveShadow=!0,e.scene.add(u);let d=new X({mass:5,material:e.physics.mat.prop,collisionFilterGroup:Z.PROP,collisionFilterMask:Z.GROUND|Z.PLAYER|Z.BALL|Z.PROP|Z.STATIC,angularDamping:.2,linearDamping:.35});d.addShape(new to(new J(o/2,c/2,l/2))),d.position.set(s+o/2,c/2+.01,-1),d.allowSleep=!0,d.sleepSpeedLimit=.15,e.physics.world.addBody(d),d.sleep(),t.push({mesh:u,body:d,home:d.position.clone(),knocked:!1}),s+=o+a}),s+=3.1799999999999997});let l=j(2048,256,(e,t,r)=>{e.clearRect(0,0,t,r),e.fillStyle=`rgba(255,255,255,0.92)`,e.textAlign=`center`,e.font=`92px ${F}`,e.fillText(n.name.toUpperCase(),t/2,110),e.font=`600 66px ${P}`,e.fillText(c(n.role),t/2,205)}),u=new C(new W(16,2),new U({map:l,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));u.rotation.x=-Math.PI/2,u.position.set(0,.03,2.1),u.receiveShadow=!0,e.scene.add(u);let d=(t,n,r,i)=>{let a=j(512,512,(e,n,r)=>{e.clearRect(0,0,n,r),e.fillStyle=`rgba(255,255,255,0.9)`,e.save(),e.translate(n/2,170),e.rotate(i),e.beginPath(),e.moveTo(0,-120),e.lineTo(95,-10),e.lineTo(36,-10),e.lineTo(36,110),e.lineTo(-36,110),e.lineTo(-36,-10),e.lineTo(-95,-10),e.closePath(),e.strokeStyle=`rgba(20,40,20,0.35)`,e.lineWidth=10,e.lineJoin=`round`,e.stroke(),e.fill(),e.restore(),e.textAlign=`center`;let a=t(),o=70;for(e.font=`${o}px ${F}`;e.measureText(a).width>n-20&&o>20;)o-=4,e.font=`${o}px ${F}`;e.strokeStyle=`rgba(20,40,20,0.35)`,e.lineWidth=10,e.lineJoin=`round`,e.strokeText(a,n/2,400),e.fillText(a,n/2,400)}),o=new C(new W(3.2,3.2),new U({map:a,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));o.rotation.set(-Math.PI/2,0,0),o.position.set(n,.03,r),o.receiveShadow=!0,e.scene.add(o)};d(()=>f(`signProjects`),0,6.3,0),d(()=>f(`signCareer`),8.6,9.8,Math.PI/2),d(()=>f(`signTraining`),-8.6,9.8,-Math.PI/2),d(()=>f(`signContact`),0,16.9,Math.PI);for(let[t,n,r]of[[-11,13,.3],[11,13,-.3]])vd(e,t,n,r);return t}function vd(e,t,n,r){let i=e.batch,a=Q(`#b5793f`),o=Q(`#2b3442`),s=new sn;for(let e=0;e<3;e++){let t=new C($.box(2.2,.08,.16),a);t.position.set(0,.48,-.2+e*.2),s.add(t)}for(let e=0;e<2;e++){let t=new C($.box(2.2,.16,.06),a);t.position.set(0,.72+e*.22,-.32),t.rotation.x=-.15,s.add(t)}for(let e of[-.95,.95]){let t=new C($.box(.08,.48,.6),o);t.position.set(e,.24,-.05),s.add(t)}s.position.set(t,0,n),s.rotation.y=r,i.addObject(s),e.physics.staticBox(t,.5,n,1.1,.5,.35,r)}var yd=null,bd=new U({color:`#fff4d6`,emissive:`#ffd27a`,emissiveIntensity:0}),xd=()=>(yd||(yd=j(128,128,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,0,t/2,n/2,t/2);r.addColorStop(0,`rgba(255,214,140,0.9)`),r.addColorStop(.4,`rgba(255,200,120,0.35)`),r.addColorStop(1,`rgba(255,200,120,0)`),e.fillStyle=r,e.fillRect(0,0,t,n)},{liveLang:!1})),new Re({map:yd,transparent:!0,opacity:0,blending:2,depthWrite:!1})),Sd=[];function Cd(e,t,n){let r=e.batch;r.add($.cyl(.07,.11,3.6,6),Q(`#2b3442`),t,1.8,n),r.add($.cyl(.18,.22,.25,6),Q(`#2b3442`),t,.12,n),r.add($.cone(.38,.3,6),Q(`#2b3442`),t,4.05,n);let i=new C($.ico(.2,1),bd);i.position.set(t,3.78,n),e.scene.add(i);let a=xd();Sd.push(a);let o=new C(new W(7,7).rotateX(-Math.PI/2),a);o.position.set(t,.04,n),o.renderOrder=2,e.scene.add(o),e.physics.staticCylinder(t,1.8,n,.12,3.6),Sd.length===1&&e.nightAware.push(e=>{bd.emissiveIntensity=e*3;for(let t of Sd)t.opacity=e*.55})}function wd(e){let t=s[e];return j(1024,600,(n,r,i)=>{n.fillStyle=`#0b1424`,n.fillRect(0,0,r,i),n.fillStyle=`rgba(255,255,255,0.035)`;for(let e=4;e<i;e+=8)for(let t=4;t<r;t+=8)n.fillRect(t,e,2,2);if(n.fillStyle=`rgba(255,255,255,0.55)`,n.font=`600 24px ${P}`,n.textBaseline=`alphabetic`,n.fillText(`${d===`fr`?`PROJET`:`PROJECT`} ${String(e+1).padStart(2,`0`)} / ${String(s.length).padStart(2,`0`)}`,56,70),n.fillStyle=`#ffffff`,Oe(n,t.name.toUpperCase(),e=>`${e}px ${F}`,92,r-112),n.fillText(t.name.toUpperCase(),56,160),n.fillStyle=t.color,n.fillRect(56,180,120,8),n.fillStyle=`rgba(255,255,255,0.86)`,n.font=`500 28px ${P}`,Pe(n,c(t.oneLiner),56,232,r-112,36,2),t.measure){let e=t.measure;n.font=`700 22px ${P}`,n.fillStyle=`rgba(255,255,255,0.6)`,n.fillText(c(e.label).toUpperCase(),56,320),e.higherIsBetter||(n.textAlign=`right`,n.fillText(`(${f(`lowerBetter`)})`,r-56,320),n.textAlign=`left`);let i=e.unit===`%`?100:Math.max(e.lab,e.test)*1.25;[[f(`training`),e.lab,N.lab,c(e.labNote)],[f(`matchDay`),e.test,N.test,c(e.testNote)]].forEach(([e,t,a,o],s)=>{let c=356+s*104,u=r-56-266-150;n.fillStyle=a,n.font=`22px ${F}`,n.fillText(e.toUpperCase(),56,c+30),n.fillStyle=`rgba(255,255,255,0.09)`,Ie(n,266,c+6,u,34,6),n.fill(),n.fillStyle=a,Ie(n,266,c+6,Math.max(14,u*t/i),34,6),n.fill(),n.fillStyle=`#ffffff`,n.font=`40px ${F}`,n.textAlign=`right`,n.fillText(`${l(t,t%1==0?0:t<10?2:1)}%`,r-56,c+40),n.textAlign=`left`,n.fillStyle=`rgba(255,255,255,0.55)`,n.font=`500 20px ${P}`,n.fillText(o,266,c+70)})}else t.headline&&(n.fillStyle=t.color,n.font=`120px ${F}`,n.fillText(t.headline.value,56,440),n.fillStyle=`rgba(255,255,255,0.75)`,n.font=`600 30px ${P}`,n.fillText(c(t.headline.label),56,490));n.fillStyle=N.brand,n.fillRect(0,i-56,r,56),n.fillStyle=`#ffffff`,n.font=`24px ${F}`,n.textAlign=`center`,n.fillText(d===`fr`?`MARQUEZ POUR OUVRIR LE PROJET`:`SCORE TO OPEN THE PROJECT`,r/2,i-19),n.textAlign=`left`})}function Td(){return(a?d===`fr`?`  BIENVENUE, ${a.company.toUpperCase()}  ·`:`  WELCOME, ${a.company.toUpperCase()}  ·`:``)+(d===`fr`?`  OUAIS FC  ·  IA & MACHINE LEARNING  ·  À LA RECHERCHE D’UN STAGE  ·  PARIS  ·  MEDOUAISHAMDI.COM  ·`:`  OUAIS FC  ·  AI & MACHINE LEARNING  ·  OPEN TO INTERNSHIPS  ·  PARIS  ·  MEDOUAISHAMDI.COM  ·`)}function Ed(e,t,n){let r=e.batch,i=e.physics,a=[],o=j(1024,600,(e,t,n)=>{e.fillStyle=N.brand,e.fillRect(0,0,t,n),e.fillStyle=`rgba(255,255,255,0.08)`;for(let r=4;r<n;r+=8)for(let n=4;n<t;n+=8)e.fillRect(n,r,2,2);e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`230px ${F}`,e.fillText(d===`fr`?`BUT !`:`GOAL!`,t/2,n/2+10)}),c=[];Rt.forEach((n,l)=>{a.push(new xu(e,{x:n,z:-47,width:ut.width,height:ut.height,depth:ut.depth}));let u=8.6,d=5.04,f=3.9;for(let e of[-1,1])r.add($.box(.3,f,.3),Q(`#2b3442`),n+e*2.6,f/2,Qe-.3),i.staticBox(n+e*2.6,f/2,Qe-.3,.15,f/2,.15);r.add($.box(9,5.44,.4),Q(`#1a2230`),n,f,Qe-.25),i.staticBox(n,f,Qe-.25,4.5,2.72,.2);let p=new C(new W(u,d),new Re({map:wd(l),toneMapped:!1}));p.position.set(n,f,Qe-.04),e.scene.add(p);let m=new C(new W(u,d),new Re({map:o,toneMapped:!1}));m.position.set(n,f,Qe-.02),m.visible=!1,e.scene.add(m),c.push({m,t:0}),r.add($.box(9,.14,.42),Q(s[l].color,{emissive:s[l].color,emissiveIntensity:.6}),n,6.42+.27,Qe-.25,0,0,0,1,1,1,!1),e.interactives.push({id:`project-${s[l].slug}`,x:n,z:-34.8,r:3.2,label:()=>s[l].name,action:()=>t(l)})});let l=j(2048,96,(e,t,n)=>{e.fillStyle=`#0b1424`,e.fillRect(0,0,t,n),e.font=`56px ${F}`,e.textBaseline=`middle`;let r=Td(),i=e.measureText(r).width,a=0,o=0;for(;a<t;)e.fillStyle=o%2?N.test:`#ffffff`,e.fillText(r,a,n/2+3),a+=i,o++});l.wrapS=V;let u=[],f=(t,n,a,o)=>{let s=Math.hypot(a-t,o-n),c=Math.atan2(a-t,o-n)-Math.PI/2,d=(t+a)/2,f=(n+o)/2;r.add($.box(s,.95,.18),Q(`#1a2230`),d,.5,f,0,c),i.staticBox(d,.5,f,s/2,.48,.1,c);let p=l.clone();p.repeat.set(s/22,1),p.needsUpdate=!0,u.push(p);for(let t of[1,-1]){let n=new C(new W(s-.1,.8),new Re({map:p,toneMapped:!1}));n.position.set(d+Math.sin(c)*.1*t*0,.52,f),n.rotation.y=c+(t===1?0:Math.PI),n.translateZ(.1),e.scene.add(n)}};f(-36,-16.6,-5.5,-16.6),f(5.5,-16.6,36,-16.6),f(-38.6,-50,-38.6,-18.5),f(38.6,-18.5,38.6,-50),e.updaters.push(e=>{for(let t of u)t.offset.x=(t.offset.x+e*.06)%1});let p=Od(e),m=[],h=[],g=[];for(let[t,n]of[[-41,-55],[41,-55],[-41,-17],[41,-17]]){r.add($.box(.6,17,.6),Q(`#6f7a86`),t,8.5,n),i.staticBox(t,8.5,n,.35,8.5,.35);for(let e=0;e<6;e++)r.add($.box(.08,.08,1.2),Q(`#59636e`),t,2+e*2.5,n,0,Math.PI/4);let a=new sn;a.position.set(t,17.4,n),a.lookAt(0,0,-36);let o=new C($.box(4.2,2.4,.5),Q(`#3a4450`));a.add(o);let s=new U({color:`#c9d2dc`,emissive:`#fff6d8`,emissiveIntensity:0});h.push(s);for(let e=0;e<4;e++)for(let t=0;t<2;t++){let n=new C($.box(.8,.8,.12),s);n.position.set(-1.5+e*1,-.5+t*1,.28),a.add(n)}e.scene.add(a);let c=new Re({color:`#fff3c8`,transparent:!0,opacity:0,blending:2,depthWrite:!1,side:2,fog:!1});g.push(c);let l=new C(new bt(.9,7,30,24,1,!0),c);l.geometry.translate(0,-15,0),l.geometry.rotateX(-Math.PI/2),l.geometry.rotateY(Math.PI),l.position.copy(a.position),l.lookAt(0,0,-36),l.rotateY(Math.PI),e.scene.add(l);let u=new Xe(`#fff1d0`,0,75,.62,.55,1.2);u.position.set(t,17,n),u.target.position.set(t*.25,0,n<-30?-40:-26),e.scene.add(u,u.target),m.push(u)}e.nightAware.push(e=>{for(let t of h)t.emissiveIntensity=e*2.2;for(let t of g)t.opacity=e*.07;for(let t of m)t.intensity=e*180,t.visible=e>.01});{let t=Qe-2.2,n=6.5,a=Ht.x0-1,o=Ht.x1+1;for(let e=a;e<=o+.01;e+=(o-a)/8)r.add($.cyl(.07,.07,n,6),Q(`#59636e`),e,n/2,t);r.add($.box(o-a,.08,.08),Q(`#59636e`),(a+o)/2,n,t);let s=j(64,64,(e,t,n)=>{e.clearRect(0,0,t,n),e.strokeStyle=`rgba(30,40,50,0.55)`,e.lineWidth=3,e.strokeRect(0,0,t,n)},{liveLang:!1});s.wrapS=s.wrapT=V,s.repeat.set((o-a)/.5,n/.5);let c=new C(new W(o-a,n),new Re({map:s,transparent:!0,depthWrite:!1,side:2}));c.position.set((a+o)/2,n/2,t),e.scene.add(c),i.staticBox((a+o)/2,n/2,t,(o-a)/2,n/2,.1,0,i.mat.net)}for(let[t,n]of[[Ht.x0+1,-47],[Ht.x1-1,-47],[Ht.x0+1,Ht.z1+.5],[Ht.x1-1,Ht.z1+.5]]){r.add($.cyl(.04,.04,1.6,6),Q(`#f7f8f2`),t,.8,n);let i=new C(new W(.5,.36,6,1),Q(N.brand,{side:2,flat:!1}));i.geometry.translate(.25,0,0),i.position.set(t,1.4,n),e.scene.add(i),Dd(e,i,.5)}kd(e,n);for(let t of[-24,18]){r.add($.box(5,.1,1.6),Q(`#2b3442`),t,2.1,-15.2),r.add($.box(5,2.1,.12),Q(`#2b3442`),t,1.05,-14.5),r.add($.box(4.6,.45,.6),Q(N.brand),t,.5,-15),i.staticBox(t,1.05,-15,2.5,1.05,.8);let n=new C($.box(5,.06,1.6),new U({color:`#bfe3ff`,transparent:!0,opacity:.45}));n.position.set(t,2.15,-15.2),e.scene.add(n)}return e.updaters.push((e,t)=>{for(let n of c)n.t<=0||(n.t-=e,n.m.visible=n.t>0&&Math.sin(t*14)>-.3)}),{goals:a,flash:e=>{c[e].t=3},excite:p.excite,wave:p.wave,floodSpots:m}}function Dd(e,t,n){let r=t.geometry.attributes.position,i=r.array.slice(),a=Math.random()*10;e.updaters.push((e,o)=>{let s=r.array;for(let e=0;e<r.count;e++){let t=i[e*3],r=t/n;s[e*3+2]=i[e*3+2]+Math.sin(o*6+t*5+a)*.12*r,s[e*3+1]=i[e*3+1]-r*r*.04}r.needsUpdate=!0,t.geometry.computeVertexNormals()})}function Od(e){let t=e.batch,n=xt(5),r=[];for(let i of[-1,1]){let a=i*40.2;for(let o=0;o<4;o++){let s=a+i*o*1.15,c=.45+o*.55;t.add($.box(1.15,c+.05,30),Q(o%2?`#c9d1db`:`#b7c0cc`),s,(c+.05)/2,-34),e.physics.staticBox(s,(c+.05)/2,-34,.58,(c+.05)/2,15);for(let e=-48.5;e<-19.5;e+=.78+n()*.25)n()<.18||r.push({x:s+(n()-.5)*.15,y:c+.05,z:e,ry:i>0?-Math.PI/2:Math.PI/2,phase:n()*10,amp:.5+n()*.5})}let o=a+i*4.8;t.add($.box(.4,4.2,31),Q(`#8e99a6`),o,2.1,-34),e.physics.staticBox(o,2.1,-34,.2,2.1,15.5),t.add($.box(5.4,.2,31.5),Q(`#e9edf1`),a+i*2.3,4.6,-34,0,0,i*-.12);for(let e of[-49,-34,-19])t.add($.box(.25,4.4,.25),Q(`#8e99a6`),a-i*.2,2.3,e)}let i=r.length,a=new G(.42,.62,.3);a.translate(0,.31,0);let o=new G(.26,.28,.26);o.translate(0,.78,0);let s=new G(.62,.12,.12);s.translate(0,.98,0);let c=new Ce(a,new U({flatShading:!0}),i),l=new Ce(o,new U({flatShading:!0}),i),u=new Ce(s,new U({flatShading:!0}),i),d=[N.brand,N.brand,`#ffffff`,N.navy,`#ffd34d`,N.brand,`#5aa9ff`],f=[`#f1c7a5`,`#c99a72`,`#9a6a4a`,`#6e4a33`,`#e0b088`],p=new I;r.forEach((e,t)=>{c.setColorAt(t,p.set(d[Math.floor(n()*d.length)])),l.setColorAt(t,p.set(f[Math.floor(n()*f.length)])),u.setColorAt(t,p.set(f[Math.floor(n()*f.length)]))}),c.castShadow=!0,e.scene.add(c,l,u);let m=new Ue,h=0,g=-1,_=(e,t)=>{h=Math.max(0,h-e);let n=Math.min(1,h),a=999;g>=0&&(g+=e,a=-52+g*14,g>5.5&&(g=-1));for(let e=0;e<i;e++){let i=r[e],o=Math.max(0,Math.sin(t*1.3+i.phase))*.03,s=n>0?Math.abs(Math.sin(t*9+i.phase))*.35*i.amp*n:0,d=i.x>0?a:g>=2.6?-16-(g-2.6)*14:999,f=g>=0?Math.exp(-((i.z-d)**2)/3):0;m.position.set(i.x,i.y+o+s+f*.45,i.z),m.rotation.set(0,i.ry,0),m.scale.set(1,1,1),m.updateMatrix(),c.setMatrixAt(e,m.matrix),l.setMatrixAt(e,m.matrix);let p=Math.max(n,f);m.scale.set(1,p>.05?1+p*.6:.001,1),m.position.y+=p>.05?.05:0,m.updateMatrix(),u.setMatrixAt(e,m.matrix)}c.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0,u.instanceMatrix.needsUpdate=!0};return e.updaters.push(_),_(0,0),{excite:e=>{h=Math.max(h,e)},wave:()=>{g<0&&(g=0)}}}function kd(t,n){let[r,i]=k,a=t.batch;a.add($.box(4.2,.5,1.4),Q(`#5b3f2a`),r,.25,i),a.add($.box(4.2,.2,1.4),Q(`#5b3f2a`),r,2.6,i);for(let e of[-1,1])a.add($.box(.12,2.2,1.4),Q(`#5b3f2a`),r+e*2.04,1.45,i);a.add($.box(4,2.1,.08),Q(`#3f2c1e`),r,1.55,i-.62),t.physics.staticBox(r,1.4,i,2.1,1.4,.7);let o=new C($.box(4,2.1,.04),new U({color:`#cfefff`,transparent:!0,opacity:.22}));o.position.set(r,1.55,i+.68),t.scene.add(o);let s=Q(`#f2c14e`,{emissive:`#5a3b00`,emissiveIntensity:.6}),c=[];e.forEach((e,n)=>{let a=new sn,o=r-1.3+n*1.3,l=new C($.box(.36,.14,.36),Q(`#2b2b2b`));l.position.y=.07;let u=new C($.cyl(.05,.08,.3,8),s);u.position.y=.29;let d=new C($.cyl(.24,.08,.4,10),s);d.position.y=.64,a.add(l,u,d);for(let e of[-1,1]){let t=new C(new $t(.1,.025,6,10),s);t.position.set(e*.26,.66,0),a.add(t)}a.position.set(o,.5,i),t.scene.add(a),c.push(a)}),t.updaters.push((e,t)=>c.forEach((e,n)=>{e.rotation.y=t*.6+n}));let l=j(512,128,(e,t,n)=>{e.fillStyle=N.navy,e.fillRect(0,0,t,n),se(e,64,n/2,90),e.fillStyle=`#ffffff`,Oe(e,f(`more`).toUpperCase(),e=>`${e}px ${F}`,50,t-150),e.textBaseline=`middle`,e.fillText(f(`more`).toUpperCase(),130,n/2+3)}),u=new C(new W(4,1),new Re({map:l,toneMapped:!1}));u.position.set(r,3.25,i),t.scene.add(u),a.add($.box(4.1,1.05,.1),Q(`#1a2230`),r,3.25,i-.08),t.interactives.push({id:`more`,x:r,z:i+2,r:2.6,label:()=>f(`more`),action:n})}function Ad(e){let t=o[e];return j(512,600,(e,n,r)=>{e.fillStyle=t.flag===`next`?`#1a1406`:N.navy,e.fillRect(0,0,n,r);let i=t.flag===`next`?`#ffd34d`:t.kind.en===`Experience`?N.test:N.lab;e.fillStyle=i,e.fillRect(0,0,n,12),e.font=`700 22px ${P}`;let a=c(t.kind).toUpperCase(),o=e.measureText(a).width+28;e.fillStyle=i,Ie(e,36,44,o,38,19),e.fill(),e.fillStyle=N.navy,e.textBaseline=`middle`,e.fillText(a,50,64),me(e,t.flag,n-36-96,40,96,64),e.strokeStyle=`rgba(255,255,255,0.6)`,e.lineWidth=2,e.strokeRect(n-36-96,40,96,64),e.textBaseline=`alphabetic`,e.fillStyle=`#ffffff`,Oe(e,c(t.when),e=>`${e}px ${F}`,52,n-72),e.fillText(c(t.when),36,172),e.font=`800 34px ${P}`,e.fillStyle=`#ffffff`;let s=Pe(e,c(t.title),36,236,n-72,42,3);e.font=`500 26px ${P}`,e.fillStyle=`rgba(255,255,255,0.72)`,s=Pe(e,c(t.place),36,s+14,n-72,34,3),e.fillStyle=`rgba(255,255,255,0.55)`,e.font=`500 21px ${P}`,Pe(e,c(t.text),36,s+22,n-72,28,Math.max(1,Math.floor((r-60-(s+22))/28))),e.fillStyle=`rgba(255,255,255,0.5)`,e.font=`600 22px ${P}`,e.fillText(`↵`,n-36-18,r-30)})}function jd(e,t){let n=e.batch,r=xt(33);Gt.forEach((i,a)=>{let s=o[a];n.add($.box(3.2,.5,1.4),Q(`#c9c2b6`),i,.25,3),n.add($.box(3,3.5,.24),Q(`#22314a`),i,2.2,2.9),e.physics.staticBox(i,1.5,3,1.6,1.5,.7);let l=Ad(a),u=new C(new W(2.8,3.28),new Re({map:l,toneMapped:!1}));u.position.set(i,2.2,3.03),e.scene.add(u);let d=i+2.2,f=2.2;n.add($.cyl(.05,.06,6,6),Q(`#e7e9ec`),d,3,f),n.add($.ico(.1,0),Q(`#f2c14e`),d,6.05,f),e.physics.staticCylinder(d,3,f,.08,6);let p=j(192,128,(e,t,n)=>me(e,s.flag,0,0,t,n),{liveLang:!1}),m=new C(new W(1.8,1.2,10,4),new U({map:p,side:2}));m.geometry.translate(.9,0,0),m.position.set(d,5.25,f),m.castShadow=!0,e.scene.add(m),Dd(e,m,1.8);let h=i-.4,g=3-4.6;s.flag===`tn`?(td(e,h-1.6,g,1,r),Md(e,h+1.6,-.9999999999999997)):s.flag===`lb`?(nd(e,h-1.4,g,1,r),Nd(e,h+1.6,-.3999999999999997)):s.flag===`fr`?Pd(e,h+.4,-1.9999999999999996):Fd(e,h+.4,-.9999999999999997),e.interactives.push({id:`career-${s.id}`,x:i,z:5.6,r:2.6,label:()=>c(s.title),action:()=>t(a)})})}function Md(e,t,n){let r=e.batch;r.add($.box(2.6,3,.5),Q(`#f4f1ea`),t,1.5,n);let i=new bt(1.3,1.3,.5,16,1,!1,0,Math.PI);i.rotateX(Math.PI/2),i.rotateZ(Math.PI/2),r.add(i,Q(`#f4f1ea`),t,3,n,0,0,-Math.PI/2),r.add($.box(1.3,2.3,.1),Q(`#1f6fb2`),t,1.2,n+.27);let a=new bt(.65,.65,.1,12,1,!1,0,Math.PI);a.rotateX(Math.PI/2),a.rotateZ(Math.PI/2),r.add(a,Q(`#1f6fb2`),t,2.35,n+.27,0,0,-Math.PI/2);for(let e=0;e<5;e++)for(let i=0;i<3;i++)r.add($.ico(.035,0),Q(`#f2c14e`),t-.4+i*.4,.4+e*.45,n+.34,0,0,0,1,1,1,!1);e.physics.staticBox(t,1.5,n,1.3,1.5,.3)}function Nd(e,t,n){let r=e.batch;r.add($.box(2,.08,1),Q(`#c08a52`),t,.95,n);for(let[e,i]of[[-.9,-.4],[.9,-.4],[-.9,.4],[.9,.4]])r.add($.box(.07,.95,.07),Q(`#2b3442`),t+e,.47,n+i);r.add($.box(.8,.04,.5),Q(`#9aa3ad`),t,1.01,n+.05),e.physics.staticBox(t,.5,n,1,.5,.5);let i=j(256,160,(e,t,n)=>{e.fillStyle=`#0d1525`,e.fillRect(0,0,t,n);let r=[`#5aa9ff`,`#f2b544`,`#4fd18b`,`#e0559b`,`#ffffff`],i=16;for(let t=0;t<9;t++){let n=12+t%3*14,a=2+t*7%4;for(let o=0;o<a;o++){let a=14+(t*13+o*29)%50;e.fillStyle=r[(t+o)%r.length],e.fillRect(n,i,a,6),n+=a+8}i+=15}},{liveLang:!1}),a=new C(new G(.8,.5,.03),[Q(`#9aa3ad`),Q(`#9aa3ad`),Q(`#9aa3ad`),Q(`#9aa3ad`),new Re({map:i,toneMapped:!1}),Q(`#9aa3ad`)]);a.position.set(t,1.27,n-.2),a.rotation.x=-.18,a.castShadow=!0,e.scene.add(a),r.add($.box(.6,.08,.6),Q(`#2b3442`),t,.55,n+.9),r.add($.box(.6,.7,.08),Q(`#2b3442`),t,.9,n+1.2),r.add($.cyl(.04,.04,.5,6),Q(`#2b3442`),t,.27,n+.9)}function Pd(e,t,n){let r=e.batch,i=Q(`#8a6a4a`);for(let[e,a]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let o=$.box(.28,3.4,.28);r.add(o,i,t+e*1.05,1.6,n+a*1.05,a*.38,0,-e*.38)}r.add($.box(1.9,.2,1.9),i,t,3.1,n),r.add($.box(1.3,.12,1.3),Q(`#a07d58`),t,3.25,n);for(let[e,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])r.add($.box(.16,2.6,.16),i,t+e*.45,4.5,n+a*.45,a*.14,0,-e*.14);r.add($.box(.9,.14,.9),i,t,5.7,n),r.add($.cyl(.08,.26,1.6,4),i,t,6.5,n,0,Math.PI/4),r.add($.cyl(.02,.06,.6,4),i,t,7.1,n);for(let e=0;e<3;e++){let a=.8+e*.8,o=1.05-e*.32;for(let[e,s]of[[0,0],[0,Math.PI/2]])r.add($.box(o*2.1,.07,.07),i,t,a,n,e,s,0)}e.physics.staticBox(t,3.5,n,1.3,3.5,1.3),r.add($.cyl(.05,.08,3,6),Q(`#1f2a24`),t+2.6,1.5,n+1),r.add($.box(.3,.4,.3),Q(`#1f2a24`),t+2.6,3.1,n+1),r.add($.cyl(.4,.4,.05,12),Q(`#2b3442`),t-2.4,.75,n+1.6),r.add($.cyl(.04,.04,.75,6),Q(`#2b3442`),t-2.4,.37,n+1.6),r.add($.cyl(.1,.06,.12,8),Q(`#ffffff`),t-2.3,.84,n+1.5)}function Fd(e,t,n){e.batch.add($.box(1.6,1,1.6),Q(`#22314a`),t,.5,n),e.physics.staticBox(t,.5,n,.8,.5,.8);let r=Q(`#f2c14e`,{emissive:`#7a5200`,emissiveIntensity:.5}),i=new sn,a=new C($.cyl(.42,.5,.3,10),r);a.position.y=.15;let o=new C($.cyl(.12,.2,.7,10),r);o.position.y=.65;let s=new C($.cyl(.7,.2,1.1,14),r);s.position.y=1.55,i.add(a,o,s);for(let e of[-1,1]){let t=new C(new $t(.3,.07,8,14),r);t.position.set(e*.75,1.6,0),i.add(t)}i.traverse(e=>{e.castShadow=!0}),i.position.set(t,1,n),e.scene.add(i);let c=new Ve(.08,0),l=new Ce(c,new Re({color:`#fff3b0`,toneMapped:!1}),14);e.scene.add(l);let u=new Ue;e.updaters.push((e,r)=>{i.rotation.y=r*.5;for(let e=0;e<14;e++){let i=r*.7+e/14*Math.PI*2,a=1.3+Math.sin(r*1.3+e)*.25;u.position.set(t+Math.cos(i)*a,1.6+(e*.37+r*.4)%2.4,n+Math.sin(i)*a),u.rotation.set(r+e,r*2,0),u.scale.setScalar(.6+Math.sin(r*4+e)*.4),u.updateMatrix(),l.setMatrixAt(e,u.matrix)}l.instanceMatrix.needsUpdate=!0})}var Id=[`PyTorch`,`Python`,`LightGBM`,`TypeScript`,`FastAPI`,`Docker`];function Ld(e,r,i){let a=e.batch,[o,s]=Ae;for(let e of[-1,1])a.add($.box(.12,4.2,.12),Q(`#9aa3ad`),o+e*3.1,2.1,s-.1);a.add($.box(6.5,3.6,.16),Q(`#c9d1db`),o,2.6,s-.12),e.physics.staticBox(o,2.1,s-.1,3.3,2.1,.2);let l=j(1024,560,(e,r,i)=>{e.fillStyle=`#fbfcfd`,e.fillRect(0,0,r,i),e.strokeStyle=`rgba(30,60,120,0.12)`,e.lineWidth=4,e.strokeRect(20,20,r-40,i-40),e.beginPath(),e.arc(r/2,i/2,70,0,Math.PI*2),e.stroke(),e.beginPath(),e.moveTo(r/2,20),e.lineTo(r/2,i-20),e.stroke(),e.fillStyle=N.navy,e.font=`52px ${F}`,e.fillText(f(`skillsTitle`).toUpperCase(),48,92),e.fillStyle=N.brand,e.fillRect(48,108,90,7);let a=(r-96)/3;t.forEach((t,n)=>{let r=48+n*a;e.fillStyle=n===0?N.lab:n===1?N.brand:`#4fa043`,e.font=`26px ${F}`,Oe(e,c(t.group).toUpperCase(),e=>`${e}px ${F}`,26,a-20),e.fillText(c(t.group).toUpperCase(),r,170),e.fillStyle=`#1b2638`,e.font=`600 27px ${P}`,t.items.forEach((t,n)=>e.fillText(`• `+t,r,216+n*38))}),e.fillStyle=`rgba(19,33,58,0.6)`,e.font=`600 22px ${P}`,e.fillText(`${f(`languages`)}: ${n.languages.map(e=>`${c(e.name)} (${c(e.level)})`).join(` · `)}`,48,i-40)}),u=new C(new W(6.2,3.39),new U({map:l}));u.position.set(o,2.6,s-.03),e.scene.add(u),e.interactives.push({id:`skills`,x:o,z:s+2.6,r:3,label:()=>f(`skillsTitle`),action:r});let d=[];at.forEach(([t,n],r)=>{let a=new sn;a.position.set(t,0,n);let o=new C($.cyl(.45,.5,.2,10),Q(`#2b3442`));o.position.y=.1,e.scene.add(o),o.position.set(t,.1,n);let s=new C($.cyl(.05,.05,.5,6),Q(`#59636e`));s.position.y=.3;let c=new C($.box(.7,1,.24),Q(`#2f5d9e`));c.position.y=1;let l=new C($.box(.55,.5,.2),Q(`#2f5d9e`));l.position.y=.5;let u=new C($.sphere(.2,10,8),Q(`#2f5d9e`));u.position.y=1.72;let f=j(256,128,(e,t,n)=>{e.fillStyle=N.test,e.fillRect(0,0,t,n),e.fillStyle=N.navy,e.textAlign=`center`,e.textBaseline=`middle`,Oe(e,Id[r],e=>`${e}px ${F}`,50,t-20),e.fillText(Id[r],t/2,n/2+2)},{liveLang:!1}),p=new C(new W(.66,.33),new U({map:f}));p.position.set(0,1.1,.125),a.add(s,c,l,u,p),a.traverse(e=>{e.castShadow=!0}),e.scene.add(a);let m=new X({mass:0,material:e.physics.mat.prop,collisionFilterGroup:Z.STATIC});m.addShape(new to(new J(.38,.95,.16)),new J(0,.95,0)),m.position.set(t,0,n),e.physics.world.addBody(m);let h={g:a,v:0,a:0,ax:0};d.push(h),m.addEventListener(`collide`,t=>{let n=t.body;if(n.material!==e.physics.mat.ball&&n.material!==e.physics.mat.player)return;let a=Math.min(6,n.velocity.length());a<.5||(h.v+=(n.velocity.z>=0?-1:1)*a*.35,i(r))})}),e.updaters.push(e=>{for(let t of d)t.v+=(-t.a*60-t.v*5)*e,t.a+=t.v*e,t.g.rotation.x=t.a});let p=[];w.forEach((t,n)=>{let r=Math.cos(t.a)*t.w/2,i=Math.sin(t.a)*t.w/2,o=new z(t.c[0]-r,t.c[1]-i),s=new z(t.c[0]+r,t.c[1]+i),c=new U({color:n%2?N.lab:N.test,side:2});for(let t of[o,s]){a.add($.cyl(.05,.05,1.9,6),Q(`#f7f8f2`),t.x,.95,t.y),e.physics.staticCylinder(t.x,.95,t.y,.07,1.9);let n=new C(new W(.5,.35),c);n.position.set(t.x+.25,1.65,t.y),e.scene.add(n)}let l=j(128,128,(e,t,r)=>{e.clearRect(0,0,t,r),e.fillStyle=`rgba(255,255,255,0.85)`,e.font=`90px ${F}`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(String(n+1),t/2,r/2+4)},{liveLang:!1}),u=new C(new W(1,1),new U({map:l,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));u.rotation.x=-Math.PI/2,u.position.set(t.c[0],.03,t.c[1]),e.scene.add(u),p.push({a:o,b:s,flags:c})});let[m,h]=an;for(let t of[-1,1])a.add($.box(.2,3,.2),Q(`#2b3442`),m,1.5,h+t*2.2),e.physics.staticBox(m,1.5,h+t*2.2,.12,1.5,.12);a.add($.box(.3,.6,4.8),Q(`#2b3442`),m,3.1,h);let g={text:`00.00`,sub:``},_=j(512,128,(e,t,n)=>{e.fillStyle=`#0b1424`,e.fillRect(0,0,t,n),e.fillStyle=N.test,e.font=`76px ${F}`,e.textBaseline=`middle`,e.fillText(g.text,24,n/2+4),e.fillStyle=`rgba(255,255,255,0.7)`,e.font=`600 24px ${P}`,e.textAlign=`right`,e.fillText(g.sub,t-20,n/2+2)});for(let t of[1,-1]){let n=new C(new W(4.4,1.1),new Re({map:_,toneMapped:!1}));n.position.set(m+t*.16,3.1,h),n.rotation.y=t*Math.PI/2,e.scene.add(n)}let v=[],y=new lt(.22,.5,10),b=Q(`#ff7a1a`);for(let[t,n]of[[-22,6],[-23,7.2],[-24.5,5.5],[-50,4],[-51,5.5],[-52,3.8],[-56,18],[-55,-8],[-18,-8],[-19.5,-9.5]]){let r=new C(y,b);r.castShadow=!0,e.scene.add(r);let i=new X({mass:.25,material:e.physics.mat.prop,collisionFilterGroup:Z.PROP,collisionFilterMask:Z.GROUND|Z.PLAYER|Z.BALL|Z.PROP|Z.STATIC});i.addShape(new Is(.04,.22,.5,8)),i.position.set(t,.25,n),i.allowSleep=!0,e.physics.world.addBody(i),i.sleep(),v.push({mesh:r,body:i,home:i.position.clone()})}return{cones:v,timerTex:_,timer:g,gatePoles:p}}function Rd(e,t,r,i,a,o){let s=e.batch,[c,l]=tn,u=new C(new G(16,.1,12),Q(`#d6d0c4`));u.position.set(c,0,dn+5),u.receiveShadow=!0,e.scene.add(u);for(let e=-7;e<=7;e+=2)s.add($.box(.05,.02,12),Q(`#c4bdb0`),c+e,.06,dn+5,0,0,0,1,1,1,!1);let p=j(1536,512,(e,t,n)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,n);for(let r=0;r<3;r++)for(let i=0;i<6;i++){let a=(i+(r%2?.5:0))*(t/6)+30,o=n/3*r+34;(i+r)%2==0?se(e,a+50,o+54,92):(e.fillStyle=N.navy,e.font=`34px ${F}`,e.fillText(`OUAIS FC`,a,o+50),e.fillStyle=N.brand,e.font=`700 20px ${P}`,e.fillText(`medouaishamdi.github.io`,a,o+80))}},{liveLang:!1}),m=3.4;s.add($.box(11.3,3.6999999999999997,.3),Q(`#2b3442`),c,1.8,dn-.2),e.physics.staticBox(c,m/2,dn-.2,5.65,m/2,.2);let h=new C(new W(11,m),new U({map:p}));h.position.set(c,1.8,dn-.04),h.receiveShadow=!0,e.scene.add(h),s.add($.box(5,.9,1),Q(N.navy),c,.45,dn+1.2),e.physics.staticBox(c,.45,dn+1.2,2.5,.45,.5),s.add($.box(5.1,.06,1.1),Q(`#ffffff`),c,.93,dn+1.2);for(let e=-2;e<=2;e++)s.add($.cyl(.015,.03,.4,5),Q(`#1b1b22`),c+e*.35,1.15,dn+1.5,-.4,0,0),s.add($.sphere(.06,6,5),Q([`#e2403a`,`#1f6fb2`,`#4fa043`,`#f2b544`,`#1b1b22`][e+2]),c+e*.35,1.34,dn+1.58);let g=j(512,128,(e,t,r)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,r),e.fillStyle=N.navy,e.textAlign=`center`,e.textBaseline=`middle`,Oe(e,n.name.toUpperCase(),e=>`${e}px ${F}`,44,t-30),e.fillText(n.name.toUpperCase(),t/2,r/2+2)},{liveLang:!1}),_=new C(new W(1.6,.4),new U({map:g}));_.position.set(c,1.12,dn+1.72),_.rotation.x=-.25,e.scene.add(_);for(let e of[-3.5,3.5]){let t=new sn;for(let e=0;e<3;e++){let n=new C($.cyl(.02,.02,1.4,4),Q(`#1b1b22`)),r=e/3*Math.PI*2;n.position.set(Math.cos(r)*.25,.68,Math.sin(r)*.25),n.rotation.set(Math.sin(r)*.3,0,-Math.cos(r)*.3),t.add(n)}let n=new C($.box(.35,.3,.6),Q(`#1b1b22`));n.position.y=1.45;let r=new C($.cyl(.1,.12,.25,10),Q(`#2b3442`));r.rotation.x=Math.PI/2,r.position.set(0,1.45,-.4),t.add(n,r),t.position.set(c+e,0,dn+5.5),t.lookAt(c,0,dn),t.rotateY(Math.PI),s.addObject(t)}e.interactives.push({id:`contact`,x:c,z:l+1.5,r:3,label:()=>f(`contactTitle`),action:t});{let t=c+8.2,n=dn+3.4;s.add($.box(.9,1,.6),Q(`#2b3442`),t,.5,n),s.add($.box(1,.06,.7),Q(`#59636e`),t,1.03,n,-.25,0,0);for(let e=0;e<6;e++)s.add($.box(.42,.012,.58),Q(e%2?`#ffffff`:`#f1efe8`),t+(e%3-1)*.015,1.08+e*.012,n-.02,-.25,(e-3)*.04,0,1,1,1,!1);e.physics.staticBox(t,.5,n,.45,.5,.3);let r=j(256,128,(e,t,n)=>{e.fillStyle=N.brand,e.fillRect(0,0,t,n),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,Oe(e,f(`cvSign`),e=>`${e}px ${F}`,64,t-30),e.fillText(f(`cvSign`),t/2,n/2+3)});for(let e of[-1,1])s.add($.box(.05,2.1,.05),Q(`#2b3442`),t+e*.55,1.05,n-.45);let a=new C(new W(1.2,.6),new Re({map:r,toneMapped:!1}));a.position.set(t,2.2,n-.44),e.scene.add(a),e.interactives.push({id:`cv`,x:t,z:n+1.6,r:2.2,label:()=>f(`cvTitle`),action:i})}{let t=c-9.5,n=dn+3.6;s.add($.box(1.6,.08,.9),Q(`#8a5a35`),t,.8,n);for(let e of[-.7,.7])for(let r of[-.35,.35])s.add($.box(.07,.78,.07),Q(`#5c3b22`),t+e,.39,n+r);s.add($.box(.36,.02,.48),Q(`#6b4a2d`),t-.2,.86,n+.05,0,.15),s.add($.box(.3,.012,.4),Q(`#ffffff`),t-.2,.875,n+.07,0,.15,0,1,1,1,!1),s.add($.box(.12,.04,.04),Q(`#c9ccd2`),t-.2,.89,n-.16,0,.15),s.add($.cyl(.02,.02,.3,6),Q(`#2b3442`),t+.35,.88,n+.1,Math.PI/2,.6),e.physics.staticBox(t,.42,n,.8,.42,.45);let r=j(320,128,(e,t,n)=>{e.fillStyle=`#13213a`,e.fillRect(0,0,t,n),e.fillStyle=`#f2b544`,e.fillRect(0,n-10,t,10),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`;let r=d===`fr`?`RAPPORT DE RECRUTEUR`:`SCOUT REPORT`;Oe(e,r,e=>`${e}px ${F}`,44,t-30),e.fillText(r,t/2,n/2-4)});for(let e of[-.6,.6])s.add($.box(.05,2,.05),Q(`#2b3442`),t+e,1,n-.48);let i=new C(new W(1.3,.52),new Re({map:r,toneMapped:!1}));i.position.set(t,2.05,n-.46),e.scene.add(i),e.interactives.push({id:`scout`,x:t,z:n+1.6,r:2.3,label:()=>d===`fr`?`Comparer mon profil à une offre`:`Match me against a job offer`,action:a})}{let t=c-4.6,n=dn+4.4;s.add($.cyl(.22,.26,.05,12),Q(`#2b3442`),t,.06,n),s.add($.cyl(.025,.025,1.45,6),Q(`#59636e`),t,.78,n),s.add($.cyl(.018,.018,.35,6),Q(`#59636e`),t,1.55,n+.1,.9),s.add($.sphere(.07,10,8),Q(`#1a2230`),t,1.68,n+.23),s.add($.cyl(.075,.075,.05,10),Q(N.brand),t,1.6,n+.18,.9),e.physics.staticCylinder(t,.7,n,.12,1.4),e.interactives.push({id:`ask`,x:t,z:n+1.4,r:2,label:()=>d===`fr`?`Poser une question (conférence de presse)`:`Ask me anything (press conference)`,action:o})}let[v,y]=tt,b=new xu(e,{x:v,z:y,width:3.4,height:1.8,depth:1.4,color:N.brand}),x=j(512,128,(e,t,n)=>{e.fillStyle=N.brand,e.fillRect(0,0,t,n),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,Oe(e,`✉  ${f(`contactTitle`).toUpperCase()}`,e=>`${e}px ${F}`,56,t-40),e.fillText(`✉  ${f(`contactTitle`).toUpperCase()}`,t/2,n/2+3)}),S=new C(new W(3.4,.85),new Re({map:x,toneMapped:!1}));S.position.set(v,2.5,y-1.45),e.scene.add(S);for(let e of[-1,1])s.add($.box(.08,2.9,.08),Q(`#2b3442`),v+e*1.65,1.45,y-1.5);let w=[v,y+5],[T,E]=vt,D=j(768,512,(e,t,n)=>{e.fillStyle=`#13213a`,e.fillRect(0,0,t,n),e.fillStyle=N.test,e.fillRect(0,0,t,10),e.fillStyle=`#ffffff`,e.font=`44px ${F}`,e.fillText(f(`behindTitle`).toUpperCase(),36,76),e.fillStyle=`rgba(255,255,255,0.82)`,e.font=`500 25px ${P}`;let r=Pe(e,f(`behind1`),36,130,t-72,34,5);e.fillStyle=`rgba(255,255,255,0.6)`,r=Pe(e,`Three.js · cannon-es · Web Audio · TypeScript · Vite`,36,r+16,t-72,34,2),e.fillStyle=N.test,e.font=`600 22px ${P}`,e.fillText(`↵`,t-50,n-30)});for(let e of[-1,1])s.add($.box(.12,3.2,.12),Q(`#2b3442`),T+e*1.9,1.6,E-.1);s.add($.box(4.1,2.8,.14),Q(`#2b3442`),T,2.05,E-.1),e.physics.staticBox(T,1.6,E-.1,2.05,1.6,.15);let O=new C(new W(3.9,2.6),new Re({map:D,toneMapped:!1}));return O.position.set(T,2.05,E-.02),e.scene.add(O),e.interactives.push({id:`behind`,x:T,z:E+2.4,r:2.6,label:()=>f(`behindTitle`),action:r}),{goal:b,contactBall:w}}function zd(e){let t=e.batch,{x0:n,z0:r,x1:i,z1:a}=Et,o=i-n,s=a-r,c=j(512,512,(e,t,n)=>{e.fillStyle=`#c4633a`,e.fillRect(0,0,t,n),e.fillStyle=`#2e5aa8`,e.fillRect(t/2-60,0,120,180),e.strokeStyle=`#ffffff`,e.lineWidth=5,e.strokeRect(4,4,t-8,n-8),e.strokeRect(t/2-60,4,120,180),e.beginPath(),e.arc(t/2,180,60,0,Math.PI),e.stroke(),e.beginPath(),e.arc(t/2,34,210,.08,Math.PI-.08),e.stroke(),e.beginPath(),e.arc(t/2,n,70,Math.PI,Math.PI*2),e.stroke(),e.fillStyle=`rgba(255,255,255,0.18)`,e.font=`56px ${F}`,e.textAlign=`center`,e.fillText(d===`fr`?`MAUVAIS SPORT ?`:`WRONG SPORT?`,t/2,n-110)}),l=new C(new G(o,.06,s),[Q(`#a85532`),Q(`#a85532`),new U({map:c}),Q(`#a85532`),Q(`#a85532`),Q(`#a85532`)]);l.position.set((n+i)/2,0,(r+a)/2),l.receiveShadow=!0,e.scene.add(l);for(let e=n;e<=i+.01;e+=2)t.add($.cyl(.04,.04,1.2,5),Q(`#59636e`),e,.6,r-.4);t.add($.box(o,.05,.05),Q(`#59636e`),(n+i)/2,1.2,r-.4);let[u,f]=kt,p=3.3,m=.75;t.add($.box(.25,4.5,.25),Q(`#2b3442`),u,4.5/2,f-1.9),t.add($.box(.2,.2,1.3),Q(`#2b3442`),u,3.9,f-1.3),e.physics.staticBox(u,4.5/2,f-1.9,.15,4.5/2,.15);let h=j(256,160,(e,t,n)=>{e.fillStyle=`rgba(255,255,255,0.95)`,e.fillRect(0,0,t,n),e.strokeStyle=N.red,e.lineWidth=8,e.strokeRect(6,6,t-12,n-12),e.strokeRect(t/2-40,n/2-10,80,60)},{liveLang:!1}),g=new C(new G(2.6,1.6,.08),[Q(`#dddddd`),Q(`#dddddd`),Q(`#dddddd`),Q(`#dddddd`),new U({map:h}),Q(`#dddddd`)]);g.position.set(u,4.05,f-m-.25),g.castShadow=!0,e.scene.add(g),e.physics.staticBox(u,4.05,f-m-.25,1.3,.8,.05);let _=new C(new $t(m,.045,6,24),Q(`#ff6a00`));_.rotation.x=Math.PI/2,_.position.set(u,p,f),e.scene.add(_);let v=new X({mass:0,material:e.physics.mat.hard,collisionFilterGroup:Z.STATIC});for(let e=0;e<16;e++){let t=e/16*Math.PI*2;v.addShape(new Fs(.06),new J(Math.cos(t)*m,0,Math.sin(t)*m))}v.position.set(u,p,f),e.physics.world.addBody(v);let y=new bt(m,m*.6,.8,16,3,!0),b=j(64,64,(e,t,n)=>{e.clearRect(0,0,t,n),e.strokeStyle=`#ffffff`,e.lineWidth=4,e.beginPath(),e.moveTo(0,0),e.lineTo(t,n),e.moveTo(t,0),e.lineTo(0,n),e.stroke()},{liveLang:!1});b.wrapS=b.wrapT=V,b.repeat.set(8,2);let x=new C(y,new U({map:b,transparent:!0,alphaTest:.4,side:2}));x.position.set(u,2.9,f),e.scene.add(x);let S={x:u,y:p,z:f,r:m,rimBody:v,net:x,swish:0};return e.updaters.push((e,t)=>{S.swish>0?(S.swish=Math.max(0,S.swish-e),x.scale.set(1+Math.sin(t*30)*.08*S.swish,1+S.swish*.25,1+Math.cos(t*30)*.08*S.swish)):x.scale.set(1,1,1)}),S}var Bd=new T,Vd=new z,Hd=class{constructor(e){m(this,`engine`,void 0),m(this,`physics`,new Nl),m(this,`input`,void 0),m(this,`music`,new Hl(H)),m(this,`player`,void 0),m(this,`balls`,[]),m(this,`penaltyBalls`,[]),m(this,`kickoffBall`,void 0),m(this,`slalomBall`,void 0),m(this,`courtBall`,void 0),m(this,`contactBall`,void 0),m(this,`goals`,[]),m(this,`contactGoal`,void 0),m(this,`letters`,[]),m(this,`cones`,[]),m(this,`hoop`,void 0),m(this,`particles`,void 0),m(this,`dog`,void 0),m(this,`keepers`,[]),m(this,`match`,void 0),m(this,`shootout`,void 0),m(this,`tourI`,-1),m(this,`replay`,void 0),m(this,`presence`,void 0),m(this,`ballActor`,new Map),m(this,`highlight`,null),m(this,`pendingReplay`,-1),m(this,`afterReplay`,null),m(this,`offerUntil`,-1),m(this,`photoMode`,!1),m(this,`tourT`,0),m(this,`cage`,void 0),m(this,`brain`,new pu),m(this,`interactives`,[]),m(this,`updaters`,[]),m(this,`nightAware`,[]),m(this,`ach`,new Mt),m(this,`ui`,void 0),m(this,`started`,!1),m(this,`time`,0),m(this,`clock`,new Dt),m(this,`water`,void 0),m(this,`excite`,void 0),m(this,`wave`,void 0),m(this,`flash`,void 0),m(this,`waveTimer`,6),m(this,`chargeStart`,-1),m(this,`pendingKick`,null),m(this,`zone`,null),m(this,`zoneTimer`,0),m(this,`nearest`,null),m(this,`prevBallPos`,new Map),m(this,`goalsScored`,u(`goals`,0)),m(this,`lastNight`,-1),m(this,`golden`,!1),m(this,`konami`,[]),m(this,`introT`,-1),m(this,`training`,void 0),m(this,`slalom`,{state:`idle`,start:0,gate:0,best:u(`slalomBest`,null),shownAt:0}),m(this,`lastTimerDraw`,0),m(this,`letterCheck`,0),m(this,`hintStage`,0),m(this,`seen`,new Set(u(`seen`,[]))),m(this,`markers`,[]),m(this,`stepCount`,0),m(this,`arenaK`,0),m(this,`ring`,void 0),m(this,`aim`,void 0),m(this,`dogIt`,void 0),m(this,`loop`,()=>{requestAnimationFrame(this.loop),this.clock.update();let e=Math.min(this.clock.getDelta(),.1);this.update(e),this.engine.render(),this.replay?.composeFrame()}),m(this,`lastRead`,null),this.engine=new Ml(e),ie(Math.min(8,this.engine.renderer.capabilities.getMaxAnisotropy())),this.input=new Pl(this.engine.renderer.domElement);let t=this.engine.scene;this.particles=new uu(t,this.engine.quality===`high`?700:400);let n=new Kl,i={scene:t,physics:this.physics,batch:n,quality:this.engine.quality,interactives:this.interactives,updaters:this.updaters,nightAware:this.nightAware},o=Ku();t.add(Ju(o)),this.water=Yu(o),t.add(this.water.mesh),od(i),Hu(i),this.letters=_d(i);let c=Ed(i,e=>this.open(()=>this.ui.openProject(e)),()=>this.open(()=>this.ui.openMore()));this.goals=c.goals,this.excite=c.excite,this.wave=c.wave,this.flash=c.flash,jd(i,e=>this.open(()=>this.ui.openCareer(e))),this.training=Ld(i,()=>this.open(()=>this.ui.openSkills()),e=>this.ach.mark(`dummies`,String(e))),this.cones=this.training.cones;let l=Rd(i,()=>this.open(()=>this.ui.openContact()),()=>this.open(()=>this.ui.openBehind()),()=>this.open(()=>this.ui.openCv()),()=>this.open(()=>this.ui.openPanel(`scout`)),()=>this.open(()=>this.ui.openPanel(`ask`)));wu(i,e=>this.open(()=>this.ui.openPanel(e))),this.contactGoal=l.goal,this.hoop=zd(i),this.cage=Su(i),Cu(i,()=>{H.jingle();let e=d===`fr`;this.ui.toast(e?`Sfax, Tunisie 🇹🇳`:`Sfax, Tunisia 🇹🇳`,e?`J'y ai étudié (IIT Sfax) avant Paris · huile d'olive et mer`:`Where I studied (IIT Sfax) before Paris · olive oil and the sea`,`info`),this.ui.say(`tea`),this.ach.unlock(`tea`)});for(let[e,t]of[[3,-6],[-3,-14],[12,10],[24,9],[36,9],[48,8],[-12,10],[5,24],[-4,30],[14,22],[24,31],[-10,-16],[10,-16]])Cd(i,e,t);for(let[e,t,n]of[[12,20,.15],[-12,20,-.15],[8,29,0],[-22,26,.4],[32,16,-.2]])vd(i,e,t,n);n.build(t);let p=(e,n,r)=>{let i=new lu(this.physics,t,{home:new T(e,ou,n),id:r});return this.balls.push(i),this.listenBall(i),i};this.kickoffBall=p(gt[0],gt[1],`kickoff`),Rt.forEach((e,t)=>this.penaltyBalls.push(p(e,-36,`penalty-${t}`))),this.slalomBall=p(an[0]+3,an[1],`slalom`),this.contactBall=p(l.contactBall[0],l.contactBall[1],`contact`),this.courtBall=p(Qt[0],Qt[1],`court`);let h=p(Ft[0],Ft[1],`cage`);this.player=new eu(this.physics,t,a?{...Jl,jersey:a.color??Jl.jersey,name:r(a.company)}:Jl),this.player.teleport(B[0],B[1],Math.PI),this.player.onStep=e=>{let t=this.player.position;H.step({x:t.x,z:t.z},e),this.stepCount++,e&&this.stepCount%2==0&&this.particles.dust(t.x,t.z,2)},Rt.forEach((e,n)=>{let r=new mu(this.physics,t,e,this.goals[n].o.z,this.brain,{jersey:s[n].color,sock:s[n].color});r.onRead=(e,t)=>{this.lastRead={ok:e===t},this.ui?.keeperRead(e,t)},r.onSave=e=>this.saved(n,e),this.keepers.push(r)}),this.match=new vu(this.physics,t,this.cage,h,{player:this.player,time:0,toast:(e,t,n)=>this.ui.toast(e,t,n),say:e=>this.ui.say(e),hud:e=>this.ui.matchHud(e),onWin:e=>{this.ach.unlock(`winner`),e&&this.ach.unlock(`cleansheet`)},celebrate:(e,t,n)=>{e&&(this.particles.confetti(t,2,n,90),this.dog.celebrate())},lang:()=>d});for(let[e,t]of[this.cage.entrance,[Ft[0],Ft[1]-6]])this.interactives.push({id:`match`,x:e,z:t,r:2.6,label:()=>d===`fr`?`Jouer un match contre Byte`:`Play a match vs Byte`,action:()=>{this.shootout.running||this.match.start()},hidden:()=>this.match.running||this.shootout.running});this.shootout=new ju(this.physics,t,this.cage,h,{player:this.player,byte:this.match.ai,brain:this.brain,touch:this.engine.isTouch,toast:(e,t,n)=>this.ui.toast(e,t,n),say:e=>this.ui.say(e),hud:e=>this.ui.matchHud(e),prompt:e=>this.ui.coach(e),lang:()=>d,onWin:()=>this.ach.unlock(`penalties`),onSave:()=>this.ach.unlock(`stopper`),celebrate:(e,t)=>{this.particles.confetti(e,2,t,90),this.dog.celebrate()}});let[g,_]=this.shootout.spotXZ,v=j(512,512,(e,t,n)=>{e.clearRect(0,0,t,n),e.strokeStyle=`#ff5a3c`,e.lineWidth=22,e.beginPath(),e.arc(t/2,n/2,150,0,Math.PI*2),e.stroke(),e.fillStyle=`#ff5a3c`,e.beginPath(),e.arc(t/2,n/2,34,0,Math.PI*2),e.fill(),e.fillStyle=`#ffffff`,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`64px ${F}`,e.fillText(d===`fr`?`TIRS AU BUT`:`PENALTIES`,t/2,n/2+215),e.font=`800 34px ${P}`,e.fillText(d===`fr`?`Entrée pour jouer`:`Enter to play`,t/2,n/2-205)}),y=new Re({map:v,transparent:!0,depthWrite:!1,toneMapped:!1}),b=new C(new W(5.2,5.2),y);b.rotation.x=-Math.PI/2,b.position.set(g-1.05,.04,_),t.add(b),this.updaters.push((e,t)=>{b.visible=!this.match.running&&!this.shootout.running,y.opacity=.7+Math.sin(t*3)*.25});for(let[e,t]of[[Ft[0]+5,this.cage.entrance[1]],[g-1.05,_]])this.interactives.push({id:`shootout`,x:e,z:t,r:2.6,label:()=>d===`fr`?`Tirs au but contre Byte`:`Penalty shootout vs Byte`,action:()=>this.shootout.start(),hidden:()=>this.match.running||this.shootout.running});this.dog=new du(this.physics,t,B[0]+2.5,B[1]+1.5),this.dog.onBark=()=>H.bark({x:this.dog.body.position.x,z:this.dog.body.position.z});let x={id:`dog`,x:0,z:0,r:2.2,label:()=>d===`fr`?`Caresser Bug 🐶`:`Pet Bug 🐶`,action:()=>{this.dog.pet();let e=this.dog.body.position;this.particles.hearts(e.x,1.2,e.z),this.ach.unlock(`goodboy`),this.ui.toast(d===`fr`?`Bug est content !`:`Bug is happy!`,d===`fr`?`Le chien du club`:`The club dog`,`info`)}};this.interactives.push(x),this.dogIt=x,this.ring=new C(new re(.5,.62,32).rotateX(-Math.PI/2),new Re({color:`#ffffff`,transparent:!0,opacity:.75,depthWrite:!1})),this.ring.visible=!1,t.add(this.ring);let S=new ct;S.moveTo(-.16,0),S.lineTo(.16,0),S.lineTo(.16,.8),S.lineTo(.38,.8),S.lineTo(0,1.25),S.lineTo(-.38,.8),S.lineTo(-.16,.8),S.closePath();let w=new Xt(S);w.rotateX(-Math.PI/2),w.rotateY(Math.PI),this.aim=new C(w,new Re({color:`#ff5a3c`,transparent:!0,opacity:.85,depthWrite:!1})),this.aim.visible=!1,t.add(this.aim),this.listenStatics(),this.input.onKey=(e,t)=>this.onKey(e,t),this.ach.onUnlock=e=>{H.jingle(),this.ui?.toast(e.title[d],`${e.icon}  ${f(`achUnlocked`)}`,`ach`)},this.engine.target.set(B[0],0,B[1]),this.engine.dist=70,this.engine.distTarget=70,this.engine.yaw=.5,this.engine.yawTarget=.5,this.engine.pitch=1.05,this.engine.target.set(0,0,-8);let E=u(`night`,null),D=new Date().getHours();(E??(D>=20||D<7))&&(this.engine.setNight(!0),this.engine.night=.999,H.night=!0,this.music.calm=!0),this.nightAware.forEach(e=>e(0)),this.setupMarkers(),this.setupReplay(),this.presence=new Vu(this.physics,t,{count:e=>this.ui?.liveCount(e),event:(e,t,n)=>{if(!this.started)return;H.cheer(.3);let r=d===`fr`,i=r?`Un visiteur${t?` (${t})`:``}`:`A visitor${t?` from ${t}`:``}`,a=e===`swish`?r?`vient de réussir un panier`:`just made a basket`:r?`vient de marquer${s[n]?` dans ${s[n].name}`:``}`:`just scored${s[n]?` in ${s[n].name}`:``}`;this.ui.toast(`🎉 ${i} ${a}`,``,`info`)}},()=>({x:this.player.position.x,z:this.player.position.z,h:this.player.heading,s:this.player.speed})),this.loop()}start(){if(this.started)return;if(this.started=!0,H.init(),this.music.start(),H.whistle(!0),H.applause(2.4,.22),window.setTimeout(()=>this.ui.say(`kickoff`),1800),i.static||this.presence.connect(),a){let e=a;window.setTimeout(()=>{let t=d===`fr`,n=e.score?t?`${e.score} % des compétences de votre offre sont dans mes projets · T pour la visite`:`${e.score}% of your offer's skills are in my projects · press T for the tour`:t?`Appuyez sur T pour la visite en 60 secondes`:`Press T for the 60-second tour`;this.tourI<0&&this.ui.toast(t?`Bienvenue, ${e.company} 👋`:`Welcome, ${e.company} 👋`,this.engine.isTouch?``:n,`info`)},3200)}this.introT=0,this.engine.distTarget=31,this.engine.yawTarget=Math.round(this.engine.yaw/(Math.PI*2))*Math.PI*2;let e=this.player.position;this.engine.target.set(e.x,0,e.z)}open(e){this.ui&&!this.ui.modalOpen()&&(H.swoosh(!0),e())}listenBall(e){e.body.addEventListener(`collide`,t=>{let n=Math.abs(t.contact.getImpactVelocityAlongNormal()),r=t.body,i={x:e.body.position.x,z:e.body.position.z};r===this.physics.ground?(n>1.2&&H.bounce(n/12,i),n>6&&this.particles.grass(i.x,i.z,5)):r.material===this.physics.mat.prop?n>1&&H.thud(n/10,i,1.3,`propBall`):r.material===this.physics.mat.hard?n>1.5&&H.bounce(n/10,i,`hard`):r.material===this.physics.mat.net?n>2&&H.net(i):r.material===this.physics.mat.ball&&n>1&&H.bounce(n/12,i,`hard`)})}listenStatics(){[...this.goals,this.contactGoal].forEach(e=>{let t=t=>n=>{if(n.body.material!==this.physics.mat.ball)return;let r=Math.abs(n.contact.getImpactVelocityAlongNormal());r<2||(H.post(r/15,{x:n.body.position.x,z:n.body.position.z}),t&&this.ach.unlock(`crossbar`),r>7&&e!==this.contactGoal&&(H.groan(),this.ui.toast(f(`post`),``,`info`),this.ui.say(`post`)))};e.crossbar.addEventListener(`collide`,t(!0)),e.posts.forEach(e=>e.addEventListener(`collide`,t(!1)))}),this.hoop.rimBody.addEventListener(`collide`,e=>{e.body.material===this.physics.mat.ball&&Math.abs(e.contact.getImpactVelocityAlongNormal())>1&&H.rim({x:this.hoop.x,z:this.hoop.z})});for(let e of this.letters)e.body.addEventListener(`collide`,t=>{let n=Math.abs(t.contact.getImpactVelocityAlongNormal());n>1&&H.thud(n/8,{x:e.body.position.x,z:e.body.position.z},.8,`letter`)});for(let e of this.cones)e.body.addEventListener(`collide`,t=>{let n=Math.abs(t.contact.getImpactVelocityAlongNormal());n>.8&&H.plastic(n/6,{x:e.body.position.x,z:e.body.position.z})})}onKey(e,t){let n=(t.key||``).toLowerCase();if(this.konami.push(n),this.konami.length>10&&this.konami.shift(),this.konami.join(`,`)===`arrowup,arrowup,arrowdown,arrowdown,arrowleft,arrowright,arrowleft,arrowright,b,a`&&this.goGolden(),this.started&&!(t.repeat||t.ctrlKey||t.metaKey||t.altKey)){if(this.replay?.active){(e===`Escape`||e===`Enter`||e===`Space`)&&(t.preventDefault(),this.skipReplay());return}if(this.tourI>=0){e===`Escape`?this.endTour(!1):e===`ArrowRight`||e===`Enter`||e===`Space`?(t.preventDefault(),this.tourStep(1)):e===`ArrowLeft`&&this.tourStep(-1);return}if(this.photoMode){if(e===`Escape`||n===`p`){this.setPhoto(!1);return}if(e===`Enter`){t.preventDefault(),this.savePhoto();return}}if(e===`Escape`){this.ui.modalOpen()?this.ui.closeModal():this.ui.toggleMenu();return}if(n===`m`){t.preventDefault(),this.ui.toggleMap();return}this.ui.modalOpen()||(n===`p`&&this.setPhoto(!0),n===`y`&&this.playReplay(),n===`t`&&this.startTour(),n===`h`&&this.whistle(),n===`r`&&this.respawn(),n===`n`&&(this.setNight(this.engine.nightTarget<.5),this.ui.updateTime()),n===`l`&&H.setMuted(!H.muted))}}whistle(){H.init(),H.whistle(),this.ach.add(`referee`)}setNight(e){this.engine.setNight(e),H.night=e,this.music.calm=e,p(`night`,e),e&&this.ach.unlock(`lights`)}applyPersonal(){a&&(this.player.setKit({...Jl,jersey:a.color??Jl.jersey,name:r(a.company)}),au(),x())}setupReplay(){this.replay=new Lu({engine:this.engine,hud:e=>this.ui.replayHud(e),done:()=>{this.input.clear();let e=this.afterReplay;this.afterReplay=null,e&&window.setTimeout(()=>{this.replay.active?this.afterReplay=e:e()},250)}});let e=this.replay;e.track(this.player.root,!0);let t=this.player.shadowBlob;t&&e.track(t);for(let t of this.balls)this.ballActor.set(t,e.track(t.mesh));for(let t of this.keepers)e.track(t.p.root,!0);e.track(this.match.ai.root,!0),e.track(this.dog.root,!0)}markHighlight(e,t,n){this.highlight={t:this.time,ball:e,label:t},n?this.pendingReplay=this.time+1.2:(this.offerUntil=this.time+12,this.ui.replayOffer(!0))}playReplay(e=!1){let t=this.highlight;if(!t||this.replay.active||!this.started)return;let n=this.ballActor.get(t.ball);if(n!==void 0&&(this.offerUntil=-1,this.ui.replayOffer(!1),this.replay.play(t.t,n,t.label,e))){for(let e of this.markers)e.mat.opacity=0,e.s.visible=!1;H.swoosh(!0),e&&this.ach.unlock(`director`)}}skipReplay(){this.replay.stop()}saveClip(){this.replay.active&&this.replay.stop(),this.playReplay(!0)}get tryList(){let e=[];for(let t of this.interactives)t.id!==`dog`&&!e.some(e=>e.id===t.id)&&e.push(t);return e}markSeen(e){this.seen.has(e)||(this.seen.add(e),p(`seen`,[...this.seen]))}goTo(e){let t=this.interactives.find(t=>t.id===e);t&&(this.match.running&&this.match.stop(``),this.shootout.running&&this.shootout.stop(),this.player.teleport(t.x,t.z+1.2,Math.PI),this.dog.teleportNear(t.x,t.z+1.2),this.engine.target.set(t.x,0,t.z),H.swoosh(!1),this.particles.sparkle(t.x,1,t.z+1.2,30,`#ffffff`))}setupMarkers(){let e=j(128,128,(e,t,n)=>{e.clearRect(0,0,t,n);let r=e.createRadialGradient(t/2,n/2,4,t/2,n/2,t/2);r.addColorStop(0,`rgba(255,214,120,0.95)`),r.addColorStop(.35,`rgba(255,140,90,0.55)`),r.addColorStop(1,`rgba(255,90,60,0)`),e.fillStyle=r,e.fillRect(0,0,t,n),e.fillStyle=`#ffffff`,e.beginPath(),e.arc(t/2,n/2,17,0,Math.PI*2),e.fill(),e.fillStyle=`#ff5a3c`,e.beginPath(),e.arc(t/2,n/2,10,0,Math.PI*2),e.fill()},{liveLang:!1});for(let t of this.interactives){if(t.id===`dog`)continue;let n=t.action;t.action=()=>{this.markSeen(t.id),n()};let r=new qt({map:e,transparent:!0,depthWrite:!1,toneMapped:!1,opacity:0}),i=new It(r);i.scale.setScalar(.9),i.renderOrder=5;let a=t.id.startsWith(`lab-`)?1.9:2.5;i.position.set(t.x,a,t.z),this.engine.scene.add(i),this.markers.push({it:t,s:i,mat:r,ph:Math.random()*6,y:a})}}updateMarkers(e){let t=this.player.position,n=this.started&&this.tourI<0&&!this.photoMode&&!this.shootout.running&&!this.replay?.active;for(let r of this.markers){let i=n&&!this.seen.has(r.it.id)&&!r.it.hidden?.()?Math.min(.95,Math.max(.12,(Math.hypot(t.x-r.it.x,t.z-r.it.z)-1.5)/4)):0;if(r.mat.opacity+=(i-r.mat.opacity)*Math.min(1,e*4),r.s.visible=r.mat.opacity>.01,r.s.visible){r.s.position.y=r.y+Math.sin(this.time*2+r.ph)*.12;let e=.85+Math.sin(this.time*3+r.ph)*.08;r.s.scale.setScalar(e)}}}startTour(){this.started&&(this.ui.modalOpen()&&this.ui.closeModal(),this.photoMode&&this.setPhoto(!1),this.match.running&&this.match.stop(``),this.shootout.running&&this.shootout.stop(),this.introT=-1,this.tourI=0,this.tourT=0,H.swoosh(!0),this.ui.tour(ru[0],0,ru.length,0),this.ach.unlock(`tour`))}tourStep(e){if(this.tourI<0)return;let t=this.tourI+e;if(!(t<0)){if(t>=ru.length)return this.endTour(!0);this.tourI=t,this.tourT=0,H.swoosh(e>0),this.ui.tour(ru[t],t,ru.length,0)}}endTour(e=!1){this.tourI<0||(this.tourI=-1,this.ui.tour(null,0,0,0),this.engine.distTarget=31,this.engine.yawTarget=Math.round(this.engine.yaw/(Math.PI*2))*Math.PI*2,e&&this.teleport(`press`))}updateTour(e){let t=ru[this.tourI],n=this.engine;this.tourT+=e;let r=1-Math.exp(-e*1.7),i=t.dist*.16;n.target.x+=(t.x+Math.sin(n.yaw)*i-n.target.x)*r,n.target.z+=(t.z+Math.cos(n.yaw)*i-n.target.z)*r,n.pitch+=(t.pitch-n.pitch)*r,n.distTarget=t.dist;let a=t.yaw+this.tourT*.025-n.yawTarget;a=Math.atan2(Math.sin(a),Math.cos(a)),n.yawTarget+=a*Math.min(1,e*2),!t.end&&this.tourT>7.5?this.tourStep(1):this.ui.tour(t,this.tourI,ru.length,Math.min(1,this.tourT/iu))}setPhoto(e){e!==this.photoMode&&(e&&(this.tourI>=0||!this.started)||(this.photoMode=e,this.ui.photo(e),H.click()))}snapshot(){let e=this.engine.renderer.domElement;this.engine.render();let t=document.createElement(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0);let r=t.height/800,i=74*r,a=n.createLinearGradient(0,t.height-i*1.8,0,t.height);a.addColorStop(0,`rgba(11,20,36,0)`),a.addColorStop(1,`rgba(11,20,36,0.85)`),n.fillStyle=a,n.fillRect(0,t.height-i*1.8,t.width,i*1.8),n.strokeStyle=`rgba(255,255,255,0.9)`,n.lineWidth=6*r,n.strokeRect(14*r,14*r,t.width-28*r,t.height-28*r),n.fillStyle=`#ffffff`,n.textBaseline=`alphabetic`,n.font=`${34*r}px ${F}`,n.fillText(`OUAIS FC`,40*r,t.height-46*r),n.font=`600 ${17*r}px ${P}`,n.fillStyle=`rgba(255,255,255,0.85)`,n.fillText(`Mohamed Ouais Hamdi · medouaishamdi.github.io`,40*r,t.height-22*r),n.textAlign=`right`,n.fillStyle=`#ff5a3c`,n.font=`${20*r}px ${F}`;let o=new Date;return n.fillText(o.toLocaleDateString(d===`fr`?`fr-FR`:`en-GB`,{day:`numeric`,month:`short`,year:`numeric`}).toUpperCase(),t.width-40*r,t.height-46*r),t}savePhoto(){let e=this.snapshot();H.click(),this.particles.sparkle(this.player.position.x,1.5,this.player.position.z,20,`#ffffff`),e.toBlob(e=>{if(!e)return;let t=URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`ouais-fc-${Date.now()}.png`,document.body.append(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(t),4e3)},`image/png`),this.ach.unlock(`photo`)}respawn(){this.match?.running&&this.match.stop(``),this.shootout?.running&&this.shootout.stop(),this.player.teleport(B[0],B[1],Math.PI),this.dog.teleportNear(B[0],B[1]),this.kickoffBall.reset(),this.engine.target.set(B[0],0,B[1])}resetWorld(){for(let e of this.balls)e.reset();for(let e of this.letters)e.body.position.copy(e.home),e.body.quaternion.set(0,0,0,1),e.body.velocity.setZero(),e.body.angularVelocity.setZero(),e.body.interpolatedPosition.copy(e.home),e.body.interpolatedQuaternion.set(0,0,0,1),e.body.sleep(),e.knocked=!1;for(let e of this.cones)e.body.position.copy(e.home),e.body.quaternion.set(0,0,0,1),e.body.velocity.setZero(),e.body.angularVelocity.setZero(),e.body.interpolatedPosition.copy(e.home),e.body.interpolatedQuaternion.set(0,0,0,1),e.body.sleep();this.respawn()}teleport(e){if(!E.find(t=>t.id===e))return;let t={kickoff:[B[0],B[1],Math.PI],projects:[0,-26,Math.PI],career:[26,9,Math.PI/2],training:[-22,4,-Math.PI/2],press:[-4,47,Math.PI],court:[36,42,Math.PI],cage:[-40,29.5,0],sfax:[49,23.5,0],lab:[54.5,-20.5,Math.PI]};this.match.running&&this.match.stop(``),this.shootout.running&&this.shootout.stop();let[n,r,i]=t[e];this.player.teleport(n,r,i),this.dog.teleportNear(n,r),this.engine.target.set(n,0,r),H.swoosh(!1),this.particles.sparkle(n,1,r,30,`#ffffff`)}goGolden(){if(this.golden)return;this.golden=!0;for(let e of this.balls){let t=e.mesh.material;t.emissive.set(`#5a3b00`),t.color.set(`#ffd34d`)}this.ach.unlock(`secret`),H.init(),H.jingle();let e=this.player.position;this.particles.confetti(e.x,1.5,e.z,120,[`#ffd34d`,`#f2c14e`,`#ffffff`])}findBall(){let e=this.player.position,t=this.player.forward(Bd),n=null,r=1/0;for(let i of this.balls){if(i.inWater)continue;let a=i.pos.x-e.x,o=i.pos.z-e.z,s=Math.hypot(a,o);if(s>2.1||i.pos.y>1.6)continue;let c=Math.acos(Math.max(-1,Math.min(1,(a*t.x+o*t.z)/(s||1))));if(c>1.5&&s>1.05)continue;let l=s+c*.9;l<r&&(r=l,n=i)}return n}kick(e,t){let n=this.findBall();if(this.player.startKick(),this.player.charge=0,this.ui.charge(0),!n){H.swoosh(!0);return}let r=this.player.position,i=Math.atan2(n.pos.x-r.x,n.pos.z-r.z)-this.player.heading;i=Math.atan2(Math.sin(i),Math.cos(i)),this.shootout.playerLocked||(this.player.heading+=i*.35);let a=this.player.forward(new T),o=7+(.22+.78*e)*19,s=t?o*.62:o*(.05+.2*e*e);t&&(o*=.62);let c=[...this.goals,this.contactGoal],l=null;for(let e of c){let t=e.o.x,r=e.o.z-.6,i=t-n.pos.x,o=r-n.pos.z,s=Math.hypot(i,o);if(s>34||s<1.5||o>-1)continue;let c=Math.atan2(i,o)-Math.atan2(a.x,a.z);if(c=Math.atan2(Math.sin(c),Math.cos(c)),Math.abs(c)<.42&&(!l||Math.abs(c)<Math.abs(l.ang))){let i=e.o.width/2-.45,c=n.pos.x+a.x/Math.min(-.05,a.z)*(r-n.pos.z),u=Math.max(t-i,Math.min(t+i,c)),d=u-n.pos.x;l={x:u,z:r,ang:Math.atan2(d,o)-Math.atan2(a.x,a.z),d:s}}}if(l){let e=Math.atan2(l.x-n.pos.x,l.z-n.pos.z);a.set(Math.sin(e),0,Math.cos(e)),t||(s=Math.min(s,o*(l.d<14?.12:.2)))}let u=this.hoop.x-n.pos.x,d=this.hoop.z-n.pos.z,f=Math.hypot(u,d);if(f<15&&f>2){let e=Math.atan2(u,d)-Math.atan2(a.x,a.z);if(e=Math.atan2(Math.sin(e),Math.cos(e)),Math.abs(e)<.45){let t=1.02,r=this.hoop.y+.08-n.pos.y,i=2*Math.cos(t)**2*(f*Math.tan(t)-r);if(i>0){let n=Math.sqrt(16*f*f/i)*1.02*(1+(Math.random()-.5)*.08*Math.max(0,Math.abs(e)-.12)),r=Math.atan2(u,d)-e*.15;a.set(Math.sin(r),0,Math.cos(r)),o=n*Math.cos(t),s=n*Math.sin(t)}}}this.pendingKick={at:this.time+.12,ball:n,dir:a,speed:o,up:s}}applyKick(){let e=this.pendingKick;if(!e||this.time<e.at)return;this.pendingKick=null;let t=e.ball,n=this.player.position;if(Math.hypot(t.pos.x-n.x,t.pos.z-n.z)>2.6)return;t.body.wakeUp(),t.body.velocity.set(e.dir.x*e.speed,e.up,e.dir.z*e.speed),t.body.angularVelocity.set(e.dir.z*e.speed*.6,(Math.random()-.5)*6,-e.dir.x*e.speed*.6),t.lastTouch=this.time,t.kickFrom.set(t.pos.x,0,t.pos.z);let r=Math.min(1,(e.speed+e.up*.5)/26);H.kick(r,{x:t.pos.x,z:t.pos.z}),this.particles.grass(t.pos.x,t.pos.z,4+Math.floor(r*8)),r>.75&&(this.engine.shake=Math.max(this.engine.shake,.6)),this.ach.unlock(`firstTouch`)}scored(e,t){let n=this.goals[e];n.cooldown=4,n.shake(t.pos.x,t.pos.y),H.net({x:t.pos.x,z:t.pos.z}),H.cheer(1),this.music.duckFor(3.5),this.excite(4.5),this.flash(e),this.particles.confetti(n.o.x,2.6,n.o.z-.5,160),this.player.celebrate(),this.dog.celebrate(),this.engine.shake=1,this.engine.night>.5&&this.fireworks(),this.goalsScored++,p(`goals`,this.goalsScored),this.ach.unlock(`goal`),this.ach.add(`hattrick`),this.brain.s.shots>=10&&this.ach.unlock(`beatai`);let r=Math.hypot(t.kickFrom.x-n.o.x,t.kickFrom.z-n.o.z);t.lastTouch>0&&r>22&&this.ach.unlock(`screamer`),this.ui.say(r>20?`goalLong`:this.lastRead&&!this.lastRead.ok?`fooled`:`goal`),this.presence.send({t:`e`,k:`goal`,p:e});let i=t.lastTouch>0&&r>16;this.markHighlight(t,`${s[e].name}${t.lastTouch>0&&r>3?` · ${Math.round(r)} m`:``}`,i),this.ui.toast(f(`goal`),`${s[e].name}${r>3&&t.lastTouch>0?` · ${l(r,0)} m`:``}`,`goal`);let a=t,o=()=>{!this.ui.modalOpen()&&this.tourI<0&&(H.swoosh(!0),this.ui.openProject(e))};i?this.afterReplay=o:window.setTimeout(o,1500),window.setTimeout(()=>{a.reset(),this.particles.sparkle(a.home.x,.5,a.home.z,16,`#ffffff`)},2600)}saved(e,t){this.ui.say(`saved`);let n={x:t.pos.x,z:t.pos.z};H.thud(1,n,1.1,`save`),H.groan(),this.excite(1.2),this.engine.shake=Math.max(this.engine.shake,.4),this.particles.grass(t.pos.x,t.pos.z,8),this.ach.unlock(`readbook`),this.ui.toast(d===`fr`?`ARRÊT !`:`SAVED!`,d===`fr`?`Byte a lu ta frappe · Entrée pour lire ${s[e].name}`:`Byte read your shot · Enter to read ${s[e].name} anyway`,`goal`);let r=this.goals[e];r.cooldown=Math.max(r.cooldown,1.2),window.setTimeout(()=>t.reset(),2600)}fireworks(){let e=[`#ff5a3c`,`#f2b544`,`#5aa9ff`,`#4fd18b`,`#ffffff`,`#e0559b`];for(let t=0;t<6;t++){let n=.3+t*.45;H.firework(n),window.setTimeout(()=>{let n=(Math.random()-.5)*60,r=-40-Math.random()*14;this.particles.firework(n,18+Math.random()*8,r,e[t%e.length])},(n+.75)*1e3)}}scoredContact(e){let t=this.contactGoal;t.cooldown=4,t.shake(e.pos.x,e.pos.y),H.net({x:e.pos.x,z:e.pos.z}),H.applause(1.6,.4),this.particles.confetti(t.o.x,2,t.o.z-.4,80),this.player.celebrate(),this.ui.toast(f(`goal`),f(`contactTitle`),`goal`),window.setTimeout(()=>{this.ui.modalOpen()||this.open(()=>this.ui.openContact())},1200),window.setTimeout(()=>e.reset(),2400)}updateSlalom(e){let t=this.slalomBall,n=t.pos,r=this.slalom,[i,a]=an;if(e.x>i&&n.x<=i&&Math.abs(n.z-a)<2.2&&r.state!==`running`&&(r.state=`running`,r.start=this.time,r.gate=0,H.whistle(),this.ui.toast(f(`slalomGo`),``,`info`),this.training.gatePoles.forEach(e=>e.flags.emissive.set(`#000000`))),r.state===`running`){let i=w[r.gate],a=this.training.gatePoles[r.gate];if(Ud(e.x,e.z,n.x,n.z,a.a.x,a.a.y,a.b.x,a.b.y)){if(H.tick(!0),a.flags.emissive.set(`#3a6b00`),r.gate++,r.gate>=w.length){let e=this.time-r.start;r.state=`done`,r.shownAt=this.time;let i=r.best==null||e<r.best;i&&(r.best=e,p(`slalomBest`,e)),H.cheer(.6),this.particles.confetti(n.x,1.5,n.z,80),this.player.celebrate(),this.ach.unlock(`dribbler`),this.ui.say(`slalom`),e<16&&this.ach.unlock(`quickfeet`),this.ui.toast(f(`slalomDone`),`${l(e,2)} s${i?` · ★`:``}`,`goal`),window.setTimeout(()=>t.reset(),2e3)}}else(n.x<i.c[0]-3.5||this.time-r.start>90||wt(n.x,n.z)>-1)&&(r.state=`idle`,H.groan(),this.ui.toast(f(`slalomMissed`),``,`info`),window.setTimeout(()=>t.reset(),1200))}if(this.time-this.lastTimerDraw>.1){this.lastTimerDraw=this.time;let e=this.training.timer,t=r.best==null?``:`${f(`slalomBest`)} ${l(r.best,2)} s`,n=`00.00`;r.state===`running`?n=l(this.time-r.start,2).padStart(5,`0`):r.state===`done`&&(n=l(r.best??0,2).padStart(5,`0`)),r.state===`done`&&this.time-r.shownAt>6&&(r.state=`idle`),(e.text!==n||e.sub!==t)&&(e.text=n,e.sub=t,mn(this.training.timerTex));let o=Math.hypot(this.player.position.x-i,this.player.position.z-a)<12;this.ui.slalom(r.state===`running`?`⏱ ${l(this.time-r.start,1)} s · ${r.gate}/${w.length}`:o&&r.state===`idle`?f(`slalomHint`):null)}}update(e){if(this.replay?.active){this.input.enabled=!1,this.input.update(),this.replay.step(e),this.engine.update(e,this.time);return}this.time+=e;let t=this.input,n=this.ui?.modalOpen()??!1;if(t.enabled=this.started&&!n&&this.tourI<0,t.update(),this.started||(this.engine.yawTarget+=e*.06,this.engine.target.set(0,0,-8)),this.introT>=0){this.introT+=e;let t=Math.min(1,this.introT/2.6);this.engine.pitch=ge.lerp(1.05,.64,t*t*(3-2*t)),t>=1&&(this.introT=-1)}let r=this.shootout,i=r.playerLocked;if(i){let e=r.cameraYaw-this.engine.yawTarget;e=Math.atan2(Math.sin(e),Math.cos(e)),this.engine.yawTarget+=e,this.engine.distTarget=17}else t.enabled&&(this.engine.yawTarget+=t.yawDelta,this.engine.distTarget=ge.clamp(this.engine.distTarget+t.zoomDelta,14,48));let a=this.engine.yaw,o=t.move.x,s=t.move.y;Vd.set(o*Math.cos(a)-s*Math.sin(a),-o*Math.sin(a)-s*Math.cos(a));let c=i&&r.youKeep,l=i&&!r.youKeep,u=t.enabled&&(t.kickHeld&&this.chargeStart>=0&&!!this.findBall()||l);if(u&&(this.player.heading-=o*e*1.5,Vd.set(0,0)),c?r.keeperInput(t.enabled?o:0,t.enabled&&t.kickPressed):this.player.move(Vd,t.sprint&&!u,e,!t.enabled||l),l&&r.clampAim(),t.enabled&&!c){if(t.kickPressed&&(this.chargeStart=this.time),t.kickHeld&&this.chargeStart>=0){let e=Math.min(1,(this.time-this.chargeStart)/.85);this.player.charge=e,this.ui.charge(e>.12?e:0)}if(t.kickReleased&&this.chargeStart>=0){let e=Math.min(1,(this.time-this.chargeStart)/.85);this.chargeStart=-1,this.kick(e<.15?0:e,!1)}t.lobPressed&&this.kick(.5,!0),t.interactPressed&&this.nearest&&!i&&!this.photoMode&&this.nearest.action()}else this.chargeStart>=0&&(this.chargeStart=-1,this.player.charge=0,this.ui?.charge(0));this.applyKick();let p=this.player.position,m=this.player.forward(Bd);if(this.player.speed>2&&this.player.kickT<0)for(let e of this.balls){if(e.inWater||e.pos.y>.6)continue;let t=e.pos.x-p.x,n=e.pos.z-p.z,r=Math.hypot(t,n);if(r>1.15||(t*m.x+n*m.z)/(r||1)<.5)continue;let i=e.body.velocity,a=this.player.speed*1.18,o=i.x*m.x+i.z*m.z;o<a&&(i.x+=m.x*(a-o)*.6,i.z+=m.z*(a-o)*.6,e.body.wakeUp(),e.lastTouch=this.time,e.kickFrom.set(e.pos.x,0,e.pos.z))}for(let t of this.balls)t.preStep(e);this.physics.step(e);let h=!1;for(let e of this.physics.world.contacts){let t=e.bi===this.player.body?e.bj:e.bj===this.player.body?e.bi:null;if(t&&t.mass>=5&&t.collisionFilterGroup===8){h=!0;let e=t._shoved??-9;if(this.time-e>.6&&this.player.speed>.8){t._shoved=this.time;let e=this.player.forward(Bd);t.wakeUp(),t.applyImpulse(new J(e.x*9,0,e.z*9),new J(0,1,0))}break}}this.player.pushing=h;let g=wt(p.x,p.z);if(g>-2.2){let e=.5,t=wt(p.x+e,p.z)-wt(p.x-e,p.z),n=wt(p.x,p.z+e)-wt(p.x,p.z-e),r=Math.hypot(t,n)||1,i=t/r,a=n/r,o=g+2.2;this.player.body.position.x-=i*o,this.player.body.position.z-=a*o;let s=this.player.vel.x*i+this.player.vel.z*a;s>0&&(this.player.vel.x-=i*s,this.player.vel.z-=a*s)}(p.y<.37||p.y>3)&&(this.player.body.position.y=Xl,this.player.body.velocity.y=0);for(let t of this.balls){let n=this.prevBallPos.get(t)??new T().copy(t.pos),r=t.pos;if(!t.inWater)this.goals.forEach((e,n)=>{e.cooldown<=0&&e.contains(r)&&this.scored(n,t)}),this.contactGoal.cooldown<=0&&this.contactGoal.contains(r)&&this.scoredContact(t),n.y>this.hoop.y&&r.y<=this.hoop.y&&Math.hypot(r.x-this.hoop.x,r.z-this.hoop.z)<this.hoop.r-.136&&(this.hoop.swish=1,H.net({x:this.hoop.x,z:this.hoop.z}),H.applause(1.8,.45),this.particles.confetti(this.hoop.x,this.hoop.y,this.hoop.z,70,[`#ff6a00`,`#ffffff`,`#1f6fb2`]),this.ach.unlock(`wrongsport`),this.ui.say(`swish`),this.markHighlight(t,d===`fr`?`Panier`:`Swish`,!0),this.presence.send({t:`e`,k:`swish`}),this.ui.toast(`🏀  `+(d===`fr`?`Panier !`:`Swish!`),d===`fr`?`Mauvais sport, bon geste.`:`Wrong sport, right move.`,`goal`)),wt(r.x,r.z)>.6&&r.y<1.2&&(t.enterWater(),H.splash({x:r.x,z:r.z}),this.particles.splash(r.x,0,r.z),this.ach.unlock(`splash`),this.ui.say(`splash`),this.ui.toast(f(`splash`),``,`info`)),(r.y<-5||Math.abs(r.x)>120||Math.abs(r.z)>120)&&t.reset();else{t.inWater+=e;let n=t.body.velocity;n.y+=((-.15-r.y)*12-n.y*3)*e,n.x*=1-e*1.5,n.z*=1-e*1.5,t.inWater>2.6&&(t.reset(),this.particles.sparkle(t.home.x,.5,t.home.z,20,`#bdeff2`))}t===this.slalomBall&&this.updateSlalom(n);let i=Math.hypot(r.x-t.home.x,r.z-t.home.z);!t.inWater&&i>3&&t.body.velocity.lengthSquared()<.05?t.idleTime+=e:t.idleTime=0,t.idleTime>18&&Math.hypot(p.x-r.x,p.z-r.z)>18&&Math.hypot(p.x-t.home.x,p.z-t.home.z)>12&&(t.reset(),this.particles.sparkle(t.home.x,.5,t.home.z,12,`#ffffff`));let a=this.prevBallPos.get(t);a?a.set(r.x,r.y,r.z):this.prevBallPos.set(t,new T(r.x,r.y,r.z)),t.sync()}for(let e of this.letters){let t=e.body.interpolatedPosition,n=e.body.interpolatedQuaternion;e.mesh.position.set(t.x,t.y,t.z),e.mesh.quaternion.set(n.x,n.y,n.z,n.w)}for(let e of this.cones){let t=e.body.interpolatedPosition,n=e.body.interpolatedQuaternion;e.mesh.position.set(t.x,t.y,t.z),e.mesh.quaternion.set(n.x,n.y,n.z,n.w)}this.letterCheck+=e,this.letterCheck>.4&&(this.letterCheck=0,this.letters.forEach((e,t)=>{if(e.knocked)return;let n=e.body.quaternion;1-2*(n.x*n.x+n.z*n.z)<.55&&(e.knocked=!0,this.ach.unlock(`knock`),this.ach.mark(`demolition`,String(t)))})),this.player.animate(e);let _=this.started&&!n?this.findBall():null;if(this.ring.visible=!!_&&!(this.shootout.playerLocked&&this.shootout.youKeep),_){this.ring.position.set(_.mesh.position.x,.04,_.mesh.position.z);let e=1+Math.sin(this.time*6)*.06;this.ring.scale.set(e,1,e)}if(this.aim.visible=!!_&&this.player.charge>.05,this.aim.visible&&_&&(this.aim.position.set(_.mesh.position.x,.05,_.mesh.position.z),this.aim.rotation.y=this.player.heading,this.aim.scale.set(1,1,1+this.player.charge*2.6),this.aim.material.color.setHSL(.03+(1-this.player.charge)*.1,1,.58)),this.shootout.running||this.match.update(e),this.shootout.update(e),this.updateMarkers(e),this.presence.update(e,!0),this.replay.capture(this.time),this.pendingReplay>=0&&this.time>=this.pendingReplay&&(this.pendingReplay=-1,!this.ui.modalOpen()&&this.tourI<0&&!this.photoMode&&!this.match.running&&!this.shootout.running&&this.playReplay(),!this.replay.active&&this.afterReplay)){let e=this.afterReplay;this.afterReplay=null,e()}this.offerUntil>=0&&this.time>this.offerUntil&&(this.offerUntil=-1,this.ui.replayOffer(!1)),this.shootout.running?this.dog.update(e,Ft[0]+4,Ye.z1-1.2,0,this.time):this.dog.update(e,p.x,p.z,this.player.speed,this.time),this.dogIt.x=this.dog.body.position.x,this.dogIt.z=this.dog.body.position.z;for(let e of this.balls){if(e.inWater)continue;let t=e.body.velocity;t.x*t.x+t.y*t.y+t.z*t.z>160&&this.particles.trail(e.mesh.position.x,e.mesh.position.y,e.mesh.position.z,this.golden?`#ffd34d`:`#ffffff`)}for(let t of this.goals)t.update(e);for(let t of this.keepers)t.update(e,this.balls);this.contactGoal.update(e);let v=.35,y=+(p.z<-18&&p.z>-56&&Math.abs(p.x)<40);this.arenaK+=(y-this.arenaK)*Math.min(1,e*2);let b=p.x+this.player.vel.x*v,x=p.z+this.player.vel.z*v-this.arenaK*Math.max(0,Math.min(11,p.z+50))*Math.cos(this.engine.yaw);if(this.shootout.playerLocked){let[e,t]=this.shootout.focus;b=e,x=t}this.shootout.playerLocked?this.engine.pitch+=((this.shootout.youKeep?1:.72)-this.engine.pitch)*Math.min(1,e*4):this.introT<0&&this.tourI<0&&(this.engine.pitch+=(.64-this.arenaK*.13-this.engine.pitch)*Math.min(1,e*4));let S=1-Math.exp(-e*(this.introT>=0?2.5:5));this.tourI>=0?this.updateTour(e):this.started&&(this.engine.target.x+=(b-this.engine.target.x)*S,this.engine.target.z+=(x-this.engine.target.z)*S),this.engine.update(e,this.time);let C=this.engine.night;C!==this.lastNight&&(this.lastNight=C,this.nightAware.forEach(e=>e(C)),this.water.uniforms.uNight.value=C),this.water.uniforms.uTime.value=this.time;for(let t of this.updaters)t(e,this.time);if(this.particles.update(e,this.engine.camera),!this.started){t.endFrame();return}if(this.zoneTimer+=e,this.zoneTimer>.25){this.zoneTimer=0;let e=null,t=1;for(let n of E){let r=Math.hypot(p.x-n.center[0],p.z-n.center[1])/n.radius;r<t&&(e=n,t=r)}e&&e!==this.zone&&e.id===`projects`&&(this.wave(),H.chant(2),this.waveTimer=22),e&&e!==this.zone&&((this.zone!==null||e.id!==`kickoff`)&&this.ui.toast(e.name[d],e.sub[d],`zone`),this.ach.mark(`groundhopper`,e.id)),e&&(this.zone=e),this.ui.aiVisible(this.zone?.id===`projects`&&Math.hypot(p.x,p.z+36)<24);let n=null,r=1/0;for(let e of this.interactives){if(e.hidden?.()||this.shootout.running||this.tourI>=0)continue;let t=Math.hypot(p.x-e.x,p.z-e.z);t<e.r&&t<r&&(r=t,n=e)}if(n!==this.nearest){this.nearest=n;let e=n;this.ui.prompt(e?e.label():null,e?()=>this.open(()=>e.action()):void 0)}this.hintStage===0&&this.time>4?(this.hintStage=1,this.ui.toast(this.engine.isTouch?f(`hintTouch`):f(`hint1`),``,`info`)):this.hintStage===1&&this.time>14&&!this.ach.isUnlocked(`goal`)?(this.hintStage=2,this.ui.toast(f(`hint2`),``,`info`)):this.hintStage>=1&&this.hintStage<3&&this.time>30&&this.tourI<0&&(this.hintStage=3,this.ui.toast(this.engine.isTouch?f(`hint3Touch`):f(`hint3`),``,`info`))}this.zone?.id===`projects`&&(this.waveTimer-=e,this.waveTimer<=0&&(this.waveTimer=24+Math.random()*10,this.wave(),H.applause(2.5,.12)));let w=Math.hypot(p.x,p.z+34),D=Math.max(0,1-w/45);H.update(this.engine.target.x,this.engine.target.z,this.engine.yaw,D,-wt(p.x,p.z)),t.endFrame()}};function Ud(e,t,n,r,i,a,o,s){let c=(o-i)*(t-a)-(s-a)*(e-i),l=(o-i)*(r-a)-(s-a)*(n-i),u=(n-e)*(a-t)-(r-t)*(i-e),d=(n-e)*(s-t)-(r-t)*(o-e);return c*l<0&&u*d<0}export{Hd as Game};