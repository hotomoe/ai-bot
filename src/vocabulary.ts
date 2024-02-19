import seedrandom from 'seedrandom';

export const itemPrefixes = [
	'플라티나로 만든',
	'신선한',
	'최신의',
	'고대의',
	'수제',
	'시계장치의',
	'전설의',
	'구이',
	'날것의',
	'아이쨩이 만든',
	'포켓 사이즈',
	'사흘 전의',
	'그 근처의',
	'짭',
	'사용된',
	'고장난',
	'시판되는',
	'주문제작된',
	'업무용의',
	'Microsoft제',
	'Apple제',
	'인류 기술의 결정체인',
	'2018년산', // TODO ランダム
	'500kg 정도의',
	'고오급',
	'썩은',
	'인공지능 탑재',
	'블록체인 탑재',
	'반중력',
	'접이식',
	'휴대용',
	'유전자 재조합',
	'돌연변이로 비행 능력이 있는',
	'순금으로 만든',
	'투명한',
	'빛나는',
	'하트 모양의',
	'움직이는',
	'반으로 잘린',
	'USB 커넥터가 달린',
	'지난 날의',
	'저주받은',
	'인챈트된',
	'하루치의 비타민이 들어간',
	'손을 댄',
	'환상의',
	'가상의',
	'원자력',
	'고도로 훈련받은',
	'유전자 조작이 아닌',
	'런던 중심부에서 발견된',
	'이세계의',
	'다른 별의',
	'수수께끼의',
	'시공을 일그러뜨리는',
	'이상한 소리가 나는',
	'무산된',
	'플라즈마화된',
	'충격을 주면 낮은 확률로 폭발하는',
	'주키니로 변신한',
	'가설의',
	'독이 있는',
	'진짜',
	'궁극의',
	'초코가 들어간',
	'악취가 나는',
	'4차원',
	'박동하는',
	'정체를 알 수 없는',
	'네모난',
	'날뛰는',
	'꿈의',
	'어둠의',
	'암흑의',
	'봉인된',
	'죽음의',
	'얼어버린',
	'마의',
	'금단의',
	'홀로그래픽',
	'유압식',
	'태고의',
	'WiFi 지원',
	'높은 반발',
	'염가판',
	'끈적끈적',
	'질척질척',
	'푸석푸석한',
	'습기가 찼다',
	'유통기한 만료',
	'지옥에서 온',
	'마늘 많이',
	'방사성',
	'프랙탈한',
	'재귀적',
	'때때로 분열하는',
	'꺼진',
	'등속 직선 운동하는',
	'X선 조사',
	'꿈틀거리는',
	'형이상학적',
	'쫀득쫀득',
	'식히는',
	'따끈따끈',
	'거대',
	'나노 사이즈',
	'몰랑한',
	'버그다',
	'인공',
	'천연',
	'모셔진',
	'초콜릿 코팅',
	'항균 사양',
	'내열',
	'격',
	'사나운',
	'초',
	'군생하는',
	'경량',
	'국보급',
	'유행하는',
	'8캐럿짜리',
	'중고',
	'신품',
	'아내',
	'명품',
	'증식하는',
	'탱글탱글',
	'물컹물컹',
	'다목적',
	'좋은느낌™의',
	'엄청 매운',
	'선진적',
	'복고풍',
	'빈티지',
	'합법',
	'프리미엄 포함',
	'데카',
	'기가',
	'더럽혀졌다',
	'품질 보증',
	'AppleCare+ 가입 필요',
	'야하다',
	'디자이너',
	'매혹적인',
	'영험이 눈부신',
	'반들반들',
	'끈적끈적',
	'근육질',
	'오버클럭된',
	'무기질적인',
	'전위적인',
	'수상해',
	'요사해',
	'곰팡이가 핀',
	'숙성',
	'알루미늄 다이캐스트',
	'양식',
	'큰일이야',
	'대단해',
	'귀여워',
	'디지털',
	'아날로그',
	'알록달록한',
	'전동',
	'감촉이 없는',
	'박아넣었다',
	'100년에 한 번',
	'육즙이 풍부한',
	'Hi-Res',
	'확률 변동',
	'식용',
	'THE ',
	'아무개',
	'썩어 가는',
	'망한',
	'반발계수가 e>1인',
	'마찰계수 0의',
	'풀려나오다',
	'큰',
	'작은',
	'탐욕스러운',
	'구불구불',
	'수몰',
	'활활 타는',
	'고압',
	'이상',
	'거칠게 빻은',
];

export const items = [
	'가지',
	'토마토',
	'오이',
	'감자',
	'볶음국수',
	'허리',
	'초밥',
	'호박',
	'유키치',
	'금괴',
	'알루미늄',
	'나트륨',
	'마그네슘',
	'플루토늄',
	'작은 금속',
	'우유팩',
	'페트병',
	'쿠키',
	'초콜릿',
	'메이드복',
	'오렌지',
	'니삭스',
	'반물질 콘덴서',
	'입자가속기',
	'마이크로프로세서 (8코어 16스레드)',
	'원자력 발전소',
	'L4 스위치',
	'완충 체인',
	'양전자 두뇌',
	'행성',
	'테르민',
	'충치차',
	'마운터',
	'버킷 휠 익스커베이터',
	'데몬 코어',
	'게임보이 어드밴스',
	'양자컴퓨터',
	'아나몰픽 렌즈',
	'벽장에서 나온 수수께끼의 생물',
	'스마트폰',
	'시계',
	'푸딩',
	'가브리엘의 나팔',
	'맹거의 스펀지',
	'피젯 스피너',
	'초입방체',
	'건축물',
	'에너지 드링크',
	'마우스 커서',
	'안경',
	'참치',
	'쓰레기통',
	'이쑤시개',
	'도시락에 들어가는 초록색 칸막이같은 녀석',
	'나무젓가락',
	'환기구',
	'페트병의 뚜껑',
	'소파 블럭',
	'피자',
	'치약',
	'깡통',
	'열쇠고리',
	'금발 벽안의 미소녀',
	'SD카드',
	'립 크림',
	'초코 없는 초코소라빵',
	'조류독감',
	'자판기',
	'무거운 것',
	'노트북',
	'육포',
	'연어 치즈',
	'다이아몬드',
	'물체',
	'월석',
	'특이점',
	'중성자별',
	'액체',
	'위성',
	'주키니',
	'검은 것',
	'흰 것',
	'빨간 것',
	'동그란 것',
	'네모난 것',
	'카드 모양의 것',
	'기체',
	'연필',
	'지우개',
	'양날검',
	'막대 모양의 것',
	'농산물',
	'메탈 슬라임',
	'문어발',
	'버섯',
	'나메코',
	'호로요이',
	'손톱깎기',
	'귓속말',
	'인형',
	'티라노사우르스',
	'요로결석',
	'엔터 키',
	'항아리',
	'수은',
	'DHMO',
	'물',
	'토지',
	'대륙',
	'주사위',
	'실외기',
	'유압잭',
	'타피오카',
	'PSP',
    '화장지 심지',
    '골판지 상자',
    '하니와',
    '볼펜',
    '샤펜',
    '원자',
    '우주',
    '소립자',
	'참기름',
	'계란밥',
	'암흑 물질',
	'블랙홀',
	'태양',
	'석영 유리',
	'댐',
	'바이러스',
	'세균',
	'아치식 콘크리트 댐',
	'중력식 콘크리트 댐',
	'플래시 밸브',
	'비브라슬랩',
	'오브제',
	'원자력 발전소',
	'원자로',
	'에라토스테네스의 체',
	'브라운관',
	'타키온',
	'러셀의 찻주전자',
	'전자 기기',
	'TNT',
	'폴리곤',
	'공기',
	'RTX 3090',
	'샤펜 심',
	'로제타 스톤',
	'CapsLock 키',
	'공허',
	'UFO',
	'NumLock 키',
	'방사성 폐기물',
	'화성',
	'우라늄',
	'원심 분리기',
	'undefined',
	'null',
	'NaN',
	'[object Object]',
	'영폭 공간',
	'전각 공백',
	'북',
	'석상',
	'슬라임',
	'점P',
	'🤯',
	'금덩어리',
	'플로피 디스크',
	'족자',
	'JavaScript 콘솔',
	'인터넷 익스플로러',
	'잠수함 발사 탄도 미사일',
	'미토콘드리아',
	'헬륨',
	'단백질',
	'캡사이신',
	'에스컬레이터',
	'핵융합로',
	'지열 발전소',
	'아파트',
	'용암 라이트',
	'갈릴레오 온도계',
	'라디오 미터',
	'샌드 픽처',
	'스톰 글라스',
	'뉴턴 크레이들',
	'영구 기관',
	'감의 씨 땅콩 부분',
	'전표를 넣는 통 모양의 알레',
	'이불',
	'침구',
	'우상',
	'만물',
	'솔도파',
	'국민의 기본 권리',
	'코타츠',
	'양말(한쪽은 분실)',
	'건강보험증',
	'전화 카드',
	'피아노의 검은 건반',
	'AC 어댑터',
	'DVD',
	'시영버스',
	'기지국',
	'404 Not Found',
	'JSON',
	'태피스트리',
	'책',
	'석상',
	'고문서',
	'두루마리',
	'hotomoe',
	'비틀어 딴 과일',
	'<여기에 임의의 문자열>',
	'화석',
	'맨홀 뚜껑',
	'수도꼭지',
	'가',
	'복권',
	'10원짜리 동전',
	'높은음자리표',
	'포탈',
	'국가 예산',
	'닫힌 갈고리 괄호의 조각',
	'전동 마사지기',
	'팝업 광고',
	'README.txt',
	'아아아아아',
	'커밋',
	'소수',
	'작업 관리자',
	'어중이 떠중이',
	'탄수화물',
	'정십이면체',
	'클라인 항아리',
	'뫼비우스의 띠',
	'오리할콘',
	'오염 물질이 섞인 진흙',
	'그레이팅',
	'슈퍼카미오칸데',
	'데스케도거',
];

export const and = [
	'에 빙의한',
	'에 들어가는',
	'에 묻힌',
	'을 연상시키는',
	' 같은',
	'로 가장한',
	'에 올려진',
	' 옆에 있는',
];

export function genItem(seedOrRng?: (() => number) | string | number) {
	const rng = seedOrRng
		? typeof seedOrRng === 'function'
			? seedOrRng
			: seedrandom(seedOrRng.toString())
		: Math.random;

	let item = '';
	if (Math.floor(rng() * 5) !== 0) item += `${itemPrefixes[Math.floor(rng() * itemPrefixes.length)]} `;
	item += items[Math.floor(rng() * items.length)];
	if (Math.floor(rng() * 10) === 0) {
		item += `${and[Math.floor(rng() * and.length)]} `;
		if (Math.floor(rng() * 5) !== 0) item += `${itemPrefixes[Math.floor(rng() * itemPrefixes.length)]} `;
		item += items[Math.floor(rng() * items.length)];
	}
	return item;
}
